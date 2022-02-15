<template>
  <v-container>
 
 <div class="main-content">
   <h1>Health and Coverage</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/LA-27.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p bold>Primerica PowerTerm puts the Power of underwriting in your hands with real-time decisions!</p>
        <p bold>Real time underwriting can provide a decision in just 90 seconds. While it is quick, it is plenty of time to have a recruiting conversation or gather referrals!</p>
        <p>The system will create the application from all of the personal and medical information that has been entered.</p>
        <p>The applicant will be underwritten in real-time to give instant results with personalized rates and quotes.</p>
      </div>
      
       
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('SignatureSummary3')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('PersonalizedQuote2')"
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

