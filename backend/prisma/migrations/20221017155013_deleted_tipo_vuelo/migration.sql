/*
  Warnings:

  - You are about to drop the column `id_tipo_vuelos` on the `Vuelo` table. All the data in the column will be lost.
  - You are about to drop the `Tipo_vuelos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Vuelo" DROP CONSTRAINT "Vuelo_id_tipo_vuelos_fkey";

-- AlterTable
ALTER TABLE "Vuelo" DROP COLUMN "id_tipo_vuelos";

-- DropTable
DROP TABLE "Tipo_vuelos";
