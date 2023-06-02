<script setup lang="ts">
import { Ref, ref } from 'vue';

defineProps<{
  modelValue: string,
  id: string,
  type?: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url',
  errored?: boolean,
}>();
defineEmits<{
  (event: 'update:modelValue', inputValue: string): void;
}>();

const input: Ref<HTMLInputElement | null> = ref(null);
</script>

<template>
  <div class="input-container" :class="{ errored }">
    <input
      ref="input"
      :id="id"
      :type="type ?? 'text'"
      :value="modelValue"
      @input="$emit('update:modelValue', input!.value)"
    />
    <label :for="id"><slot /></label>
  </div>
</template>

<style scoped lang="scss">
.input-container {
  display: inline-block;
}

.input-container.errored input {
  border: 2px solid red;
  outline: 2px solid red;
}

div {
  position: relative;
  display: inline-block;
  user-select: none;
}

label {
  position: absolute;
  color: gray;
  pointer-events: none;
  top: 6px;
  left: 13px;
  z-index: 1;
  transition: all 0.08s;
  background: white;
  padding: 3px 5px;
  overflow: hidden;
}

input {
  height: 2.5em;
  padding: 0 16px;
  font-size: 1em;
  border: 2px solid var(--color-blue-secondary);
  outline: none;
  border-radius: 8px;
}

input::placeholder {
  color: transparent;
}

input:focus ~ label, input:not(:placeholder-shown) ~ label {
  top: -12px;
  font-size: 0.8em;
}
</style>
