<template>
  <v-container>
 
 <div class="main-content">
   <h1>Review and Pay</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/NextGen-Review and Pay-Quick Check-Practice_App.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p>The system will perform a second Quick Check before reaching the final <b>Signatures</b> screen.</p>
        <p>If there is no missing information, this screen will not be present.</p>
        <p>If there is information missing from the application, it will be listed on this screen.  Tap the <b>Start Quick Check</b> button to be taken to each incomplete screen. </p>
        <p>Complete the missing information and tap <b>Continue</b>.  Once you have completed all missing information, you will advance to the <b>Signatures</b> screen.</p>
      </div>
      
       
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('Billing')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('Billing3')"
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

