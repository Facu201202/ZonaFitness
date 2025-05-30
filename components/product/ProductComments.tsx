import ProductCommentCard from "../ProductCommentCard";


export default function ProductComments() {
    return (
        <div className="pt-15">
            <div className="flex flex-col gap-3 lg:flex-row lg:justify-between items-center">
                <h2 className="font-semibold text-2xl">Comentarios y reseñas</h2>
                <button className="border border-[#2D5DA2] text-[#2D5DA2] px-4 py-2 rounded text-center font-semibold hover:bg-[#2D5DA2] hover:text-white hover:cursor-pointer w-full lg:w-fit">Escribir reseña</button>
            </div>
            <div className="py-7 flex flex-col gap-5">
                <ProductCommentCard name={"Facundo F"} comment={"Comentario sobre el producto, es muy  bueno tiene muy buena tela lallala"} stars={5} date={"15 Mayo, 2025"} />
                <ProductCommentCard name={"Facundo F"} comment={"Comentario sobre el producto, es muy  bueno tiene muy buena tela lallala"} stars={3} date={"15 Mayo, 2025"} />
                <ProductCommentCard name={"Facundo F"} comment={"Muy buena camiseta, el material es de calidad y el estampado no se daña con los lavados. El único detalle es que es un poco ajustada, recomendaría pedir una talla más."} stars={4} date={"15 Mayo, 2025"} />
            </div>
            <button className="border w-full border-[#2D5DA2] text-[#2D5DA2] py-3 rounded text-center font-semibold hover:bg-[#2D5DA2] hover:text-white hover:cursor-pointer">Cargar más comentarios</button>
        </div>
    )
}
