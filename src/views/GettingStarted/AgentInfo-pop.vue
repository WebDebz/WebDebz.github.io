<template>
  <v-container>
 
 <div class="main-content">
   <h1>Getting Started</h1>
    <v-img
          :src="require('../../assets/Life_Regular/LA-5p.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p>To Find a Rep or trainee to add to the application, begin by entering their name or solution number/Rep ID. Use the drop-down to search either your Base Shop or the entire company. Click <b>Search.</b></p> 
        <p>Select the desired Rep or Trainee to add them to the application. Remember, only one trainee can be added to each application.

​</p>
      </div> 
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('AgentInfo')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          
        </v-row>
      </div>
    </div>
   

  </div>
    
  </v-container>

</template>

