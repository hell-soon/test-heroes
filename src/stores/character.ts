import type { Character, Response } from '@/types/models'
import type { FilterParams } from '@/types/models/filter'

//* --- State ----------------------------------------------- *//
interface CharacterListState {
  res: Response<Character> | null
  characterList: Character[] | null
  params: FilterParams
  error: unknown
}

//* --- Store ----------------------------------------------- *//
export const useCharacterListStore = defineStore('character', {
  state: (): CharacterListState => ({
    res: null,
    characterList: null,
    params: {
      page: 1,
    },
    error: null,
  }),

  actions: {
    async fetchCharacterList(params?: FilterParams) {
      try {
        const response = await api.character.getCharacherList(params)
        this.res = response.data
        this.characterList = response.data.results
      }
      catch (error) {
        this.error = error

        if (this.params.page! > 1)
          this.params.page = 1
        else
          this.res = null
      }
    },
  },
})
