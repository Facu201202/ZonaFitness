import Image from "next/image";

export default function MainCommentCard() {
  return (
    <div className="my-4 p-8 shadow hover:shadow-xl rounded-2xl bg-white">
        <div className="flex gap-3 items-center mb-3">
          <Image src={"/user.png"} alt="imagen de usuario" height={18} width={18} className="rounded-full"/>
            <h3 className="font-medium">Carlos Rodríguez</h3>
        </div>
        <p className="text-gray-600 text-left">Excelente calidad en todos los productos. Los tenis de running son cómodos y muy duraderos.</p>
    </div>
  )
}
