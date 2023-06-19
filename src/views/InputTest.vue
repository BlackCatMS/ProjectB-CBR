<script setup lang="ts">
import CustomTextInput from '@/components/CustomTextInput.vue';
import CustomButton from '@/components/CustomButton.vue';
import CustomCheckbox from '@/components/CustomCheckbox.vue';
import CustomRadioInput from '@/components/CustomRadioInput.vue';
import { ref } from 'vue';

const textInputErrored = ref(false);
const textInput = ref('');
const checked = ref(false);
const radioValue = ref('');

setTimeout(() => {
  textInputErrored.value = true;
  textInput.value = 'Dit is een string';
  checked.value = true;
  radioValue.value = 'cereal';
}, 3000);
</script>

<template>
  <main>
    <CustomTextInput name="test" v-model="textInput" :errored="textInputErrored">Invoerveld</CustomTextInput><br>
    <CustomButton @click="textInputErrored = !textInputErrored">Verzenden</CustomButton><br>
    <CustomCheckbox id="check" v-model="checked">Ik ga akkoord</CustomCheckbox>
    <CustomRadioInput name="choice" :possible-values="[{ value: 'cereal', label: 'Cereal first' }, { value: 'milk', label: 'Milk first' }]" v-model="radioValue" />
    <h1>Values</h1>
    <dt>Text input</dt><dd>{{ textInput + '&nbsp;' }}</dd>
    <dt>Text input errored</dt><dd>{{ textInputErrored }}</dd>
    <dt>Checkbox</dt><dd>{{ checked }}</dd>
    <dt>Radio</dt><dd>{{ radioValue }}</dd>
  </main>
</template>

<style scoped>
main {
  margin-top: 3em;
}

h1 {
  margin-top: 100px;
}

dd {
  margin: 0.3em 1.5em 1.5em;
}
</style>
