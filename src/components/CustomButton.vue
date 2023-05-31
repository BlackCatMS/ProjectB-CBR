<script setup lang="ts">
defineProps<{
  name?: string,
}>();
</script>

<template>
  <div class="button-container">
    <button :name="name" v-bind="$attrs"><slot /></button>
  </div>
</template>

<style scoped lang="scss">
  .button-container {
    display: inline-block;
  }

  button {
    height: 2.5em;
    padding: 0 16px;
    font-size: 1em;
    border: none;
    border-radius: 8px;
    background: var(--cbr-blue);
    cursor: pointer;
    user-select: none;
  }
</style>
