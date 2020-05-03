import { Component, OnInit } from '@angular/core';
import {ModalComponent} from './modal/modal.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-requerimiento',
  templateUrl: './requerimiento.component.html',
  styleUrls: ['./requerimiento.component.css']
})
export class RequerimientoComponent implements OnInit {

  constructor(public dialog: MatDialog) {}


  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(ModalComponent);
  }
}
