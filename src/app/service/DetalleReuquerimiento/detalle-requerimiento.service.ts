import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ResponseEntity} from '../../models/entities/ResponseEntity';
import {AreaSolicitante} from '../../models/entities/area-solicitante';
import {DetalleRequerimiento} from '../../models/entities/detalle-requerimiento';
import {Requerimiento} from '../../models/entities/requerimiento';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DetalleRequerimientoService {
  perfil = 'local'

  constructor(private http: HttpClient) { }

  getUrlService(metodo: string) {
    let url = this.perfil === 'local' ? 'http://localhost:61444/api/v1/DetalleRequerimiento/' : '';
    url = url + metodo;
    return url;
  }

  /***************METHODS***************/
  finAll() {
    return this.http.get<ResponseEntity<DetalleRequerimiento[]>>(this.getUrlService('listdetallerrequerimiento'), httpOptions);
  }

  save(detalleRequerimiento: DetalleRequerimiento) {
    return this.http.post<ResponseEntity<DetalleRequerimiento>>(this.getUrlService('savedetallerequerimiento'), detalleRequerimiento, httpOptions);
  }
}
