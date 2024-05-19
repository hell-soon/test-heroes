<script setup lang="ts">
import { useCharacterListStore } from '@/stores/character'

defineProps<{ initialPage?: number }>()
const emit = defineEmits<{ 'update:currentPage': [page: number] }>()

const store = useCharacterListStore()

async function fetchCharacters(page: number) {
  try {
    store.params.page = page
    await store.fetchCharacterList(store.params)
    emit('update:currentPage', store.params.page)
  }
  catch (error) {
    console.error('Ошибка при загрузке данных:', error)
  }
}

onMounted(() => fetchCharacters(store.params.page!))
</script>

<template>
  <div v-if="store.res?.info.pages! > 1" class="pagination">
    <button :disabled="store.params.page === 1" @click="fetchCharacters(store.params.page! - 1)">
      Назад
    </button>
    <span class="footnote" v-html="store.params.page" />
    <button :disabled="store.params.page === store.res?.info.pages" @click="fetchCharacters(store.params.page! + 1)">
      Вперед
    </button>
  </div>
</template>

<style scoped lang="scss">
.pagination {
  color: white;
  margin: 1.5rem;
  margin-inline: auto;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  span {
    border: 1px solid white;
    padding: 0.2rem 1rem;
    border-radius: 0.25rem;
  }

  button {
    color: white;
    background-color: transparent;
    border: 1px solid white;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}
</style>
