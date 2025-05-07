"use client"
import Link from "next/link"

export default function Footer() {
    return (
        <div className="bg-[#111827] text-white">
            <div className="flex justify-between p-8">
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-2xl">ZonaFitness</h4>
                    <p className="text-gray-400">La tienda de confianza con los mejores equipamientos para todos los deportes.</p>
                </div>
                <div className="">
                    <p className="mb-3">Enlances rápidos</p>
                    <ul className="text-gray-400">
                        <li><Link href={""}>Inicio</Link></li>
                        <li><Link href={""}>Productos</Link></li>
                        <li><Link href={""}>Categorías</Link></li>
                        <li><Link href={""}>Ofertas</Link></li>
                    </ul>
                </div>
                <div>
                    <p className="mb-3">Categorías</p>
                    <ul className="text-gray-400">
                        <li><Link href={""}>Remeras</Link></li>
                        <li><Link href={""}>Pantalones</Link></li>
                        <li><Link href={""}>Zapatillas</Link></li>
                        <li><Link href={""}>Gorras</Link></li>
                        <li><Link href={""}>Conjuntos</Link></li>
                    </ul>
                </div>
                <div>
                    <p className="mb-3">Contactos</p>
                    <ul className="text-gray-400">
                        <li>Av. Deportiva 123, Ciudad Deportiva</li>
                        <li>+34 123 456 789</li>
                        <li>info@ZonaFitness.com</li>
                    </ul>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}
