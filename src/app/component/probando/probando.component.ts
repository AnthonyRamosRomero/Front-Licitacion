import { Component, OnInit } from '@angular/core';
import { Producto } from 'app/models/entities/producto';
import { ProductoService} from 'app/service/Producto/producto.service';
import { CategoriaService } from '../../service/Categoria/categoria.service'
import { Categoria} from '../../models/entities/categoria'


@Component({
  selector: 'app-probando',
  templateUrl: './probando.component.html',
  styleUrls: ['./probando.component.css']
})
export class ProbandoComponent implements OnInit {

  listaproducto : Producto[] = new Array


  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.llenaListaProducto()
  }

  /*  Metodos */
  llenaListaProducto (){
    this.productoService.finAll().subscribe(list => {
      this.listaproducto = list.result /* [0a].categoria */
    })
  }
   
  /* probando  */
  /*llenaListaCategoria(){
    this.productoService.finAll().subscribe(list => {
      this.listacategoria = list.result
      this.listacategoria = this.listaproducto
    })
  }*/

}
