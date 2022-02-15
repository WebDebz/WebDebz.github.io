<template>
  <v-container>
 
 <div class="main-content">
   <h1>Personal Information</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/NextGen-Personal Info-LexisNexis-Applicant 1-Active-Practice_App.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p class="new-feature">New Feature </p>
        <p>Primerica has partnered with a third-party vendor to prefill most of the applicant’s personal information. Because the information you provide here will be used to identify the applicant, be sure to enter the applicants <b>legal name</b>, address and date of birth correctly.  
</p>
      </div> 
      
      <div class="help-content help-CAN">
        <p class="title">Canada</p>
        <p>Canadian applicants will not receive this screen.</p>
      </div> 
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('AgentTasks')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('Applicant2')"
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

