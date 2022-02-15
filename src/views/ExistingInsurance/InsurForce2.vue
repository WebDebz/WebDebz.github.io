<template>
  <v-container>
 
 <div class="main-content">
   <h1>Existing Insurance</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/NextGen-Existing Insurance-Poilcy Details-Active-Practice_App.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p>Enter the information for the first existing life insurance policy or annuity in force. </p>
        <p>Clicking <b>Save</b> will return you to the previous <b>Life Insurance In Force</b> page where you will now see this policy listed.</p>

      </div> 
       <div class="help-content help-regular">
       
        <p>*Note, you will only receive this page if you chose <b>Yes</b> for the “existing life insurance or annuities in force” question.</p>
      </div> 
       
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('InsurForce')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('InsurForce3')"
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

