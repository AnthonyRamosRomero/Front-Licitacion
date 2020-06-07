import { Injectable } from '@angular/core';
import {ResponseEntity} from '../../models/entities/ResponseEntity';
import {AreaSolicitante} from '../../models/entities/area-solicitante';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Categoria} from '../../models/entities/categoria';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  perfil = 'local'

  constructor(private http: HttpClient) { }

  getUrlService(metodo: string) {
    let url = this.perfil === 'local' ? 'http://localhost:61444/api/v1/Categoria/' : '';
    url = url + metodo;
    return url;
  }

  /***************METHODS***************/
  finAll() {
    return this.http.get<ResponseEntity<Categoria[]>>(this.getUrlService('listCategory'), httpOptions);
  }

}
