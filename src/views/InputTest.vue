<script setup lang="ts">
import CustomTextInput from '@/components/CustomTextInput.vue';
import CustomButton from '@/components/CustomButton.vue';

const textInputErrored = false;
const textInput = '';
</script>

<template>
  <main>
    <CustomTextInput name="test" v-model="textInput" type="email" placeholder="test" :errored="textInputErrored">Test</CustomTextInput><br>
    <CustomButton @click="textInputErrored = true">Verzenden</CustomButton>
  </main>
</template>

<style scoped lang="scss">
 main > * {
  margin-bottom: 15px;
 }
</style>
