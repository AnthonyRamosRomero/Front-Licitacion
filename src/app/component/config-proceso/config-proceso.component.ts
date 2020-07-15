import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Proveedor} from '../../models/entities/proveedor';
import {ProveedorService} from '../../service/Proveedor/proveedor.service';
import {AlertasService} from '../../Util/alertas.service';
import {ConfigProceso} from '../../models/entities/config-proceso';
import {RequerimientoService} from '../../service/requerimiento/requerimiento.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-config-proceso',
    templateUrl: './config-proceso.component.html',
    styleUrls: ['./config-proceso.component.css']
})
export class ConfigProcesoComponent implements OnInit {

    panelOpenState = false

    /*FLAG'S*/
    tieneRFI = false
    notificarParticipantes = false
    tieneVisitaTecnica = false

    /*Proveedores*/
    listProvedores: Proveedor[] = []

    displayedColumns: string[] = ['isSelected', 'razonSocial', 'ruc', 'contacto', 'correo']
    dataSource = new MatTableDataSource<Proveedor>(this.listProvedores)

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator

    constructor(private proveedorService: ProveedorService,
                private requerimientoService: RequerimientoService) {
    }

    ngOnInit() {

        this.findAllProviders()
    }

    findAllProviders() {
        this.proveedorService.finAll().toPromise().then(o => {
            this.listProvedores = o.result

            /*Vamos ah setear el flag isSelected*/
            this.listProvedores.forEach(data => {
                data.isSelected = false
            })

            this.dataSource = new MatTableDataSource<Proveedor>(o.result);
            this.dataSource.paginator = this.paginator
        }).catch(error => {
            AlertasService.showNotification('top', 'right', 'Ocurrio un problema! ' + error.message, 'success')

        })
    }

    getValueCheck() {
        console.log(this.listProvedores)
        console.log(this.tieneRFI)
        console.log(this.tieneVisitaTecnica)
        console.log(this.notificarParticipantes)
    }

    saveConfigurationInitial() {
        const config: ConfigProceso = new ConfigProceso()
        config.AnalistaId = 0
        this.requerimientoService.SaveConfigurationInitial(config)
            .toPromise()
            .then(result => {
                console.log(result)
            }).catch(error => {
                console.log('ERROR')
        })
        // config.RequerimientoId = METER EL ID_REQUERIMIENTO EN LA SESSION
        // El ID ESTADO SERA MEDIANTE UN TRIGGER
        // FECHA TRATAMIENTO POR LADO DEL BACK
        // FECHA ADJUDICACION NULL HASTA SER ADJUDICADO
        // LA CREACION DE LAS RONDAS SEGUN TIPO PROCESO SERA MEDIANTE UN PROCEDIMIENTO ALMACENADO

    }
}
