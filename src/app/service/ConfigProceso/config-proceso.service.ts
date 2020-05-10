import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ResponseEntity } from 'app/models/entities/ResponseEntity';
import { ConfigProceso } from 'app/models/entities/config-proceso';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ConfigProcesoService {

  perfil = 'local'

  constructor(private http: HttpClient) { }

  getUrlService(metodo : string){
    let url = this.perfil === 'local' ? 'http://localhost:61444/api/v1/ConfigProceso/' : '';
    url = url + metodo;
    return url;
  }

  /*  Metodos  */
  finAll(){
    return this.http.get<ResponseEntity<ConfigProceso[]>>(this.getUrlService('listConfigProceso'), httpOptions);
  }
}

