import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {
  constructor(private router: Router) {}

  volverAlLogin() {
    this.router.navigate(['/login']);
  }
}
