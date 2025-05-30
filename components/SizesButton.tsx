
type SizesButtonProps = {
    size: string,
    stock: number
}

export default function SizesButton({size, stock}: SizesButtonProps) {
  return (
    <div className={`${stock > 0 ? "border border-gray-300 rounded p-2 hover:cursor-pointer text-center w-14 hover:bg-gray-100" : "border border-gray-100 rounded p-2 text-center min-w-14 select-none"} `}>
        <p className={`font-bold text-sm ${stock > 0 ? "" : "text-gray-400"}`}>{size}</p>
        <p className="text-gray-400 text-sm">{stock < 0 ? "Agotado" : `(${stock})`}</p>
    </div>
  )
}
