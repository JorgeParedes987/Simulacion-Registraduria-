import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Candidato } from 'src/app/interfaces/candidato';
import { CandidatosService } from 'src/app/services/candidatos.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css']
})
export class CandidatosComponent {
  candidatos: any;
  listCandidatos: any;
  displayedColumns: string[] = ['_id', 'nombre', 'apellido', 'cedula', 'no_resolucion', 'acciones'];
  dataSource!: MatTableDataSource<any>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _candidatoService: CandidatosService, private _snackBar: MatSnackBar, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.cargarCandidato();

  }

  cargarCandidato() {
    this._candidatoService.getCandidato().subscribe((res) => {
      this.listCandidatos = res;
      console.log(res);
      console.log(this.listCandidatos);
      this.dataSource = new MatTableDataSource(this.listCandidatos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarCandidato(i: number) {
    console.log('ID del candidato a eliminar:', this.listCandidatos[i]._id);
    this._candidatoService.eliminarCandidato(this.listCandidatos[i]._id).subscribe(() => {
      console.log('Candidato eliminada con éxito');
      this.cargarCandidato();
      this._snackBar.open('El candidato fue eliminada con éxito', '', {
        duration: 1500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    });
  }
  editarCandidato() {
    // Realiza la navegación a la página de edición
    this.router.navigate(['/dashboard/editar-candidatos']);
  }
}


