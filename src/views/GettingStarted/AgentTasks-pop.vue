<template>
  <v-container>
 
 <div class="main-content">
   <h1>Getting Started</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/LA-6p_b.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      
      <div class="help-content help-CAN">
        <p class="title">Quebec</p>
    
        <p><b>This page applies to QUEBEC residents ONLY.</b></p>
        <p>A completed FNA is required to process the application. </p>
        <p>If the system is unable to locate a completed FNA for the applicant, you must confirm that one has been completed prior to beginning the life application. You must also send a paper copy of this FNA to the Head Office before the application will be processed. Instructions will be provided at the end of the application. </p>

      </div> 
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('AgentTasks')"
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

