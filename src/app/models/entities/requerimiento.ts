import {TipoRequerimiento} from './tipo-requerimiento';
import {AreaSolicitante} from './area-solicitante';

export class Requerimiento {

    id: number
    idTipoRequerimiento: number
    tipoRequerimiento: TipoRequerimiento
    idAreaSolicitante: number
    areaSolicitante: AreaSolicitante
    usuarioSolicitante: string
    fechaSolicitud: Date
    fechaEstimada: Date
}
