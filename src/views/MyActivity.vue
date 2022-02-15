<template>
  <v-container>
 
 <div class="main-content">
   <h1>Preliminary Questions</h1>
        <v-list-item
      dense
      nav
    >
    
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title><router-link to="/">Home</router-link> </v-list-item-title>
      </v-list-item>
    <v-list-item
      dense
      nav
      >
        <v-list-item-icon>
          <v-icon>mdi-format-list-bulleted-square</v-icon>
        </v-list-item-icon>
        <v-list-item-title><router-link to="/MyActivity">My Activity</router-link></v-list-item-title>
    </v-list-item>
        <v-list-item
      dense
      nav
      >
        <v-list-item-icon>
          <v-icon>mdi-format-list-bulleted-square</v-icon>
        </v-list-item-icon>
        <v-list-item-title><router-link to="/PreliminaryQuestions">Preliminary Questions</router-link></v-list-item-title>
    </v-list-item>
        <v-list-item
      dense
      nav
      >
        <v-list-item-icon>
          <v-icon>mdi-format-list-bulleted-square</v-icon>
        </v-list-item-icon>
        <v-list-item-title><router-link to="/AgentInfo">Agent Info</router-link></v-list-item-title>
    </v-list-item>
        <v-list-item
      dense
      nav
      >
        <v-list-item-icon>
          <v-icon>mdi-format-list-bulleted-square</v-icon>
        </v-list-item-icon>
        <v-list-item-title><router-link to="/AgentTasks">Agent Tasks</router-link></v-list-item-title>
    </v-list-item>
  </div>
     
      
  
  </v-container>

</template>



<script>


export default {
  name:'MyActivity',
  data (){
   return{
    title:'MyActivuty'
   }
  }
    
};
</script>
