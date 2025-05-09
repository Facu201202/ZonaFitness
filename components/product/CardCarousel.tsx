'use client'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid"
import ProductCard from "./ProductCard"

const products = [
    { price: 20.5, name: "Remera de adidas", category: "Remeras", src: "/products/t-shirts/under-armour-t-shirt.jpg", opinionsCant: 24 },
    { price: 20.5, name: "Remera de adidas", category: "Remeras", src: "/products/t-shirts/under-armour-t-shirt.jpg", opinionsCant: 24 },
    { price: 20.5, name: "Remera de adidas", category: "Remeras", src: "/products/t-shirts/under-armour-t-shirt.jpg", opinionsCant: 24 },
    { price: 20.5, name: "Remera de adidas", category: "Remeras", src: "/products/t-shirts/under-armour-t-shirt.jpg", opinionsCant: 24 },
    { price: 20.5, name: "Remera de adidas", category: "Remeras", src: "/products/t-shirts/under-armour-t-shirt.jpg", opinionsCant: 24 },
    { price: 20.5, name: "Remera de adidas", category: "Remeras", src: "/products/t-shirts/under-armour-t-shirt.jpg", opinionsCant: 24 }
]

export default function CardCarousel() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 4,
      spacing: 16,
    },
    breakpoints: {
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
        {products.map((product, i) => (
          <div key={i} className="keen-slider__slide min-w-0 shadow-xl hover:border ">
            <ProductCard
              price={product.price}
              name={product.name}
              category={product.category}
              src={product.src}
              opinionsCant={product.opinionsCant}
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 z-10 hover:cursor-pointer hover:bg-gray-800"
      >
        <ChevronLeftIcon className="w-4 h-4"/>
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2  z-10  hover:cursor-pointer  hover:bg-gray-800"
      >
        <ChevronRightIcon className="w-4 h-4"/>
      </button>
    </div>
  )
}
