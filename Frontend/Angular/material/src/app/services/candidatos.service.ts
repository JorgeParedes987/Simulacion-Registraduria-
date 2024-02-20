import { Injectable } from '@angular/core';
import { Candidato } from '../interfaces/candidato';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const CANDIDATOS_API_URL = 'http://127.0.0.1:9999/candidatos';
@Injectable({
  providedIn: 'root'
})
export class CandidatosService {
  private nextId = 1; // Variable para rastrear el próximo id disponible
  error: any;

  constructor(private http: HttpClient) { }

  getCandidato(){
    return this.http.get<any>('http://127.0.0.1:9999/candidatos')
  }

  eliminarCandidato(id: number): Observable<void>{
    const url = `${CANDIDATOS_API_URL}/${id}`;
    return this.http.delete<void>(url);
  }

  agregarCandidato(nuevoCandidato : Partial<Candidato>){
    return this.http.post<Candidato>(CANDIDATOS_API_URL, nuevoCandidato);
  }

  editarCandidato(_id: number, candidatoEditado: { nombre?: string; apellido?: string; cedula? : string; no_resolucion? : string}): Observable<void> {
    const url = `${CANDIDATOS_API_URL}/${_id}`;
    return this.http.put<void>(url, candidatoEditado);
  }

  getDetallesCandidato(id: number): Observable<Candidato> {
    const url = `${CANDIDATOS_API_URL}/${id}`;
    return this.http.get<Candidato>(url);
  }
}
