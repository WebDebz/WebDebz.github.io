<template>
  <v-container>
 
 <div class="main-content">
   <h1>Health and Coverage</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/NextGen-Review and Pay-Cash on Delivery-Practice_App.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p>You will be asked to consider submitting the application as <b>Cash on Delivery (COD)</b> based on answers to questions on the application.</p>
        <p>If prompted, we recommend submitting the application as COD to prevent chargebacks in the event the applicant does not qualify. Submitting applications COD does not count against your Taken Rate.</p>
        <p>For detailed information about Taken Rate, see the Quality of Business-Keep Your Cash training on POL > Products > Life Insurance > Quality of Business-Keep Your Cash.
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
          @click="$router.push('TestDisclosure2')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('Billing')"
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

