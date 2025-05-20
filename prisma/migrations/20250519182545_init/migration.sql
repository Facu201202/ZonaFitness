-- CreateTable
CREATE TABLE "Sizes" (
    "id_talle" SERIAL NOT NULL,
    "talle" TEXT NOT NULL,
    "categoria_talle" TEXT NOT NULL,

    CONSTRAINT "Sizes_pkey" PRIMARY KEY ("id_talle")
);
