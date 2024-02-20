import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import{ Partido } from 'src/app/interfaces/partido'; 
import { PartidosService } from 'src/app/services/partido.service';

@Component({
  selector: 'app-crear-partido',
  templateUrl: './crear-partido.component.html',
  styleUrls: ['./crear-partido.component.css']
})
export class CrearPartidoComponent { 
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private _PartidosService: PartidosService,
    private router: Router,
    private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      lema: ['', Validators.required],
    })
  }

  agregarPartido() {

    const nuevoPartido: Partido = {
      nombre: this.form.value.nombre,
      lema: this.form.value.lema,

    };

    this._PartidosService.agregarPartido(nuevoPartido).subscribe(
      (nuevoPartidoAgreagado) => {
        console.log('Partido agregado con éxito:',nuevoPartidoAgreagado);
        this.router.navigate(['/dashboard/partido']);
        this._snackBar.open('el partido fue agregado con éxito', '', {
          duration: 1500,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      },
      (error) => {
        console.error('Error al agregar el partido:', error);
        // Manejar el error según tus necesidades
      }
    );
}

}

