"use client"
import { UserIcon, PencilSquareIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline"
import { useForm } from "react-hook-form"
import { useSearchParams } from 'next/navigation'
import ErrorMessage from "../ErrorMessage"
import { toast } from "react-toastify"
import { ProfileUserData, ProfileUserDataForm } from "@/src/types"

export default function ProfileUserForm({ userData }: { userData: ProfileUserData }) {
    const searchParams = useSearchParams();
    const editUser = +searchParams.get('editUser')!
    const editUserActive = editUser === 1 ? true : false
    const { register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm<ProfileUserDataForm>()
    const changeUserInfo = async (data: ProfileUserDataForm) => {
        clearErrors()
        const res = await fetch("/tienda/perfil/api/editUser", {
            method: "POST",
            body: JSON.stringify({ ...data, id_usuario: userData.id_usuario, id_cliente: userData.id_cliente })
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
        setTimeout(() => {
                location.href = window.location.pathname;
            }, 2000);
    }
    return (
        <>
            <form className=" flex flex-col gap-3" onSubmit={handleSubmit(changeUserInfo)}>
                <div className="lg:flex gap-3">
                    <div className="mb-5 bg-white px-5 py-8 rounded-2xl shadow flex-auto">
                        <div className="flex gap-2 text-xl mb-5">
                            <UserIcon className="h-5 w-5 self-center" />
                            <p className="font-medium">Información Personal</p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex flex-col gap-2 font-semibold">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" disabled={!editUserActive} id="nombre" className={`border ${editUserActive ? "border-gray-400 " : "border-gray-200 text-gray-400 pointer-events-none"} p-2 rounded-lg`} defaultValue={userData.cliente.nombre} {...register("nombre", {
                                    required: "El nombre es obligatorio",
                                    pattern: {
                                        value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                                        message: "Solo se permiten letras y espacios"
                                    }
                                })} />
                                {errors.nombre && (
                                    <ErrorMessage>{errors.nombre?.message?.toString()}</ErrorMessage>
                                )}

                            </div>
                            <div className="flex flex-col gap-2 font-semibold">
                                <label htmlFor="apellido">Apellido</label>
                                <input type="text" id="apellido" disabled={!editUserActive} className={`border ${editUserActive ? "border-gray-400 " : "border-gray-200 text-gray-400 pointer-events-none"} p-2 rounded-lg`} defaultValue={userData.cliente.apellido} {...register("apellido", {
                                    required: "El apellido es obligatorio",
                                    pattern: {
                                        value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                                        message: "Solo se permiten letras y espacios"
                                    }
                                })} />
                                {errors.apellido && (
                                    <ErrorMessage>{errors.apellido?.message?.toString()}</ErrorMessage>
                                )}
                            </div>
                            <div className="flex flex-col gap-2 font-semibold">
                                <label htmlFor="dni">DNI</label>
                                <input type="text" id="dni" disabled={!editUserActive} className={`border ${editUserActive ? "border-gray-400 " : "border-gray-200 text-gray-400 pointer-events-none"} p-2 rounded-lg`} defaultValue={userData.cliente.dni} {...register("dni", {
                                    required: "El DNI es obligatorio",
                                    pattern: {
                                        value: /^[0-9]{7,8}$/,
                                        message: "El DNI debe tener 7 u 8 dígitos numéricos"
                                    }
                                })} />
                                {errors.dni && (
                                    <ErrorMessage>{errors.dni?.message?.toString()}</ErrorMessage>
                                )}
                            </div>
                            <div className="flex flex-col gap-2 font-semibold">
                                <label htmlFor="usuario">Nombre de Usuario</label>
                                <input type="text" id="usuario" disabled={!editUserActive} className={`border ${editUserActive ? "border-gray-400 " : "border-gray-200 text-gray-400 pointer-events-none"} p-2 rounded-lg`} defaultValue={userData.usuario} {...register("usuario", {
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
                                    <ErrorMessage>{errors.usuario?.message?.toString()}</ErrorMessage>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="mb-5 bg-white px-5 py-8 rounded-2xl shadow flex-1/3 h-fit">
                        <div className="flex gap-2 text-xl mb-5">
                            <EnvelopeIcon className="h-5 w-5 self-center" />
                            <p className="font-medium">Información de Contacto</p>
                        </div>
                        <div className="flex flex-col gap-2 font-semibold">
                            <label htmlFor="correo">Correo Electrónico</label>
                            <input type="email" id="correo" disabled={!editUserActive} className={`border ${editUserActive ? "border-gray-400 " : "border-gray-200 text-gray-400 pointer-events-none"} p-2 rounded-lg`} defaultValue={userData.cliente.correo} {...register("correo", {
                                required: "El correo es obligatorio",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Formato de correo no válido"
                                }
                            })} />
                            {errors.correo && (
                                <ErrorMessage>{errors.correo?.message?.toString()}</ErrorMessage>
                            )}
                        </div>
                    </div>
                </div>
                <div className="lg:flex gap-3">
                    <div className="mb-5 bg-white px-5 py-8 rounded-2xl shadow flex-auto">
                        <div className="flex gap-2 text-xl mb-5">
                            <MapPinIcon className="h-5 w-5 self-center" />
                            <p className="font-medium">Dirección</p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex flex-col gap-2 font-semibold">
                                <label htmlFor="ciudad">Ciudad</label>
                                <input type="text" id="ciudad" disabled={!editUserActive} className={`border ${editUserActive ? "border-gray-400 " : "border-gray-200 text-gray-400 pointer-events-none"} p-2 rounded-lg`} defaultValue={userData.cliente.ciudad} {...register("ciudad", {
                                    required: "El nombre de la ciudad es obligatorio",
                                    minLength: { value: 2, message: "La ciudad debe tener más de 2 caracteres" },
                                    maxLength: { value: 15, message: "La ciudad debe tener menos de 15 caracteres" }
                                })} />
                                {errors.ciudad && (
                                    <ErrorMessage>{errors.ciudad?.message?.toString()}</ErrorMessage>
                                )}
                            </div>
                            <div className="flex flex-col gap-2 font-semibold">
                                <label htmlFor="barrio">Barrio</label>
                                <input type="text" id="barrio" disabled={!editUserActive} className={`border ${editUserActive ? "border-gray-400 " : "border-gray-200 text-gray-400 pointer-events-none"} p-2 rounded-lg`} defaultValue={userData.cliente.barrio} {...register("barrio", {
                                    required: "El barrio es obligatorio",
                                    minLength: { value: 2, message: "El nombre del barrio debe tener más de 2 caracteres" },
                                    maxLength: { value: 20, message: "El nombre del barrio debe tener menos de 20 caracteres" }
                                })} />
                                {errors.barrio && (
                                    <ErrorMessage>{errors.barrio?.message?.toString()}</ErrorMessage>
                                )}
                            </div>
                            <div className="flex flex-col gap-2 font-semibold col-span-2">
                                <label htmlFor="calle">Calle y Número</label>
                                <input type="text" id="calle" disabled={!editUserActive} className={`border ${editUserActive ? "border-gray-400 " : "border-gray-200 text-gray-400 pointer-events-none"} p-2 rounded-lg`} defaultValue={userData.cliente.calle} {...register("calle", {
                                    required: "El nombre de la calle es obligatorio",
                                    minLength: { value: 2, message: "El nombre de la calle debe tener más de 2 caracteres" },
                                    maxLength: { value: 30, message: "El nomber de la calle debe tener menos de 30 caracteres" }
                                })} />
                                {errors.calle && (
                                    <ErrorMessage>{errors.calle?.message?.toString()}</ErrorMessage>
                                )}
                            </div>
                        </div>
                    </div>


                </div>
                <div className={`${editUserActive ? "flex justify-end" : "hidden"}`}>
                    <button className="flex gap-2 w-fit items-center font-semibold shadow bg-[#222a3b] text-white rounded-xl px-4 py-2 hover:cursor-pointer hover:bg-[#19202e]">
                        <PencilSquareIcon className="h-5 w-5" />
                        Guardar
                    </button>
                </div>
            </form>
        </>
    )
}