<template>
  <Header></Header>
   <router-view></router-view>
   <Footer></Footer>
</template>
<script setup lang="ts">
//importing bootstrap 5 Modules
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>