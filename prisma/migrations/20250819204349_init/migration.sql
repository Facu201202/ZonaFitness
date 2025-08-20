/*
  Warnings:

  - A unique constraint covering the columns `[n_comprobante]` on the table `Ventas` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `n_comprobante` to the `Ventas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ventas" ADD COLUMN     "n_comprobante" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Ventas_n_comprobante_key" ON "Ventas"("n_comprobante");
