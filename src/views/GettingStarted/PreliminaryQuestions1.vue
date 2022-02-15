<template>
  <v-container>
 
 <div class="main-content">
   <h1>Getting Started</h1>
    <v-img
          :src="require('../../assets/Life_Regular/NextGen-Get Started-Preliminary Questions-EmailPhoneAlert-Practice_App.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p class="new-feature">New Feature </p>
        <p>This Life application utilizes DocuSign to obtain signatures. You must confirm that all parties have access to a mobile phone and email address to continue. Otherwise, you must use a paper application.
</p>
      </div> 
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
        <v-btn 
          @click="$router.push('Welcome')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('PreliminaryQuestions')"
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

