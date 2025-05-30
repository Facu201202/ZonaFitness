import {publicationsTshirts  } from "./data/publications";
import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient()

async function main() {
    try {
        await prisma.publicaciones.createMany({
            data: publicationsTshirts
        })
    } catch (error) {
        console.log(error)
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })