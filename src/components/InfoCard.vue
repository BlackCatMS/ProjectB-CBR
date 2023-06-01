<script setup lang="ts">

</script>

<template>
    <div class="infocard" id="infocard-fietsen">

        <img src="/assets/icons/Fiets.png" alt="fietsen icon">

        <h2>Fietsen</h2>

        <p>
            Als u moeite heeft met fietsen vanwege een lichamelijke beperking, kunt u overwegen om een
            aangepaste fiets te gebruiken,
            In sommige gevallen kunt u hier een vergoeding voor krijgen van UWV of uw gemeente.
        </p>

        <RouterLink to="/fietsen">
            <button>Meer over fietsen</button>
        </RouterLink>

    </div>
</template>

<style scoped lang="scss">
.infocard {
    width: 325px;

    padding: 10px;

    background-color: var(--color-blue-background);
    border-radius: var(--border-radius-value);
}

img {
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
}

h2 {
    font-size: 25px;
    font-weight: bold;
    padding: 5px;
}

p {
    padding: 0 16px;
}
</style>