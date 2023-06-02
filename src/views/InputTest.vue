<script setup lang="ts">
import CustomTextInput from '@/components/CustomTextInput.vue';
import CustomButton from '@/components/CustomButton.vue';
import CustomCheckbox from '@/components/CustomCheckbox.vue';
import { ref } from 'vue';

const textInputErrored = ref(false);
const textInput = ref('');
const checked = ref(false);
</script>

<template>
  <main>
    <CustomTextInput id="test" v-model="textInput" :errored="textInputErrored">Invoerveld</CustomTextInput><br>
    <CustomButton @click="textInputErrored = !textInputErrored">Verzenden</CustomButton><br>
    <CustomCheckbox id="check" v-model="checked">Ik ga akkoord</CustomCheckbox>
    <h1>Values</h1>
    <dt>Text input</dt><dd>{{ textInput + '&nbsp;' }}</dd>
    <dt>Text input errored</dt><dd>{{ textInputErrored }}</dd>
    <dt>Checkbox</dt><dd>{{ checked }}</dd>
  </main>
</template>

<style scoped lang="scss">
  main {
    margin-top: 3em;
  }

  main > * {
    margin-bottom: 15px;
  }

  h1 {
    margin-top: 100px;
  }
</style>
