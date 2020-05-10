import { Component, OnInit } from '@angular/core';
import { Requerimiento } from 'app/models/entities/requerimiento';

@Component({
  selector: 'app-modal-requerimiento',
  templateUrl: './modal-requerimiento.component.html',
  styleUrls: ['./modal-requerimiento.component.css']
})
export class ModalRequerimientoComponent implements OnInit {

  listaRequerimiento : Requerimiento[] = new Array

  constructor() { }

  ngOnInit(): void {
  }

  


}
