import { getFormulario } from '../controllers/formulario.controller.js'
export const formularioRoutes = [
  {
    method: 'GET',
    url: '/busqueda',
    handler: getFormulario,
  },
  // {
  //   method: 'POST',
  //   url: '/busqueda',
  //   handler: postAviones,
  // },
]
