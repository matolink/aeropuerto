import { fastify } from 'fastify'
import { avionesRoutes } from './routes/aviones.routes.js'
import { createRoutes } from './routes/create.routes.js'
// import { avionesRouter } from './routes/aviones.routes.js'
const server = fastify({ logger: true })

// Declare a route
server.get('/', async (request, reply) => {
  return { hello: 'world' }
})

avionesRoutes.forEach(route => {
  server.route(route)
})
createRoutes.forEach(route => {
  server.route(route)
})
//
// server.get('/a', async (request, reply) => {
//   return { hello: 'world' }
// })

// Run the server!
const start = async () => {
  try {
    await server.listen(3000, '0.0.0.0')
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
start()
