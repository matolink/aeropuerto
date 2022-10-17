-- CreateTable
CREATE TABLE "Tipo_equipajes_pasajes" (
    "id_pasaje" INTEGER NOT NULL,
    "id_tipo_equipajes" INTEGER NOT NULL,

    CONSTRAINT "Tipo_equipajes_pasajes_pkey" PRIMARY KEY ("id_pasaje","id_tipo_equipajes")
);

-- AddForeignKey
ALTER TABLE "Tipo_equipajes_pasajes" ADD CONSTRAINT "Tipo_equipajes_pasajes_id_pasaje_fkey" FOREIGN KEY ("id_pasaje") REFERENCES "Pasaje"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tipo_equipajes_pasajes" ADD CONSTRAINT "Tipo_equipajes_pasajes_id_tipo_equipajes_fkey" FOREIGN KEY ("id_tipo_equipajes") REFERENCES "Tipo_equipajes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
