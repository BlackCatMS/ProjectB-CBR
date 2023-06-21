import { createPinia, defineStore } from 'pinia';
import { useSessionStorage } from '@vueuse/core';

import questions from '@/data/enquete.json';

const pinia = createPinia();
const useEnqueteStore = defineStore('enquete', {
  state: () => ({
    questions: questions,
    answers: useSessionStorage('enquete-answers', new Array(questions.length).fill(0) as number[]),
  }),
});

export const enqueteStore = useEnqueteStore(pinia);
