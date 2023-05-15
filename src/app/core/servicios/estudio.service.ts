import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from '../entidades/estudio';
import { Url } from '../entidades/Url';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {
  private urlApi:string= Url.url +"estudio"
  private httpHeaders = new HttpHeaders({'Content-type':'application/json'})
  constructor( private http:HttpClient) { }
  
  getEstudios():Observable<Estudio[]>{
    return this.http.get<Estudio[]>(this.urlApi)
  }
  crear(estudio:Estudio):Observable<Estudio>{
    return this.http.post<Estudio>(this.urlApi,estudio,{headers:this.httpHeaders})
  }
  getEstudio(id:number):Observable<Estudio>{
    console.log("ererfere"+ id)
    return this.http.get<Estudio>(`${this.urlApi}/${id}`)
  }
  actualizarEstudio(estudio:Estudio):Observable<Estudio>{
    return this.http.put<Estudio>( `${this.urlApi}/${estudio.idEstudio}`,estudio,{headers:this.httpHeaders})
  }
  borrar(id:number):Observable<Estudio>{
    return this.http.delete<Estudio>( `${this.urlApi}/${id}`,{headers:this.httpHeaders})

  }
}
