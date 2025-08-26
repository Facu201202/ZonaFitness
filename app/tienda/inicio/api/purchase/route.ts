import { decrementProductStock, findProductStock, getProduct } from "@/services/productService"
import { decrementBalance, getUserBalance, getUserData } from "@/services/userService"
import { PurchaseData } from "@/src/types"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const body: PurchaseData = await req.json()
    console.log(body)
    try {
    const [user, publication] = await Promise.all([getUserData(body.id_usuario), getProduct(body.id_publicacion)])

    if(!user || !publication){
        return NextResponse.json({error: "Elemento no encontrado"}, {status: 404})
    }

    const total = (publication.precio*body.cantidad) + 1100 + (body.entrega === "home" ? 3000 : 0)

    if(total !== body.precio_total){
        return NextResponse.json({error: "Error al validar los montos"}, {status: 400})
    }

    const stockProduct = await findProductStock(publication.id_producto, body.talle)

    if(!stockProduct || stockProduct.cantidad < body.cantidad){
        return NextResponse.json({error: "Error al validar el stock"}, {status: 400})
    }

    const userBalance = await getUserBalance(body.id_usuario)

    if(!userBalance || userBalance.saldo < total){
        return NextResponse.json({error: "El saldo es insuficiente"}, {status: 400})
    }

    await decrementBalance(total, body.id_usuario, userBalance.id_saldo)
    await decrementProductStock(stockProduct.id_stock, body.cantidad)

    return NextResponse.json({message: "compra realizada"}, {status: 200})

    } catch (error) {
        console.log(error)
        return NextResponse.json({error: "Error de servidor"}, {status: 500})
    }
}