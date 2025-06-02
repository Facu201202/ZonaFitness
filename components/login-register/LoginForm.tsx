import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline"
import { useForm } from "react-hook-form"
export default function LoginForm() {
  const { register } = useForm()
  return (
    <div className='bg-white rounded-lg p-6'>
      <div>
        <div className="flex gap-2 text-2xl">
          <EnvelopeIcon className="h-7 w-7 self-end" />
          <h3 className="font-semibold">Iniciar Sesión</h3>
        </div>
        <p className="text-gray-400 font-medium text-sm">Ingresa tus credenciales para acceder a tu cuenta</p>
      </div>
      <form className="mt-5 flex flex-col gap-3">
        <div className="flex flex-col gap-2 font-semibold">
          <label htmlFor="">Correo Electrónico</label>
          <input type="email" name="email" id="email" className="border border-gray-300 p-2 rounded-lg" placeholder="correo@ejemplo.com" />
        </div>
        <div className="flex flex-col gap-2 font-semibold">
          <label htmlFor="">Contraseña</label>
          <input type="password" name="password" id="password" className="border border-gray-300 p-2 rounded-lg" placeholder="●●●●●●●●" />
        </div>
        <button
          className=" bg-[#2D5DA2] text-white px-4 py-2 w-full rounded text-center font-semibold hover:bg-[#2d52a2] hover:cursor-pointer flex justify-center items-center gap-3"
        >{<LockClosedIcon className='h-5 w-5' />}  Iniciar Sesión
        </button>
      </form>
    </div>
  )
}
