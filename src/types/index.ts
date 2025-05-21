import { Publicaciones, Productos, Stock, Categorias, Sizes } from '../../src/generated/prisma'

export type CarruselProduct = Pick<Publicaciones, "id_publicacion" | "caracteristicas" | "descuento" | "precio"> & {
    producto: Pick<Productos, "nombre" | "foto" | "genero" | "color" | "id_producto"> & {
        categoria: Pick<Categorias, "nombre">,
        stocks: Array<Pick<Stock, "cantidad"> & {
            talle: Pick<Sizes, "talle">
        }>
    }
}