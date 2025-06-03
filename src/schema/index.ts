import { z } from "zod"

export const registerFormSchema = z.object({
    nombre: z.string().min(1, "El nombre es obligatorio"),
    apellido: z.string().min(1, "El apellido es obligatorio"),
    dni: z.string()
        .min(1, "El DNI es obligatorio")
        .regex(/^[0-9]{7,8}$/, "El DNI debe tener 7 u 8 dígitos numéricos"),
    usuario: z.string().min(1, "El nomber de usuario es obligatorio")
        .min(6, "El nombre de usuario debe tener 6 a 10 caracteres")
        .max(10, "El nombre de usuario debe tener 6 a 10 caracteres"),
    correo: z.string().email("Formato de correo no válido"),
    ciudad: z.string()
        .min(2,"La ciudad debe tener más de 2 caracteres")
        .max(15, "La ciudad debe tener menos de 15 caracteres"),
    barrio: z.string()
        .min(2, "El nombre del barrio debe tener más de 2 caracteres")
        .max(20, "El nombre del barrio debe tener menos de 20 caracteres"),
    calle: z.string()
        .min(2, "El nombre de la calle debe tener más de 2 caracteres")
        .max(30, "El nomber de la calle debe tener menos de 30 caracteres"),
    contraseña: z.string()
        .min(8, "Debe tener al menos 8 caracteres")
        .max(20, "Debe tener menos de 20 caracteres")
        .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[a-z]).{8,}$/, "Debe tener mayúsculas, minúsculas y números"),
    comfirmarContraseña: z.string()
        .min(8, "Se debe confirmar la contraseña")
})

export const registerUserSchema = registerFormSchema.pick({usuario: true, contraseña: true}).extend({rol: z.string()})
export const registerClientSchema = registerFormSchema.omit({comfirmarContraseña: true, usuario: true, contraseña: true, })

export type RegisterForm = z.infer<typeof registerFormSchema>
export type RegisterUser = z.infer<typeof registerUserSchema>
export type RegisterClient = z.infer<typeof registerClientSchema>