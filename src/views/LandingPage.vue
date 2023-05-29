<script setup lang="ts">
// hier imports zetten
</script>

<template>

    <div class="landing-page-container">

        <div class="alternatives-container">

            <div class="alternatives-text">

                <h1>Ontdek welk vervoer nog wel kan!</h1>

                <p>
                    Als u zelf niet meer mag rijden kunt u hier bekijken wat nog wel 
                    mogelijk is om ergens te komen. 
                    Bedenk wat voor u werkt en overleg 
                    indien nodig met uw arts of iemand uit uw omgeving.
                </p>

            </div>

            <RouterLink to="/alternatives">
                <button>Doorgaan</button>
            </RouterLink>

        </div>


        <div class="faq-container">

            <h2>Hulp nodig?</h2>

            <p>Vul dan de enquête in voor een gerichter advies</p>

            <button>Vul in</button>

        </div>

    </div>

</template>

<style scoped lang="scss">
    .landing-page-container {
        height: 80%;
        display: flex;
        flex-direction: column;
        
        justify-content: center;
        align-items: center;
        text-align: center;

        gap: 5rem;

        padding: 2.5rem;
    }

    .alternatives-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        background-color: var(--color-blue-main);
        border-radius: var(--border-radius-value);
        padding: 1rem;
    }

    .alternatives-text {
        width: 500px;

        color: white;
    }

    .alternatives-text p {
        padding: 0.25rem;
        text-align: center;
    }

    .faq-container h2 {
        color: var(--color-blue-secondary);
    }

    
</style>