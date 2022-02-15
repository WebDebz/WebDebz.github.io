<template>
  <v-container>
 
 <div class="main-content">
   <h1>Getting Started</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/LA-8p.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      
      <div class="help-content help-CAN">
        <p class="title">Quebec</p>
    
        <p>If you receive this alert at the top of the page, we believe the applicant has been located and need to confirm some of their information. To confirm, please re-enter the applicant’s zip code and date of birth. </p>

      </div> 
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('Applicant2')"
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

