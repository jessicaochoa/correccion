import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegistroComponent } from './registro/registro.component';
import { TarjetitasComponent } from './tarjetitas/tarjetitas.component';
import { TablasComponent } from './tablas/tablas.component';
import {ReactiveFormsModule} from "@angular/forms";

import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RegistroComponent,
    TarjetitasComponent,
    TablasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
