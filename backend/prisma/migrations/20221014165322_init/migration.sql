-- CreateTable
CREATE TABLE "Avion" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "cantidad_pasajeros_avion" INTEGER NOT NULL,

    CONSTRAINT "Avion_pkey" PRIMARY KEY ("id")
);
