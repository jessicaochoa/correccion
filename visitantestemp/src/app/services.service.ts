import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {IEmpleado,IUsuario} from './Interfaces/IEmpleado';
import {IArea} from './Interfaces/IArea';
import {IUsuarioMongo} from './Interfaces/IUserMongo';

 @Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private Url:string ="http://localhost:4500/api"


  constructor(private http:HttpClient) { }

  public  GetEmpleado(area:string):Observable<IEmpleado[]>{
    return this.http.get<[IEmpleado]>(`${this.Url}/empleado/${area}`,{
      responseType:'json'
    });
  }
   public  GetArea():Observable<IArea[]>{
     return this.http.get<[IArea]>(`${this.Url}/Area/area/lista`,{
       responseType:'json'
     });
   }
   // /Empleado/select
   public  GetUsuario():Observable<IUsuario[]>{
     return this.http.get<[IUsuario]>(`${this.Url}/Empleado/select`,{
       responseType:'json'
     });
   }
   public  PostUsurio(body:IUsuarioMongo):Observable<any>{
    alert(
      body
    )
    return  this.http.post(`${this.Url}/consulta/register`,body);
   }


 }
