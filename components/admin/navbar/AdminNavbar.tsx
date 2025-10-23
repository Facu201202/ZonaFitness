"use client"
import { AdjustmentsVerticalIcon, CubeIcon, ShoppingBagIcon, CurrencyDollarIcon, ArrowLeftIcon, ArrowRightIcon, ShoppingCartIcon, ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useState } from "react";
import LogoutAdminButton from "./LogoutAdminButton";


export default function AdminNavbar() {
    const [isOpen, setIsOpen] = useState(true)
    const pathname = usePathname();
    return (
        <nav className={`broder border-red-600 ${isOpen? "mr-80" : "mr-24"}`}>
            <div className='min-h-full bg-[#1F2937] min-w-fit p-6 fixed'>
                {isOpen ?
                    <div className="flex flex-col h-screen">
                        <ArrowLeftIcon className="text-white w-8 h-8 mb-3 hover:cursor-pointer" onClick={() => setIsOpen(false)} />
                        <div className="flex items-center justify-between gap-1 mb-9">
                            <AdjustmentsVerticalIcon className="h-10 w-10 text-indigo-700" />
                            <h2 className='text-white text-2xl font-bold'>Panel administrativo</h2>
                        </div>
                        <div className="px-2 flex flex-col gap-2 flex-1">
                            <Link
                                href={"/admin/products"}
                                className={`flex gap-2 items-center text-white w-full rounded-lg p-2 hover:cursor-pointer font-semibold ${pathname === "/admin/products" && "bg-gray-700"}`}><CubeIcon className="h-8 w-8"
                                /> Productos
                            </Link>
                            <Link
                                href={"/admin/publications"}
                                className={`flex gap-2 items-center text-white w-full rounded-lg p-2 hover:cursor-pointer font-semibold ${pathname === "/admin/publications" && "bg-gray-700"}`}><ShoppingBagIcon className="h-8 w-8"
                                /> Publicaciones
                            </Link>
                            <Link
                                href={"/admin/sales"}
                                className={`flex gap-2 items-center text-white w-full rounded-lg p-2 hover:cursor-pointer font-semibold ${pathname === "/admin/sales" && "bg-gray-700"}`}><CurrencyDollarIcon className="h-8 w-8"
                                /> Ventas
                            </Link>
                        </div>
                        <div className="pb-16 flex flex-col gap-3 text-center ">
                            <Link
                                href={"/tienda/inicio"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" rounded-full px-5 py-2 bg-white hover:bg-gray-100 text-black font-semibold flex justify-center gap-2 items-center"
                            ><ShoppingCartIcon className="h-5 w-5" /> Ir a la tienda</Link>
                            <LogoutAdminButton isOpen={isOpen}/>
                        </div>
                    </div>
                    :
                    <div className="flex flex-col h-screen">
                        <ArrowRightIcon className="text-white w-8 h-8 mb-3 hover:cursor-pointer mx-auto" onClick={() => setIsOpen(true)} />
                        <div className="flex flex-col gap-2 flex-1">
                            <Link
                                href={"/admin/products"}
                                className={`flex gap-2 items-center text-white w-full rounded-lg p-2 hover:cursor-pointer font-semibold ${pathname === "/admin/products" && "bg-gray-700"}`}><CubeIcon className="h-8 w-8"
                                />
                            </Link>
                            <Link
                                href={"/admin/publications"}
                                className={`flex gap-2 items-center text-white w-full rounded-lg p-2 hover:cursor-pointer font-semibold ${pathname === "/admin/publications" && "bg-gray-700"}`}><ShoppingBagIcon className="h-8 w-8"
                                />
                            </Link>
                            <Link
                                href={"/admin/sales"}
                                className={`flex gap-2 items-center text-white w-full rounded-lg p-2 hover:cursor-pointer font-semibold ${pathname === "/admin/sales" && "bg-gray-700"}`}><CurrencyDollarIcon className="h-8 w-8"
                                />
                            </Link>
                        </div>
                        <div className="pb-16 flex flex-col gap-3 text-center ">
                            <Link
                                href={"/tienda/inicio"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex justify-center p-2 hover:cursor-pointer rounded-full bg-white hover:bg-gray-100 text-black"
                            ><ShoppingCartIcon className="h-5 w-5" /></Link>
                            <LogoutAdminButton isOpen={isOpen}/>
                        </div>
                    </div>

                }

            </div>
        </nav>
    )
}
