import {Requerimiento} from '../entities/requerimiento';
import {DetalleRequerimiento} from '../entities/detalle-requerimiento';

export class MonitorRequerimientoDTO {
    requerimiento: Requerimiento
    detalleRequerimiento: DetalleRequerimiento[]
}
