import { Product } from "@/src/types";
import CardCarousel from "./CardCarousel";
import { useQuery } from "@tanstack/react-query";

type RelatedProductsProps = {
  productId: number,
  category: string
}

export default function RelatedProducts({productId, category }: RelatedProductsProps) {

  const { data, isLoading, isError } = useQuery({
    queryKey: ["related_products", productId],
    queryFn: async (): Promise<Product[]> => {
      const res = await fetch(`/tienda/inicio/api/products/related/${category}`)
      if (!res.ok) throw new Error("Error al traer los productos relacionados")
      return res.json()
    }
  })

  return (
    <div className="pt-15">
      <h2 className="font-semibold text-2xl mb-10">Productos Relacionados</h2>
      {isLoading && <p className="text-center font-semibold mt-3">...</p>}
      {isError && <p className="text-center font-semibold mt-3">Error al cargar los productos relacionados</p>}
      {data && (
        <CardCarousel products={data} />
      )}
    </div>
  )
}
