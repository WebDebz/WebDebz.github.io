<template>
  <v-container>
 
 <div class="main-content">
   <h1>Health and Coverage</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/NextGen-Health Coverage-Underwriting Requirements-Active-Practice_App.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p>Choose the Language the applicant would prefer to communicate with if  a telephone interview is needed. </p>
      </div>
      <div class="help-content help-CAN">
        <p class="title">Canada</p>
        <p>Please note Tele-Underwriting is only available in English at this time. 
 </p>
      </div>
      
       
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('PersonalizedQuote2')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('TestDisclosure')"
          color="primary"
          tile
          large
          >
            Continue
          </v-btn>
        </v-row>
      </div>
    </div>
   

  </div>
  
  </v-container>

</template>

