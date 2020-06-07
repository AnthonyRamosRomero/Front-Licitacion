import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ResponseEntity} from '../../models/entities/ResponseEntity';
import {AreaSolicitante} from '../../models/entities/area-solicitante';
import {Producto} from '../../models/entities/producto';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  perfil = 'local'

  constructor(private http: HttpClient) { }

  getUrlService(metodo: string) {
    let url = this.perfil === 'local' ? 'http://localhost:61444/api/v1/Producto/' : '';
    url = url + metodo;
    return url;
  }

  /***************METHODS***************/
  finAll() {
    return this.http.get<ResponseEntity<Producto[]>>(this.getUrlService('listProducts'), httpOptions);
  }
}
