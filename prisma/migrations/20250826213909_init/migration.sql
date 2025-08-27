/*
  Warnings:

  - The `estado` column on the `Ventas` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "EstadoEnvio" AS ENUM ('PENDIENTE', 'APROBADO', 'EN_CAMINO', 'ENTREGADO', 'CANCELADO');

-- AlterTable
ALTER TABLE "Ventas" DROP COLUMN "estado",
ADD COLUMN     "estado" "EstadoEnvio" NOT NULL DEFAULT 'PENDIENTE';
