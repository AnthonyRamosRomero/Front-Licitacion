import { BasicEntity } from "./basic-entity";

export class Proveedor extends BasicEntity {

    id : number
    razonSocial : string
    numeroRuc : string
    mails : string
    tel : string
    direccion : string
    contacto : string
}
