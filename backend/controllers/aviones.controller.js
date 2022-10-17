import {prisma} from '../utils/prisma.js'

export const getAviones = async(req, res)=>{
    const avion = await prisma.avion.findMany()
    return avion
}

export const postAviones = async(req, res)=>{
    const avion = await prisma.avion.create({
        data:{
            nombre: req.body.nombre,
            cantidad_pasajeros_avion: parseInt(req.body.capacidad)
        },
    })
    return avion
}
