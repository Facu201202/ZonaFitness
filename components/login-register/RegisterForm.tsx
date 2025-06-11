import { UserIcon, LockClosedIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline"
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import Error from "./Error"
import type { RegisterForm } from "@/src/schema"

export default function RegisterForm() {
  const { register, handleSubmit, watch, formState: { errors }, setError, clearErrors } = useForm<RegisterForm>()
  const registerUser = async (data: RegisterForm) => {
    clearErrors()
    const res = await fetch("/cuenta/api/register", {
      method: "POST",
      body: JSON.stringify(data)
    })
    const response = await res.json()
    if (!res.ok) {
      if (res.status === 400) {
        toast.error(response.errors)
        return
      }
      if (res.status === 409) {
        Object.entries(response.errors).forEach(([key, message]) => {
          setError(key as keyof typeof data, {
            type: "manual",
            message: message as string
          })
        })
        return
      }
      toast.error(response.errors)
      return
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
              <label htmlFor="nombre">Nombre *</label>
              <input type="text" id="nombre" className="border border-gray-300 p-2 rounded-lg" placeholder="Juan" {...register("nombre", {
                required: "El nombre es obligatorio"
              })} />
              {errors.nombre && (
                <Error>{errors.nombre?.message?.toString()}</Error>
              )}

            </div>
            <div className="flex flex-col gap-2 font-semibold">
              <label htmlFor="apellido">Apellido *</label>
              <input type="text" id="apellido" className="border border-gray-300 p-2 rounded-lg" placeholder="Pérez" {...register("apellido", {
                required: "El apellido es obligatorio"
              })} />
              {errors.apellido && (
                <Error>{errors.apellido?.message?.toString()}</Error>
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
              <label htmlFor="usuario">Nombre de Usuario *</label>
              <input type="text" id="usuario" className="border border-gray-300 p-2 rounded-lg" placeholder="juanperez123" {...register("usuario", {
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
              {errors.usuario && (
                <Error>{errors.usuario?.message?.toString()}</Error>
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
            <label htmlFor="correo">Correo Electrónico *</label>
            <input type="email" id="correo" className="border border-gray-300 p-2 rounded-lg" placeholder="correo@ejemplo.com"  {...register("correo", {
              required: "El correo es obligatorio",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Formato de correo no válido"
              }
            })} />
            {errors.correo && (
              <Error>{errors.correo?.message?.toString()}</Error>
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
              <label htmlFor="ciudad">Ciudad *</label>
              <input type="text" id="ciudad" className="border border-gray-300 p-2 rounded-lg" placeholder="Apóstoles" {...register("ciudad", {
                required: "El nombre de la ciudad es obligatorio",
                minLength: { value: 2, message: "La ciudad debe tener más de 2 caracteres" },
                maxLength: { value: 15, message: "La ciudad debe tener menos de 15 caracteres" }
              })} />
              {errors.ciudad && (
                <Error>{errors.ciudad?.message?.toString()}</Error>
              )}
            </div>
            <div className="flex flex-col gap-2 font-semibold">
              <label htmlFor="barrio">Barrio *</label>
              <input type="text" id="barrio" className="border border-gray-300 p-2 rounded-lg" placeholder="San Jorge" {...register("barrio", {
                required: "El barrio es obligatorio",
                minLength: { value: 2, message: "El nombre del barrio debe tener más de 2 caracteres" },
                maxLength: { value: 20, message: "El nombre del barrio debe tener menos de 20 caracteres" }
              })} />
              {errors.barrio && (
                <Error>{errors.barrio?.message?.toString()}</Error>
              )}
            </div>
            <div className="flex flex-col gap-2 font-semibold col-span-2">
              <label htmlFor="calle">Calle y Número *</label>
              <input type="text" id="calle" className="border border-gray-300 p-2 rounded-lg" placeholder="Av. Misiones 213" {...register("calle", {
                required: "El nombre de la calle es obligatorio",
                minLength: { value: 2, message: "El nombre de la calle debe tener más de 2 caracteres" },
                maxLength: { value: 30, message: "El nomber de la calle debe tener menos de 30 caracteres" }
              })} />
              {errors.calle && (
                <Error>{errors.calle?.message?.toString()}</Error>
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
              <label htmlFor="contraseña">Contraseña *</label>
              <input type="password" id="contraseña" className="border border-gray-300 p-2 rounded-lg" placeholder="●●●●●●●●" {...register("contraseña", {
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
              {errors.contraseña && (
                <Error>{errors.contraseña?.message?.toString()}</Error>
              )}
            </div>
            <div className="flex flex-col gap-2 font-semibold">
              <label htmlFor="comfirmarContraseña">Confirmar Contraseña *</label>
              <input type="password" id="comfirmarContraseña" className="border border-gray-300 p-2 rounded-lg" placeholder="●●●●●●●●" {...register("comfirmarContraseña", {
                required: "Debes confirmar la contraseña",
                validate: value =>
                  value === password || "Las contraseñas no coinciden"
              })} />
              {errors.comfirmarContraseña && (
                <Error>{errors.comfirmarContraseña?.message?.toString()}</Error>
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
