<template>
  <v-app>
    <TopNav/>
    <TitleBar/>
    
<LeftNav/>
    <v-content>
      
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import LeftNav from '@/RootComponents/LeftNav.vue';
import TopNav from '@/RootComponents/TopNav.vue';
import TitleBar from '@/RootComponents/TitleBar.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    LeftNav,
    TopNav,
    TitleBar,
  },
  data: () => ({
    //
  }),
};



</script>
<style>
.application {font-family: OpenSans;}
.container{
  font-family: OpenSans;
  padding-top: 140px;
}
.left-nav{
  padding-top: 140px;
}
</style>