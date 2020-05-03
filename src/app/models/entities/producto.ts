import {Categoria} from './categoria';

export class Producto {
    id: number
    nombre: string
    unidadMedida: string
    descripcion: string
    idCategoria: number
    categoria: Categoria
}
