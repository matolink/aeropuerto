import { prisma } from '../utils/prisma.js'

// export const getFormulario = async (req, res) => {
//   const paises = await prisma.pais.findMany()
//   const aeropuertos = await Promise.all(
//     paises.map(async (e) => {
//       let inserts = await prisma.aeropuerto.findMany({
//         where: {
//           id_pais: e.id,
//         },
//       })
//       return { [e.nombre]: inserts }
//     })
//   )
//   return aeropuertos
// }

export const getVuelos = async (req, res) => {
  const aeropuertos = await prisma.aeropuerto.findMany()
  const paises = await Promise.all(
    aeropuertos.map(async (e) => {
      let inserts = await prisma.pais.findUnique({
        where: {
          id: e.id_pais,
        },
      })
      return {
        id: e.id,
        nombre: `${e.nombre} - ${inserts.nombre}`,
        id_pais: e.id_pais,
      }
    })
  )
  return paises
}

export const postVuelos = async (req, res) => {
  let id_avion = 2
  if (req.body.id_pais_salida === req.body.id_pais_llegada) {
    id_avion = 1
  }
  try {
    const crearVuelo = await prisma.vuelo.create({
      data: {
        id_aero_salida: Number(req.body.id_aero_salida),
        id_aero_llegada: Number(req.body.id_aero_llegada),
        fecha_salida: new Date(req.body.fecha_salida),
        fecha_llegada: new Date(req.body.fecha_llegada),
        id_avion: id_avion,
      },
    })
        res.status(200)
        return crearVuelo
  } catch (error) {
        res.status(400)
        res.send(error)
        console.error(error)
        return
    }
}
