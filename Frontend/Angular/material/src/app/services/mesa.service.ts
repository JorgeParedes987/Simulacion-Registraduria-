import { Injectable } from '@angular/core';
import { mesa } from '../interfaces/mesa';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const MESAS_API_URL = 'http://127.0.0.1:9999/mesas';
@Injectable({
  providedIn: 'root'
})
export class MesaService {
  private nextId = 1; // Variable para rastrear el próximo id disponible
  error: any;

  constructor(private http: HttpClient) { }

  getMesa(): Observable<any> { 
    // return this.listMesa.slice();
    return this.http.get<any>('http://127.0.0.1:9999/mesas')
  }

  /*eliminarMesa(id: number) {
    const index = this.listMesa.findIndex(mesa => mesa.id === id);
    if (index !== -1) {
      this.listMesa.splice(index, 1);
    }
  }*/
  eliminarMesa(id: number): Observable<void> {
    const url = `${MESAS_API_URL}/${id}`;
    return this.http.delete<void>(url);
  }
  agregarMesa(nuevaMesa: Partial<mesa>): Observable<mesa> {
    return this.http.post<mesa>(MESAS_API_URL, nuevaMesa);
  }


  /*agregarMesa(mesa: mesa) {
    mesa.id = this.nextId++; // Asigna un nuevo id .
    this.listMesa.unshift(mesa);
  }*/

/*  actualizarMesa(id: number, nuevaMesa: mesa) {
    const mesaExistente = this.listMesa.find((mesa) => mesa.id === id);
    if (mesaExistente) {
      // Realizar la lógica para actualizar los campos de la mesa
      mesaExistente.Numero = nuevaMesa.Numero;
      mesaExistente.Cantidad_inscritos = nuevaMesa.Cantidad_inscritos;
    }
  }*/
  editarMesa(_id: number, mesaEditada: { numero?: string; cantidad_inscritos?: string }): Observable<void> {
    
    const url = `${MESAS_API_URL}/${_id}`;
    console.log(url);
    return this.http.put<void>(url, mesaEditada);
  }

  getDetallesMesa(id: number): Observable<mesa> {
    const url = `${MESAS_API_URL}/${id}`;
    return this.http.get<mesa>(url);
  }
}
