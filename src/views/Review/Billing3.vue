<template>
  <v-container>
 
 <div class="main-content">
   <h1>Review and Pay</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/NextGen-Almost there Interstitial-Practice_App.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p>You are now ready to use DocuSign to obtain final signatures for the application.</p>
        <p><b>REMINDER:</b>  Finalized copies of this application and disclosures can be accessed by the applicant at any time after registering through MyPrimerica.
</p>
      </div>
      
       
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('Billing2')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('Signatures')"
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

