<script setup lang="ts">

import InfoCard from '@/components/InfoCard.vue';
import alternatives from '@/data/alternatives.json';

    // import givenAnswers from '@/views/Enquete.vue'; 

    let alternativesList = alternatives
    
    //!!!!!!!!!TEMP!!!!!!!!!!!!!!!!!!!!!!!
    let givenAnswers = [2,2,2,2,1,1,1]; 
    // let givenAnswers = new Array();
    // setInterval(() => console.log(givenAnswers), 1000);
    //!!!!!!!!!TEMP!!!!!!!!!!!!!!!!!!!!!!!
    
    if(givenAnswers[0] == 1){
        // alternativesList remove fiets, bromfiets
        alternativesList = alternativesList.filter(playlist => playlist.name !== 'Fietsen');
        alternativesList = alternativesList.filter(playlist => playlist.name !== 'Bromfiets');
    }
    if(givenAnswers[1] == 1){
        // alternativesList remove fiets, bromfiets, ov
        alternativesList = alternativesList.filter(playlist => playlist.name !== 'Fietsen');
        alternativesList = alternativesList.filter(playlist => playlist.name !== 'Bromfiets');
    }
    if(givenAnswers[2] == 1 || givenAnswers[3] == 1){
        // alternativesList remove fiets, bromfiets, scootmobiel
        alternativesList = alternativesList.filter(playlist => playlist.name !== 'Fietsen');
        alternativesList = alternativesList.filter(playlist => playlist.name !== 'Bromfiets');
        alternativesList = alternativesList.filter(playlist => playlist.name !== 'Scootmobiel');
    }
    if(givenAnswers[4] == 2 || givenAnswers[5] == 2){
        // alternativesList remove fiets, bromfiets, scootmobiel
        alternativesList = alternativesList.filter(playlist => playlist.name !== 'Fietsen');
        alternativesList = alternativesList.filter(playlist => playlist.name !== 'Bromfiets');
        alternativesList = alternativesList.filter(playlist => playlist.name !== 'Scootmobiel');
    }
    if(givenAnswers[6] == 2){
        // alternativesList remove ov
        alternativesList = alternativesList.filter(playlist => playlist.name !== 'Openbaar vervoer');
    }

</script>

<template>
    
    <div class="alternatives-container">

        <h1>Resultaten van de enquete</h1>

        <div id="infocards-container" class="infocards-container">

            <InfoCard v-for="alternative in alternativesList" 
                :name="alternative.name" 
                :image="alternative.image">
                {{ alternative.description }}
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
