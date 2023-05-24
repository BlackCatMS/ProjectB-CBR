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
        display: flex;
        flex-direction: column;
        
        justify-content: space-between;
        align-items: center;
        text-align: center;
    }

    .alternatives-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .alternatives-text p {
        padding: 0.25rem;
        text-align: left;
        width: 400px;
    }

    .faq-container {
    }

    
</style>