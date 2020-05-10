import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ResponseEntity } from 'app/models/entities/ResponseEntity';
import { Analista } from 'app/models/entities/analista';

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

@Injectable({
  providedIn: 'root'
})
export class AnalistaService {

  perfil = 'local'

  constructor(private http: HttpClient) { }

  getUrlService(metodo : string){
    let url = this.perfil === 'local' ? 'http://localhost:61444/api/v1/Analista/' : '';
    url = url + metodo;
    return url;
  }

  /*  Metodos  */
  finAll(){
    return this.http.get<ResponseEntity<Analista[]>>(this.getUrlService('listAnalista'), httpOptions);
  }
}
