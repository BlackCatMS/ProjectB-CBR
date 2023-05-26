<script setup lang="ts">
import CustomTextInput from '@/components/CustomTextInput.vue';
import CustomButton from '@/components/CustomButton.vue';

const textInput = '';
</script>

<template>
  <main>
    <CustomTextInput name="test" v-model="textInput" placeholder="test">Test</CustomTextInput><br>
    <CustomButton>Verzenden</CustomButton>
  </main>
</template>

<style scoped lang="scss">

</style>
