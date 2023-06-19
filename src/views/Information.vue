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
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }

    .head-info {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        text-align: center;
        max-width: 825px;

        @media (max-width: 420px) {
            max-width: 350px;
            padding: 0 2rem;
        }
    }

    .head-info h1 {
        color: var(--color-blue-secondary);
        font-size: 48px;

        @media (max-width: 420px) {
            font-size: 32px;            
        }
    }

    .head-info p {
        background-color: var(--color-orange-main);
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: var(--border-radius-value);

        font-size: 24px;

        @media (max-width: 420px) {
            font-size: 18px;            
        }
    }

    .information-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.25rem;
    }

    .information-body p {
        max-height: 350px;
        max-width: 1000px;
        overflow: auto;

        padding: 0.5rem 1rem;
        border: 2px solid var(--color-blue-background);
        border-radius: var(--border-radius-value);

        font-size: 20px;

        @media (max-width: 420px) {
            max-width: 350px;

            font-size: 16px;            
        }
    }

    .information-body ul {
        display: flex;
        gap: 3.5rem;
        list-style: square;
        color: var(--color-blue-secondary);

        padding: 0;
        text-align: center;

        font-size: 16px;

        @media (max-width: 420px) {
            flex-direction: column;
            gap: 0.25rem;
            list-style: none;
        }
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