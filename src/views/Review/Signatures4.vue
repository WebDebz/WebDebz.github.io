<template>
  <v-container>
 
 <div class="main-content">
   <h1>Review and Pay</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/NextGen-Review and Pay-Signature Summary Signatures Complete-Practice_App.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p>Once you have received green check marks for all required parties, the application is ready to be submitted.</p>
        <p>If you are ready to submit the application, tap <b>Submit Now.</b></p>
        <p>To save the application and submit it at a later time, tap <b>Submit Later</b>.  You will be able to access and submit this application directly from your Life Application Activity Screen in the Primerica App.</p>
       </div>
       
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('Signatures3')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('Signatures5')"
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

