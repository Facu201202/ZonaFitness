import { Publicaciones, Productos, Stock, Sizes } from '../../src/generated/prisma'
import { categoriesTranslate } from '../utils'

export type Product = Pick<Publicaciones, "id_publicacion" | "caracteristicas" | "descuento" | "precio"> & {
    producto: Pick<Productos, "nombre" | "foto" | "genero" | "color" | "id_producto"> & {
        categoria: {
            nombre: Categoria | string
        }
        stocks: Array<Pick<Stock, "cantidad"> & {
            talle: Pick<Sizes, "talle">
        }>
    }
}

export type FiltersData = {
    search: string;
    categories: string[];
    sizes: string[];
    discount: string | boolean;
    price: number;
}



export type Categoria = keyof typeof categoriesTranslate;