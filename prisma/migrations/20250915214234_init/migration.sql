-- CreateTable
CREATE TABLE "Favoritos" (
    "id_favorito" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_publicacion" INTEGER NOT NULL,

    CONSTRAINT "Favoritos_pkey" PRIMARY KEY ("id_favorito")
);

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

-- CreateIndex
CREATE UNIQUE INDEX "Favoritos_id_usuario_id_publicacion_key" ON "Favoritos"("id_usuario", "id_publicacion");

-- AddForeignKey
ALTER TABLE "Favoritos" ADD CONSTRAINT "Favoritos_id_publicacion_fkey" FOREIGN KEY ("id_publicacion") REFERENCES "Publicaciones"("id_publicacion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favoritos" ADD CONSTRAINT "Favoritos_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuarios"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Opiniones" ADD CONSTRAINT "Opiniones_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuarios"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Opiniones" ADD CONSTRAINT "Opiniones_id_venta_fkey" FOREIGN KEY ("id_venta") REFERENCES "Ventas"("id_venta") ON DELETE RESTRICT ON UPDATE CASCADE;
