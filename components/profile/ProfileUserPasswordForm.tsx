"use client"
import { PencilSquareIcon } from "@heroicons/react/24/outline"
import { useForm } from "react-hook-form"
import Error from "../login-register/Error"
import { toast } from "react-toastify"
import { ChangePasswordForm } from "@/src/types"

export default function ProfileUserPasswordForm({userId}: {userId: number}) {

    const { register, handleSubmit, watch, formState: { errors }, setError, clearErrors } = useForm<ChangePasswordForm>()
    const password = watch("contraseñaNueva")

    const updatePassword = async (data: ChangePasswordForm) => {
        clearErrors()
        const res = await fetch("/tienda/perfil/api/editPassword", {
            method: "POST",
            body: JSON.stringify({ ...data, id_usuario: userId })
        })
        const response = await res.json()
        if (!res.ok) {
            if (res.status === 404 || res.status === 401) {
                toast.error(response.errors)
                return
            }
            if (res.status === 401) {
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
        setTimeout(() => {
            location.href = window.location.pathname;
        }, 2000);
    }

    return (
        <>
            <form className="flex flex-col lg:flex-row gap-3" onSubmit={handleSubmit(updatePassword)}>
                <div className="grid grid-cols-1 gap-3 bg-white px-5 py-8 rounded-2xl shadow flex-1/2">
                    <div className="flex flex-col gap-2 font-semibold">
                        <label htmlFor="contraseña">Contraseña Actual</label>
                        <input type="password" id="contraseñaActual" className="border border-gray-300 p-2 rounded-lg" placeholder="●●●●●●●●" {...register("contraseñaActual", {
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
                        {errors.contraseñaActual && (
                            <Error>{errors.contraseñaActual?.message?.toString()}</Error>
                        )}
                    </div>
                    <div className="flex flex-col gap-2 font-semibold">
                        <label htmlFor="contraseña">Contraseña Nueva</label>
                        <input type="password" id="contraseñaNueva" className="border border-gray-300 p-2 rounded-lg" placeholder="●●●●●●●●" {...register("contraseñaNueva", {
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
                        {errors.contraseñaNueva && (
                            <Error>{errors.contraseñaNueva?.message?.toString()}</Error>
                        )}
                    </div>
                    <div className="flex flex-col gap-2 font-semibold">
                        <label htmlFor="comfirmarContraseña">Confirmar Contraseña</label>
                        <input type="password" id="comfirmarContraseña" className="border border-gray-300 p-2 rounded-lg" placeholder="●●●●●●●●" {...register("confirmarContraseña", {
                            required: "Debes confirmar la contraseña",
                            validate: value =>
                                value === password || "Las contraseñas no coinciden"
                        })} />
                        {errors.confirmarContraseña && (
                            <Error>{errors.confirmarContraseña?.message?.toString()}</Error>
                        )}
                    </div>
                </div>
                <div className={`flex-1/2 bg-white px-5 py-8 rounded-2xl shadow flex justify-between h-fit items-center`}>
                    <p className="font-medium">¿Cambiar Contraseña?</p>
                    <button className="flex gap-2 w-fit items-center font-semibold shadow bg-[#222a3b] text-white rounded-xl px-4 py-2 hover:cursor-pointer hover:bg-[#19202e]">
                        <PencilSquareIcon className="h-5 w-5" />
                        Guardar
                    </button>
                </div>
            </form >
        </>
    )
}
