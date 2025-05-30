"use client"
import Link from "next/link"
import { useState } from "react"
import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="py-4 px-3 flex justify-between items-center relative">
            <div className="flex w-md items-end gap-4">
                <h2 className="text-2xl text-[#275DA2]">ZonaFitness</h2>
                <div className="hidden lg:flex gap-6 text-[#434346]">
                    <Link href={""} className="hover:text-[#275DA2]">Inicio</Link>
                    <Link href={""} className="hover:text-[#275DA2]">Productos</Link>
                    <Link href={""} className="hover:text-[#275DA2]">Categorías</Link>
                    <Link href={""} className="hover:text-[#275DA2]">Ofertas</Link>
                </div>
            </div>
            <div className="hidden lg:flex justify-between w-xs text-[#434346] items-center gap-4">
                <div className="relative">
                    <MagnifyingGlassIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                        className="border border-gray-400 rounded-full px-3 py-1 focus:border-[#275DA2]"
                        placeholder="Buscar Productos..."
                        type="text"
                    />
                </div>
                <Link href={""} className="hover:text-[#275DA2]">Iniciar Sesion</Link>
            </div>

            {/* Botón hamburguesa (Mobile) */}
            <div className="lg:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? (
                        <XMarkIcon className="w-6 h-6 text-[#275DA2]" />
                    ) : (
                        <Bars3Icon className="w-6 h-6 text-[#275DA2]" />
                    )}
                </button>
            </div>

            {/* Menú desplegable (Mobile) */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start p-4 gap-4 z-50 text-[#434346] lg:hidden">
                    <Link href={""} className="hover:text-[#275DA2]" onClick={() => setMenuOpen(false)}>Inicio</Link>
                    <Link href={""} className="hover:text-[#275DA2]" onClick={() => setMenuOpen(false)}>Productos</Link>
                    <Link href={""} className="hover:text-[#275DA2]" onClick={() => setMenuOpen(false)}>Categorías</Link>
                    <Link href={""} className="hover:text-[#275DA2]" onClick={() => setMenuOpen(false)}>Ofertas</Link>
                    <div className="w-full relative">
                        <MagnifyingGlassIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                            className="border border-gray-400 rounded-full px-3 py-1 w-full focus:border-[#275DA2]"
                            placeholder="Buscar Productos..."
                            type="text"
                        />
                    </div>
                    <Link href={""} className="hover:text-[#275DA2]" onClick={() => setMenuOpen(false)}>Iniciar Sesion</Link>
                </div>
            )}
        </div>
    )
}
