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
    skipPage: number
}

export type ProfileUserData = {
    id_usuario: number,
    id_cliente: number
    usuario: string,
    cliente: {
        correo: string,
        nombre: string,
        apellido: string,
        dni: number,
        ciudad: string,
        barrio: string,
        calle: string
    }
}

export type ProfileUserDataForm = {
    usuario: string,
    correo: string,
    nombre: string,
    apellido: string,
    dni: number,
    ciudad: string,
    barrio: string,
    calle: string

}


export type Categoria = keyof typeof categoriesTranslate;

export type ChangePasswordForm = {
    contraseñaActual: string,
    contraseñaNueva: string,
    confirmarContraseña: string
}

export type ChangePasswordData = ChangePasswordForm & {
    id_usuario: number
}