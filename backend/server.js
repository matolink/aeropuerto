import { fastify } from 'fastify'
import { avionesRouter } from './routes/aviones.routes.js'
// Require the framework and instantiate it
const server = fastify({ logger: true })

await server.register(avionesRouter)
// Declare a route
// server.get('/', async (request, reply) => {
//   return { hello: 'world' }
// })
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
