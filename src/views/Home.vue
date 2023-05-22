<script>
// import HelloWorld from '@/components/HelloWorld.vue';
import Wrapper from '@/components/Wrappers/Wrapper.vue';
  export default {
    components: {
      Wrapper
    }
  } 
</script>

<template>
  <Wrapper>
      <template v-slot:content>
        <p>Test</p>
      </template>
  </Wrapper>
</template>

