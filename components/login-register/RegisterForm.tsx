import { UserIcon, LockClosedIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline"
import { useForm } from "react-hook-form"

export default function RegisterForm() {
  return (
    <div className='bg-white rounded-lg p-6'>
      <div>
        <div className="flex gap-2 text-2xl">
          <UserIcon className="h-7 w-7 self-center" />
          <h3 className="font-semibold">Crear Cuenta</h3>
        </div>
        <p className="text-gray-400 font-medium text-sm">Completa todos los campos para crear tu nueva cuenta</p>
      </div>
      <form className="mt-5 flex flex-col gap-3">
        <div className="mb-5">
          <div className="flex gap-2 text-xl mb-5">
            <UserIcon className="h-5 w-5 self-center" />
            <p className="font-medium">Información Personal</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-2 font-semibold">
              <label htmlFor="">Nombre *</label>
              <input type="text" name="name" id="name" className="border border-gray-300 p-2 rounded-lg" placeholder="Juan" />
            </div>
            <div className="flex flex-col gap-2 font-semibold">
              <label htmlFor="">Apellido *</label>
              <input type="text" name="surname" id="surname" className="border border-gray-300 p-2 rounded-lg" placeholder="Pérez" />
            </div>
            <div className="flex flex-col gap-2 font-semibold">
              <label htmlFor="">DNI *</label>
              <input type="text" name="dni" id="dni" className="border border-gray-300 p-2 rounded-lg" placeholder="123214345" />
            </div>
            <div className="flex flex-col gap-2 font-semibold">
              <label htmlFor="">Nombre de Usuario *</label>
              <input type="text" name="username" id="username" className="border border-gray-300 p-2 rounded-lg" placeholder="juanperez123" />
            </div>
          </div>
        </div>
        <div className="mb-5">
          <div className="flex gap-2 text-xl mb-5">
            <EnvelopeIcon className="h-5 w-5 self-center" />
            <p className="font-medium">Información de Contacto</p>
          </div>
          <div className="flex flex-col gap-2 font-semibold">
            <label htmlFor="">Correo Electrónico *</label>
            <input type="email" name="email" id="email" className="border border-gray-300 p-2 rounded-lg" placeholder="correo@ejemplo.com" />
          </div>
        </div>
        <div className="mb-5">
          <div className="flex gap-2 text-xl mb-5">
            <MapPinIcon className="h-5 w-5 self-center" />
            <p className="font-medium">Dirección</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-2 font-semibold">
              <label htmlFor="">Ciudad *</label>
              <input type="text" name="city" id="city" className="border border-gray-300 p-2 rounded-lg" placeholder="Misiones" />
            </div>
            <div className="flex flex-col gap-2 font-semibold">
              <label htmlFor="">Barrio *</label>
              <input type="text" name="neighborhood" id="neighborhood" className="border border-gray-300 p-2 rounded-lg" placeholder="San Jorge" />
            </div>
            <div className="flex flex-col gap-2 font-semibold col-span-2">
              <label htmlFor="">Calle y Número *</label>
              <input type="text" name="street" id="street" className="border border-gray-300 p-2 rounded-lg" placeholder="Av. Misiones 213" />
            </div>
          </div>
        </div>
        <div className="mb-5">
          <div className="flex gap-2 text-xl mb-5">
            <LockClosedIcon className="h-5 w-5 self-center" />
            <p className="font-medium">Seguridad</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="flex flex-col gap-2 font-semibold">
              <label htmlFor="">Contraseña *</label>
              <input type="password" name="password" id="password" className="border border-gray-300 p-2 rounded-lg" placeholder="●●●●●●●●" />
            </div>
            <div className="flex flex-col gap-2 font-semibold">
              <label htmlFor="">Confirmar Contraseña *</label>
              <input type="password" name="confirmpassword" id="confirmpassword" className="border border-gray-300 p-2 rounded-lg" placeholder="●●●●●●●●" />
            </div>
          </div>
        </div>

        <button
          className=" bg-[#2D5DA2] text-white px-4 py-2 w-full rounded text-center font-semibold hover:bg-[#2d52a2] hover:cursor-pointer flex justify-center items-center gap-3"
        >{<UserIcon className='h-5 w-5' />}  Crear Cuenta
        </button>
      </form>
    </div>
  )
}
