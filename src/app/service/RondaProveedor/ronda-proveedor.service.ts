import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RondaProveedor } from 'app/models/entities/ronda-proveedor';
import { ResponseEntity } from 'app/models/entities/ResponseEntity';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class RondaProveedorService {
  perfil = "local"

  constructor(private http: HttpClient) { }

  getUrlService(metodo : string){
    let url = this.perfil === 'local' ? 'http://localhost:61444/api/v1/AdjuntoRondaProveedor/' : '';
    url = url + metodo;
    return url;
  }

  /*   Metodos    */
  finAll(){
    return this.http.get<ResponseEntity<RondaProveedor[]>>(this.getUrlService('listProviderRound'), httpOptions);
  }
}
