<script setup lang="ts">
import { findAlternativeByName } from '@/data/alternative-repository';
import { useRouter } from 'vue-router';

const alternative = findAlternativeByName(document.title.split(" ")[2]);

if (alternative === undefined) {
    useRouter().push("undefined");
}
</script>


<template>

    <div class="information-container">

        <div class="head-info">
        
            <h1>{{ alternative.name }}</h1>
            <p>{{ alternative.description.split('.')[0] }}</p>

        </div>


        <div class="information-body">

            <p>
                {{ alternative.description }}
            </p>

            <ul> 
                <li v-for="reference in alternative.references">
                    <a :href="reference.link" target="_blank">{{ reference.label }}</a>
                </li>
            </ul>

        </div>

    </div>

</template>


<style scoped lang="scss">

    .information-container {
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 811px) {
            flex-direction: column;
        }
    }

    .head-info {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 2rem;
        text-align: center;
        width: 525px;

        @media (max-width: 420px) {
            width: 350px;
            padding: 0 2rem;
        }
    }

    .head-info h1 {
        color: var(--color-blue-secondary);
    }

    .head-info p {
        background-color: var(--color-orange-main);
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: var(--border-radius-value);
    }

    .information-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 2rem;

        @media (max-width: 420px) {

            padding: 0;            
        }
    }

    .information-body p {
        max-height: 400px;
        max-width: 700px;
        overflow: auto;

        padding: 0.5rem 1rem;
        border: 2px solid var(--color-blue-background);
        border-radius: var(--border-radius-value);

        @media (max-width: 420px) {
            max-width: 350px;
        }
    }

    .information-body ul {
        list-style: none;
        padding: 0;
        text-align: center;
    }

    .information-body a {
        text-decoration: none;
        color: var(--color-blue-secondary);
    }

    .information-body a:hover {
        text-decoration: underline;
        color: var(--color-orange-main)
    }

</style>