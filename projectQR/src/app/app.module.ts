import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxQRCodeModule} from '@techiediaries/ngx-qrcode';
import { NavbarComponent } from './navbar/navbar.component';
import { QrComponent } from './qr/qr.component';
import { ImprimirComponent } from './imprimir/imprimir.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QrComponent,
    ImprimirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxQRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
