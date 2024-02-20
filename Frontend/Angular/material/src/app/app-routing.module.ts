import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { CrearUsuarioComponent } from './Components/login/crear-usuario/crear-usuario.component';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'crear-usuario',component:CrearUsuarioComponent},
  {path:'dashboard',loadChildren:()=> import('./Components/dashboard/dashboard.module').then(x => x.DashboardModule)},
  {path:'**', redirectTo:'login',pathMatch:'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
