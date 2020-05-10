import { BasicEntity } from "./basic-entity";
import { Proceso } from "./proceso";

export class Ronda extends BasicEntity {

    id: number
    idProceso : number
    Proceso : Proceso
    numeroRonda : string
}
