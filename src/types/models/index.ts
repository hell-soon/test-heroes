import type { Character } from './charecter'

interface Response<T> {
  info: info
  results: T[]
}

interface info {
  count: number
  pages: number
  next: string
  prev: string
}

export type { Response, Character }
