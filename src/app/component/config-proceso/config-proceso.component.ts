import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Proveedor} from '../../models/entities/proveedor';
import {ProveedorService} from '../../service/Proveedor/proveedor.service';
import {AlertasService} from '../../Util/alertas.service';

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

    constructor(private proveedorService: ProveedorService) {
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
            AlertasService.showNotification('top', 'right', 'Ocurrio un problema! ' + error.message, 'danger')
        })
    }

    getValueCheck() {
        console.log(this.listProvedores)
    }
}
