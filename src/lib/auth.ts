import jwt from "jsonwebtoken"
import { Usuarios } from "../generated/prisma"

const secret = process.env.JWT_SECRET

export const generateJwt = (id: Usuarios["id_usuario"], rol: Usuarios["rol"]) => {
    const payload = {id_usuario: id, rol: rol}

    if(secret) return jwt.sign(payload, secret, {expiresIn: "7d"})
}