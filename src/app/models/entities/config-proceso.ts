import { BasicEntity } from "./basic-entity";
import { Analista } from "./analista";
import { Estado } from "./estado";

export class ConfigProceso extends BasicEntity {

    id : number
    idAnalista : number
    Analista : Analista
    idEstado : number
    Estado : Estado
    fechaTratamiento : string
    fechaAdjudicacion : string
    

}
