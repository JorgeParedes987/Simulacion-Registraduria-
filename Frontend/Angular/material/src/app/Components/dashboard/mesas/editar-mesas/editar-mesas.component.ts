import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { mesa } from 'src/app/interfaces/mesa';
import { MesaService } from 'src/app/services/mesa.service';
import { MesasComponent } from 'src/app/Components/dashboard/mesas/mesas.component'

@Component({
  selector: 'app-editar-mesas',
  templateUrl: './editar-mesas.component.html',
  styleUrls: ['./editar-mesas.component.css']
})
export class EditarMesasComponent {
  form: FormGroup;
  mesaId: any;

  constructor(
    private fb: FormBuilder,
    private _mesaService: MesaService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
  ) {
    this.form = this.fb.group({
      _id:['', Validators.required],
      numero: ['', Validators.required],
      cantidad_inscritos: ['', Validators.required],
    });

    this.mesaId = +this.route.snapshot.paramMap.get('_id')!;
  }

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      this.mesaId = +params['_id'];
      this.cargarDetallesMesa();
    });
  }

  cargarDetallesMesa() {
    this._mesaService.getDetallesMesa(this.mesaId).subscribe(
      mesa => {
        this.form.patchValue({
          numero: mesa.numero,
          cantidad_inscritos: mesa.cantidad_inscritos
        });
      },
      error => {
        console.error('Error al obtener detalles de la mesa:', error);
      }
    );
  }

  editarMesa() {
    const mesaEditada: { numero?: string; cantidad_inscritos?: string } = {
      
      numero: this.form.value.numero,
      cantidad_inscritos: this.form.value.cantidad_inscritos,
      
    };
    this.mesaId="655bea768ef05f81cf4c9846";

    console.log(this.mesaId)

    this._mesaService.editarMesa(this.form.value._id, mesaEditada).subscribe(
      () => {
        console.log('Mesa editada con éxito');
        this.router.navigate(['/dashboard/mesas']);
        this._snackBar.open('La mesa fue editada con éxito', '', {
          duration: 1500,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      },
      error => {
        console.error('Error al editar la mesa:', error);
      }
    );
  }
}
