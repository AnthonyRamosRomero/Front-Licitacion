import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ResponseEntity} from '../../models/entities/ResponseEntity';
import {AreaSolicitante} from '../../models/entities/area-solicitante';
import {Requerimiento} from '../../models/entities/requerimiento';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class RequerimientoService {
  perfil = 'local'

  constructor(private http: HttpClient) { }

  getUrlService(metodo: string) {
    let url = this.perfil === 'local' ? 'http://localhost:61444/api/v1/Requerimiento/' : '';
    url = url + metodo;
    return url;
  }

  /***************METHODS***************/
  finAll() {
    return this.http.get<ResponseEntity<Requerimiento[]>>(this.getUrlService('listRequeriment'), httpOptions);
  }

  save(requerimiento: Requerimiento) {
    return this.http.post<ResponseEntity<Requerimiento>>(this.getUrlService('saveRequirement'), requerimiento, httpOptions);
  }
}
