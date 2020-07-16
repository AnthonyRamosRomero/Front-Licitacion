import {Component, OnInit} from '@angular/core';
import {LoginService} from 'app/service/Login/login.service';
import {UserLoginDto} from 'app/models/dto/user-login-dto';
import {data} from 'jquery';
import {UserSessionService} from 'app/Util/user-session.service';
import {Router, RouterLink, RouteConfigLoadStart} from '@angular/router'
import {AlertasService} from '../../../Util/alertas.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginDto: UserLoginDto = new UserLoginDto();

    constructor(private loginService: LoginService,
                private userSessionService: UserSessionService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.loginDto = new UserLoginDto()
    }

    onLogin() {
        debugger
        this.loginService.validaUsuario(this.loginDto)
            .toPromise()
            .then(response => {
                const status = response.ok;
                if (status) {
                    if (response.result != null && response.result.id != null) {
                        this.userSessionService.setUserSession('IdUsuario', response.result.id.toString());
                        AlertasService.showNotification('top', 'right', 'Usuario logeado', 'sus')
                    } else {
                        AlertasService.showNotification('top', 'right', 'Usuario no registrado', 'danger')
                    }
                } else {
                    // Error en el interno
                }
            }).catch(error => {
            AlertasService.showNotification('top', 'right', 'Ocurrio un problema! ' + error.message, 'danger')
        }).then(response => {
            this.router.navigate(['#']);
        });
    }


    reLoad() {

    }
}
