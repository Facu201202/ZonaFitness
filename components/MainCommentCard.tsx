import { MainComment } from "@/src/types";
import Image from "next/image";
import ReactStars from "react-stars";

type MainCommentCardProps = {
  comment: MainComment
}

export default function MainCommentCard({ comment }: MainCommentCardProps) {
  return (
    <div className="my-4 p-8 shadow hover:shadow-xl rounded-2xl bg-white flex-1">
      <div className="flex flex-col lg:flex-row lg:gap-3 items-center mb-3 flex-wrap">
        <Image src={"/user.png"} alt="imagen de usuario" height={30} width={30} className="rounded-full" />
        <h3 className="font-medium">{comment.usuario.cliente.nombre} {comment.usuario.cliente.apellido}</h3>
        <ReactStars
          count={5}
          value={comment.calificacion}
          size={30}
          half={true}
          color2={"#ffd700"}
          edit={false}
        />
      </div>
      <p className="text-gray-600 lg:text-left">{comment.comentario}</p>
    </div>
  )
}
