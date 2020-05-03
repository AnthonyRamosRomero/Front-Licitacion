import { Component, OnInit } from '@angular/core';
import {ModalComponent} from './modal/modal.component';
import {MatDialog} from '@angular/material/dialog';
import {AreaSolicitanteService} from '../../service/AreaSolicitante/area-solicitante.service';
import {AreaSolicitante} from '../../models/entities/area-solicitante';
import {TipoRequerimientoService} from '../../service/TipoRequerimiento/tipo-requerimiento.service';
import {TipoRequerimiento} from '../../models/entities/tipo-requerimiento';
import {DetalleRequerimiento} from '../../models/entities/detalle-requerimiento';

@Component({
  selector: 'app-requerimiento',
  templateUrl: './requerimiento.component.html',
  styleUrls: ['./requerimiento.component.css']
})
export class RequerimientoComponent implements OnInit {

  listDetalleRequerimiento: DetalleRequerimiento[]

  listAreas: AreaSolicitante[]
  listTipoR: TipoRequerimiento[]


  constructor(
      public dialog: MatDialog,
      private areaSolicitanteService: AreaSolicitanteService,
      private tipoRequerimientoService: TipoRequerimientoService
  ) {}


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
    this.tipoRequerimientoService.finAll().subscribe( list => {
      this.listTipoR = list.result;
    })
  }

  listaDetalleRequerimiento() {
    this.listDetalleRequerimiento = ModalComponent.listDetalleRequerimiento
  }

}
