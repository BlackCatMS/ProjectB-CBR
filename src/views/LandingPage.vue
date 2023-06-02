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

            <RouterLink to="/faq">
                <button>Vul in</button>
            </RouterLink>

        </div>


    </div>

</template>

<style scoped lang="scss">

    .landing-page-container {
        display: flex;
        flex-direction: column;
        
        justify-content: center;
        align-items: center;
        text-align: center;

        gap: 2.5rem;

        padding: 2.5rem;
    }

    .alternatives-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

        padding: 1rem;
    }

    .alternatives-text {
        display: grid;
        place-items: center;
    }

    .alternatives-text h1 {
        font-size: 40px;
        color: var(--color-blue-secondary);
    }

    .alternatives-text p {
        width: 50%;
        font-size: 18px;
        padding: 1rem;
        text-align: center;
    }

    .faq-container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        background-color: var(--color-orange-main);
        border-radius: var(--border-radius-value);
        color: white;

        padding: 1rem;
    }

    
</style>
