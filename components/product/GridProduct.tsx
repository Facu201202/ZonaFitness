import { Categoria, Product } from "@/src/types"
import ProductCard from "./ProductCard"

type GridProductProps = {
    products: Product[]
}

export default function GridProduct({ products }: GridProductProps) {
    return (
        <div className='grid lg:grid-cols-3 gap-5 max-w-5xl'>
            {products.map((publication) => (
                <div key={publication.id_publicacion} className="keen-slider__slide min-w-0 border-1 border-transparent shadow-xl hover:border-black hover:cursor-pointer">
                    <ProductCard
                        id_publication={publication.id_publicacion}
                        price={publication.precio}
                        name={publication.producto.nombre}
                        category={publication.producto.categoria.nombre as Categoria}
                        src={publication.producto.foto}
                        opinionsCant={24}
                    />
                </div>
            ))}
        </div>
    )
}
