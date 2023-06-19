<script setup lang="ts">
import CustomButton from '@/components/CustomButton.vue';
import CustomRadioInput from '@/components/CustomRadioInput.vue';
import { ref } from 'vue';

import questions from '@/data/enquete.json';
let givenAnswers = ref(new Array(questions.length).fill(0));
let currentQuestion = ref(0);

// setInterval(() => console.log(givenAnswers), 1000);
// setInterval(() => currentQuestion.value = ++currentQuestion.value % 3, 1000);
</script>

<template>
  <main>
    <div v-for="(question, index) in questions" :key="index" :hidden="index !== currentQuestion">
      <h1>{{ question.question }}</h1>
      <CustomRadioInput :name="question.question" :possible-values="question.answers.map((answer, i) => {return {label: answer, value: i+1}})" v-model="givenAnswers[index]" />
      <CustomButton v-if="index !== 0" @click="currentQuestion--">Vorige</CustomButton>
      <CustomButton v-if="index !== questions.length - 1" @click="currentQuestion++" :disabled="givenAnswers[index] === 0">Volgende</CustomButton>
      <CustomButton v-else :disabled="givenAnswers[index] === 0">Bekijk resultaten</CustomButton>
    </div>
  </main>
</template>

<style scoped>

</style>
