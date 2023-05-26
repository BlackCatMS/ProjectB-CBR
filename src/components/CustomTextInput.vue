<script setup lang="ts">
const props = defineProps<{
  modelValue: string,
  name: string,
}>();
defineEmits(['update:modelValue']);
</script>

<template>
  <label :for="name"><slot /></label>
  <input
    :name="name"
    :value="modelValue"
    @input="$emit('update:modelValue', modelValue)"
    v-bind="$attrs"
  />
</template>
