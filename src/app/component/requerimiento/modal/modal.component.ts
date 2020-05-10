import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../../service/Producto/producto.service';
import {Producto} from '../../../models/entities/producto';
import {DetalleRequerimiento} from '../../../models/entities/detalle-requerimiento';
import {RequerimientoComponent} from '../requerimiento.component';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  static listDetalleRequerimiento: DetalleRequerimiento[] = new Array()

  /******ADD******/
  producto: Producto = new Producto()
  detalleRequerimiento: DetalleRequerimiento = new DetalleRequerimiento()

  /*****list*****/
  listProducts: Producto[]

  constructor(
      private productoService: ProductoService
  ) {
  }

  ngOnInit() {
    this.findAllProducts();
  }

  /***************METHODS SERVICES***************/
  findAllProducts() {
    this.productoService.finAll().subscribe( list => {
      this.listProducts = list.result
    })
  }

  addProducto() {
    debugger
    this.detalleRequerimiento.producto = this.producto
    ModalComponent.listDetalleRequerimiento.push(this.detalleRequerimiento)
  }

  calculaTotalEstimado() {
    this.detalleRequerimiento.precioTotalEstimado =
        this.detalleRequerimiento.precioUnitarioEstimado * this.detalleRequerimiento.cantidadSolicitada
  }
}
