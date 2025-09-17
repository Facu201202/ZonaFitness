import { getProductForCart } from "@/services/productService"
import { CartFullItem, CartItem } from "@/src/types"
import { NextRequest, NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET(req: NextRequest, context: { params: Promise<{ cartList: string }> }) {
    const { cartList } = await context.params;
    const parsedCart = JSON.parse(cartList) as CartItem[]

    const productCart: CartFullItem[] = []

    for(const itemCart of parsedCart){
        const product: CartFullItem | null = await getProductForCart(itemCart.id_publicacion, itemCart.talle)
        if(product){
            productCart.push(product)
        }
    }
    
    return NextResponse.json(productCart)
}


   