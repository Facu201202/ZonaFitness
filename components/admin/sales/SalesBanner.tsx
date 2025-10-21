import { SalesBalance } from '@/src/types'
import { formatCurrency } from '@/src/utils'
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from "@heroicons/react/24/outline"
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function SalesBanner() {
    let profit: number | null = null
    const { data, isLoading, isError } = useQuery({
        queryKey: ['salesBalance'],
        queryFn: async (): Promise<SalesBalance> => {
            const api = await fetch('/admin/sales/api/getSalesBalance')
            if (!api.ok) throw new Error("Error al traer el balance de ventas")
            return api.json()
        }
    })


    if (data) {
        profit = Number((((data.sales.salesTotalPrice - data.products.productsTotalPrice) / data.products.productsTotalPrice) * 100).toFixed(1))
    }


    return (
        <div className='p-6'>
            {isError && <p className="text-center font-semibold text-gray-800 p-3">Error al generar el balance</p>}
            {data && (
                <div className='flex gap-4'>
                    <div className='bg-blue-100 text-blue-700 border border-blue-700 rounded-xl p-6 flex-1'>
                        <p className='font-semibold text-lg'>Total de Ventas</p>
                        <div className='flex justify-between text-4xl items-center'>
                            <p className='font-bold text-blue-900'>{formatCurrency(data.sales.salesTotalPrice)}</p>
                            <div className='rounded-full p-3 bg-blue-200 w-16 h-16 flex items-center justify-center'>
                                <p >$</p>
                            </div>
                        </div>
                        <p>{data.sales.salesCount} transacciones</p>
                    </div>
                    <div className='bg-green-100 text-green-700 border border-green-700 rounded-xl p-6 flex-1'>
                        <p className='font-semibold text-lg'>Ganancias</p>
                        <div className='flex justify-between text-4xl items-center'>
                            <p className='font-bold text-green-900'>{formatCurrency(data.sales.salesTotalPrice - data.products.productsTotalPrice)}</p>
                            <div className='rounded-full p-3 bg-green-200 w-16 h-16 flex items-center justify-center'>
                                <p>{<ArrowTrendingUpIcon className='w-8 h-8' />}</p>
                            </div>
                        </div>
                        {profit && <p>Margen: {profit}%</p> }
                    </div>
                    <div className='bg-red-100 text-red-700 border border-red-700 rounded-xl p-6 flex-1'>
                        <p className='font-semibold text-lg'>Pérdidas</p>
                        <div className='flex justify-between text-4xl items-center'>
                            <p className='font-bold text-red-900'>{formatCurrency(data.products.productsTotalPrice - data.sales.salesTotalPrice)}</p>
                            <div className='rounded-full p-3 bg-red-200 w-16 h-16 flex items-center justify-center'>
                                <p>{<ArrowTrendingDownIcon className='w-8 h-8' />}</p>
                            </div>
                        </div>
                        <p>Ventas en relación al precio de compra</p>
                    </div>
                </div>
            )}

        </div>

    )
}
