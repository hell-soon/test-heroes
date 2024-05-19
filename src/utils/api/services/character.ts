import type { AxiosInstance, AxiosPromise } from 'axios'
import type { Character, Response } from '@/types/models'
import type { FilterParams } from '@/types/models/filter'

export default (instance: AxiosInstance) => ({
  getCharacherList(params?: FilterParams): AxiosPromise< Response<Character> > {
    return instance.get('/character', { params })
  },
})
