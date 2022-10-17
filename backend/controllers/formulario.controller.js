import { prisma } from '../utils/prisma.js'

export const getFormulario = async (req, res) => {
  const paises = await prisma.pais.findMany()
  const aeropuertos = await Promise.all(
    paises.map(async (e) => {
      let inserts = await prisma.aeropuerto.findMany({
        where: {
          id_pais: e.id,
        },
      })
      return { [e.nombre]: inserts }
    })
  )
  return aeropuertos
}

export const postFormulario = async (req, res) => {}
