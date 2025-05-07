"use client"
import Link from "next/link"
import {FaFacebook, FaTwitter, FaWhatsapp} from "react-icons/fa"

export default function Footer() {
    return (
        <div className="bg-[#111827] text-white mt-auto">
            <div className="flex justify-between p-8">
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-2xl">ZonaFitness</h4>
                    <p className="text-gray-400 w-xs">La tienda de confianza con los mejores equipamientos para todos los deportes.</p>
                    <div className="flex gap-4 ">
                        <FaFacebook className="hover:text-white hover:cursor-pointer text-gray-400" />
                        <FaTwitter className="hover:text-white hover:cursor-pointer text-gray-400"/>
                        <FaWhatsapp className="hover:text-white hover:cursor-pointer text-gray-400"/>
                    </div>
                </div>
                <div className="">
                    <p className="mb-3">Enlances rápidos</p>
                    <ul className="text-gray-400">
                        <li><Link href={""} className="hover:text-white">Inicio</Link></li>
                        <li><Link href={""} className="hover:text-white">Productos</Link></li>
                        <li><Link href={""} className="hover:text-white">Categorías</Link></li>
                        <li><Link href={""} className="hover:text-white">Ofertas</Link></li>
                    </ul>
                </div>
                <div>
                    <p className="mb-3">Categorías</p>
                    <ul className="text-gray-400">
                        <li><Link href={""} className="hover:text-white">Remeras</Link></li>
                        <li><Link href={""} className="hover:text-white">Pantalones</Link></li>
                        <li><Link href={""} className="hover:text-white">Zapatillas</Link></li>
                        <li><Link href={""} className="hover:text-white">Gorras</Link></li>
                        <li><Link href={""} className="hover:text-white">Conjuntos</Link></li>
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
            <div className="bg-[#111827] text-center px-4 py-6 border-t border-white">
                <p className="text-gray-400">© 2025 ZonaFitness. Todos los derechos reservados.</p>
            </div>
        </div>
    )
}
