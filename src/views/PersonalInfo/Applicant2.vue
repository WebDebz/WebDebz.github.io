<template>
  <v-container>
 
 <div class="main-content">
   <h1>Personal Information</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/NextGen-Personal Info-LexisNexis-Interstitial-Screen-Practice_App.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p class="new-feature">New Feature </p>
        <p>The system will use the personal information you have entered to locate the applicant and verify their identity.</p>
        <p>If you receive <router-link to="/Applicant2-pop">this alert</router-link> at the top of the page, the system believes it has found the applicant but will need you to confirm the applicant’s zip code and date of birth to continue. (link to  LA-7p)</p>
        <p>After confirming their phone number and email address on the next page, the system will load additional information (such as their SSN/SIN) into the application.</p>
        <p><b>Please be sure that the applicant has access to the email and mobile device selected as this information will be used for the DocuSign portion of the application. This information cannot be changed later in the application.</b></p>
      </div> 
      <div class="help-content help-regular">
        <p>Watch this video to learn more about how this feature works and what outcomes you can expect if your applicant is not found. (length of video here)</p>
      </div> 
      
      <div class="help-content help-CAN">
        <p class="title">Canada</p>
        <p>Canadian applicants will not receive this screen or undergo this look up process.</p>
      </div> 
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('Applicant')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('Applicant3')"
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

