<template>
  <v-container>
 
 <div class="main-content">
   <h1>Existing Insurance</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/NextGen-Existing Insurance-Poilcy Status Confirmation-Active-Practice_App.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p>The system will search through Primerica’s records to determine if there are any active/possibly active Primerica policies for the applicant.</p>
        <p>You will receive this page only if an active/possibly active Primerica policy is found.</p>
        <p>Review the policy information. Note that this new policy being applied for cannot <b><i>replace</i></b> this active/possibly active policy and can only be <b><i>added in addition</i></b> to the active policy.</p>
        <p>If the applicant wishes to move forward with this additional policy, you must choose a reason.</p>
        <p>Options include:</p>
        <ul>
            <li>Divorce/New Family</li>
            <li>Business Purposes</li>
            <li>Parents Own Prior</li>
            <li>Buy/Sell Agreements</li>
            <li>Estate Planning</li>
            <li>Replacement of Existing Policy</li>
            <li>Other</li>
        </ul>


      </div> 
       
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('InsurForceReplacement')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('MedQs')"
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

