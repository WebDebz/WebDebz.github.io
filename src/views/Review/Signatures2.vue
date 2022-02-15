<template>
  <v-container>
 
 <div class="main-content">
   <h1>Review and Pay</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/NextGen-Review and Pay-Signature Summary Rep Ready-Practice_App.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p>After links and access codes have been sent, this page will be updated in real-time as signatures are received.</p>
        <p>Outstanding signatures will be noted with a yellow hourglass icon.</p>
        <p>Signatures that have been completed and received will be marked with a green check.</p>
        <p>When all parties have completed their signatures, you, the Rep, will also need to sign the application. Tap Sign Now to open the document.</p>
       </div>
       
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('Signatures')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('Signatures3')"
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

