import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {ProveedorService} from '../../service/Proveedor/proveedor.service';
import {Proveedor} from '../../models/entities/proveedor';
import {AlertasService} from '../../Util/alertas.service';

@Component({
    selector: 'app-licitacion',
    templateUrl: './licitacion.component.html',
    styleUrls: ['./licitacion.component.css']
})
export class LicitacionComponent implements OnInit {

    tieneRFI = true
    participantesNotificados = true
    tieneVisitaTecnica = true


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
        /*SOLO MOSTRAR LOS PROVEEDORES QUE PERTENECEN AL REQUERIMIENTO*/
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
}
