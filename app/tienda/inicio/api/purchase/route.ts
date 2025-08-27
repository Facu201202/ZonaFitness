import { createSale, decrementProductStock, findProductStock, getProduct } from "@/services/productService"
import { decrementBalance, getUserBalance, getUserData } from "@/services/userService"
import { MetodoEnvio, MetodoPago } from "@/src/generated/prisma"
import { prisma } from "@/src/lib/prisma"
import { PurchaseData, SaleData } from "@/src/types"
import { NextRequest, NextResponse } from "next/server"

const taxes = 1100
const homeDeliveryPrice = 3000

export async function POST(req: NextRequest) {
    const body: PurchaseData = await req.json()
    console.log("Backend", body)
    const deliveryMethod = MetodoEnvio[body.entrega as MetodoEnvio]
    const paymentMethod = MetodoPago[body.pago as MetodoPago]
    try {
        const [user, publication] = await Promise.all([getUserData(body.id_usuario), getProduct(body.id_publicacion)])


        if (!user || !publication) {
            return NextResponse.json({ error: "Elemento no encontrado" }, { status: 404 })
        }

        const total = (publication.precio * body.cantidad) + taxes + (deliveryMethod === "DOMICILIO" ? homeDeliveryPrice : 0)

        if (total !== body.precio_total) {
            return NextResponse.json({ error: "Montos no válidos" }, { status: 400 })
        }

        const stockProduct = await findProductStock(publication.id_producto, body.talle)

        if (!stockProduct || stockProduct.cantidad < body.cantidad) {
            return NextResponse.json({ error: "El stock es insuficiente" }, { status: 409 })
        }

        const userBalance = await getUserBalance(body.id_usuario)

        if (!userBalance || userBalance.saldo < total) {
            return NextResponse.json({ error: "El saldo es insuficiente" }, { status: 409 })
        }

        const saleData: SaleData = {
            cantidad: body.cantidad,
            precio_total: total,
            talle: body.talle,
            id_publicacion: body.id_publicacion,
            id_usuario: body.id_usuario,
            metodo_entrega: deliveryMethod,
            metodo_pago: paymentMethod
        }

        const data = await prisma.$transaction(async (tx) => {
            await decrementBalance(total, body.id_usuario, userBalance.id_saldo, tx)
            await decrementProductStock(stockProduct.id_stock, body.cantidad, tx)
            return await createSale(saleData, tx)
        })

        return NextResponse.json({
            message: "Compra realizada con éxito",
            venta: data
        }, { status: 201 })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Error de servidor" }, { status: 500 })
    }
}