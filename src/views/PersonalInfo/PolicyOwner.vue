<template>
  <v-container>
 
 <div class="main-content">
   <h1>Personal Information</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/NextGen-Personal Info-Policy Owner Proposed Insured-Practice_App.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <div class="help-content help-regular">
        <p>The <b>Policy Owner</b> will default to the Insured.  You can change the Policy Owner to a third party and enter their information by making a selection from the drop-down menu.</p>
        <p>Options include:</p>
        <ul>
            <li>Other Individual</li>
            <li>Buy-Sell Agreement</li>
            <li>Charity/Church</li>
            <li>Employer</li>
            <li>Business</li>
            <li>Trust</li>
        </ul>
      </div> 
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('ChildSummary3')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('BeneInfo')"
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

