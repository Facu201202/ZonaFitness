import { Publicaciones, Productos, Stock, Sizes, Ventas, MetodoPago, MetodoEnvio, Favoritos, Clientes } from '../../src/generated/prisma'
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
    favoritos?: Array<Favoritos>
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
    },
    saldo: { saldo: number }[]
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

export type PurchaseData = Pick<Ventas, "cantidad" | "precio_total" | "talle" | "id_publicacion" | "id_usuario"> & {
    entrega: string,
    pago: string
}

export type SaleData = Pick<Ventas, "cantidad" | "precio_total" | "talle" | "id_publicacion" | "id_usuario" | "metodo_entrega" | "metodo_pago">

export type PaymentMethods = keyof typeof MetodoPago
export type DeliveryMethods = keyof typeof MetodoEnvio

export type SuccessPurchaseData = Pick<Ventas, "metodo_entrega" | "n_comprobante" | "precio_total" | "id_venta"> & {
    publicacion: {
        producto: Pick<Productos, "nombre">
    }
}

export type PurchaseInfo = Pick<Ventas, "cantidad" | "precio_total" | "fecha" | "talle" | "metodo_entrega" | "metodo_pago" | "n_comprobante"> & {
    publicacion: {
        producto: Pick<Productos, "nombre">
    },
    taxes: number,
    deliveryPrice: number
}


export type UserPurchase = Pick<Ventas, "n_comprobante" | "estado" | "fecha" | "precio_total"> & {
    publicacion: {
        producto: {
            nombre: string;
            foto: string;
            categoria: {
                nombre: string
            }
        };
    };
}


export type ClientData = Omit<Clientes, "id_cliente">