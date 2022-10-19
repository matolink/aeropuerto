import { getVuelos } from '../controllers/vuelos.controller.js'
export const vueloRoutes = [
  {
    method: 'GET',
    url: '/vuelos',
    handler: getVuelos,
  },
]
