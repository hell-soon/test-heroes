<script setup lang="ts">
import card from '@/components/shared/card.vue'
import { useCharacterListStore } from '@/stores/character'

const store = useCharacterListStore()
</script>

<template>
  <div v-if="store.res !== null" class="card-grid">
    <card
      v-for="item in store.characterList"
      :key="item.id"
      :item="item"
    />
  </div>
  <div v-else class="card-grid">
    <h2>There is nothing here</h2>
  </div>
</template>

<style scoped lang="scss">
.card-grid {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
