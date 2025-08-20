import { useSearchParams, useRouter } from "next/navigation"

type SizesButtonProps = {
  size: string,
  stock: number,
  currentQuantity: number
}

export default function SizesButton({ size, stock, currentQuantity }: SizesButtonProps) {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams.toString())
  const selected = params.get("ModalTalle") === size
  const router = useRouter()

  if (selected && Number(params.get("cantidad")) > stock) {
    params.set("cantidad", stock.toString())
    router.replace(`?${params.toString()}`)
  }

  const handleClick = (size: string) => {
    params.set("ModalTalle", size)
    router.replace(`?${params.toString()}`, {scroll: false})
  }

  return (
    <div className={`${(stock > 0 && currentQuantity <= stock) ? "border border-gray-300 rounded p-2 hover:cursor-pointer text-center w-14 hover:bg-gray-100" : "border border-gray-100 rounded p-2 text-center min-w-14 select-none pointer-events-none"} ${selected && "bg-gray-300 hover:bg-gray-300"}`} onClick={() => handleClick(size)}>
      <p className={`font-bold text-sm ${stock > 0 ? "" : "text-gray-400"}`}>{size}</p>
      <p className="text-gray-400 text-sm">{stock < 0 ? "Agotado" : `(${stock})`}</p>
    </div>
  )
}
