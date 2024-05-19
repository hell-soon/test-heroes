<script setup lang="ts">
import type { FilterParams } from '../../types/models/filter'
import { useCharacterListStore } from '@/stores/character'

defineProps<{ label: string, paramName: keyof FilterParams }>()

const store = useCharacterListStore()
</script>

<template>
  <div class="input-container">
    <input
      id="input-field"
      v-model="store.params[paramName]"
      type="text"
      required
    >
    <label for="input-field">{{ label }}</label>
  </div>
</template>

<style scoped lang="scss">
.input-container {
  position: relative;
  width: 100%;

  input {
    border: 0;
    border-bottom: 2px solid #515151;
    outline: none;
    transition: border-color 0.2s;
    background: transparent;
    color: white;
    padding: 5px 0;
    font-size: 16px;
    width: 100%;

    &:focus {
      border-color: white;
      & ~ label {
        top: -20px;
        font-size: 12px;
        color: white;
      }
    }

    &:valid ~ label {
      top: -20px;
      font-size: 12px;
      color: white;
    }
  }

  label {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    transition: all 0.2s;
    color: #999;
    font-size: 16px;
  }
}
</style>
