<template>
  <v-container>
 
 <div class="main-content">
   <h1>Health and Coverage</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/LA-25.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p>Once the applicant has signed the policy, it will be locked for editing.  Before continuing, be sure that all personal and medical information have been entered correctly.</p>
        <p>The applicant will sign the application via DocuSign.</p>
        <p>After tapping Continue, the applicant will receive a link from DocuSign at the email address they provided earlier in the application.</p>
        <p>To unlock this document, the applicant will receive a one-time access code via text to the mobile phone number they provided.</p>
      </div> 
      <div class="help-content help-regular">
        <p>Watch this video to learn more about using DocuSign to sign the application. <i style="color:red;">(length here)</i></p>
        <p class="help-NY">Insert Video</p>
      </div>
      
       
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('SignatureSummary')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('SignatureSummary3')"
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

