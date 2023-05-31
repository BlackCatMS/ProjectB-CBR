<script setup lang="ts">
import CustomTextInput from '@/components/CustomTextInput.vue';
import CustomButton from '@/components/CustomButton.vue';
import CustomCheckbox from '@/components/CustomCheckbox.vue';

const textInputErrored = false;
const textInput = '';
const checked = false;
</script>

<template>
  <main>
    <CustomTextInput name="test" v-model="textInput" type="email" placeholder="test" :errored="textInputErrored">Test</CustomTextInput><br>
    <CustomButton @click="textInputErrored = true">Verzenden</CustomButton><br>
    <CustomCheckbox @click="debugger" name="check" v-model="checked">Ik ga akkoord</CustomCheckbox>
  </main>
</template>

<style lang="scss">
 main > * {
  margin-bottom: 15px;
 }
</style>
