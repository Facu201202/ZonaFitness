export default function Error({children}: {children: React.ReactNode}) {
  return (
    <p className="py-2 text-center text-white bg-red-600 uppercase text-xs">{children}</p>
  )
}
