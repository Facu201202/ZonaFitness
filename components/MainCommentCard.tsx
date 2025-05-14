
export default function MainCommentCard() {
  return (
    <div className=" p-8 shadow hover:shadow-xl rounded-2xl bg-white">
        <div className="flex gap-3 items-center mb-3">
            <img src="user.png" alt=""  className="h-18 w-18 rounded-full"/>
            <h3 className="font-medium">Carlos Rodríguez</h3>
        </div>
        <p className="text-gray-600 text-left">Excelente calidad en todos los productos. Los tenis de running son cómodos y muy duraderos.</p>
    </div>
  )
}
