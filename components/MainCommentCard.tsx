import { MainComment } from "@/src/types";
import Image from "next/image";
type MainCommentCardProps = {
  comment: MainComment
}

export default function MainCommentCard({comment}: MainCommentCardProps) {
  return (
    <div className="my-4 p-8 shadow hover:shadow-xl rounded-2xl bg-white">
        <div className="flex gap-3 items-center mb-3">
          <Image src={"/user.png"} alt="imagen de usuario" height={18} width={18} className="rounded-full"/>
            <h3 className="font-medium">{comment.usuario.cliente.nombre} {comment.usuario.cliente.apellido}</h3>
        </div>
        <p className="text-gray-600 text-left">{comment.comentario}</p>
    </div>
  )
}
