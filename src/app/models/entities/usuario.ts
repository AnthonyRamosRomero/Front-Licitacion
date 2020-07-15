import {Analista} from './analista';
import {BasicEntity} from './basic-entity';

export class Usuario extends BasicEntity {

    id: number
    UserName: string
    Password: string
    AnalistaId: number
    Analista: Analista

}
