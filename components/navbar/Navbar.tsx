"use client"
import Link from "next/link"
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
    return (
        <div className="py-4 px-3 flex justify-between">
            <div className="flex justify-between w-md text-[#434346] items-end">
                <h2 className="text-2xl text-[#275DA2]">ZonaFitness</h2>
                <Link
                    href={""}
                    className="hover:text-[#275DA2]"
                >Inicio</Link>
                <Link
                    href={""}
                    className="hover:text-[#275DA2]"
                >Productos</Link>
                <Link
                    href={""}
                    className="hover:text-[#275DA2]"
                >Categorías</Link>
                <Link
                    href={""}
                    className="hover:text-[#275DA2]"
                >Ofertas</Link>
            </div>
            <div className="flex justify-between w-xs text-[#434346] items-center">
                <div className="relative">
                    <MagnifyingGlassIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                        className="border border-gray-400 rounded-full px-3 py-1 focus:border-[#275DA2]"
                        placeholder="Buscar Productos..."
                        type="text"
                    />
                </div>
                <Link
                    href={""}
                    className="hover:text-[#275DA2]"

                >Iniciar Sesion</Link>
            </div>
        </div>
    )
}
