import { BasicEntity } from "./basic-entity";

export class Adjunto extends BasicEntity {

    id : number
    path : string
    folderId : number
    documentId: number
    nombre : string
    descripcion : string
    contentType : string
}
