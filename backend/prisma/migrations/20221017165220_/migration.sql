/*
  Warnings:

  - A unique constraint covering the columns `[nombre]` on the table `Aeropuerto` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nombre]` on the table `Avion` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nombre]` on the table `Genero` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nombre]` on the table `Pais` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nombre]` on the table `Tipo_asientos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nombre]` on the table `Tipo_equipajes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nombre]` on the table `Tipo_tarifas` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Pasajero" ALTER COLUMN "fecha_nacimiento" SET DATA TYPE TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "Aeropuerto_nombre_key" ON "Aeropuerto"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Avion_nombre_key" ON "Avion"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Genero_nombre_key" ON "Genero"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Pais_nombre_key" ON "Pais"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Tipo_asientos_nombre_key" ON "Tipo_asientos"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Tipo_equipajes_nombre_key" ON "Tipo_equipajes"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Tipo_tarifas_nombre_key" ON "Tipo_tarifas"("nombre");
