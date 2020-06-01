import {Component, OnInit} from '@angular/core';
import {Requerimiento} from 'app/models/entities/requerimiento';
import {DetalleRequerimientoService} from '../../../../service/DetalleReuquerimiento/detalle-requerimiento.service';
import {DetalleRequerimiento} from '../../../../models/entities/detalle-requerimiento';
import {CookieService} from 'ngx-cookie-service';
import {UserSessionService} from '../../../../Util/user-session.service';
import {AnalistaService} from '../../../../service/Analista/analista.service';
import {Analista} from '../../../../models/entities/analista';
import {Estado} from '../../../../models/entities/estado';
import {EstadoService} from '../../../../service/Estado/estado.service';
import {ConfigProcesoService} from '../../../../service/ConfigProceso/config-proceso.service';
import {config} from 'rxjs';
import {ConfigProceso} from '../../../../models/entities/config-proceso';

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
        private cookieService: CookieService,
        private userSession: UserSessionService,
        private analistaService: AnalistaService,
        private estadoService: EstadoService,
        private configProcesoService: ConfigProcesoService
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
        debugger
        const idRequerimiento = ModalRequerimientoComponent.idRequerimiento
        const idUser = this.userSession.getUserSession('idUsuario')
        let analista: Analista
        await this.analistaService.findById(idUser).subscribe(o => {
            analista = o.result
        })
        const configProceso: ConfigProceso = new ConfigProceso()
        configProceso.idAnalista = analista.id
        configProceso.idEstado = 1002

        await this.configProcesoService.save(configProceso, idRequerimiento.toString())

    }
}
