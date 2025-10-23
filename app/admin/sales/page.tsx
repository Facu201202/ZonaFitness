"use client"
import AdminSpinner from "@/components/admin/AdminSpinner"
import FilterOptions from "@/components/admin/sales/FilterOptions"
import ReceiptModal from "@/components/admin/sales/ReceiptModal"
import SalesBanner from "@/components/admin/sales/SalesBanner"
import Table from "@/components/admin/sales/Table"
import Pagination from "@/components/Pagination"
import { SaleDataTable } from "@/src/types"
import { queryFilterAdminSales } from "@/src/utils"
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation"

export default function Page() {
  const searchParams = useSearchParams()
  const receipt = +searchParams.get('receipt')!
  const params = new URLSearchParams(searchParams.toString())
  const urlQueryFilter = queryFilterAdminSales(searchParams)

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
          <FilterOptions />
          <div className="border border-gray-300 rounded text-gray-800 items-center shadow">
            <Table sales={data.sales} />
          </div>
          {<Pagination params={params} totalPages={totalPages} page={page} />}
        </div>
      }
      {
        (data && receipt != null && !Number.isNaN(receipt) && data.sales.length > 0) ? (
          <ReceiptModal sale={data.sales[receipt]}/>
        ) : null
      }
    </div>
  )
}
