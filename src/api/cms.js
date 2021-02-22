import { get, post } from '../plugins/api'

export const contentApi = {
  create: (obj) => post('/api/contents', obj),
  get: (id) => get(`/api/contents/${id}`)
}
