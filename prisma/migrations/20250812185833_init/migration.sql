-- CreateTable
CREATE TABLE "Saldos" (
    "id_saldo" SERIAL NOT NULL,
    "saldo" DOUBLE PRECISION NOT NULL,
    "id_usuario" INTEGER NOT NULL,

    CONSTRAINT "Saldos_pkey" PRIMARY KEY ("id_saldo")
);

-- CreateTable
CREATE TABLE "Ventas" (
    "id_venta" SERIAL NOT NULL,
    "cantida" INTEGER NOT NULL,
    "precio_total" DOUBLE PRECISION NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "talle" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "id_comentario" INTEGER,
    "id_publicacion" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,

    CONSTRAINT "Ventas_pkey" PRIMARY KEY ("id_venta")
);

-- AddForeignKey
ALTER TABLE "Saldos" ADD CONSTRAINT "Saldos_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuarios"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ventas" ADD CONSTRAINT "Ventas_id_publicacion_fkey" FOREIGN KEY ("id_publicacion") REFERENCES "Publicaciones"("id_publicacion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ventas" ADD CONSTRAINT "Ventas_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuarios"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
