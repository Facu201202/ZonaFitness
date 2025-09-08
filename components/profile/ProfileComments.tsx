import ProductCommentCard from "../ProductCommentCard";

export default function ProfileComments() {
    return (
        <>
            <h3 className="text-3xl font-medium">Mis Reseñas</h3>
            <div className="py-7 flex flex-col gap-5">
                <ProductCommentCard name={"Facundo F"} comment={"Comentario sobre el producto, es muy  bueno tiene muy buena tela lallala"} stars={5} date={"15 Mayo, 2025"} />
                <ProductCommentCard name={"Facundo F"} comment={"Comentario sobre el producto, es muy  bueno tiene muy buena tela lallala"} stars={3} date={"15 Mayo, 2025"} />
                <ProductCommentCard name={"Facundo F"} comment={"Muy buena camiseta, el material es de calidad y el estampado no se daña con los lavados. El único detalle es que es un poco ajustada, recomendaría pedir una talla más."} stars={4} date={"15 Mayo, 2025"} />
            </div>
        </>
    )
}
