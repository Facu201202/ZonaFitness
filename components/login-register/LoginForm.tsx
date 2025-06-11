import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline"
import { useForm } from "react-hook-form"
import Error from "./Error"
import { LoginUserForm } from "@/src/schema"
import { toast } from "react-toastify"
import { redirect } from "next/navigation"
export default function LoginForm() {
  const { register, handleSubmit, formState: { errors }, setError } = useForm<LoginUserForm>()
  const loginUser = async (data: LoginUserForm) => {
    const res = await fetch("/cuenta/api/login", {
      method: "POST",
      body: JSON.stringify(data)
    })
    const response = await res.json()
    if (!res.ok) {
      if (res.status == 401) {
        setError("validateError", {
          message: response.errors
        })
        return
      }
      toast.error(response.errors)
      return
    }

    toast.success(response.message)
    redirect("/")
  }

  return (
    <div className='bg-white rounded-lg p-6'>
      <div>
        <div className="flex gap-2 text-2xl">
          <EnvelopeIcon className="h-7 w-7 self-end" />
          <h3 className="font-semibold">Iniciar Sesión</h3>
        </div>
        <p className="text-gray-400 font-medium text-sm">Ingresa tus credenciales para acceder a tu cuenta</p>
      </div>
      <form className="mt-5 flex flex-col gap-3" onSubmit={handleSubmit(loginUser)}>
        <div className="flex flex-col gap-2 font-semibold">
          <label htmlFor="usuario">Nombre de usuario</label>
          <input type="text" id="usuario" className="border border-gray-300 p-2 rounded-lg" placeholder="Juan231" {...register("usuario", {
            required: "El nombre de usuario es obligatorio"
          })} />
          {errors.usuario && (
            <Error>{errors.usuario.message?.toString()}</Error>
          )}
        </div>
        <div className="flex flex-col gap-2 font-semibold">
          <label htmlFor="contraseña">Contraseña</label>
          <input type="password" id="contraseña" className="border border-gray-300 p-2 rounded-lg" placeholder="●●●●●●●●" maxLength={20} {...register("contraseña", {
            required: "La contraseña es obligatoria"
          })} />
          {errors.contraseña && (
            <Error>{errors.contraseña.message?.toString()}</Error>
          )}
        </div>
        <button
          className=" bg-[#2D5DA2] text-white px-4 py-2 w-full rounded text-center font-semibold hover:bg-[#2d52a2] hover:cursor-pointer flex justify-center items-center gap-3"
        >{<LockClosedIcon className='h-5 w-5' />}  Iniciar Sesión
        </button>

        <input id="validateError" type="hidden"{...register("validateError")} />
        {errors.validateError && (<Error>{errors.validateError.message?.toString()}</Error>)}
      </form>
    </div>
  )
}
