import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { mesa } from 'src/app/interfaces/mesa';
import { MesaService } from 'src/app/services/mesa.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent implements OnInit {
  mesas: any; 

  
  listMesa: any;
  displayedColumns: string[] = [ '_id','numero', 'cantidad_inscritos', 'Acciones'];
  dataSource!:MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _mesaService:MesaService,private _snackBar: MatSnackBar,private router: Router,
    private http:HttpClient){}
  ngOnInit(): void {
    // this.http.get<any>('http://127.0.0.1:9999/mesas').subscribe(data => {
    //   this.mesas = data;
    //   this.cargarMesas();     
    // },error => this.error = error)   

    this.cargarMesas();
  }


  cargarMesas() {
    this._mesaService.getMesa().subscribe((res) => {
      this.listMesa = res;
      console.log(res);
      console.log(this.listMesa);
      this.dataSource = new MatTableDataSource(this.listMesa);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;}
/*eliminarMesa(index:number){
  console.log(index)
  this._mesaService.eliminarMesa(index);
  this.cargarMesas();
  this._snackBar.open('La mesa fue eliminado con exito','',{
    duration: 1500,
    horizontalPosition:'center',
    verticalPosition:'bottom'
  }) 
}*/
eliminarMesa(i: number) {
  console.log('ID de la mesa a eliminar:', this.listMesa[i]._id);
  this._mesaService.eliminarMesa(this.listMesa[i]._id).subscribe(() => {
    console.log('Mesa eliminada con éxito');
    this.cargarMesas();
    this._snackBar.open('La mesa fue eliminada con éxito', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  });
}
editarMesa() {
  // Realiza la navegación a la página de edición
  this.router.navigate(['/dashboard/editar-mesas']);
}
}
