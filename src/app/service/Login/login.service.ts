import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ResponseEntity } from 'app/models/entities/ResponseEntity';
import { UserLoginDto } from 'app/models/dto/user-login-dto';
import { Usuario } from 'app/models/entities/usuario';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  perfil = 'local'

  constructor(private http: HttpClient) { }

  getUserLogin(metodo: String ) {
    let url = this.perfil === 'local' ? 'http://localhost:61444/api/v1/usuario/' : '';
    url = url + metodo;
    return url;
  }
  // Usuario:String, Password:String
  validaUsuario(userLogin: UserLoginDto) {
    return this.http.post<ResponseEntity<Usuario>>(this.getUserLogin('usersValidate'), userLogin,  httpOptions)
  }

}
