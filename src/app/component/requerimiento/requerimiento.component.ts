import {Component, OnInit} from '@angular/core';
import {ModalComponent} from './modal/modal.component';
import {MatDialog} from '@angular/material/dialog';
import {AreaSolicitanteService} from '../../service/AreaSolicitante/area-solicitante.service';
import {AreaSolicitante} from '../../models/entities/area-solicitante';
import {TipoRequerimientoService} from '../../service/TipoRequerimiento/tipo-requerimiento.service';
import {TipoRequerimiento} from '../../models/entities/tipo-requerimiento';
import {DetalleRequerimiento} from '../../models/entities/detalle-requerimiento';
import {Requerimiento} from '../../models/entities/requerimiento';
import {RequerimientoService} from '../../service/requerimiento/requerimiento.service';
import {DetalleRequerimientoService} from '../../service/DetalleReuquerimiento/detalle-requerimiento.service';
import {MonitorRequerimientoService} from '../../service/MonitorRequerimiento/monitor-requerimiento.service';
import {MonitorRequerimientoDTO} from '../../models/dto/monitor-requerimiento-dto';

declare var $: any;

@Component({
    selector: 'app-requerimiento',
    templateUrl: './requerimiento.component.html',
    styleUrls: ['./requerimiento.component.css']
})
export class RequerimientoComponent implements OnInit {

    /*Requerimiento*/
    requerimiento: Requerimiento = new Requerimiento()
    /*Detalle Requerimiento*/
    listDetalleRequerimiento: DetalleRequerimiento[] = []


    /*Combos*/
    listAreas: AreaSolicitante[]
    listTipoR: TipoRequerimiento[]

    /*Para el acordion*/
    panelOpenState = true;

    /*MonitorRequerimiento*/
    monitorRequerimiento: MonitorRequerimientoDTO = new MonitorRequerimientoDTO()

    constructor(
        public dialog: MatDialog,
        private areaSolicitanteService: AreaSolicitanteService,
        private tipoRequerimientoService: TipoRequerimientoService,
        private requerimientoService: RequerimientoService,
        private detalleRequerimientoService: DetalleRequerimientoService,
        private monitorRequerimientoService: MonitorRequerimientoService
    ) {
    }


    ngOnInit() {
        this.finAllAreaSolicitante();
        this.finAllTipoRequerimiento();
        this.listaDetalleRequerimiento();
    }

    openDialog() {
        this.dialog.open(ModalComponent);
        console.log(this.listAreas);
    }

    /***************METHODS SERVICES***************/
    finAllAreaSolicitante() {
        this.areaSolicitanteService.finAll().subscribe(list => {
            this.listAreas = list.result;
        })
    }

    finAllTipoRequerimiento() {
        this.tipoRequerimientoService.finAll().subscribe(list => {
            this.listTipoR = list.result;
        })
    }

    /*Para llenar la tabla dinamicamente*/
    listaDetalleRequerimiento() {
        this.listDetalleRequerimiento = ModalComponent.listDetalleRequerimiento
    }

    saveRequerimiento() {
        console.log(this.requerimiento)
        this.saveDetalleRequerimiento()
        /*this.requerimientoService.save(this.requerimiento).subscribe( response => {
          console.log(response)
        })*/
    }

    saveDetalleRequerimiento() {
        console.log(this.listDetalleRequerimiento)
    }

    async generateRequerimiento() {

        try {
            this.monitorRequerimiento.requerimiento = await this.requerimiento
            this.monitorRequerimiento.detalleRequerimiento = await this.listDetalleRequerimiento

            await this.monitorRequerimientoService.save(this.monitorRequerimiento).subscribe(result => {
                this.showNotification('top', 'right', 'Requerimiento generado', 'info')
                this.clearModels()
            })
        } catch (e) {
            console.log(e)
            this.showNotification('top', 'right', 'Error al generar requerimiento', 'danger')
        }
    }

    clearModels() {
        this.requerimiento = new Requerimiento()
        this.listDetalleRequerimiento = []
    }









    showNotification(from, align, mensaje, type) {
        // const type = ['', 'info', 'success', 'warning', 'danger'];
        $.notify({
            icon: 'notifications',
            message: mensaje
        }, {
            type: type[type],
            timer: 3000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    }
}
