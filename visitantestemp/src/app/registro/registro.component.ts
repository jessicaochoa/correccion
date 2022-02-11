import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ServicesService} from '../services.service';
import {IEmpleado,IUsuario} from '../Interfaces/IEmpleado';
import {IArea} from '../Interfaces/IArea';
import {IUsuarioMongo} from '../Interfaces/IUserMongo';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  public  _arregloUsuario:IUsuario[]=[];
  public _arregloarea:IArea[]=[];
  public  _Usuario!:IUsuarioMongo;



  formularioPrueba = new FormGroup(
    {
      email: new FormControl('',[Validators.required,Validators.email]),
      nombre:new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[A-Z a-z]*')
      ]),
      nombreA:new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[A-Z a-z]*')
      ]),
      nombreM:new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[A-Z a-z]+')
      ]),
      idare: new FormControl([
        Validators.required
      ]),
      idPersona:new FormControl([
        Validators.required
      ]),
      idmotivo:new FormControl([
        Validators.required
      ])
    });

  get email(): any{
    return this.formularioPrueba.get('email');
  }

  get nombre(): any{
    return  this.formularioPrueba.get('nombre');
  }

  get nombreA(): any{
    return  this.formularioPrueba.get('nombreA');
  }

  get nombreM(): any{
    return  this.formularioPrueba.get('nombreM');
  }

  constructor(public api:ServicesService) {

  }

  ngOnInit(): void {
    //this.AtraerDatos();
    this.LlenarArea();
    this.onChange();
  }

  public LlenarArea():void{
    this.api.GetArea().subscribe((res:IArea[])=>{
      this._arregloarea=res;
      console.log(res);
    })
  }
  public AtraerDatos():void{
    this.api.GetEmpleado("victor").subscribe((res:IEmpleado[])=>{
      console.log(res);
    })
  }
  public  onChange():void{
    this.api.GetUsuario().subscribe((res:IUsuario[])=>{
      console.log(res);
      this._arregloUsuario=res;
    });
  }
  public Registrar():void{
    const {nombre,nombreA,nombreM,email,idare,idPersona} = this.formularioPrueba.value;
    let txt=(document.getElementById("txtMotivo") as HTMLTextAreaElement).value;

    this._Usuario ={
      nombre,
      apellidoP: nombreA,
      apellidoM: nombreM,
      correo:email,
      area:idare,
      idTrabajador:idPersona,
      motivo:txt
    }
    this.api.PostUsurio(this._Usuario).subscribe();
    alert("Datos Enviados")
  }


}


