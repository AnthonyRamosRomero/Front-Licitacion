import {BasicEntity} from './basic-entity';
import {Analista} from './analista';
import {Estado} from './estado';

export class ConfigProceso extends BasicEntity {

    id: number
    AnalistaId: number
    Analista: Analista
    EstadoId: number
    Estado: Estado
    fechaTratamiento: string
    fechaAdjudicacion: string


}
