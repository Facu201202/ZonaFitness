import { UserIcon, LockClosedIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline"
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import Error from "./Error"
import type { RegisterForm } from "@/src/schema"

export default function RegisterForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterForm>()
  const registerUser = async (data: RegisterForm) => {
    const res = await fetch("/cuenta/api/register", {
      method: "POST",
      body: JSON.stringify(data)
    })

    const response = await res.json()
    if (!res.ok) {
      toast.error(response.message)
    }
    toast.success(response.message)
  }

  const password = watch("contraseña")

  return (
    <div className='bg-white rounded-lg p-6'>
      <div>
        <div className="flex gap-2 text-2xl">
          <UserIcon className="h-7 w-7 self-center" />
          <h3 className="font-semibold">Crear Cuenta</h3>
        </div>
        <p className="text-gray-400 font-medium text-sm">Completa todos los campos para crear tu nueva cuenta</p>
      </div>
      <form className="mt-5 flex flex-col gap-3" onSubmit={handleSubmit(registerUser)}>
        <div className="mb-5">
          <div className="flex gap-2 text-xl mb-5">
            <UserIcon className="h-5 w-5 self-center" />
            <p className="font-medium">Información Personal</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-2 font-semibold">
              <label htmlFor="name">Nombre *</label>
              <input type="text" id="name" className="border border-gray-300 p-2 rounded-lg" placeholder="Juan" {...register("name", {
                required: "El nombre es obligatorio"
              })} />
              {errors.name && (
                <Error>{errors.name?.message?.toString()}</Error>
              )}

            </div>
            <div className="flex flex-col gap-2 font-semibold">
              <label htmlFor="surname">Apellido *</label>
              <input type="text" id="surname" className="border border-gray-300 p-2 rounded-lg" placeholder="Pérez" {...register("surname", {
                required: "El apellido es obligatorio"
              })} />
              {errors.surname && (
                <Error>{errors.surname?.message?.toString()}</Error>
              )}
            </div>
            <div className="flex flex-col gap-2 font-semibold">
              <label htmlFor="dni">DNI *</label>
              <input type="text" id="dni" className="border border-gray-300 p-2 rounded-lg" placeholder="21425" {...register("dni", {
                required: "El DNI es obligatorio",
                pattern: {
                  value: /^[0-9]{7,8}$/,
                  message: "El DNI debe tener 7 u 8 dígitos numéricos"
                }
              })} />
              {errors.dni && (
                <Error>{errors.dni?.message?.toString()}</Error>
              )}
            </div>
            <div className="flex flex-col gap-2 font-semibold">
              <label htmlFor="username">Nombre de Usuario *</label>
              <input type="text" id="username" className="border border-gray-300 p-2 rounded-lg" placeholder="juanperez123" {...register("username", {
                required: "El nombre de usuario es obligatorio",
                maxLength: {
                  value: 10,
                  message: "El nombre de usuario debe tener 6 a 10 caracteres"
                },
                minLength: {
                  value: 6,
                  message: "El nombre de usuario debe tener 6 a 10 caracteres"
                }
              })} />
              {errors.username && (
                <Error>{errors.username?.message?.toString()}</Error>
              )}
            </div>
          </div>
        </div>
        <div className="mb-5">
          <div className="flex gap-2 text-xl mb-5">
            <EnvelopeIcon className="h-5 w-5 self-center" />
            <p className="font-medium">Información de Contacto</p>
          </div>
          <div className="flex flex-col gap-2 font-semibold">
            <label htmlFor="email">Correo Electrónico *</label>
            <input type="email" id="email" className="border border-gray-300 p-2 rounded-lg" placeholder="correo@ejemplo.com"  {...register("email", {
              required: "El correo es obligatorio",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Formato de correo no válido"
              }
            })} />
            {errors.email && (
              <Error>{errors.email?.message?.toString()}</Error>
            )}
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
              <input type="text" id="city" className="border border-gray-300 p-2 rounded-lg" placeholder="Apóstoles" {...register("city", {
                required: "El nombre de la ciudad es obligatorio",
                minLength: { value: 2, message: "La ciudad debe tener más de 2 caracteres" },
                maxLength: { value: 15, message: "La ciudad debe tener menos de 15 caracteres" }
              })} />
              {errors.city && (
                <Error>{errors.city?.message?.toString()}</Error>
              )}
            </div>
            <div className="flex flex-col gap-2 font-semibold">
              <label htmlFor="">Barrio *</label>
              <input type="text" id="neighborhood" className="border border-gray-300 p-2 rounded-lg" placeholder="San Jorge" {...register("neighborhood", {
                required: "El barrio es obligatorio",
                minLength: { value: 2, message: "El nombre del barrio debe tener más de 2 caracteres" },
                maxLength: { value: 20, message: "El nombre del barrio debe tener menos de 20 caracteres" }
              })} />
              {errors.neighborhood && (
                <Error>{errors.neighborhood?.message?.toString()}</Error>
              )}
            </div>
            <div className="flex flex-col gap-2 font-semibold col-span-2">
              <label htmlFor="">Calle y Número *</label>
              <input type="text" id="street" className="border border-gray-300 p-2 rounded-lg" placeholder="Av. Misiones 213" {...register("street", {
                required: "El nombre de la calle es obligatorio",
                minLength: { value: 2, message: "El nombre de la calle debe tener más de 2 caracteres" },
                maxLength: { value: 30, message: "El nomber de la calle debe tener menos de 30 caracteres" }
              })} />
              {errors.street && (
                <Error>{errors.street?.message?.toString()}</Error>
              )}
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
              <input type="password" id="password" className="border border-gray-300 p-2 rounded-lg" placeholder="●●●●●●●●" {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 8,
                  message: "Debe tener al menos 8 caracteres"
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d)(?=.*[a-z]).{8,}$/,
                  message: "Debe tener mayúsculas, minúsculas y números"
                }
              })} />
              {errors.password && (
                <Error>{errors.password?.message?.toString()}</Error>
              )}
            </div>
            <div className="flex flex-col gap-2 font-semibold">
              <label htmlFor="">Confirmar Contraseña *</label>
              <input type="password" id="confirmpassword" className="border border-gray-300 p-2 rounded-lg" placeholder="●●●●●●●●" {...register("confirmpassword", {
                required: "Debes confirmar la contraseña",
                validate: value =>
                  value === password || "Las contraseñas no coinciden"
              })} />
              {errors.confirmpassword && (
                <Error>{errors.confirmpassword?.message?.toString()}</Error>
              )}
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
