import { Component, OnInit } from '@angular/core';
import { Requerimiento } from 'app/models/entities/requerimiento';
import { RequerimientoService } from 'app/service/requerimiento/requerimiento.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {TipoRequerimientoService} from '../../service/TipoRequerimiento/tipo-requerimiento.service';
import {TipoRequerimiento} from '../../models/entities/tipo-requerimiento';
import { AreaSolicitanteService} from '../../service/AreaSolicitante/area-solicitante.service'
import { AreaSolicitante } from '../../models/entities/area-solicitante';
import { Producto } from 'app/models/entities/producto';
import { ProductoService } from 'app/service/Producto/producto.service';
import { ModalComponent } from '../requerimiento/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalRequerimientoComponent } from './ModalMonitorRequerimiento/modal-requerimiento/modal-requerimiento.component';

@Component({
  selector: 'app-monitor-requerimientos',
  templateUrl: './monitor-requerimientos.component.html',
  styleUrls: ['./monitor-requerimientos.component.css']
})
export class MonitorRequerimientosComponent implements OnInit {

  listaRequerimiento : Requerimiento[] = new Array
  listaRequerimientoProducto : Producto[] = new Array 


  constructor(public dialog: MatDialog,
              private requerimientoService: RequerimientoService,
              private productoService : ProductoService) { 

  }

  ngOnInit(): void {
    this.llenaListaRequerimiento()
  }

  llenaListaRequerimiento(){
    this.requerimientoService.finAll().subscribe( list => {
      console.log(list.result)
      list.result
      .filter(o => o != null && o.dml != null && o.dml != 'D')
      .forEach(o =>  {
        let data = new Requerimiento
        this.listaRequerimiento.push(o)
      })
    })
    console.log(this.listaRequerimiento)
  }

  openDialog() {
    this.dialog.open(ModalRequerimientoComponent);
    console.log(this.listaRequerimiento);
  }

}
