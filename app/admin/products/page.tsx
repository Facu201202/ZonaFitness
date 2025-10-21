"use client"
import AdminSpinner from "@/components/admin/AdminSpinner"
import ChangeStateProductModal from "@/components/admin/products/ChangeStateProductModal"
import FilterOptions from "@/components/admin/products/FilterOptions"
import Table from "@/components/admin/products/Table"
import Pagination from "@/components/Pagination"
import ProductModal from "@/components/product/ProductModal"
import { ProductAdmin } from "@/src/types"
import { queryFilterAdminProducts } from "@/src/utils"
import { PlusIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function Page() {
  const searchParams = useSearchParams()
  const productId = +searchParams.get('producto')!
   const state = searchParams.get('state')
  const params = new URLSearchParams(searchParams.toString())
  const urlQueryFilter = queryFilterAdminProducts(searchParams)


  const fetchProducts = async (): Promise<{ products: ProductAdmin[], countProducts: number }> => {
    const res = await fetch(`/admin/products/api/getProducts?${urlQueryFilter.toString()}`)
    if (!res.ok) throw new Error("Error al mostrar los productos")
    return res.json()
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ["productos_admin", urlQueryFilter.toString()],
    queryFn: () => fetchProducts()
  })

  const totalPages = data && data.countProducts > 0
    ? Math.ceil(data.countProducts / 10)
    : null

  const page = Number(searchParams.get("page")) || 1
  return (
    <div className="w-full">
      <div className="p-6 flex justify-between border-b border-gray-300">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Gestión de Productos</h2>
          <p className="text-gray-800">Administra tu inventario de productos</p>
        </div>
        <Link href={"/admin/products/newProduct"} className="px-3 h-fit py-2 rounded bg-gray-700 text-white font-semibold flex gap-3 items-center">
          <PlusIcon className="w-4 h-4" />
          Agregar Producto
        </Link>
      </div>
      {isLoading && <AdminSpinner />}
      {isError && <p className="text-center font-semibold text-gray-800 p-3">Error al traer los productos</p>}
      {(data && data?.products.length === 0) && <p className="text-center font-semibold text-gray-800 py-20">No se encontraron productos con los filtros aplicados</p>}
      {(data && totalPages && data.products.length > 0) &&
        <div className="p-6 flex flex-col gap-4">
          <div className="p-3 border border-gray-300 rounded flex gap-2 text-gray-800 text-sm items-center shadow">
            <ExclamationCircleIcon className="w-6 h-6" />
            <p><span className="font-semibold">Stock bajo:</span> Se considera stock bajo cuando hay menos de 5 unidades por talle</p>
          </div>
          <FilterOptions />
          <div className="border border-gray-300 rounded text-gray-800 items-center shadow">
            <Table products={data.products} />
          </div>
          <Pagination params={params} totalPages={totalPages} page={page} />
        </div>
      }
      {
        (data && state != null && data.products.length > 0) ? (
          <ChangeStateProductModal state={state} />
        ) : null
      }
    </div>
  )
}
