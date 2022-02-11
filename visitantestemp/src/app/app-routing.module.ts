import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistroComponent} from "./registro/registro.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {TarjetitasComponent} from "./tarjetitas/tarjetitas.component";
import {TablasComponent} from "./tablas/tablas.component";

const routes: Routes = [
  {path: 'enlaceregistro',component:RegistroComponent},
  {path: 'enlacevistantes',component:NavBarComponent},
  {path: 'tarjetas',component:TarjetitasComponent},
  {path: '#',component:NavBarComponent},
  {path:'tablas',component:TablasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
