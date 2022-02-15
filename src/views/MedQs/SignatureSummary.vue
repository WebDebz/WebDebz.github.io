<template>
  <v-container>
 
 <div class="main-content">
   <h1>Health and Coverage</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/NextGen-Health Coverage-Quick Check-Practice_App.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p>Before reaching the <b>Signatures</b> screen, the system will run a <b>Quick Check</b> to be sure all required information has been entered. </p>
        <p>If there is no missing information, you will continue on to the next screen.</p>
        <p>If there is information missing from the application, it will be listed on this screen.  Tap the <b>Start Quick Check</b> button to be taken to each incomplete screen. </p>
        <p>Complete the missing information and tap <b class="help-CAN">Save/Continue</b>.  Once you have completed all missing information, you will advance to the Signatures screen. <i class="help-CAN">(please confirm wording above)</i></p>

      </div> 
      
       
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('AddCoverage')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('SignatureSummary2')"
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

