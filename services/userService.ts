import { RegisterClient, RegisterUser } from "@/src/schema";
import {prisma} from "@/src/lib/prisma"
import bcrypt from "bcrypt"

export async function createAccount(userData: RegisterUser, client: RegisterClient) {
    const hashedPassword = await bcrypt.hash(userData.password, 10)
    const user = {...userData, password: hashedPassword}
    const {id_cliente} = await prisma.clientes.create({
    
    })
}