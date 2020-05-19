import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-requerimiento',
  templateUrl: './requerimiento.component.html',
  styleUrls: ['./requerimiento.component.css']
})
export class RequerimientoComponent implements OnInit {
    
  /*Requerimiento*/
  requerimiento: Requerimiento = new Requerimiento()
  /*Detalle Requerimiento*/
  listDetalleRequerimiento: DetalleRequerimiento[] = new Array
    

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
      this.listAreas =  list.result;
    })
  }

  finAllTipoRequerimiento() {
    this.tipoRequerimientoService.finAll().subscribe( list => {
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
          this.monitorRequerimiento.requerimiento = this.requerimiento
          this.monitorRequerimiento.detalleRequerimiento = this.listDetalleRequerimiento
          this.monitorRequerimientoService.save(this.monitorRequerimiento).subscribe(result => {
              console.log(result.result)
          })
      } catch (e) {
          console.log(e)
      }
  }
}
