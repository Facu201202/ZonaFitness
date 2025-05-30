-- CreateTable
CREATE TABLE "Stock" (
    "id_stock" SERIAL NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "id_producto" INTEGER NOT NULL,
    "id_talle" INTEGER NOT NULL,

    CONSTRAINT "Stock_pkey" PRIMARY KEY ("id_stock")
);

-- AddForeignKey
ALTER TABLE "Stock" ADD CONSTRAINT "Stock_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "Productos"("id_producto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stock" ADD CONSTRAINT "Stock_id_talle_fkey" FOREIGN KEY ("id_talle") REFERENCES "Sizes"("id_talle") ON DELETE RESTRICT ON UPDATE CASCADE;
