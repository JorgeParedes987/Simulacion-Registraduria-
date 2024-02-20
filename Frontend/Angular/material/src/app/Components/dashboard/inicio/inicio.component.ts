import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  mostrarBiografia(nombre: string, titulo: string): void {
    alert(`Biografía de ${nombre}:\n\n${titulo}`);
    // Puedes mostrar la biografía de una manera más elegante, por ejemplo, usando un modal.
  }
}