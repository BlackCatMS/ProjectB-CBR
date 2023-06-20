<script setup lang="ts">
  import "bootstrap/dist/css/bootstrap.min.css";
  import "bootstrap/dist/js/bootstrap.min.js";
</script>

<template>
  <div class="container">
    <div class="title">
      <h1>Pagina niet gevonden / Page not found</h1>
    </div>
    <div class="content">
      <p>De opgevraagde pagina is niet (meer) beschikbaar. 
        Controleer de url van de pagina die u probeert op te vragen. 
        Via de homepage en het hoofdmenu kun je de gewenste informatie opnieuw vinden. 
        Sorry voor het ongemak.
      </p>
      <p>The requested page isn't available (anymore). 
        Please, check the page URL of the page you wanted to visit. 
        Via the homepage and the main menu you can find the desired information again. 
        Sorry for the inconvenience.
      </p>
    </div>
  </div>
  
</template>

<style>
  .title h1{
    font-size: 40px;
    color: var(--color-blue-secondary);
    margin-top: 50px;
    text-align: center;
  }
  .content{
    background-color: var(--color-orange-main);
    padding: 20px;
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    border-radius: var(--border-radius-value);
    color: white;
  }
</style>
