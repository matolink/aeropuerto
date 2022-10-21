import { getVuelos, postVuelos } from '../controllers/vuelos.controller.js'
export const vueloRoutes = [
  {
    method: 'GET',
    url: '/vuelos',
    handler: getVuelos,
  },
  {
    method: 'POST',
    url: '/vuelos',
    handler: postVuelos,
  },
]
