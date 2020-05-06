import { Component, OnInit } from '@angular/core';
import { Requerimiento } from 'app/models/entities/requerimiento';
import { RequerimientoService } from 'app/service/requerimiento/requerimiento.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {TipoRequerimientoService} from '../../service/TipoRequerimiento/tipo-requerimiento.service';
import {TipoRequerimiento} from '../../models/entities/tipo-requerimiento';
import { AreaSolicitanteService} from '../../service/AreaSolicitante/area-solicitante.service'
import { AreaSolicitante } from '../../models/entities/area-solicitante';

@Component({
  selector: 'app-monitor-requerimientos',
  templateUrl: './monitor-requerimientos.component.html',
  styleUrls: ['./monitor-requerimientos.component.css']
})
export class MonitorRequerimientosComponent implements OnInit {

  listaRequerimiento : Requerimiento[] = new Array


  constructor(private requerimientoService: RequerimientoService) { 

  }

  ngOnInit(): void {
    this.llenaListaRequerimiento()
  }

  llenaListaRequerimiento(){
    this.requerimientoService.finAll().subscribe( list => {
      this.listaRequerimiento = list.result
    })
  }

}
