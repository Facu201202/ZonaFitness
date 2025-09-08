/*
  Warnings:

  - Added the required column `metodo_entrega` to the `Ventas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `metodo_pago` to the `Ventas` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MetodoEnvio" AS ENUM ('SUCURSAL', 'DOMICILIO');

-- CreateEnum
CREATE TYPE "MetodoPago" AS ENUM ('DINERO_EN_CUENTA');

-- AlterTable
ALTER TABLE "Ventas" ADD COLUMN     "metodo_entrega" "MetodoEnvio" NOT NULL,
ADD COLUMN     "metodo_pago" "MetodoPago" NOT NULL;
