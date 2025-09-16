-- CreateTable
CREATE TABLE "Opiniones" (
    "id_opinion" SERIAL NOT NULL,
    "calificacion" DOUBLE PRECISION NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "comentario" TEXT NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_venta" INTEGER NOT NULL,

    CONSTRAINT "Opiniones_pkey" PRIMARY KEY ("id_opinion")
);

-- AddForeignKey
ALTER TABLE "Opiniones" ADD CONSTRAINT "Opiniones_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuarios"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Opiniones" ADD CONSTRAINT "Opiniones_id_venta_fkey" FOREIGN KEY ("id_venta") REFERENCES "Ventas"("id_venta") ON DELETE RESTRICT ON UPDATE CASCADE;
