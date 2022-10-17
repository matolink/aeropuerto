import { postDB } from '../controllers/create.controller.js'
export const createRoutes = [
  {
    method: 'POST',
    url: '/database',
    handler: postDB,
  },
]
