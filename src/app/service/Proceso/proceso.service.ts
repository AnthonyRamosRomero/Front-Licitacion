import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { i18nMetaToDocStmt } from '@angular/compiler/src/render3/view/i18n/meta';
import { ResponseEntity } from 'app/models/entities/ResponseEntity';
import { Proceso } from 'app/models/entities/proceso';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProcesoService {

  perfil = 'local'

  constructor(private http: HttpClient) { }

  getUrlService(metodo : string){
    let url = this.perfil === 'local' ? 'http://localhost:61444/api/v1/Proceso/' : '';
    url = url + metodo;
    return url;
  }

  /*  Metodo  */
  finAll(){
    return this.http.get<ResponseEntity<Proceso[]>>(this.getUrlService('listProceso'), httpOptions);
  }
}
