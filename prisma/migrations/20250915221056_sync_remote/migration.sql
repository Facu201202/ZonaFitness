/*
  Warnings:

  - You are about to drop the `Opiniones` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Opiniones" DROP CONSTRAINT "Opiniones_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "Opiniones" DROP CONSTRAINT "Opiniones_id_venta_fkey";

-- DropTable
DROP TABLE "Opiniones";
