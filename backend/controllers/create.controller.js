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
  await prisma.tipo_tarifas.createMany({
    data: [
      {
        nombre: "tarifa económica",
      },
      {
        nombre: "tarifa normal",
      },
      {
        nombre: "tarifa premium",
      },
    ],
  })
  await prisma.tipo_equipajes.createMany({
    data: [
      {
        nombre: "equipaje de mano",
      },
      {
        nombre: "bolso de mano",
      },
      {
        nombre: "equipaje de bodega",
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
  await prisma.pasajero.createMany({
    data: [
      {
        num_documento: "191919191-3",
        nombre: "Eduardo",
        apellido: "Gatica",
        is_rut: true,
        fecha_nacimiento: new Date('1997-04-19'),
        id_genero: 1,
        numero_tel: '+569291623849'
      },
    ],
  })
}
