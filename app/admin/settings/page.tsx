"use client"
import HandleUserRol from '@/components/admin/settings/HandleUserRol'
export default function
  () {
  return (
    <div className='w-full'>
      <div className="p-6 flex justify-between border-b border-gray-300">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Ajustes (Demo)</h2>
          <p className="text-gray-800">Configuración del sistema</p>
        </div>
      </div>
      <HandleUserRol />
    </div>
  )
}
