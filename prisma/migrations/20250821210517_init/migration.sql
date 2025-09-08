/*
  Warnings:

  - You are about to drop the column `cantida` on the `Ventas` table. All the data in the column will be lost.
  - Added the required column `cantidad` to the `Ventas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ventas" DROP COLUMN "cantida",
ADD COLUMN     "cantidad" INTEGER NOT NULL;
