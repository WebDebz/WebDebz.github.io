<template>
  <v-container>
 
 <div class="main-content">
   <h1>Existing Insurance</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/NextGen-Existing Insurance-Replacement Questions-Active-Practice_App.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p>Choose the reason the policy/annuity is being replaced before clicking <b>Save</b>. You must complete this page for each policy/annuity you have entered.</p>

      </div> 
      
      <div class="help-content help-CAN">
        <p class="title">Canada</p>
        <p>Canadian applicants will not receive this screen.
</p>
      </div> 
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('InsurForce3')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
           <v-btn
          @click="$router.push('InsurForce5')"
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
