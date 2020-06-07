import { BasicEntity } from "./basic-entity";
import { ConfigProceso } from "./config-proceso";

export class Proceso extends BasicEntity {

    id : number
    idConfigProceso : number
    configProceso : ConfigProceso
    tipoProceso : string
}
