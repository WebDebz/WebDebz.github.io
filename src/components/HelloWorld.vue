<template>
  <v-container>
 
   <v-row
      no-gutters
      style="flex-wrap: nowrap;"
    >
      <v-col
        cols="1"
        style="min-width: 150px; max-width: 150px; width:150px;"
        class="flex-grow-0 flex-shrink-1"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
         
        </v-card>
      </v-col>
      <v-col
        cols="1"
        style="min-width: 100px; max-width: 100%;"
        class="flex-grow-1 flex-shrink-0"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          
        <v-img
          :src="require('../assets/temp-home.png')"
          class="mx-auto"
    max-width="600"
        ></v-img>
  
        </v-card>
      </v-col>
      <v-col
        cols="2"
        style="min-width: 300px;"
        class="flex-grow-0 flex-shrink-1"
      >
        <v-card
          class="pa-2"
          outlined
          tile
          
        >
        <h3>Help Text </h3>
        <div body-2>
         <p> This panel will provide information, tips and tutorials to help you learn how to use the next generation Turbo Life App.​</p>
         <p>Navigate through each page by tapping the Continue or Back buttons at the bottom of this panel or jump to a specific section of the Life  App from the left side navigation menu.​</p>
         <p>Click on the blue links throughout the module to access additional screens, guides, and videos.​</p>
         </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>


export default {
  
    
};
</script>
