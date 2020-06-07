import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ResponseEntity} from '../../models/entities/ResponseEntity';
import {Requerimiento} from '../../models/entities/requerimiento';
import {MonitorRequerimientoDTO} from '../../models/dto/monitor-requerimiento-dto';
import {isSuccess} from '@angular/http/src/http_utils';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class MonitorRequerimientoService {

  perfil = 'local'

  constructor(private http: HttpClient) { }

  getUrlService(metodo: string) {
    let url = this.perfil === 'local' ? 'http://localhost:61444/api/v1/Requerimiento/' : '';
    url = url + metodo;
    return url;
  }

  save(monitorRequerimiento: MonitorRequerimientoDTO) {
    debugger
    return this.http.post<ResponseEntity<MonitorRequerimientoDTO>>(
        this.getUrlService('saveMonitorRequerimiento'),
        monitorRequerimiento,
        httpOptions);
  }

}
