import { ReadonlyURLSearchParams } from "next/navigation";
import { Categoria } from "../types";

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

    const filters = {
        search: searchParams.get("searchProduct") || "",
        categories: searchParams.getAll("categoria"),
        sizes: searchParams.getAll("talle"),
        discount: searchParams.get("descuento") || false,
        price: searchParams.get("precioMax") || 200000
    }

    const queryString = new URLSearchParams({
        search: filters.search,
        discount: filters.discount.toString(),
        price: filters.price.toString()
    })

    filters.categories.forEach(c => queryString.append("category", c))
    filters.sizes.forEach(s => queryString.append("size", s))

    return queryString
}






