import {ExclamationCircleIcon} from "@heroicons/react/24/solid"

export default function Error({children}: {children: React.ReactNode}) {
  return (
    <p className="py-2 flex gap-1 items-center text-red-500 uppercase text-xs"><ExclamationCircleIcon className="w-5 h-5"/> {children}</p>
  )
}
