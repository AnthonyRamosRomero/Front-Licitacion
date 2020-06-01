import {Component, OnInit} from '@angular/core';
import {Requerimiento} from 'app/models/entities/requerimiento';
import {RequerimientoService} from 'app/service/requerimiento/requerimiento.service';
import {Producto} from 'app/models/entities/producto';
import {ProductoService} from 'app/service/Producto/producto.service';
import {MatDialog} from '@angular/material/dialog';
import {ModalRequerimientoComponent} from './ModalMonitorRequerimiento/modal-requerimiento/modal-requerimiento.component';

// @ts-ignore
import {CookieService} from 'ngx-cookie-service';

@Component({
    selector: 'app-monitor-requerimientos',
    templateUrl: './monitor-requerimientos.component.html',
    styleUrls: ['./monitor-requerimientos.component.css']
})

export class MonitorRequerimientosComponent implements OnInit {

    listaRequerimiento: Requerimiento[] = []
    listaRequerimientoProducto: Producto[] = []

    constructor(public dialog: MatDialog,
                private requerimientoService: RequerimientoService,
                private productoService: ProductoService,
                private cookieService: CookieService
    ) {
    }

    ngOnInit(): void {
        this.llenaListaRequerimiento()
        this.setUserSession()
    }

    llenaListaRequerimiento() {
        this.requerimientoService.finAll().subscribe(list => {
            console.log(list.result)
            list.result
                .filter(o => o != null && o.dml != null && o.dml !== 'D')
                .forEach(o => {
                    this.listaRequerimiento.push(o)
                })
        })
        console.log(this.listaRequerimiento)
    }

    openDialog(idRequerimiento: number) {
        ModalRequerimientoComponent.idRequerimiento = idRequerimiento

        this.dialog.open(ModalRequerimientoComponent);
        console.log(this.listaRequerimiento);
    }

    setUserSession() {
        this.cookieService.set('user', 'Anthony')
    }

    getUserSession() {
        console.log(this.cookieService.get('user'))
    }
}
