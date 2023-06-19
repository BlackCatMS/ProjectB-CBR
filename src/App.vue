<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <Header />
  <div id="main-content">
    <router-view></router-view>
  </div>
  <Footer />
</template>

<style scoped lang="scss">

  #main-content {
    display: grid;
    place-content: center;
  }

</style>
