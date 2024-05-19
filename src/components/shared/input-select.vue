<script setup lang="ts">
import type { FilterParams } from '../../types/models/filter'
import { useCharacterListStore } from '@/stores/character'

const props = defineProps<{ paramName: keyof FilterParams, options: string[] }>()

const store = useCharacterListStore()

if (props.paramName === 'status')
  store.params[props.paramName] = ''
</script>

<template>
  <div class="select-container">
    <select v-model="store.params[paramName]">
      <option value="" selected>
        <span>All</span>
      </option>
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<style scoped lang="scss">
.select-container {
  width: 100%;
  position: relative;
  display: inline-block;
  overflow: hidden;
  border: 1px solid #515151;
  border-radius: 4px;

  select {
    background: transparent;
    width: 100%;
    border: none;
    outline: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding: 10px 30px 10px 10px;
    color: white;
    font-size: 16px;
    cursor: pointer;

    option {
      color: black;
    }
  }
}
</style>
