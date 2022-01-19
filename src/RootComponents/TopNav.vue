<template>
  <v-toolbar fixed>
    <v-toolbar-title light>
      
        <img src="../assets/PrimericaLogo.png" height="30px" />
   
      </v-toolbar-title>
     
    <v-spacer />
   <v-toolbar-items class="hidden-sm-and-down">
      <div class="main-title-text title-bar-heading ">
        Next Gen Training
      </div>
 <!--      <v-btn to="/cdocs" color="transparent">
        Components
      </v-btn>
      <v-btn to="/ada" color="transparent">
        Ada
      </v-btn>
-->    </v-toolbar-items> 

 <!--   <v-menu class="hidden-md-and-up">
      <v-toolbar-side-icon slot="activator" />
      <v-list>
        <v-list-tile
          v-for="route in menu"
          :key="route.name"
          :to="route.path"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{ route.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
    -->
  </v-toolbar>

</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    menu() {
      return this.$router.options.routes;
    },
  },
};
</script>


<style>
.main-title-text{
  display: inline-block;
  font-size: 16px;
  vertical-align: middle;
  padding-top:20px;
}
.v-toolbar {
  height:60px;
  position:fixed;
  z-index: 10000;
  width:100%
}

</style>
