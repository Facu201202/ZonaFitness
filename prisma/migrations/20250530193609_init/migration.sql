-- CreateTable
CREATE TABLE "Usuarios" (
    "id_usuario" SERIAL NOT NULL,
    "usuario" TEXT NOT NULL,
    "contraseña" TEXT NOT NULL,
    "id_cliente" INTEGER NOT NULL,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "Clientes" (
    "id_cliente" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "dni" INTEGER NOT NULL,
    "ciudad" TEXT NOT NULL,
    "barrio" TEXT NOT NULL,
    "calle" TEXT NOT NULL,

    CONSTRAINT "Clientes_pkey" PRIMARY KEY ("id_cliente")
);

-- AddForeignKey
ALTER TABLE "Usuarios" ADD CONSTRAINT "Usuarios_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Clientes"("id_cliente") ON DELETE RESTRICT ON UPDATE CASCADE;
