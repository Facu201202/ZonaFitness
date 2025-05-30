'use client'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid"
import ProductCard from "./ProductCard"
import { Product } from "@/src/types"

type CardCarouselProps = {
  products: Product[]
}

export default function CardCarousel({ products }: CardCarouselProps) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 4,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 1440px)": {
        slides: { perView: 3, spacing: 14 },
      },
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 12 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 8 },
      },
    },
  })


  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider">
        {products.map((publication) => (
          <div key={publication.id_publicacion} className="keen-slider__slide min-w-0 border-1 border-transparent shadow-xl hover:border-black hover:cursor-pointer">
            <ProductCard
              id_publication={publication.id_publicacion}
              price={publication.precio}
              name={publication.producto.nombre}
              category={publication.producto.categoria.nombre}
              src={"/products/t-shirts/" + publication.producto.foto}
              opinionsCant={24}
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 z-10 hover:cursor-pointer hover:bg-gray-800"
      >
        <ChevronLeftIcon className="w-4 h-4" />
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2  z-10  hover:cursor-pointer  hover:bg-gray-800"
      >
        <ChevronRightIcon className="w-4 h-4" />
      </button>
    </div>
  )
}
