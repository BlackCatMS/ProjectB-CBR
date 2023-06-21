<script setup lang="ts">
import InfoCard from '@/components/InfoCard.vue';

import { enqueteStore } from '@/enqueteStore';
import alternatives from '@/data/alternatives.json';

let alternativesList = alternatives;
let givenAnswers = enqueteStore.answers;

if (givenAnswers[0] === 1) {
    // alternativesList remove fiets, bromfiets
    alternativesList = alternativesList.filter(vehicle => vehicle.name !== 'Fietsen');
    alternativesList = alternativesList.filter(vehicle => vehicle.name !== 'Bromfiets');
}
if (givenAnswers[1] === 1) {
    // alternativesList remove fiets, bromfiets, ov
    alternativesList = alternativesList.filter(vehicle => vehicle.name !== 'Fietsen');
    alternativesList = alternativesList.filter(vehicle => vehicle.name !== 'Bromfiets');
}
if (givenAnswers[2] === 1 || givenAnswers[3] === 1) {
    // alternativesList remove fiets, bromfiets, scootmobiel
    alternativesList = alternativesList.filter(vehicle => vehicle.name !== 'Fietsen');
    alternativesList = alternativesList.filter(vehicle => vehicle.name !== 'Bromfiets');
    alternativesList = alternativesList.filter(vehicle => vehicle.name !== 'Scootmobiel');
}
if (givenAnswers[4] === 2 || givenAnswers[5] === 2) {
    // alternativesList remove fiets, bromfiets, scootmobiel
    alternativesList = alternativesList.filter(vehicle => vehicle.name !== 'Fietsen');
    alternativesList = alternativesList.filter(vehicle => vehicle.name !== 'Bromfiets');
    alternativesList = alternativesList.filter(vehicle => vehicle.name !== 'Scootmobiel');
}
if (givenAnswers[6] === 2) {
    // alternativesList remove ov
    alternativesList = alternativesList.filter(vehicle => vehicle.name !== 'Openbaar vervoer');
}

</script>

<template>
  <div class="alternatives-container">
    <h1>Resultaten van de enquete</h1>
    <div id="infocards-container" class="infocards-container">
      <InfoCard v-for="alternative in alternativesList"
        :name="alternative.name"
        :image="alternative.image"
      >
        {{ alternative.description.split(".")[0] }}
      </InfoCard>
    </div>
  </div>
</template>

<style scoped lang="scss">
.alternatives-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1 {
  color: var(--color-blue-secondary);

  padding: 30px;
}

.infocards-container {
  display: flex;
  flex-direction: row;
  justify-content: center;

  flex-wrap: wrap;

  gap: 45px 30px;

  padding: 15px;
}
</style>
