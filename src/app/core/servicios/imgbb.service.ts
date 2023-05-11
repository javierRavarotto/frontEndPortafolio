import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImgbbService {
  private key :String="849daef59e170a033684a15546f78edd"
  private urlEndPointimg:string= "https://api.imgbb.com/1/upload=key="
  private urlEndPoint:string= "http://localhost:8080/api/proyecto"
  private httpHeaders = new HttpHeaders({'Content-type':'application/json'})

 


  constructor(private http:HttpClient) { }

  uploadImage(file:any): Observable<any> {
    let form = new FormData();
    form.append("image", file)
    let url = `https://api.imgbb.com/1/upload?key=${this.key}`;
    return this.http.post<any>(url, form);
  }
}
