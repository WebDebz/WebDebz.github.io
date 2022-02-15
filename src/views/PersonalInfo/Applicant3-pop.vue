<template>
  <v-container>
 
 <div class="main-content">
   <h1>Personal Information</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/LA-9p.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      
      <div class="help-content help-CAN">
        
        <p class="title">Quebec</p>
        <p><b>This page applies to QUEBEC residents ONLY.</b></p>
        <p>If an FNA has not been found for the applicant, you will need to complete the Life Insurance Needs Assessment.</p>
        <p>Complete the Income Replacement Needs and Immediate Cash Needs as accurately as possible. </p>
        <p>A total needs calculation will display at the bottom of the screen and will aid in determining appropriate life insurance coverage for the applicant. </p>
      </div> 
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('Applicant3')"
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
