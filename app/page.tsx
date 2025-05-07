import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="bg-[#111827] text-white px-6 py-15 flex flex-col gap-6">
        <h1 className="text-4xl font-bold">Equípate para ganar</h1>
        <p className="">Descubre nuestra colección de productos deportivos de alta calidad para mejorar tu rendimiento.</p>
        <div className="py-4 flex gap-3">
          <Link
            href={""}
            className=" rounded-full px-5 py-2 bg-[#2D5DA2] hover:bg-[]"
          >Ir a comprar</Link>
          <Link
            href={""}
            className=" rounded-full px-5 py-2 bg-white text-black"
          >Ver más</Link>
        </div>
      </div>
      <div className="text-center px-6 py-10">
        <h2 className="text-xl font-bold">Categorías Populares</h2>
      </div>
    </>
  );
}
