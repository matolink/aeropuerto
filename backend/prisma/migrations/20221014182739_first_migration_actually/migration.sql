-- CreateTable
CREATE TABLE "Pais" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Pais_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aeropuerto" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "id_pais" INTEGER NOT NULL,

    CONSTRAINT "Aeropuerto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tipo_vuelos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Tipo_vuelos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tipo_asientos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Tipo_asientos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tipo_equipajes" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Tipo_equipajes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genero" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Genero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tipo_tarifas" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Tipo_tarifas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pasajero" (
    "num_documento" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "is_rut" BOOLEAN NOT NULL,
    "fecha_nacimiento" TIMESTAMP(3) NOT NULL,
    "id_genero" INTEGER NOT NULL,
    "numero_tel" INTEGER NOT NULL,

    CONSTRAINT "Pasajero_pkey" PRIMARY KEY ("num_documento")
);

-- CreateTable
CREATE TABLE "Vuelo" (
    "id" SERIAL NOT NULL,
    "id_tipo_vuelos" INTEGER NOT NULL,
    "id_aero_salida" INTEGER NOT NULL,
    "id_aero_llegada" INTEGER NOT NULL,
    "fecha_salida" TIMESTAMP(3) NOT NULL,
    "fecha_llegada" TIMESTAMP(3) NOT NULL,
    "id_avion" INTEGER NOT NULL,

    CONSTRAINT "Vuelo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aeropuerto_vuelo" (
    "id_aeropuerto" INTEGER NOT NULL,
    "id_vuelo" INTEGER NOT NULL,

    CONSTRAINT "Aeropuerto_vuelo_pkey" PRIMARY KEY ("id_vuelo","id_aeropuerto")
);

-- CreateTable
CREATE TABLE "Vuelo_tipos_asiento" (
    "id_vuelo" INTEGER NOT NULL,
    "id_tipo_asiento" INTEGER NOT NULL,

    CONSTRAINT "Vuelo_tipos_asiento_pkey" PRIMARY KEY ("id_vuelo","id_tipo_asiento")
);

-- CreateTable
CREATE TABLE "Pasaje" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "id_tipo_tarifas" INTEGER NOT NULL,
    "id_vuelo" INTEGER NOT NULL,
    "num_documento_pas" TEXT NOT NULL,
    "id_tipo_asiento" INTEGER NOT NULL,

    CONSTRAINT "Pasaje_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Aeropuerto" ADD CONSTRAINT "Aeropuerto_id_pais_fkey" FOREIGN KEY ("id_pais") REFERENCES "Pais"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pasajero" ADD CONSTRAINT "Pasajero_id_genero_fkey" FOREIGN KEY ("id_genero") REFERENCES "Genero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vuelo" ADD CONSTRAINT "Vuelo_id_tipo_vuelos_fkey" FOREIGN KEY ("id_tipo_vuelos") REFERENCES "Tipo_vuelos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vuelo" ADD CONSTRAINT "Vuelo_id_avion_fkey" FOREIGN KEY ("id_avion") REFERENCES "Avion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aeropuerto_vuelo" ADD CONSTRAINT "Aeropuerto_vuelo_id_vuelo_fkey" FOREIGN KEY ("id_vuelo") REFERENCES "Vuelo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aeropuerto_vuelo" ADD CONSTRAINT "Aeropuerto_vuelo_id_aeropuerto_fkey" FOREIGN KEY ("id_aeropuerto") REFERENCES "Aeropuerto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vuelo_tipos_asiento" ADD CONSTRAINT "Vuelo_tipos_asiento_id_vuelo_fkey" FOREIGN KEY ("id_vuelo") REFERENCES "Vuelo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vuelo_tipos_asiento" ADD CONSTRAINT "Vuelo_tipos_asiento_id_tipo_asiento_fkey" FOREIGN KEY ("id_tipo_asiento") REFERENCES "Tipo_asientos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pasaje" ADD CONSTRAINT "Pasaje_id_tipo_asiento_fkey" FOREIGN KEY ("id_tipo_asiento") REFERENCES "Tipo_asientos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pasaje" ADD CONSTRAINT "Pasaje_num_documento_pas_fkey" FOREIGN KEY ("num_documento_pas") REFERENCES "Pasajero"("num_documento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pasaje" ADD CONSTRAINT "Pasaje_id_vuelo_fkey" FOREIGN KEY ("id_vuelo") REFERENCES "Vuelo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pasaje" ADD CONSTRAINT "Pasaje_id_tipo_tarifas_fkey" FOREIGN KEY ("id_tipo_tarifas") REFERENCES "Tipo_tarifas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
