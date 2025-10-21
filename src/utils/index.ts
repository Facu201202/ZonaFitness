import { ReadonlyURLSearchParams } from "next/navigation";
import { Categoria, FiltersData } from "../types";
import { EstadoEnvio, MetodoEnvio, MetodoPago } from "../generated/prisma";

export function formatCurrency(amount: number) {
    return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS"
    }).format(amount)
}

export function formatFeatures(str: string) {
    const lines = str.trim().split('\n').filter(line => line.trim() !== '');

    const obj: { [key: string]: string } = {};

    lines.forEach(line => {
        const [key, ...rest] = line.split(':');
        const value = rest.join(':').trim();
        obj[key.trim()] = value;
    });

    return obj
}

export function featuresToString(features: { key: string, value: string }[]) {
    const text = features
        .map((f) => `${f.key}:${f.value}`)
        .join("\n");
    return text
}

export const categoriesTranslate = {
    Remeras: "t-shirts",
    Pantalones: "pants",
    Gorras: "caps",
    Zapatillas: "sneakers"
}

export function translateCategory(categoria: Categoria) {
    return categoriesTranslate[categoria]
}

export const createQueryFilter = (searchParams: ReadonlyURLSearchParams) => {
    const skip = Number(searchParams.get("page")) || 1
    const searchText = searchParams.get("searchProduct")
    const filters = {
        search: searchText ? searchText.replace(/%20/g, " ") : "",
        categories: searchParams.getAll("categoria"),
        sizes: searchParams.getAll("talle"),
        discount: searchParams.get("descuento") || false,
        price: searchParams.get("precioMax") || 200000,
        skipPage: (skip - 1) * 9
    }

    const queryString = new URLSearchParams({
        search: filters.search,
        discount: filters.discount.toString(),
        price: filters.price.toString(),
        skipPage: filters.skipPage.toString()
    })

    filters.categories.forEach(c => queryString.append("category", c))
    filters.sizes.forEach(s => queryString.append("size", s))

    return queryString
}


export const createWhereFilter = (filters: FiltersData) => {
    const where: Record<string, unknown> = {
        producto: {
            ...(filters.categories.length > 0 && {
                categoria: { nombre: { in: filters.categories } }
            }),
            ...(filters.search && {
                nombre: {
                    contains: filters.search,
                    mode: 'insensitive'
                }
            }),
            ...(filters.sizes.length > 0 && {
                stocks: {
                    some: {
                        talle: { talle: { in: filters.sizes } },
                        cantidad: { gt: 0 }
                    }
                }
            })
        },
        precio: { lte: filters.price },
        activa: true
    }
    return where
}


export const sizes = {
    Remeras_pantalones: ["XS", "S", "M", "L", "XL", "XXL"],
    Remeras: ["XS", "S", "M", "L", "XL", "XXL"],
    Pantalones: ["XS", "S", "M", "L", "XL", "XXL"],
    Gorras: ["Único"],
    Zapatillas: ["36", "36.5", "37", "37.5", "38", "38.5", "39", "39.5", "40", "40.5", "41", "41.5", "42", "42.5", "43"]
}

export const deliveryMethods = Object.values(MetodoEnvio)
export const paymentMethods = Object.values(MetodoPago)

export const taxes = 1100
export const homeDeliveryPrice = 3000

export const purchaseStateBgColor: Record<EstadoEnvio, [string, string]> = {
  [EstadoEnvio.PENDIENTE]: ["bg-yellow-100", "text-yellow-700"],   
  [EstadoEnvio.APROBADO]: ["bg-green-100", "text-green-700"],      
  [EstadoEnvio.EN_CAMINO]: ["bg-blue-100", "text-blue-700"],  
  [EstadoEnvio.ENTREGADO]: ["bg-indigo-100", "text-indigo-700"],   
  [EstadoEnvio.CANCELADO]: ["bg-red-100", "text-red-700"],    
}


export const queryFilterAdminProducts = (searchParams: ReadonlyURLSearchParams) => {
    const skipPage = ((Number(searchParams.get("page")) || 1) - 1) * 10
    const searchText = searchParams.get("searchProduct")
    const category =  searchParams.get("category")
    const filters = {
        search: searchText ? searchText.replace(/%20/g, " ") : "",
        skipPage: skipPage,
        category: category ? category : "",
        lowStock: searchParams.get("lowStock") || "",
        relatedProduct: searchParams.get("related") || ""
    }

    const queryString = new URLSearchParams({
        search: filters.search,
        skipPage: filters.skipPage.toString(),
        category: filters.category,
        lowStock: filters.lowStock,
        relatedProduct: filters.relatedProduct
    })
    
    return queryString
}

export const queryFilterAdminPublications = (searchParams: ReadonlyURLSearchParams) => {
    const skipPage = ((Number(searchParams.get("page")) || 1) - 1) * 10
    const searchText = searchParams.get("searchProduct")
    const filter =  searchParams.get("filter")
    const filters = {
        search: searchText ? searchText.replace(/%20/g, " ") : "",
        skipPage: skipPage,
        filter: filter ? filter : "",
        lowStock: searchParams.get("lowStock") || "",
        relatedProduct: searchParams.get("related") || ""
    }

    const queryString = new URLSearchParams({
        search: filters.search,
        skipPage: filters.skipPage.toString(),
        filter: filters.filter,
        lowStock: filters.lowStock,
        relatedProduct: filters.relatedProduct
    })
    
    return queryString
}

export const whereFilterAdminProducts = (filters: {search: string, skip: number}) => {
    const where: Record<string, unknown> = {
        producto: {
            ...(filters.search && {
                nombre: {
                    contains: filters.search,
                    mode: 'insensitive'
                }
            })
        }
    }
    return where
}

export const findUrlPath = (imagePath: string, category?: string) => {
    const cloudinaryBaseUrl = "https://res.cloudinary.com"
    if(imagePath.startsWith(cloudinaryBaseUrl)){
        return imagePath
    } else {
        return `/products/${translateCategory(category  as Categoria)}/` + imagePath
    }
}