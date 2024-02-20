import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Candidato } from 'src/app/interfaces/candidato';
import { CandidatosService } from 'src/app/services/candidatos.service';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-editar-candidatos',
  templateUrl: './editar-candidatos.component.html',
  styleUrls: ['./editar-candidatos.component.css']
})
export class EditarCandidatosComponent {
  form: FormGroup;
  candidatoId: any;

  constructor(
    private fb: FormBuilder,
    private _candidatoService: CandidatosService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
  ) {
    this.form = this.fb.group({
      _id: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cedula : ['', Validators.required],
      no_resolucion : ['', Validators.required]
    });

    this.candidatoId = +this.route.snapshot.paramMap.get('_id')!;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.candidatoId = +params['_id'];
      this.cargarDetallesCandidato();
    });
  }

  cargarDetallesCandidato() {
    this._candidatoService.getDetallesCandidato(this.candidatoId).subscribe(
      candidato => {
        this.form.patchValue({
          nombre: this.form.value.nombre,
          apellido: this.form.value.apellido,
          cedula: this.form.value.cedula,
          no_resolucion: this.form.value.no_resolucion,
        });
      },
      error => {
        console.error('Error al obtener detalles del candidato:', error);
      }
    );
  }

  editarCandidato() {
    const candidatoEditado: { nombre?: string; apellido?: string; cedula?: string; no_resolucion? : string } = {
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      cedula: this.form.value.cedula,
      no_resolucion: this.form.value.no_resolucion,
    };
    console.log(this.form.value._id)

    this._candidatoService.editarCandidato(this.form.value._id, candidatoEditado).subscribe(
      () => {
        console.log('Candidato editado con éxito');
        this.router.navigate(['/dashboard/candidatos']);
        this._snackBar.open('El candidato fue editado con éxito', '', {
          duration: 1500,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      },
      error => {
        console.error('Error al editar el candidato:', error);
      }
    );
  }
}
