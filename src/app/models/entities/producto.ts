import {Categoria} from './categoria';
import {BasicEntity} from './basic-entity';

export class Producto extends BasicEntity {
    id: number
    nombre: string
    unidadMedida: string
    descripcion: string
    idCategoria: number
    categoria: Categoria
}
