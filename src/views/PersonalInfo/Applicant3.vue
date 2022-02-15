<template>
  <v-container>
 
 <div class="main-content">
   <h1>Personal Information</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/NextGen-Personal Info-LexisNexis-Prefill Data-Active-Practice_App.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p>Whether you have keyed the information manually or the information was uploaded by the system, review each question to be sure that all information is complete and correct.</p>
        <p>All information must be completed for the application to be processed.</p>
        <p>Incomplete or inaccurate information could affect underwriting of the policy.</p>
      </div> 
      
      <div class="help-content help-CAN">
        <p class="title">Canada</p>
        <p>Manually enter all personal information for the proposed insured.</p>
        <p>Applicants will receive an additional question regarding the use of their personal information and may check the provided box to opt-out of information sharing.</p>
        <hr>
        <p class="title">Quebec</p>
        <p>After this screen, the system will run another check for a completed FNA.</p>
        <p>If an FNA has been found, the system will import the applicant’s needs information.</p>
        <p>If an FNA has not been found,  you will receive a notice and continue to the <router-link to="/Applicant3-pop">Life Insurance Needs Assessment screen.</router-link> </p>
      </div> 
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('Applicant2')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('ChildSummary')"
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
