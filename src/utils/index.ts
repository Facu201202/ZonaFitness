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