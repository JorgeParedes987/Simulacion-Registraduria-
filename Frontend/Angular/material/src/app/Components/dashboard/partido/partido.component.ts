import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Partido } from 'src/app/interfaces/partido';
import { PartidosService } from 'src/app/services/partido.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-partido',
  templateUrl: './partido.component.html',
  styleUrls: ['./partido.component.css']
})
export class PartidoComponent {
  partidos: any;
  listPartidos : any; 
  displayedColumns: string[] = ['_id', 'nombre', 'lema',  'acciones'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
   

  constructor(private _PartidosService: PartidosService, private _snackBar: MatSnackBar, private router: Router, private http: HttpClient){}
  
  ngOnInit(): void{
    this.cargarPartidos();
  }
  cargarPartidos(){
    this._PartidosService.getPartido().subscribe((res) => {
      this.listPartidos = res;
      console.log(res);
      console.log(this.listPartidos);
      this.dataSource = new MatTableDataSource(this.listPartidos);
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
  eliminarPartido(i: number){
    console.log('ID del partido a eliminar:', this.listPartidos[i]._id);
    this._PartidosService.eliminarPartido(this.listPartidos[i]._id).subscribe(() => {
      console.log('Partido eliminada con éxito');
      this.cargarPartidos();
      this._snackBar.open('El partido fue eliminada con éxito', '', {
        duration: 1500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    });
  }
  editarPartido() {
    // Realiza la navegación a la página de edición
    this.router.navigate(['/dashboard/editar-partidos']);
  }
}



