import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ResponseEntity } from 'app/models/entities/ResponseEntity';
import { Proveedor } from 'app/models/entities/proveedor';

  const httpOptions = {
    headers : new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  perfil = 'local'

  constructor(private http: HttpClient) { }

  getUrlService(metodo : string){
    let url = this.perfil === 'local' ? 'http://localhost:61444/api/v1/Proveedor/' : '';
    url = url + metodo;
    return url;
  }

  /*  Metodo  */
  finAll(){
    return this.http.get<ResponseEntity<Proveedor[]>>(this.getUrlService('listProvider'), httpOptions);
  }
}
