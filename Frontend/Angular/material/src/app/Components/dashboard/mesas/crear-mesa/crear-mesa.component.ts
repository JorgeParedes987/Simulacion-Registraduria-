import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { mesa } from 'src/app/interfaces/mesa';
import { MesaService } from 'src/app/services/mesa.service';

@Component({
  selector: 'app-crear-mesa',
  templateUrl: './crear-mesa.component.html',
  styleUrls: ['./crear-mesa.component.css']
})
export class CrearMesaComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _mesaService: MesaService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      numero: ['', Validators.required],
      cantidad_inscritos: ['', Validators.required],
    });
  }

  /*agregarMesa() {
    console.log(this.form);
    const nuevaMesa: mesa = {
      id: 0, // Puedes establecer el valor del id en 0 o cualquier otro valor por defecto
      Numero: this.form.value.Numero,
      Cantidad_inscritos: this.form.value.Cantidad_inscritos,
    };*/
    agregarMesa() {
      const nuevaMesa: Partial<mesa> = {
        numero: this.form.value.numero,
        cantidad_inscritos: this.form.value.cantidad_inscritos,
      };
    
      this._mesaService.agregarMesa(nuevaMesa).subscribe(
        (nuevaMesaAgregada) => {
          console.log('Mesa agregada con éxito:', nuevaMesaAgregada);
          this.router.navigate(['/dashboard/mesas']);
          this._snackBar.open('La mesa fue agregada con éxito', '', {
            duration: 1500,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
          });
        },
        (error) => {
          console.error('Error al agregar la mesa:', error);
          // Manejar el error según tus necesidades
        }
      );
}

    
    }