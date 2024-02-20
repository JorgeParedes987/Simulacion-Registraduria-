import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MesasComponent } from './mesas/mesas.component';
import { CrearMesaComponent } from './mesas/crear-mesa/crear-mesa.component';
import { EditarMesasComponent } from './mesas/editar-mesas/editar-mesas.component';
import { CandidatosComponent } from './candidatos/candidatos.component';
import { CrearCandidatoComponent } from './candidatos/crear-candidato/crear-candidato.component';
import { EditarCandidatosComponent } from './candidatos/editar-candidatos/editar-candidatos.component';
import { ResultadosComponent } from './resultado/resultado.component';
import { CrearResultadoComponent } from './resultado/crear-resultado/crear-resultado.component';
import { PartidoComponent } from './partido/partido.component';
import { CrearPartidoComponent } from './partido/crear-partido/crear-partido.component';
import { EditarPartidosComponent } from './partido/editar-partidos/editar-partidos.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    MesasComponent,
    CrearMesaComponent,
    EditarMesasComponent,
    CandidatosComponent,  
    CrearCandidatoComponent, 
    ResultadosComponent,
    CrearResultadoComponent,
    FooterComponent,
    PartidoComponent,
    CrearPartidoComponent,
    EditarPartidosComponent,
    HomeComponent,
    EditarCandidatosComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
