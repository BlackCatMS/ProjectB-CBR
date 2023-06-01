<script setup lang="ts">

</script>

<template>
    <div class="content-container">

        <div class="title-container">
            <h1>Alle vervoers alternatieven</h1>
        </div>

        <ul>

            <li>

                <div class="item-container">
                    <img src="/public/assets/CBR-logo.png" alt="CBR Logo">

                    <h2>Titel van alternatief vervoer</h2>

                    <p>
                        Korte samenvatting van wat dit vervoersmiddel eigenlijk
                        een beetje inhoud en nog niet per se een omschrijving
                        van wanneer je hier precies voor in aanmerking komt,
                        zou eigenlijk ook alleen een afgekorte zin zijn :)
                    </p>

                    <a href="/alternatives">Bekijk dit alternatief</a>

                </div>

            </li>


            <li>

                <div class="item-container">
                    <img src="/public/assets/CBR-logo.png" alt="CBR Logo">

                    <h2>Titel van alternatief vervoer</h2>

                    <p>
                        Korte samenvatting van wat dit vervoersmiddel eigenlijk
                        een beetje inhoud en nog niet per se een omschrijving
                        van wanneer je hier precies voor in aanmerking komt,
                        zou eigenlijk ook alleen een afgekorte zin zijn :)
                    </p>

                    <a href="/alternatives">Bekijk dit alternatief</a>

                </div>

            </li>

            <li>

                <div class="item-container">
                    <img src="/public/assets/CBR-logo.png" alt="CBR Logo">

                    <h2>Titel van alternatief vervoer</h2>

                    <p>
                        Korte samenvatting van wat dit vervoersmiddel eigenlijk
                        een beetje inhoud en nog niet per se een omschrijving
                        van wanneer je hier precies voor in aanmerking komt,
                        zou eigenlijk ook alleen een afgekorte zin zijn :)
                    </p>

                    <a href="/alternatives">Bekijk dit alternatief</a>

                </div>

            </li>

        </ul>

    </div>
</template>

<style scoped lang="scss">
.content-container {
    width: 100%;
    height: 100%;

    display: grid;
    place-items: center;

    padding: 20px;

    gap: 10px;
}

.title-container {
    display: grid;
    place-items: center;

    width: 400px;
    height: 75px;

    background-color: var(--color-blue-main);
    color: white;

    padding: 10px 20px;
}

ul {
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    list-style-type: none;
}

li {
    margin: 0.5rem;
    padding: 10px 20px;

    width: 450px;

    background-color: var(--color-blue-background);
}

.item-container {
    display: flex;
    flex-direction: column;

    max-height: 450px;

    gap: 0.25rem;
}

.item-container img {
    height: 100px;

    object-fit: contain;
}

.item-container h2 {
    text-align: center;
}

.item-container p {
    padding: 0.25rem;

    max-height: 55px;

    overflow: auto;

}

.item-container a {
    text-align: center;
    text-decoration: none;

    font-weight: bold;

    color: var(--color-blue-secondary);
}

.item-container a:hover {
    text-decoration: underline;
}
</style>