import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Resultado } from 'src/app/interfaces/resultado';
import { ResultadosService } from 'src/app/services/resultado.service';

@Component({
  selector: 'app-crear-Resultado',
  templateUrl: './crear-Resultado.component.html',
  styleUrls: ['./crear-Resultado.component.css']
})
export class CrearResultadoComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private _ResultadosService: ResultadosService,
    private router: Router,
    private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      idResultado: ['', Validators.required],
      idPartido: ['', Validators.required],
      numeroMesa: ['', Validators.required],
      idCandidato: ['', Validators.required],
    })
  }

  agregarResultado() {

    const answer: Resultado = {
      idResultado: this.form.value.id,
      idPartido: this.form.value.idPartido,
      numMesa: this.form.value.numeroMesa,
      idCandidato: this.form.value.idCandidato,

    }

    this._ResultadosService.agregarResultado(answer);
    this.router.navigate(['/dashboard/resultados'])

    this._snackBar.open('El resultado fue agregado', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }


  tiles: any[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

}
