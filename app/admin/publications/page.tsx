"use client"
import AdminSpinner from "@/components/admin/AdminSpinner"
import ChangeStateProductModal from "@/components/admin/products/ChangeStateProductModal"
import FeacturesModal from "@/components/admin/publications/FeacturesModal"
import FilterOptions from "@/components/admin/publications/FilterOptions"
import Table from "@/components/admin/publications/Table"
import Pagination from "@/components/Pagination"
import ProductModal from "@/components/product/ProductModal"
import { PublicationAdmin } from "@/src/types"
import { queryFilterAdminProducts } from "@/src/utils"
import { PlusIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function Page() {
  const searchParams = useSearchParams()
  const productId = +searchParams.get('producto')!
  const state = searchParams.get('state')
  const feactures = searchParams.get("feactures")

  const params = new URLSearchParams(searchParams.toString())
  const urlQueryFilter = queryFilterAdminProducts(searchParams)


  const fetchProducts = async (): Promise<{ publications: PublicationAdmin[], countPublications: number }> => {
    const res = await fetch(`/admin/publications/api/getPublications?${urlQueryFilter.toString()}`)
    if (!res.ok) throw new Error("Error al mostrar las publicaciones")
    return res.json()
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ["publicaciones_admin", urlQueryFilter.toString()],
    queryFn: () => fetchProducts()
  })

  const totalPages = data && data.countPublications > 0
    ? Math.ceil(data.countPublications / 10)
    : null
  const page = Number(searchParams.get("page")) || 1

  return (
    <div className="w-full">
      <div className="p-6 flex justify-between border-b border-gray-300">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Gestión de Publicaciones</h2>
          <p className="text-gray-800">Administra tus publicaciones y ofertas</p>
        </div>
        <Link href={"/admin/publications/newPublication"} className="px-3 h-fit py-2 rounded bg-gray-700 text-white font-semibold flex gap-3 items-center">
          <PlusIcon className="w-4 h-4" />
          Agregar Publicación
        </Link>
      </div>
      {isLoading && <AdminSpinner />}
      {isError && <p className="text-center font-semibold text-gray-800 p-3">Error al traer los productos</p>}
      {(data && data?.publications.length === 0) && <p className="text-center font-semibold text-gray-800 py-20">No se encontraron publicaciones con los filtros aplicados</p>}
      {(data && totalPages && data.publications.length > 0) &&
        <div className="p-6 flex flex-col gap-4">
          <FilterOptions />
          <div className="border border-gray-300 rounded text-gray-800 items-center shadow">
            <Table publications={data.publications} />
          </div>
          <Pagination params={params} totalPages={totalPages} page={page} />
        </div>
      }
      {/*
        (data && productId != null && data.products.length > 0) ? (
          <ProductModal productId={productId} />
        ) : null*/
      }
      {/*
        (data && state != null && data.products.length > 0) ? (
          <ChangeStateProductModal state={state} />
        ) : null*/
      }
      {
        (data && productId != null && data.publications.length > 0) ? (
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
