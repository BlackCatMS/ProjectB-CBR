<script setup lang="ts">

import InfoCard from '@/components/InfoCard.vue';

</script>

<template>
    <div class="alternatives-container">

        <h1>Alternatieve vervoersmiddelen</h1>

        <div class="infocards-container">

            <InfoCard></InfoCard>
            <InfoCard></InfoCard>
            <InfoCard></InfoCard>
            <InfoCard></InfoCard>
            <InfoCard></InfoCard>
            <InfoCard></InfoCard>
            <InfoCard></InfoCard>
            <InfoCard></InfoCard>
            <InfoCard></InfoCard>
            <InfoCard></InfoCard>
            <InfoCard></InfoCard>

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
