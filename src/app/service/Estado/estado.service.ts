import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ResponseEntity } from 'app/models/entities/ResponseEntity';
import { Estado } from 'app/models/entities/estado';

  const httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'aplication/json'
    })
  }

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  perfil = 'local'

  constructor(private http: HttpClient) { }

  getUrlService(metodo : string){
    let url = this.perfil === 'local' ? 'http://localhost:61444/api/v1/Estado/' : '';
    url = url + metodo;
    return url;
  }

  /*  Metodos  */ 
  finAll(){
    return this.http.get<ResponseEntity<Estado[]>>(this.getUrlService('listEstado'), httpOptions);
  }
}
