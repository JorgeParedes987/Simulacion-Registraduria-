import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { MesasComponent } from './mesas/mesas.component';
import { CrearMesaComponent } from './mesas/crear-mesa/crear-mesa.component';
import { EditarMesasComponent } from './mesas/editar-mesas/editar-mesas.component';
import { CrearCandidatoComponent } from './candidatos/crear-candidato/crear-candidato.component';
import { CandidatosComponent } from './candidatos/candidatos.component';
import { EditarCandidatosComponent } from './candidatos/editar-candidatos/editar-candidatos.component';
import { ResultadosComponent } from './resultado/resultado.component';
import { CrearResultadoComponent } from './resultado/crear-resultado/crear-resultado.component';
import { PartidoComponent } from './partido/partido.component';
import { CrearPartidoComponent } from './partido/crear-partido/crear-partido.component';
import { EditarPartidosComponent } from './partido/editar-partidos/editar-partidos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,children:[
    {path:'',component:InicioComponent},
    {path:'mesas',component:MesasComponent},
    {path:'crear-mesa',component:CrearMesaComponent},
    {path:'editar-mesas',component:EditarMesasComponent},
    {path:'candidatos', component: CandidatosComponent},
    {path:'crear-candidato', component: CrearCandidatoComponent},
    {path:'editar-candidatos',component:EditarCandidatosComponent},
    {path: 'resultado', component:ResultadosComponent},
    {path: 'crear-resultado', component: CrearResultadoComponent},
    {path: 'partido', component: PartidoComponent},
    {path: 'crear-partido', component: CrearPartidoComponent},
    {path: 'editar-partidos', component: EditarPartidosComponent},
    {path: 'home', component: HomeComponent}


  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
