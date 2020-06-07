import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ResponseEntity } from 'app/models/entities/ResponseEntity';
import { Producto } from 'app/models/entities/producto';
import { AdjuntoRondaProveedor } from 'app/models/entities/adjunto-ronda-proveedor';

const httpOptions = {
   headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AdjuntoRondaProveedorService {
  perfil = "local"

  constructor(private http: HttpClient) { }

  getUrlService(metodo : string){
    let url = this.perfil === 'local' ? 'http://localhost:61444/api/v1/AdjuntoRondaProveedor/' : '';
    url = url + metodo;
    return url;
  }

  /*   Metodos    */
  finAll(){
    return this.http.get<ResponseEntity<AdjuntoRondaProveedor[]>>(this.getUrlService('listRoundAttachmentProvider'), httpOptions);
  }
}
