<script setup lang="ts">
import { Ref, ref } from 'vue';

defineProps<{
  modelValue: boolean,
  id: string,
  errored?: boolean,
}>();
defineEmits<{
  (event: 'update:modelValue', checkboxState: boolean): void;
}>();

const checkbox: Ref<HTMLInputElement | null> = ref(null);
</script>

<template>
  <div class="checkbox-container">
    <input
      ref="checkbox"
      :id="id"
      type="checkbox"
      :checked="modelValue"
      @click="$emit('update:modelValue', checkbox!.checked)"
    >
    <label :for="id"><slot /></label>
  </div>
</template>

<style scoped lang="scss">
  .checkbox-container {
    display: flex;
  }

  input {
    height: 1.2em;
    width: 1.2em;
    font-size: 1em;
    background: var(--cbr-blue-2);
  }

  label {
    font-size: 1.08em;
  }
</style>
