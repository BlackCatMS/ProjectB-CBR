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
    <CustomTextInput id="test" v-model="textInput" :errored="textInputErrored">Test</CustomTextInput><br>
    <CustomButton @click="textInputErrored = !textInputErrored">Verzenden</CustomButton><br>
    <CustomCheckbox id="check" v-model="checked">Ik ga akkoord</CustomCheckbox>
    <h1>Values</h1>
    <dt>Text input</dt><dd>{{ textInput === '' ? '&nbsp;' : textInput }}</dd>
    <dt>Text input errored</dt><dd>{{ textInputErrored }}</dd>
    <dt>Checkbox</dt><dd>{{ checked }}</dd>
  </main>
</template>

<style lang="scss">
 main > * {
  margin-bottom: 15px;
 }
</style>
