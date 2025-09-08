import { formatCurrency } from "@/src/utils"
import { WalletIcon, CreditCardIcon } from "@heroicons/react/24/outline"
type ProfileWalletProps = {
    userBalance: number
}

export default function ProfileWallet({userBalance}: ProfileWalletProps) {
    return (
        <div className="bg-white px-5 py-8 rounded-2xl shadow flex flex-col gap-4">
            <div className="flex gap-2 text-xl">
                <WalletIcon className="h-6 w-6 self-center" />
                <p className="font-medium">Saldo Actual</p>
            </div>
            <p className="text-4xl font-bold text-[#275DA2]">
                {formatCurrency(userBalance)}
            </p>
            <button className="flex gap-2 w-fit items-center font-semibold shadow bg-[#222a3b] text-white rounded-xl px-4 py-2 hover:cursor-pointer hover:bg-[#19202e]">
                <CreditCardIcon className="h-5 w-5" />
                Recargar Saldo
            </button>
        </div>
    )
}
