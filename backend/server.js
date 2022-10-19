import { fastify } from 'fastify'
import { avionesRoutes } from './routes/aviones.routes.js'
import { createRoutes } from './routes/create.routes.js'
import { formularioRoutes } from './routes/formulario.routes.js'
import { vueloRoutes } from './routes/vuelos.routes.js'
import cors from '@fastify/cors'
const server = fastify({ logger: true })
server.register(cors, {})

avionesRoutes.forEach((route) => {
  server.route(route)
})
vueloRoutes.forEach((route) => {
  server.route(route)
})
createRoutes.forEach((route) => {
  server.route(route)
})
formularioRoutes.forEach((route) => {
  server.route(route)
})
const start = async () => {
  try {
    await server.listen(3000, '0.0.0.0')
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
start()
