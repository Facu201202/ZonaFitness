import PopularCategory from "@/components/PopularCategory";
import CardCarousel from "@/components/product/CardCarousel";
import ProductCard from "@/components/product/ProductCard";
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="bg-[#303A49] text-white px-6 py-15 flex flex-col gap-6">
        <h1 className="text-4xl font-bold">Equípate para ganar</h1>
        <p className="max-w-xl">Descubre nuestra colección de productos deportivos de alta calidad para mejorar tu rendimiento.</p>
        <div className="py-4 flex gap-3">
          <Link
            href={""}
            className=" rounded-full px-5 py-2 bg-[#2D5DA2] hover:bg-[#275ca2d3]"
          >Ir a comprar</Link>
          <Link
            href={""}
            className=" rounded-full px-5 py-2 bg-white hover:bg-gray-100 text-black"
          >Ver más</Link>
        </div>
      </div>
      <div className="text-center px-6 py-10">
        <h2 className="text-2xl mb-10">Categorías Populares</h2>
        <div className="flex gap-4 justify-between w-7xl mx-auto">
          <PopularCategory
            src="/products/t-shirts/under-armour-t-shirt.jpg"
            name="Remeras"
          />
          <PopularCategory
            src="/products/sneakers/project-cloud-sneaker.jpg"
            name="Zapatillas"
          />
          <PopularCategory
            src="/products/pants/adidas-tricot-essentials-pant.jpg"
            name="Pantalones"
          />
          <PopularCategory
            src="/products/caps/adidas-superlite-cap.jpg"
            name="Gorras"
          />
        </div>
      </div>
      <div className="pt-12 pb-7">
        <div className="flex justify-between px-10">
          <h2 className="text-2xl">Productos Destacados</h2>
            <Link
              href={""}
              className="text-[#2D5DA2] flex items-center gap-1"
            >Ver todos
              <ArrowRightIcon
                className="w-4 h-4"
              />
            </Link>
        </div>
        <div className="px-5 py-6">
          <CardCarousel/>
        </div>
      </div>
    </>
  );
}
