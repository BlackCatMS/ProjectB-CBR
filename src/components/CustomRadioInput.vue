<script setup lang="ts">
import { computed, Ref, ref, watch, WritableComputedOptions } from 'vue';


const props = defineProps<{
  name: string;
  possibleValues: Array<{
    value: string | number;
    label: string;
  }>;
  modelValue: string | number;
}>();
defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();

const container: Ref<null | HTMLDivElement> = ref(null);
watch(
  () => props.modelValue,
  (newValue: string | number) => {
    if (!newValue) {
      const radioElements = container.value!.querySelectorAll('input').forEach(el => el.checked = false);
      return;
    }

    const radioElement: HTMLInputElement | null = container.value!.querySelector(`input[value="${newValue}"]`);
    if (!radioElement) {
      throw new Error('Invalid radio input value: ' + newValue);
    }
    radioElement.checked = true;
  }
);
</script>

<template>
  <div class="radio-container" ref="container">
    <div v-for="value in possibleValues" class="single-radio-container">
      <input type="radio" :id="value.label" :name="name" :value="value.value" @click="$emit('update:modelValue', value.value)">
      <label :for="value.label">{{ value.label }}</label>
    </div>
  </div>
</template>

<style scoped lang="scss">
.single-radio-container {
  display: grid;
  grid-template-columns: 1.4em auto;
  align-items: center;

  input {
    appearance: none;
    color: currentColor;
    width: 1em;
    height: 1em;
    border: 0.15em solid currentColor;
    border-radius: 50%;
    justify-self: center;
    display: grid;
    place-content: center;

    &::before {
      content: "";
      width: 0.65em;
      height: 0.65em;
      border-radius: 50%;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em var(--color-blue-secondary);
      background-color: CanvasText;


    }

    &:checked::before {
      transform: scale(0.7);
    }
  }
}

</style>
