<script setup lang="ts">
import { findAlternativeByName } from '@/data/alternative-repository';
import { useRouter } from 'vue-router';

const alternative = findAlternativeByName(document.title.split(" ")[2]);

if (alternative === undefined) {
    useRouter().push("undefined");

} else {
    

}

</script>


<template>


</template>


<style scoped lang="scss">

</style>