import {BasicEntity} from './basic-entity';
import {Producto} from './producto';
import {Requerimiento} from './requerimiento';

export class DetalleRequerimiento extends BasicEntity {

    id: number
    productoId: number
    producto: Producto
    requerimientoId: number
    requerimiento: Requerimiento
    cantidadSolicitada: number
    precioUnitarioEstimado: number
    precioTotalEstimado: number
}
