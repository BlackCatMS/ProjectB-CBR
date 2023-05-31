<script setup lang="ts">
import { Ref, ref } from 'vue';

const props = defineProps<{
  modelValue: boolean,
  name: string,
  errored?: boolean,
}>();
defineEmits(['update:modelValue']);

const checkbox: Ref<HTMLInputElement | null> = ref(null);
const con = window.console;
</script>

<template>
  <div class="checkbox-container">
    <input
      ref="checkbox"
      :name="name"
      type="checkbox"
      :checked="modelValue"
      @click="$emit('update:modelValue', checkbox!.checked);"
      v-bind="$attrs"
    >
    <label :for="name"><slot /></label>
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
    background: var(--cbr-blue);
  }

  label {
    font-size: 1.08em;
  }
</style>
