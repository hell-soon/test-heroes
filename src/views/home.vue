<script setup lang="ts">
import CardGrid from '@/components/home/card-grid.vue'
import Pagination from '@/components/shared/pagination.vue'
import FilterGroup from '@/components/home/filter-group.vue'

import { useCharacterListStore } from '@/stores/character'

const store = useCharacterListStore()

watch(() => store.params.page, () => {
  store.fetchCharacterList(store.params)
})

store.fetchCharacterList()
</script>

<template>
  <main class="container">
    <FilterGroup />
    <div>
      <CardGrid />
      <Pagination />
    </div>
  </main>
</template>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 10px;
}
</style>
