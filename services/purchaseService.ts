import { prisma } from "@/src/lib/prisma"

export async function getPurchase(purchaseId: number) {
    return prisma.ventas.findFirst({
        where: {
            id_venta: purchaseId
        },
        select: {
            n_comprobante: true,
            fecha: true,
            metodo_entrega: true,
            metodo_pago: true,
            cantidad: true,
            precio_total: true,
            talle: true,
            publicacion: {
                select: {
                    producto: {
                        select: {
                            nombre: true
                        }
                    }
                }
            }
        }
    })
}