<template>
  <Header></Header>
   <router-view></router-view>
   <Footer></Footer>
</template>
<script>
//importing bootstrap 5 Modules
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
 
components: {
   Header,
   Footer
 }
}
</script>