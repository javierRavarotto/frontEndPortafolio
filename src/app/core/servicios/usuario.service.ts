import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Usuario } from '../entidades/usuario';
import { Observable, catchError, map, of } from 'rxjs';
import { Url } from '../entidades/Url';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private httpHeaders = new HttpHeaders({'Content-type':'application/json'})
  authenticated = false;
  private urlApi:string= Url.url+ "usuario"
  constructor( private http:HttpClient) { }

  getUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.urlApi)
  }

  crear(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.urlApi,usuario,{headers:this.httpHeaders})
  }

  getUsuario(id:number):Observable<Usuario>{
 
    return this.http.get<Usuario>(`${this.urlApi}/${id}`)
  }
  
  actualizarUsuario(usuario:Usuario):Observable<Usuario>{

    return this.http.put<Usuario>( `${this.urlApi}/${usuario.idUsuario}`,usuario,{headers:this.httpHeaders})

  }

  borrar(id:number):Observable<Usuario>{

    return this.http.delete<Usuario>( `${this.urlApi}/${id}`,{headers:this.httpHeaders})

  }

  inicioSesion(usuario:Usuario):Observable<Usuario>{ 
        
        return this.http.post<Usuario>(this.urlApi+"/login",usuario,{headers:this.httpHeaders}).pipe(catchError(error => of(error)))
       
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