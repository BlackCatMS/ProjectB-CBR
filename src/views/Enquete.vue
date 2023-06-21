<script setup lang="ts">
import CustomButton from '@/components/CustomButton.vue';
import CustomRadioInput from '@/components/CustomRadioInput.vue';
import { reactive, ref } from 'vue';

import { enqueteStore } from '@/enqueteStore';

// let givenAnswers = reactive(enqueteStore.answers);
let currentQuestion = ref(0);
</script>

<template>
  <main>
    <div v-for="(question, index) in enqueteStore.questions" :key="index" :hidden="index !== currentQuestion">
      <h1>{{ question.question }}</h1>
      <p>{{ question.description }}</p>
      <CustomRadioInput :name="question.question" :possible-values="question.options.map((option, i) => ({label: option, value: i+1}))" v-model="enqueteStore.answers[index]" />
      <div id="buttons-container">
        <CustomButton :disabled="index === 0" @click="currentQuestion--">Vorige</CustomButton>
        <CustomButton v-if="index !== enqueteStore.questions.length - 1" @click="currentQuestion++" :disabled="enqueteStore.answers[index] === 0">Volgende</CustomButton>
        <CustomButton v-else :disabled="enqueteStore.answers[index] === 0" @click="$router.push('/results')">Bekijk resultaten</CustomButton>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 50vw;
}

#buttons-container {
  width: 500px;
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
}
</style>
