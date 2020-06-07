import { BasicEntity } from "./basic-entity";
import { Ronda } from "./ronda";
import { Proveedor } from "./proveedor";

export class RondaProveedor extends BasicEntity {

    id : number
    idRonda : number
    ronda : Ronda
    idProveedor : number
    proveedor : Proveedor
}
