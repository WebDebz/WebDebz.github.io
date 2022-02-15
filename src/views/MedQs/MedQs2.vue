<template>
  <v-container>
 
 <div class="main-content">
   <h1>Health and Coverage</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/LA-21.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p>The questions in the Medical Questions section are dynamic, meaning more questions may be asked based on the answers you provide. </p>
        <p>For each question, choose all answers that apply, or choose <b>None of these apply.</b></p>
        <p>If additional answers are needed, the section will <a @click="overlay = !overlay">expand to show those questions</a> in real-time. Be sure to answer all questions as accurately as possible as these answers can affect underwriting. </p>
        <p>Throughout your time on this page, a light blue banner will periodically display at the top of the page asking if you would like to save your progress. Tap <b>Save Progress</b> at any time to ensure you do not lose any of your work. </p>
        <p>At the bottom of the page, tap <a @click="overlay2 = !overlay">Add a Doctor</a> to add the applicant’s current healthcare providers, specialists, or healthcare facilities that can provide the most current medical information for the applicant. Repeat the process until all relevant medical providers have been entered. </p>

      </div> 
       
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('MedQs')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('MedQs3')"
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
   <v-row 
    justify="center"
    @click="overlay = false"
    >
    
    <v-overlay
      :z-index="zIndex"
      :value="overlay"
      
    >
    <div style="overflow: scroll; text-align:center;">
    <v-img
    :src="require('../../assets/Life_Regular/LA-21p_a.png')"
    max-width="500"
    @click="overlay = false"
    ></v-img>
    <p></p>
      <v-btn
        class="white--text"
        color="primary"
        align="center"
        @click="overlay = false"
      >
        Close Window
      </v-btn>
      </div>
    </v-overlay>
  </v-row>

   <v-row 
    justify="center"
    @click="overlay2 = false"
    >
    
    <v-overlay
      :z-index="zIndex"
      :value="overlay2"
      
    >
    <div style="overflow: scroll; text-align:center;">
    <v-img
    :src="require('../../assets/Life_Regular/LA-21p_b.png')"
    max-width="500"
    @click="overlay2 = false"
    ></v-img>
    <p></p>
      <v-btn
        class="white--text"
        color="primary"
        align="center"
        @click="overlay2 = false"
      >
        Close Window
      </v-btn>
      </div>
    </v-overlay>
  </v-row>
  </v-container>

</template>
<script>
  export default {
    data: () => ({
      overlay: false,
      overlay2: false,
      zIndex: 0,
    }),
  }
</script>
