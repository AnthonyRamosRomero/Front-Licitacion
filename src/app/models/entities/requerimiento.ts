import {TipoRequerimiento} from './tipo-requerimiento';
import {AreaSolicitante} from './area-solicitante';
import {BasicEntity} from './basic-entity';

export class Requerimiento extends BasicEntity {

    id: number
    idTipoRequerimiento: number
    tipoRequerimiento: TipoRequerimiento
    idAreaSolicitante: number
    areaSolicitante: AreaSolicitante
    usuarioSolicitante: string
    fechaSolicitud: Date
    fechaEstimada: Date
}
