"use client"
import AdminSpinner from "@/components/admin/AdminSpinner"
import ChangeStatePublicationModal from "@/components/admin/publications/ChangeStatePublicationModal"
import FeacturesModal from "@/components/admin/publications/FeacturesModal"
import FilterOptions from "@/components/admin/publications/FilterOptions"
import SalesBanner from "@/components/admin/sales/SalesBanner"
import Table from "@/components/admin/sales/Table"
import Pagination from "@/components/Pagination"
import ProductModal from "@/components/product/ProductModal"
import { PublicationAdmin, SaleDataTable } from "@/src/types"
import { queryFilterAdminPublications } from "@/src/utils"
import { PlusIcon } from "@heroicons/react/24/outline"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function Page() {
  const searchParams = useSearchParams()
  const productId = +searchParams.get('producto')!
  const state = searchParams.get('state')
  const feactures = searchParams.get("feactures")

  const params = new URLSearchParams(searchParams.toString())
  const urlQueryFilter = queryFilterAdminPublications(searchParams)


  const fetchSales = async (): Promise<{ sales: SaleDataTable[], salesCount: number }> => {
    const res = await fetch(`/admin/sales/api/getSales?${urlQueryFilter.toString()}`)
    if (!res.ok) throw new Error("Error al mostrar las ventas")
    return res.json()
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ["ventas_admin", urlQueryFilter.toString()],
    queryFn: () => fetchSales()
  })

  const totalPages = data && data.salesCount > 0
    ? Math.ceil(data.salesCount / 10)
    : null
  const page = Number(searchParams.get("page")) || 1

  return (
    <div className="w-full">
      <div className="p-6 flex justify-between border-b border-gray-300">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Gestión de Ventas</h2>
          <p className="text-gray-800">Visualiza y analiza tus ventas</p>
        </div>
      </div>
      <SalesBanner />
      {isLoading && <AdminSpinner />}
      {isError && <p className="text-center font-semibold text-gray-800 p-3">Error al traer las ventas</p>}
      {(data && data?.sales.length === 0) && <p className="text-center font-semibold text-gray-800 py-20">No se encontraron ventas con los filtros aplicados</p>}
      {(data && totalPages && data.sales.length > 0) &&
        <div className="p-6 flex flex-col gap-4">
          <FilterOptions />{ }
          <div className="border border-gray-300 rounded text-gray-800 items-center shadow">
            <Table sales={data.sales} />
          </div>
          {/*<Pagination params={params} totalPages={totalPages} page={page} />*/}
        </div>
      }
      {
        (data && state != null && data.sales.length > 0) ? (
          <ChangeStatePublicationModal state={state} />
        ) : null
      }
      {
        (data && productId != null && data.sales.length > 0) ? (
          <ProductModal productId={productId} />
        ) : null
      }
      {(feactures && data ? (
        <FeacturesModal />
      ) : null
      )}
    </div>
  )
}
