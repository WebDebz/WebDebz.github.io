<template>
<v-container>
 
 <div class="main-content">
      <p></p>
      <p>Welcome to the Practice Application for Primerica PowerTerm and Primerica PrecisionTerm!</p>
      <p>This step-by-step guide will walk you through the application and introduce exciting new features while providing explanations and coaching tips along the way.</p>
      <p>As you navigate through the application, be sure to review the help content and click the blue links for additional details and instructional videos.</p>
<v-row
        align="center"
        justify="space-around"
        >
          
          <v-btn
          @click="$router.push('Welcome')"
          color="primary"
          tile
          large
         
          >
      Begin
          </v-btn>
  </v-row>
    </div>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'home',
  components: {
//    HelloWorld,
  }
}
</script>
