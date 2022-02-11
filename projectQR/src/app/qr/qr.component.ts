import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent implements OnInit {

  datos: any [] = [
    {
    foto: './assets/persona3.png',
    email: 'test@gmail.com',
    telefono: '55555',
    puesto: 'docente',
    area:'sistemas',
    sexo: 'hombre',
    // 'curp': 'TAMC9235',
    //'dia': '21',
    //'mes': '12',
    //'año': '1995',
    //'contraseña': '12345',
    //'estado': 'edo mex',
    //'ciudad': 'mexico',
    //'municipio': 'nezahualcoyotl',
    //'calle': 'hola',
    //'colonia': 'si',
    //'codigo postal' : '57422'

  }
   /*{
    foto: './assets/persona4.png',
    email: 'test1@gmail.com',
    telefono: '111',
    puesto: 'alumno',
    area:'sistemas',
    sexo: 'mujer',
   }*/
];
  dataToString = JSON.stringify(this.datos);
  url = 'dataToString';
  profile = 'routeToMyProfile';
  elementType = NgxQrcodeElementTypes.URL;
  errorCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  scale = 3
  value = this.url + this.profile;

  constructor(){}

  ngOnInit(): void{

  }
  clickAddTodo() {
    alert('hola!');
  }

}
