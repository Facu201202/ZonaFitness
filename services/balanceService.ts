import { prisma } from "@/src/lib/prisma";

export async function createBalance(userId: number, initialBalance: number) {
    return await prisma.saldos.create({
        data: {
            id_usuario: userId,
            saldo: initialBalance
        }
    })
}