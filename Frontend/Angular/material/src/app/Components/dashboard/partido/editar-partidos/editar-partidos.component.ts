import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Partido } from 'src/app/interfaces/partido';
import { PartidosService } from 'src/app/services/partido.service';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-editar-partidos',
  templateUrl: './editar-partidos.component.html',
  styleUrls: ['./editar-partidos.component.css']
})
export class EditarPartidosComponent {
  form: FormGroup;
  partidoId: any;

  constructor(
    private fb: FormBuilder,
    private _partidosService: PartidosService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
  ) {
    this.form = this.fb.group({
      _id: ['', Validators.required],
      nombre: ['', Validators.required],
      lema: ['', Validators.required]
    });

    this.partidoId = +this.route.snapshot.paramMap.get('_id')!;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.partidoId = +params['_id'];
      this.cargarDetallesPartido();
    });
  }

  cargarDetallesPartido() {
    this._partidosService.getDetallesPartido(this.partidoId).subscribe(
      partido => {
        this.form.patchValue({
          nombre: partido.nombre,
          lema: partido.lema
        });
      },
      error => {
        console.error('Error al obtener detalles del partido:', error);
      }
    );
  }

  editarPartido() {
    const partidoEditado: { nombre?: string; lema?: string} = {
      nombre: this.form.value.nombre,
      lema: this.form.value.lema     
    };
    console.log(this.partidoId)

    this._partidosService.editarPartido(this.form.value._id, partidoEditado).subscribe(
      () => {
        console.log('Partido editado con éxito');
        this.router.navigate(['/dashboard/partido']);
        this._snackBar.open('El partido fue editado con éxito', '', {
          duration: 1500,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      },
      error => {
        console.error('Error al editar el partido:', error);
      }
    );
  }
}
