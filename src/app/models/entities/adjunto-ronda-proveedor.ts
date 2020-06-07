import { BasicEntity } from "./basic-entity";
import { Adjunto } from "./adjunto";
import { RondaProveedor } from "./ronda-proveedor";

export class AdjuntoRondaProveedor extends BasicEntity {
    
    id : number
    adjuntoId : number
    adjunto : Adjunto
    idRondaProveedor : number
    rondaProveedor : RondaProveedor
}
