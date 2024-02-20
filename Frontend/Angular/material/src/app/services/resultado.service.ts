import { Injectable } from '@angular/core';
import { Resultado } from '../interfaces/resultado';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {
 
  listResultados: Resultado[] = [
    {idResultado: 1, idCandidato: 1, numMesa: 1,   idPartido: 1},
    {idResultado: 2, idCandidato: 2, numMesa: 2,   idPartido: 2},
    {idResultado: 3, idCandidato: 3, numMesa: 3,   idPartido: 3},
    {idResultado: 4, idCandidato: 4, numMesa: 4,   idPartido: 4},
    {idResultado: 5, idCandidato: 5, numMesa: 5,   idPartido: 5},
  ];

  constructor() { }

  getResultado(){
    return this.listResultados.slice();
  }

  eliminarResultado(index: number){
    this.listResultados.splice(index, 1);
  }

  agregarResultado(resultado : Resultado){
    this.listResultados.unshift(resultado);
  }
}
