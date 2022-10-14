import { getAviones } from '../controllers/aviones.controller.js'
  export const route = {
    method: 'GET',
    url: '/aviones',
    schema: {
      querystring: {
        name: { type: 'string' },
        excitement: { type: 'integer' },
      },
      response: {
        200: {
          type: 'object',
          properties: {
            hello: { type: 'string' },
          },
        },
      },
    },
    handler: function (request, reply) {
      reply.send({ hello: 'world' })
    },
  }
