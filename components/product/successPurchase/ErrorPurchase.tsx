import { XCircleIcon } from "@heroicons/react/24/outline"

type ErrorPurchaseProps = {
    deleteParamsFunction: () => void
}

export default function ErrorPurchase({deleteParamsFunction}: ErrorPurchaseProps) {
    return (
        <div className="font-bold flex flex-col items-center lg: mt-10">
            <XCircleIcon className="w-55 h-55 text-red-400 lg:w-70 lg:h-70" />
            <p className="uppercase text-center text-2xl lg:text-3xl">oh no!<br /> Algo salió mal. </p>
            <p className="text-center font-medium text-md lg:text-lg text-gray-500 pt-3 px-3 lg:max-w-md">No hemos podido procesar su pago. Por favor, inténtelo de nuevo más tarde.</p>
            <button onClick={() => deleteParamsFunction()} className="uppercase py-2 px-8 bg-red-400 rounded-2xl text-white mt-10 lg:text-lg hover:cursor-pointer hover:bg-red-500">salir</button>
        </div> 
    )
}
