<template>
 <v-app>
    <TopNav/>
    <TitleBar/>
    <LeftNav/>
    <v-content>
      
      <router-view/>
    </v-content>
  </v-app>
</template>
<script>
// @ is an alias to /src
import LeftNav from '@/RootComponents/LeftNav.vue';
import TopNav from '@/RootComponents/TopNav.vue';
import TitleBar from '@/RootComponents/TitleBar.vue';


export default {
  name: 'App',
  components: {
    LeftNav,
    TopNav,
    TitleBar
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
html, body, #app, .application {
  font-family: 'Open Sans', sans-serif;
  background-color: #fff;
}

.container{
  font-family: Open Sans;
  padding-top: 140px;
}
.left-nav{
  padding-top: 140px;
}
.main-content {
  margin: 0 auto;
  background-color:#fff;
  z-index: 10001;
  max-width:600px;
  min-width:500px;
  display: block;
  margin:0 auto  ;
}
.main-content h1 {
  position: fixed;
  margin: 0 auto;
  text-align: center;
  z-index: 10001;
  width:400px;
  display: block;
  color:#fff;
  font-size: 24px;
  font-weight: 500;
  margin:-60px auto 0 -200px;
  left:50%;
}

.right-content {
  position:fixed;
  height:100%;
  
  max-width: 400px;
  top:140px;
  right:0;
  padding: 20px;
  background-color: #f8f8f8;
  overflow: scroll;
}
.content-holder{
  padding-bottom:250px;
}
.right-content .title {
  font-size: 16px;
  font-weight: 600;
}

.help-content{
  padding:20px;
  background-color: #fff;
  margin: 20px 24px 32px 0px;
  padding: 12px 14px 22px 14px;
}
.help-NY{
  background-color: #d4dee8;
}
.help-CAN{
  background-color: #e38986;
}
.v-overlay__content{
  height:100%;
  overflow: scroll;
  padding-top:160px;
}

.button-container{
  position: fixed;
  bottom:0;
  right:0;
  height:80px;
  width:400px;
  border-top: 1px solid #adadad;
  padding-top:20px;
  background-color: #f8f8f8;
  box-shadow: 3px 0px 8px rgb(0 0 0 / 40%);
}
.v-btn {
  width:158px;
  height:48px;
  text-transform: capitalize;
}
.theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) {
  width:158px;
  
}
hr{ margin-bottom: 12px;}
.new-feature{
  font-weight: bold;
  color:#0B8D1F;
}
</style>