<template>
 <v-app>
  
    <v-content>
      
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'home',
  components: {
    HelloWorld,
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
html, body {
  font-family: 'Open Sans', sans-serif;
}

#app {
  font-family: 'Open Sans', sans-serif;
}
.application {font-family: Open Sans;}
.container{
  font-family: Open Sans;
  padding-top: 140px;
}
.left-nav{
  padding-top: 140px;
}

.main-content h1 {
  position: fixed;
  margin: 0 auto;
  text-align: center;
  z-index: 10001;
  width:600px;
  display: block;
  color:#fff;
  font-size: 1.5rem;
  font-weight: 500;
  margin-top:-60px;


}
.main-content {
  max-width:600px;
  margin: 0 auto;
}
pol-content {
  position:fixed;
  min-height:100%;
  width:300px;
  top:160px;
  right:0;
  padding-right: 20px;
  background-color: #f8f8f8;
}
</style>