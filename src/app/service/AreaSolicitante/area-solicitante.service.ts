import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AreaSolicitante} from '../../models/entities/area-solicitante';
import {ResponseEntity} from '../../models/entities/ResponseEntity';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AreaSolicitanteService {
  perfil = 'local'

  constructor(private http: HttpClient) { }

  getUrlService(metodo: string) {
    let url = this.perfil === 'local' ? 'http://localhost:61444/api/v1/AreaSolicitante/' : '';
    url = url + metodo;
    return url;
  }

  /***************METHODS***************/
  finAll() {
    return this.http.get<ResponseEntity<AreaSolicitante[]>>(this.getUrlService('listApplicationArea'), httpOptions);
  }

}
