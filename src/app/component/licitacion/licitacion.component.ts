import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {ProveedorService} from '../../service/Proveedor/proveedor.service';
import {Proveedor} from '../../models/entities/proveedor';

@Component({
    selector: 'app-licitacion',
    templateUrl: './licitacion.component.html',
    styleUrls: ['./licitacion.component.css']
})
export class LicitacionComponent implements OnInit {

    proveedoresList: Proveedor[] = []
    estado = false

    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'flag'];
    dataSource = new MatTableDataSource<Proveedor>(this.proveedoresList);

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    constructor(private proveedorService: ProveedorService) {
    }

    ngOnInit() {
        this.getData().then(data => {
            console.log(data);
            this.dataSource = new MatTableDataSource<Proveedor>(data.result);
            this.dataSource.paginator = this.paginator;
        })

    }

    getPush() {
        console.log(this.dataSource)
    }

    getData() {
        return this.proveedorService.finAll().toPromise()
    }
}

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
    flag: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', flag: false},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', flag: true},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', flag: true},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', flag: true},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', flag: true},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', flag: true},
];
