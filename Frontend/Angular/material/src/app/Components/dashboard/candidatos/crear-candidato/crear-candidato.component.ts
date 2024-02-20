import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Candidato } from 'src/app/interfaces/candidato';
import { CandidatosService } from 'src/app/services/candidatos.service';

@Component({
  selector: 'app-crear-candidato',
  templateUrl: './crear-candidato.component.html',
  styleUrls: ['./crear-candidato.component.css']
})
export class CrearCandidatoComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _candidatoService: CandidatosService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cedula: ['', Validators.required],
      no_resolucion: ['', Validators.required],
    });
  }

  agregarCandidato() {
    const nuevoCandidato: Partial<Candidato> = {
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      cedula: this.form.value.cedula,
      no_resolucion: this.form.value.no_resolucion,
    };

    this._candidatoService.agregarCandidato(nuevoCandidato).subscribe(
      (nuevoCandidatoAgregado) => {
        console.log('Candidato agregado con éxito:', nuevoCandidatoAgregado);
        this.router.navigate(['/dashboard/candidatos']);
        this._snackBar.open('El candidato fue agregado con éxito', '', {
          duration: 1500,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      },
      (error) => {
        console.error('Error al agregar al candidato:', error);
        // Manejar el error según tus necesidades
      }
    );
  }
}