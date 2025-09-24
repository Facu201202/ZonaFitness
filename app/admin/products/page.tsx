"use client"
import Table from "@/components/admin/products/Table"
import Spinner from "@/components/Spinner"
import { PlusIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline"
import { useQuery } from "@tanstack/react-query"

export default function Page() {

  const fetchProducts = async () => {
    const res = await fetch("/admin/products/api/getProducts")
    if (!res.ok) throw new Error("Error al mostrar los productos")
    return res.json()
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ["productos_admin"],
    queryFn: () => fetchProducts()
  })

  console.log(data)

  return (
    <div className="w-full">
      <div className="p-6 flex justify-between border-b border-gray-300">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Gestión de Productos</h2>
          <p className="text-gray-800">Administra tu inventario de productos</p>
        </div>
        <button className="px-3 h-fit py-2 rounded bg-gray-700 text-white font-semibold flex gap-3 items-center">
          <PlusIcon className="w-4 h-4" />
          Agregar Producto
        </button>
      </div>

      {isLoading && <Spinner />}
      {isError && <p className="text-center font-semibold text-gray-800 p-3">Error al traer los productos</p>}

      {data && (
        <div className="p-6 flex flex-col gap-4">
          <div className="p-3 border border-gray-300 rounded flex gap-2 text-gray-800 text-sm items-center shadow">
            <ExclamationCircleIcon className="w-6 h-6" />
            <p><span className="font-semibold">Stock bajo:</span> Se considera stock bajo cuando hay 3 o menos unidades por talle</p>
          </div>
          <div className="p-3 border border-gray-300 rounded flex gap-2 text-gray-800 items-center shadow">
            <Table />
          </div>
        </div>
      )}


    </div>
  )
}
