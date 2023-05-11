import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Usuario } from '../entidades/usuario';
import { Observable, catchError, map, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlEndPointRender:string= "https://portafolio-1t4s.onrender.com/api/usuario"
  private urlEndPoint:string= "http://localhost:8080/api/usuario"
  private httpHeaders = new HttpHeaders({'Content-type':'application/json'})
  authenticated = false;
  constructor( private http:HttpClient) { }

  getUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.urlEndPointRender)
  }

  crear(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.urlEndPointRender,usuario,{headers:this.httpHeaders})
  }

  getUsuario(id:number):Observable<Usuario>{
 
    return this.http.get<Usuario>(`${this.urlEndPointRender}/${id}`)
  }
  
  actualizarUsuario(usuario:Usuario):Observable<Usuario>{

    return this.http.put<Usuario>( `${this.urlEndPointRender}/${usuario.idUsuario}`,usuario,{headers:this.httpHeaders})

  }

  borrar(id:number):Observable<Usuario>{

    return this.http.delete<Usuario>( `${this.urlEndPointRender}/${id}`,{headers:this.httpHeaders})

  }

  inicioSesion(usuario:Usuario):Observable<Usuario>{ 
        
        return this.http.post<Usuario>(this.urlEndPointRender+"/login",usuario,{headers:this.httpHeaders}).pipe(catchError(error => of(error)))
       
  }
  ObtenerusuarioStorage():Usuario{
    let aux:any 
    let usuario:Usuario
    aux = localStorage.getItem("usuario")
    usuario = JSON.parse(aux);
    return usuario
  }

  comprobarAdmin():boolean {
    let usuario:Usuario
    usuario= this.ObtenerusuarioStorage()
    if (usuario.admin && usuario != null) {
      return true
    }
    return false
  }

  

  
}