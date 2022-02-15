<template>
  <v-container>
 
 <div class="main-content">
   <h1>Health and Coverage</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/NextGen-Health Coverage-Test Disclosure-Yes-Practice_App.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p>In the event of a positive HIV test, note whether the applicant would like for their physician to be informed.  If you answer Yes, you must enter the doctor’s contact information. 
</p>
      </div>
      <div class="help-content help-CAN">
        <p class="title">Canada</p>
        <p class="help-NY">Does CAN get this screen – not in Mural</p>
      </div>
      
       
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('Underwriting')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('TestDisclosure2')"
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

