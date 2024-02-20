import { Injectable } from '@angular/core';
import { Partido } from '../interfaces/partido';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const PARTIDOS_API_URL = 'http://127.0.0.1:9999/partidos';
@Injectable({
  providedIn: 'root'
})
export class PartidosService {
  private nextId = 1;
  error: any;

  constructor(private http: HttpClient) { }

  getPartido(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:9999/partidos');
  }

  eliminarPartido(id: number): Observable<void>{
    const url = `${PARTIDOS_API_URL}/${id}`;
    return this.http.delete<void>(url);
  }

  agregarPartido(nuevoPartido : Partial<Partido>): Observable<Partido>{
    return this.http.post<Partido>(PARTIDOS_API_URL, nuevoPartido);
  }

  editarPartido(_id: number, partidoEditado: { nombre?: string; lema?: string }): Observable<void> {
    
    const url = `${PARTIDOS_API_URL}/${_id}`;
    console.log(url);
    return this.http.put<void>(url, partidoEditado);
  }

  getDetallesPartido(id: number): Observable<Partido> {
    const url = `${PARTIDOS_API_URL}/${id}`;
    return this.http.get<Partido>(url);
  }
}
