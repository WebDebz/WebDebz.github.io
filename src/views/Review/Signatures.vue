<template>
  <v-container>
 
 <div class="main-content">
   <h1>Review and Pay</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/NextGen-Review and Pay-Signature Summary Start-Practice_App.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p>All parties required to submit the application will be listed on this page.</p>
        <p>The applicant will receive a new link and access code from DocuSign at the email and mobile number they provided earlier in the application.  This information cannot be changed.</p>
        <p>Additional parties, such as the policy holder or payer, will receive their own links and access codes  from DocuSign at the mobile number and email provided on this screen. Please make sure to provide accurate and accessible contact information. To edit this contact information, tap their corresponding <b>Edit Contact Information</b> link. </p>
        <p>Tapping Continue will begin the signature process and send all necessary links and access codes from DocuSign.</p>
        <p>Please see the DocuSign Frequently Asked Questions for more information on DocuSign. <span style="color:red;">(link to: DocuSign FAQ)</span></p>
      </div>
       <div class="help-content help-regular">
           <p>Watch this video to learn more about using DocuSign to sign the application. (length here)
</p>
       </div>
       
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('Billing3')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('Signatures2')"
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

