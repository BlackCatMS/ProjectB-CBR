<script setup lang="ts">
defineProps<{
  name?: string,
  disabled?: boolean,
}>();
</script>

<template>
  <div class="button-container">
    <button :name="name" :disabled="disabled"><slot /></button>
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
    background: var(--color-blue-secondary);
    cursor: pointer;
    user-select: none;
    color:white;
  }

  button:disabled {
    background: #8b8b8b;
    cursor: not-allowed;
  }
</style>
