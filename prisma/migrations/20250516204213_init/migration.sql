-- CreateTable
CREATE TABLE "Productos" (
    "id_producto" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "foto" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "id_categoria" INTEGER NOT NULL,

    CONSTRAINT "Productos_pkey" PRIMARY KEY ("id_producto")
);

-- AddForeignKey
ALTER TABLE "Productos" ADD CONSTRAINT "Productos_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "Categorias"("id_categoria") ON DELETE RESTRICT ON UPDATE CASCADE;
