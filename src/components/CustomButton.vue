<script setup lang="ts">
defineProps<{
  name?: string,
}>();
</script>

<template>
  <button :name="name" v-bind="$attrs"><slot /></button>
</template>
