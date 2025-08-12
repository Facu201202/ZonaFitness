/*
  Warnings:

  - A unique constraint covering the columns `[correo]` on the table `Clientes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[dni]` on the table `Clientes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[usuario]` on the table `Usuarios` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Clientes_correo_key" ON "Clientes"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "Clientes_dni_key" ON "Clientes"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_usuario_key" ON "Usuarios"("usuario");
