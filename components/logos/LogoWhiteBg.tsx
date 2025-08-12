"use client"
import { Dumbbell } from "lucide-react"

export default function LogoWhiteBg() {
  return (
    <div className="text-center space-y-4">
      <div className="flex items-center justify-center gap-3 mb-4">
        {/* Icono decorativo izquierdo */}
        <div className="hidden sm:block w-12 h-0.5 bg-gradient-to-r from-transparent via-[#2D5DA2] to-[#303A49] rounded-full"></div>

        {/* Icono central */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2D5DA2] to-[#303A49] rounded-full blur-sm opacity-30"></div>
          <div className="relative bg-gradient-to-br from-[#2D5DA2] to-[#303A49] p-3 rounded-full shadow-lg">
            <Dumbbell className="h-6 w-6 text-white" />
          </div>
        </div>

        {/* Icono decorativo derecho */}
        <div className="hidden sm:block w-12 h-0.5 bg-gradient-to-l from-transparent via-[#303A49] to-[#2D5DA2] rounded-full"></div>
      </div>

      {/* Texto del logo */}
      <div className="relative">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          <span
            className="bg-gradient-to-r from-[#2D5DA2] via-[#303A49] to-[#2D5DA2] bg-clip-text text-transparent"
            style={{
              backgroundSize: "200% 100%",
              animation: "gradient-shift 3s ease-in-out infinite",
            }}
          >
            Zona
          </span>
          <span className="text-[#111827] ml-2">Fitness</span>
        </h1>

        {/* Línea decorativa debajo */}
        <div className="mt-3 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-[#2D5DA2] via-[#303A49] to-[#2D5DA2] rounded-full opacity-80 shadow-sm"></div>
        </div>
      </div>

      {/* Subtítulo */}
      <p className="mt-4 text-lg text-[#303A49]  tracking-wide font-medium">Ropa deportiva de calidad</p>

      {/* Estilos para la animación del gradiente */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  )
}
