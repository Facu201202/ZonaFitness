"use client"
import HomePageBanner from "@/components/HomePageBanner";
import MainCommentCard from "@/components/MainCommentCard";
import PopularCategory from "@/components/PopularCategory";
import CardCarousel from "@/components/product/CardCarousel";
import ProductModal from "@/components/product/ProductModal";
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import Link from "next/link"
import { useQuery } from "@tanstack/react-query"
import { Product } from "@/src/types"
import { useSearchParams } from "next/navigation";
import LogoBlackBg from "@/components/logos/LogoBlackBg";
import LogoWhiteBg from "@/components/logos/LogoWhiteBg";


export default function Home() {

  const searchParams = useSearchParams()
  const productId = +searchParams.get('producto')!

  const fetchProductos = async (): Promise<Product[]> => {

    const res = await fetch('/tienda/inicio/api')
    if (!res.ok) throw new Error('Error al traer productos')
    return res.json()
  }
  const { data, isLoading } = useQuery({
    queryKey: ["productos"],
    queryFn: fetchProductos
  })
  return (
    <>
      <div className="bg-[#303A49] text-white px-6 py-15 flex flex-col gap-6 ">
        <h1 className="text-4xl  text-center font-bold lg:text-left lg:text-5xl">Equípate para ganar</h1>
        <p className="max-w-3xl text-center lg:text-left lg:text-2xl">Descubre nuestra colección de productos deportivos de alta calidad para mejorar tu rendimiento.</p>
        <div className="py-4 flex justify-center gap-3 lg:justify-start">
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
        <div className="flex flex-wrap lg:w-xl justify-center gap-4 2xl:gap-16 lg:gap-10 lg:justify-between xl:w-fit mx-auto">
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
      <div className="pt-12 pb-7 my-5">
        <div className="flex justify-between px-4 lg:px-10">
          <h2 className="text-xl lg:text-2xl font-bold">Productos Destacados</h2>
          <Link
            href={""}
            className="text-[#2D5DA2] flex items-center gap-1"
          >Ver todos
            <ArrowRightIcon
              className="w-4 h-4"
            />
          </Link>
        </div>
        <div className="px-6 lg:px-32 py-6  " >

          {isLoading && <p className="text-center font-bold py-10">Cargando...</p>}
          {data && <CardCarousel
            products={data}
          />}

        </div>
      </div>
      <HomePageBanner
        title={"¿Listo para empezar?"}
        text={"Ingresá con tu cuenta o registrate en un minuto"}
        buttonText={"Comenzar"}
        bgColor={"#2D5DA2"}
      />
      <div className="pt-12 pb-7 my-5">
        <div className="flex justify-between px-4 lg:px-10">
          <h2 className="text-xl lg:text-2xl font-bold">Recién Llegados</h2>
          <Link
            href={""}
            className="text-[#2D5DA2] flex items-center gap-1"
          >Ver todos
            <ArrowRightIcon
              className="w-4 h-4"
            />
          </Link>
        </div>
        <div className="px-6  lg:px-32 py-6 ">
          {isLoading && <p className="text-center font-bold py-10">Cargando...</p>}
          {data && <CardCarousel
            products={data}
          />}

        </div>
      </div>
      <HomePageBanner
        title={"¡Aprovechá nuestras ofertas especiales!"}
        text={"Haz clic para ver descuentos y promociones que solo están disponibles para vos"}
        buttonText={"Ver ofertas exclusivas"}
        bgColor={"#303A49"}
        textColor="text-gray-400"
      />
      <div className="text-center py-10 bg-gray-100">
        <h2 className="text-2xl font-bold">Lo que dicen nuestros clientes</h2>
        <div className="p-12 lg:flex gap-6 ">
          <MainCommentCard />
          <MainCommentCard />
          <MainCommentCard />
        </div>
      </div>
      <LogoBlackBg/>
      <LogoWhiteBg/>
      {
        data && productId && <ProductModal productId={productId} products={data} />
      }


    </>
  )
}
