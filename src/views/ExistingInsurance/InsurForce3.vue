<template>
  <v-container>
 
 <div class="main-content">
   <h1>Existing Insurance</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/NextGen-Existing Insurance-Life Insurance in Force With Policies-Active-Practice_App.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p>The policy or annuity you have entered will now be shown.</p>
        <p>If there are additional policies or annuities to be added, tap the <b>Add Insurance Policy</b> link to add and save the policy details. </p>
        <p>Repeat this process as needed to add additional policies or annuities. You may add up to 8 on this application. </p>
        <p>When all policies have been entered, tap Continue.</p>

      </div> 
       
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('InsurForce2')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('InsurForceReplacement')"
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

