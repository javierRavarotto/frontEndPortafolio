import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from '../entidades/estudio';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {
  private urlEndPoint:string= "http://localhost:8080/api/estudio"
  private httpHeaders = new HttpHeaders({'Content-type':'application/json'})

  constructor( private http:HttpClient) { }

  getEstudios():Observable<Estudio[]>{
    return this.http.get<Estudio[]>(this.urlEndPoint)
  }

  crear(estudio:Estudio):Observable<Estudio>{
    return this.http.post<Estudio>(this.urlEndPoint,estudio,{headers:this.httpHeaders})
  }

  getEstudio(id:number):Observable<Estudio>{
    console.log("ererfere"+ id)
    return this.http.get<Estudio>(`${this.urlEndPoint}/${id}`)
  }

  actualizarEstudio(estudio:Estudio):Observable<Estudio>{

    return this.http.put<Estudio>( `${this.urlEndPoint}/${estudio.idEstudio}`,estudio,{headers:this.httpHeaders})

  }

  borrar(id:number):Observable<Estudio>{

    return this.http.delete<Estudio>( `${this.urlEndPoint}/${id}`,{headers:this.httpHeaders})

  }
}
