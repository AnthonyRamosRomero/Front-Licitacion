import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {ResponseEntity} from 'app/models/entities/ResponseEntity';
import {Adjunto} from 'app/models/entities/adjunto';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable({
    providedIn: 'root'
})
export class AdjuntoService {

    perfil = 'local'

    constructor(private http: HttpClient) {
    }

    getUrlService(metodo: string) {
        let url = this.perfil === 'local' ? 'http://localhost:61444/api/v1/Adjunto/' : '';
        url = url + metodo;
        return url;
    }

    /*    Metodos     */
    finAll() {
        return this.http.get<ResponseEntity<Adjunto[]>>(this.getUrlService('listAttached'), httpOptions);
    }

}
