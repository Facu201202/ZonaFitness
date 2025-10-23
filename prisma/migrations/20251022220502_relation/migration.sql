-- AddForeignKey
ALTER TABLE "Ventas" ADD CONSTRAINT "Ventas_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "Productos"("id_producto") ON DELETE RESTRICT ON UPDATE CASCADE;
