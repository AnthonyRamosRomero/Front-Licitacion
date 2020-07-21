import {Component, OnInit} from '@angular/core';
import {LoginService} from 'app/service/Login/login.service';
import {UserLoginDto} from 'app/models/dto/user-login-dto';
import {data} from 'jquery';
import {UserSessionService} from 'app/Util/user-session.service';
import {Router, RouterLink, RouteConfigLoadStart} from '@angular/router'
import {AlertasService} from '../../../Util/alertas.service';
import {AdminLayoutComponent} from '../../../layouts/admin-layout/admin-layout.component';
import {CookieServiceService} from '../../../Util/cookie-service.service';
import {Usuario} from '../../../models/entities/usuario';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginDto: UserLoginDto = new UserLoginDto();

    constructor(private loginService: LoginService,
                private userSessionService: UserSessionService,
                private router: Router,
                private adminLayoutComponent: AdminLayoutComponent,
                private cookieService: CookieServiceService) {
    }

    ngOnInit(): void {
        this.loginDto = new UserLoginDto()
    }

    onLogin() {
        this.loginService.validaUsuario(this.loginDto)
            .toPromise()
            .then(response => {

                const status = response.ok;
                if (response.result != null && response.result.id != null) {
                    debugger
                    const usuario: Usuario = response.result
                    console.log(usuario.AnalistaId)
                    AlertasService.showNotification('top', 'right', 'Usuario logeado', 'sus')
                    this.userSessionService.setUserSession('IdUsuario', usuario.id + '')
                    this.cookieService.setKookie('IdAnalista', usuario.AnalistaId + '')
                } else {
                    AlertasService.showNotification('top', 'right', 'Usuario no registrado', 'danger')
                }
                resolve()
            }).catch(error => {
            console.log(error);
        }).then(response => {
            this.adminLayoutComponent.ngOnInit();
        });
    }


    reLoad() {
        this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/']);
        });
    }
}
