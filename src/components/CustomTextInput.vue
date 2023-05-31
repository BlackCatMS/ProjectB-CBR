<script setup lang="ts">
type TextInputType = 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';

const props = defineProps<{
  modelValue: string,
  name: string,
  type?: TextInputType,
  errored?: boolean,
}>();
defineEmits(['update:modelValue']);
</script>

<template>
  <div class="input-container" :class="{ errored }">
    <input
    :name="name"
    :type="type ?? 'text'"
    :value="modelValue"
    @input="$emit('update:modelValue', modelValue)"
    v-bind="$attrs"
    />
    <label :for="name"><slot /></label>
  </div>
</template>

<style scoped lang="scss">
.input-container {
  display: inline-block;
}

.input-container.error input {
  border: 3px solid red;
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
  top: 10px;
  left: 15px;
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
  border: 2px solid var(--cbr-blue);
  outline: none;
  border-radius: 8px;
}

input::placeholder {
  color: transparent;
}

input:focus ~ label, input:not(:placeholder-shown) ~ label {
  top: -10px;
  font-size: 0.8em;
}
</style>
