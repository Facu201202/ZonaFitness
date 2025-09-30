import { Publicaciones, Productos, Stock, Sizes, Ventas, MetodoPago, MetodoEnvio, Favoritos, Clientes, Opiniones, Categorias } from '../../src/generated/prisma'
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
    ventas?: {
        opinion: {
            calificacion: number;
        }[];
    }[];
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


export type UserPurchase = Pick<Ventas, "n_comprobante" | "estado" | "fecha" | "precio_total" | "id_venta"> & {
    publicacion: {
        producto: {
            nombre: string;
            foto: string;
            categoria: {
                nombre: string
            }
        };
    },
    opinion: {
        id_opinion: number;
    }[];
}


export type ClientData = Omit<Clientes, "id_cliente">

export type OpinionData = {
    rating: number;
    comment: string;
    userId: number;
    purchaseId: number;
}

export type UserComment = Omit<Opiniones, "id_opinion" | "id_usuario" | "id_venta"> & {
    usuario: {
        cliente: {
            nombre: string;
        };
    };
}

export type UserCommentList = Omit<Opiniones, "id_usuario" | "id_venta"> & {
    usuario: {
        cliente: {
            nombre: string;
        };
    };
}

export type RelatedCommentsProduct = Omit<Opiniones, "id_usuario" | "id_venta"> & {
    usuario: {
        usuario: string;
    }
}

export type CartItem = {
    id_publicacion: number;
    cantidad: number;
    talle: string;
}

export type CartFullItem = {
    precio: number;
    id_publicacion: number;
    descuento: number;
    producto: {
        nombre: string;
        foto: string;
        stocks: {
            talle: {
                talle: string;
            };
            cantidad: number;
        }[];
        categoria: {
            nombre: string
        }
    }
    cantidadUsuario: number
    ;
}

export type ProductAdmin = {
    id_producto: number;
    nombre: string;
    precio: number;
    foto: string;
    categoria: {
        nombre: string;
    };
    stocks: {
        cantidad: number;
        id_talle: number;
        talle: {
            talle: string;
        };
    }[];
    publicaciones: {
        id_producto: number;
        precio: number;
        id_publicacion: number;
        activa: boolean;
        caracteristicas: string;
        descuento: number;
        fecha: Date;
    }[];
}

export type Category = Categorias

export type Size = Sizes


export type CreateProductFormData = {
    name: string,
    price: string,
    categoryId: string,
    gender: string,
    color: string,
    image: string,
    validateError: string,
    stock: Record<string, number>
};

export type EditProductFormData =  {
    color: string;
    validateError: string,
    categoria: {
        nombre: string;
    };
    stocks: {
        cantidad: number;
        id_talle: number;
        talle: {
            talle: string;
        };
    }[];
    nombre: string;
    id_producto: number;
    precio: number;
    foto: string;
    genero: string;
}


export type ProductDataEdit = Omit<EditProductFormData, "validateError">