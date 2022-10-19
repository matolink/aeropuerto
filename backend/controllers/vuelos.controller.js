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
      return { id: e.id, nombre: `${e.nombre} - ${inserts.nombre}` }
    })
  )
  return paises
}
