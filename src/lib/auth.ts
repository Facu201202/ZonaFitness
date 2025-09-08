import jwt from "jsonwebtoken"
import { Usuarios } from "../generated/prisma"

const secret = process.env.JWT_SECRET

export const generateJwt = (id: Usuarios["id_usuario"], rol: Usuarios["rol"], user: Usuarios["usuario"]) => {
    const payload = {id_usuario: id, rol: rol, usuario: user}

    if(secret) return jwt.sign(payload, secret, {expiresIn: "7d"})
}