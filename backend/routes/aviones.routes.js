import { getAviones, postAviones } from '../controllers/aviones.controller.js'
export const avionesRoutes = [
  {
    method: 'GET',
    url: '/aviones',
    handler: getAviones,
  },
  {
    method: 'POST',
    url: '/aviones',
    handler: postAviones,
  },
]
