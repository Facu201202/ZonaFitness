"use client"
import { AdjustmentsVerticalIcon, CubeIcon, ShoppingBagIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { usePathname } from "next/navigation";


export default function AdminNavbar() {
    const pathname = usePathname();
    return (
        <div className='h-screen bg-[#1F2937] w-fit p-6 pr-12'>
            <div className="flex gap-1 mb-9">
                <AdjustmentsVerticalIcon className="h-10 w-10 text-indigo-700" />
                <h2 className='text-white text-2xl font-bold'>Panel administrativo</h2>
            </div>
            <div className="px-2 flex flex-col gap-2">
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
        </div>
    )

    /** */
}
