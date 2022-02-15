<template>
  <v-container>
 
 <div class="main-content">
   <h1>Review and Pay</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/LA-38.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p>Tap <b>Sign</b> and choose your signature style. Once chosen, tap <b>Adopt and Sign</b> to leave your signature.</p>
        <p>When completed, tap <b>Finish</b>.</p>
       </div>
       
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('Signatures2')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('Signatures4')"
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

