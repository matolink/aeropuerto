import { prisma } from '../utils/prisma.js'

export const postDB = async (req, res) => {
  await prisma.genero.createMany({
    data: [
      {
        nombre: "masculino",
      },
      {
        nombre: "femenino",
      },
      {
        nombre: "otro",
      },
    ],
  })
  await prisma.tipo_asientos.createMany({
    data: [
      {
        nombre: "primera fila",
      },
      {
        nombre: "extra espacio",
      },
      {
        nombre: "salida rápida",
      },
      {
        nombre: "más adelante",
      },
      {
        nombre: "estándar",
      },
    ],
  })
  await prisma.avion.createMany({
    data: [
      {
        nombre: "Airbus A320",
        cantidad_pasajeros_avion: 186,
      },
      {
        nombre: "Boeing 777-300ER",
        cantidad_pasajeros_avion: 300,
      },
    ],
  })
  await prisma.pais.createMany({
    data: [
      {
        nombre: "Chile",
      },
      {
        nombre: "Peru",
      },
      {
        nombre: "Ecuador",
      },
      {
        nombre: "Malasia",
      },
    ],
  })
  await prisma.aeropuerto.createMany({
    data: [
      {
        nombre: "Satiago",
        id_pais: 1,
      },
      {
        nombre: "Valdivia",
        id_pais: 1,
      },
      {
        nombre: "Cuzco",
        id_pais: 2,
      },
      {
        nombre: "Lima",
        id_pais: 2,
      },
      {
        nombre: "Ipoh",
        id_pais: 4,
      },
      {
        nombre: "George Town",
        id_pais: 4,
      },
      {
        nombre: "Quito",
        id_pais: 3,
      },
      {
        nombre: "Sto Domingo",
        id_pais: 3,
      },
    ],
  })
}
