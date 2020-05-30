import {Component, OnInit} from '@angular/core';
import {Requerimiento} from 'app/models/entities/requerimiento';
import {DetalleRequerimientoService} from '../../../../service/DetalleReuquerimiento/detalle-requerimiento.service';
import {DetalleRequerimiento} from '../../../../models/entities/detalle-requerimiento';

@Component({
    selector: 'app-modal-requerimiento',
    templateUrl: './modal-requerimiento.component.html',
    styleUrls: ['./modal-requerimiento.component.css']
})
export class ModalRequerimientoComponent implements OnInit {

    static idRequerimiento: number

    listaRequerimiento: Requerimiento[] = []
    listDetalleRequerimiento: DetalleRequerimiento[] = []

    constructor(private DetalleRequeimientoService: DetalleRequerimientoService) {
    }

    ngOnInit(): void {

    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngAfterViewInit(): void {
        this.llenaDetalleRequerimiento(ModalRequerimientoComponent.idRequerimiento)
    }


    async llenaDetalleRequerimiento(idRequerimiento: number) {
        await this.DetalleRequeimientoService.findAllByIdRequerimiento(idRequerimiento).subscribe(o => {
            this.listDetalleRequerimiento = o.result
        })
        await console.log(this.listDetalleRequerimiento)
    }
}
