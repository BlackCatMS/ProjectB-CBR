<script setup lang="ts">

</script>

<template>

    <div class="alternatives-container">

        <div class="title-text">
            <h1 >Aternatieve vervoers middelen</h1>   
        </div>
        <div class="alternative-infocards-container">

                <div class="infocard-container" id="Fiets-card">
                    <div class="infocard-body" >
                        <img src="/public/assets/icons/Fiets.png"/>
                        <H2>Fietsen</H2>
                        <h3>Als u moeite heeft met fietsen vanwege een lichamelijke beperking, kunt u overwegen om een aangepaste fiets te gebruiken, 
                            In sommige gevallen kunt u hier een vergoeding voor krijgen van UWV of uw gemeente
                        </h3>
                        <div class="infocard-button">
                            <div class="button-text">
                                <RouterLink to="/fiets">
                                    <button>> meer over Fietsen</button>
                                </RouterLink>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="infocard-container" id="Bromfiets-card">
                    <div class="infocard-body">
                        <img src="/public/assets/icons/Bromfiets.png"/>
                        <H2>Bromfiets</H2>
                        <h3>Als u om medische redenen geen auto meer mag rijden, kunt u nog wel een bromfietsrijbewijs (categorie AM) aanvragen bij de gemeente.
                        </h3>
                        <div class="infocard-button">
                            <div class="button-text">
                                <RouterLink to="/bromfiets">
                                    <button>> meer over Bromfietsen</button>
                                </RouterLink>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="infocard-container" id="Scootmobiel-card">
                    <div class="infocard-body">
                        <img src="/public/assets/icons/Scootmobiel.png"/>
                        <H2>Scootmobiel</H2>
                        <h3>Met een scootmobiel kunt u zelfstandig op pad gaan. U heeft hiervoor geen rijbewijs nodig.
                        </h3>
                        <div class="infocard-button">
                            <div class="button-text">
                                <RouterLink to="/scootmobiel">
                                    <button>> meer over Scootmobielen</button>
                                </RouterLink>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="infocard-container" id="Ov-card">
                    <div class="infocard-body">
                        <img src="/public/assets/icons/Bus.png"/>
                        <H2>Openbaar vervoer</H2>
                        <h3>Met het openbaar vervoer kunt u naar uw bestemming reizen met de trein, bus, tram of metro.
                        </h3>
                        <div class="infocard-button">
                            <div class="button-text">
                                <RouterLink to="/ov">
                                    <button>> meer over OV</button>
                                </RouterLink>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="infocard-container" id="Meerijden-card">
                    <div class="infocard-body">
                        <img src="/public/assets/icons/Auto.png"/>
                        <H2>Meerijden</H2>
                        <h3>Als u niet meer zelf mag rijden, is meerijden met iemand anders een logische optie.
                        </h3>
                        <div class="infocard-button">
                            <div class="button-text">
                                <RouterLink to="/meerijden">
                                    <button>> meer over Meerijden</button>
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="infocard-container" id="Taxi-card">
                    <div class="infocard-body">
                        <img src="/public/assets/icons/Taxi.png"/>
                        <H2>Taxi</H2>
                        <h3>Er zijn verschillende soorten taxi's beschikbaar. Voor korte afstanden zijn er lokale of regionale vervoerssystemen en betaalbare alternatieven.
                        </h3>
                        <div class="infocard-button">
                            <div class="button-text">
                                <RouterLink to="/taxi">
                                    <button>> meer over Bromfietsen</button>
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div> 
</template>

<style scoped lang="scss">
    .alternatives-container{
        height: 80%;
        width: 100%;
            display: flex;
            flex-direction: column;
    }

    .title-text{
            color: #003DA5;
            font-size: 30px;
            float: left;
    }
    .alternative-infocards-container{
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto auto ;
        grid-gap: 20px;
    }

  

    .infocard-container{
        width: 600px;
        height: 360px;
        padding: 10px;
    }

    .infocard-body{
        text-decoration: none;
        display: grid;
        grid-template-columns: 200px 200px 200px;
        grid-template-rows: 70px 180px 100px;
        width: 600px;
        height: 300px;
        border: none;
        border-radius: 20px;
        background-color: #B9D9EB;
    }

    .infocard-button div{ 
        opacity: 1;
    }

    .infocard-button{ 
        background-color:rgba(#FF8200, 0.8);
        grid-column: 2 / 3;
        grid-row: 3 / 4;
        text-align: center;
        vertical-align: middle;
        line-height: 100px;       
        width: 200px;
        height: 100px;
        border: none;
        border-radius: 20px;
        color: white;
    }

    .infocard-button button{ 
        text-decoration: none;
        color: white;
        background-color: Transparent;
        border: none;
        font-size: larger;
    }

    .infocard-body H2{
        font-size: 40px;
        grid-column: 2 / 4;
        grid-row: 1 / 2;
    }

    .infocard-body h3{
        font-size: 20px;
        grid-column: 1 / 4;
        grid-row: 2 / 3;
        margin: 20px;
        text-align: center;
    }

    .infocard-button :hover{ 
        border-radius: 20px;
        background-color:rgba(#FF8200, 0.8);
        cursor:pointer;
    }

    .infocard-body img{
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        margin: 10px;
    }
</style>
