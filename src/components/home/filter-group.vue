<script setup lang="ts">
import InputText from '@/components/shared/input-text.vue'
import InputSelect from '@/components/shared/input-select.vue'
import { useCharacterListStore } from '@/stores/character'

const options = ['Alive', 'Dead', 'unknown']

const store = useCharacterListStore()
</script>

<template>
  <div class="filter-group">
    <InputText label="Search by name" param-name="name" />
    <InputSelect param-name="status" :options="options" />
    <button class="button" @click="store.fetchCharacterList(store.params)">
      Применить
    </button>
  </div>
</template>

<style scoped lang="scss">
.filter-group {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 200px;
  gap: 1rem;
  width: 100%;
}

.button {
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  background-color: #515151;
  color: white;
  cursor: pointer;

  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #6b6b6b;
  }

  &:active {
    background-color: #515151;
  }
}
</style>
