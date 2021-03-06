import {Component, OnInit} from '@angular/core';
import {Requerimiento} from 'app/models/entities/requerimiento';
import {DetalleRequerimientoService} from '../../../../service/DetalleReuquerimiento/detalle-requerimiento.service';
import {DetalleRequerimiento} from '../../../../models/entities/detalle-requerimiento';
import {UserSessionService} from '../../../../Util/user-session.service';
import {AnalistaService} from '../../../../service/Analista/analista.service';
import {Analista} from '../../../../models/entities/analista';
import {EstadoService} from '../../../../service/Estado/estado.service';
import {ConfigProcesoService} from '../../../../service/ConfigProceso/config-proceso.service';
import {ConfigProceso} from '../../../../models/entities/config-proceso';
import {AlertasService} from '../../../../Util/alertas.service';
import {CookieServiceService} from '../../../../Util/cookie-service.service';

@Component({
    selector: 'app-modal-requerimiento',
    templateUrl: './modal-requerimiento.component.html',
    styleUrls: ['./modal-requerimiento.component.css']
})
export class ModalRequerimientoComponent implements OnInit {

    static idRequerimiento: number

    listaRequerimiento: Requerimiento[] = []
    listDetalleRequerimiento: DetalleRequerimiento[] = []

    constructor(
        private DetalleRequeimientoService: DetalleRequerimientoService,
        private cookieUserService: UserSessionService,
        private userSession: UserSessionService,
        private analistaService: AnalistaService,
        private estadoService: EstadoService,
        private configProcesoService: ConfigProcesoService,
        private cookieService: CookieServiceService
    ) {
    }

    ngOnInit(): void {
        this.userSession.setUserSession('idUsuario', '1')
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngAfterViewInit(): void {
        this.llenaDetalleRequerimiento(ModalRequerimientoComponent.idRequerimiento)
        /*console.log(this.userSession.getUserSession('user'))*/
    }


    async llenaDetalleRequerimiento(idRequerimiento: number) {
        await this.DetalleRequeimientoService.findAllByIdRequerimiento(idRequerimiento).subscribe(o => {
            this.listDetalleRequerimiento = o.result
        })
        await console.log(this.listDetalleRequerimiento)
    }

    async generarProceso() {

        const idRequerimiento = ModalRequerimientoComponent.idRequerimiento
        const idUser = this.userSession.getUserSession('idUsuario')
        const idAnalista = this.cookieService.getKookie('IdAnalista')

        let analista: Analista
        await this.analistaService.findById(idUser).subscribe(o => {
            analista = o.result
        })

        const promesa = this.analistaService.findById(idUser).toPromise()
        promesa.then(o => {
            console.log(o.result)
            const configProceso: ConfigProceso = new ConfigProceso()
            configProceso.AnalistaId = analista.id
            configProceso.EstadoId = 1002

            this.configProcesoService.save(configProceso, idRequerimiento.toString()).subscribe(value => {
                AlertasService.showNotification('top', 'right', 'Felicidades! usted llevara el proceso', 'success')
            })
            // REDIRECIONAR CONFIGURACION DE PROCESO
        }).catch(ex => {
            console.log(ex)
            AlertasService.showNotification('top', 'right', ex, 'danger')
        })
    }
}
