<template>
  <v-container>
 
 <div class="main-content">
   <h1>Review and Pay</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/NextGen-Review and Pay-Plaid-Billing Info-Primary Spouse Select-Default-Practice_App.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p>Choose the Initial Payment Method and Recurring Payment Method the applicant wishes to use.  Enter their desired monthly draft date and account holder’s name.</p>
        <p>The easiest way to enter the applicant’s routing and account numbers is to <a @click="overlay = !overlay">locate them at the bottom of the applicant’s check</a> and enter them manually. </p>
        <p>If the bank account holder needs help locating their account information, click the blue <b>see below</b> link to use Plaid to import the account holder’s bank account information.</p>
        <p>Plaid is an alternative method for importing bank account information, however, if the account holder has their account information handy, you can enter it manually.</p>
        <p>Be sure to complete all information before continuing.</p>
      </div>
      <div class="help-content help-regular">
        <p>Watch this video to learn more about using Plaid to locate your banking information. (length here)</p>
      </div>
      
       
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('TestDisclosure3')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('Billing2')"
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
   <v-row 
    justify="center"
    @click="overlay = false"
    >
    
    <v-overlay
      :z-index="zIndex"
      :value="overlay"
      
    >
    <div style="overflow: scroll; text-align:center;">
    <v-img
    :src="require('../../assets/Life_Regular/LA-33p image check sample.png')"
    max-width="500"
    @click="overlay = false"
    ></v-img>
    <p></p>
      <v-btn
        class="white--text"
        color="primary"
        align="center"
        @click="overlay = false"
      >
        Close Window
      </v-btn>
      </div>
    </v-overlay>
  </v-row>
  </v-container>

</template>
<script>
  export default {
    data: () => ({
      overlay: false,
      zIndex: 0,
    }),
  }
</script>

