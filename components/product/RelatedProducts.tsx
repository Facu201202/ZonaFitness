import { Product } from "@/src/types";
import CardCarousel from "./CardCarousel";

type RelatedProductsProps = {
    products: Product[]
}

export default function RelatedProducts({products}: RelatedProductsProps) {
  return (
    <div className="pt-15">
        <h2 className="font-semibold text-2xl mb-10">Productos Relacionados</h2>
        <CardCarousel products={products}/>
    </div>
  )
}
