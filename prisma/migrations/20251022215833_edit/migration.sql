/*
  Warnings:

  - Added the required column `id_producto` to the `Ventas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ventas" ADD COLUMN     "id_producto" INTEGER NOT NULL;
