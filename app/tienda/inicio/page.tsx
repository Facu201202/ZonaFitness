"use client"
import HomePageBanner from "@/components/HomePageBanner";
import PopularCategory from "@/components/PopularCategory";
import ProductModal from "@/components/product/ProductModal";
import Link from "next/link"
import { useSearchParams } from "next/navigation";
import MainCommentSection from "@/components/MainCommentSection";
import HighLightsProducts from "@/components/HighLightsProducts";
import NewComers from "@/components/NewComers";


export default function Home() {
  const searchParams = useSearchParams()
  const productId = +searchParams.get('producto')!

  return (
    <>
      <div className="bg-[#303A49] text-white px-6 py-15 flex flex-col gap-6 ">
        <h1 className="text-4xl  text-center font-bold lg:text-left lg:text-5xl">Equípate para ganar</h1>
        <p className="max-w-3xl text-center lg:text-left lg:text-2xl">Descubre nuestra colección de productos deportivos de alta calidad para mejorar tu rendimiento.</p>
        <div className="py-4 flex justify-center gap-3 lg:justify-start">
          <Link
            href={"/tienda/search"}
            className=" rounded-full px-5 py-2 bg-[#2D5DA2] hover:bg-[#275ca2d3]"
          >Ir a comprar</Link>
          <Link
            href={"/tienda/search?descuento=true"}
            className=" rounded-full px-5 py-2 bg-white hover:bg-gray-100 text-black"
          >Ver Ofertas</Link>
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
      <HighLightsProducts />
      <HomePageBanner
        title={"¿Listo para empezar?"}
        text={"Ingresá con tu cuenta o registrate en un minuto"}
        buttonText={"Comenzar"}
        bgColor={"#2D5DA2"}
        href="/cuenta"
      />
      <NewComers />
      <HomePageBanner
        title={"¡Aprovechá nuestras ofertas especiales!"}
        text={"Haz clic para ver descuentos y promociones que solo están disponibles para vos"}
        buttonText={"Ver ofertas exclusivas"}
        bgColor={"#303A49"}
        textColor="text-gray-400"
        href="/tienda/search?descuento=true"
      />
      <MainCommentSection />
      {
        (productId != null) ? (
          <ProductModal productId={productId}/>
        ) : null
      }


    </>
  )
}
