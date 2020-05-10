import {TipoRequerimiento} from './tipo-requerimiento';
import {AreaSolicitante} from './area-solicitante';
import {BasicEntity} from './basic-entity';

export class Requerimiento extends BasicEntity {

    
    id: number
    tipoRequerimientoId: number
    tipoRequerimiento: TipoRequerimiento
    areaSolicitanteId: number
    areaSolicitante: AreaSolicitante
    usuarioSolicitante: string
    fechaSolicitud: Date
    fechaEstimadaEntrante: string
}
