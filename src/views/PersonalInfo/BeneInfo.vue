<template>
  <v-container>
 
 <div class="main-content">
   <h1>Personal Information</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/NextGen-Personal Info-Beneficiary Infomation-Active-Practice_App.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <div class="help-content help-regular">
        <p>Add <b>Beneficiaries</b> and <b>Contingent Beneficiaries</b> to the policy. Allocation % for each section must equal 100%.</p>
        <p>When adding a beneficiary, options include:</p>
        <ul>
            <li>Other Individual</li>
            <li>Other Entity</li>
            <li>Business</li>
            <li>Trust</li>
            <li>Funeral Home</li>
            <li>All Children Equally</li>
            <li>Estate</li>
        </ul>
      </div> 
      <div class="help-content help-regular">
          Please see the Beneficiary Guide for more information on choosing beneficiaries. <i style="color:red;">(link to: Bene Guide avail Mar/Apr)</i>

      </div>
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('PolicyOwner')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('InsurForce')"
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

