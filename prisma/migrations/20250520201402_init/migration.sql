-- CreateTable
CREATE TABLE "Publicaciones" (
    "id_publicacion" SERIAL NOT NULL,
    "activa" BOOLEAN NOT NULL,
    "caracteristicas" TEXT NOT NULL,
    "descuento" INTEGER NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "id_producto" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Publicaciones_pkey" PRIMARY KEY ("id_publicacion")
);

-- AddForeignKey
ALTER TABLE "Publicaciones" ADD CONSTRAINT "Publicaciones_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "Productos"("id_producto") ON DELETE RESTRICT ON UPDATE CASCADE;
