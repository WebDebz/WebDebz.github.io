<template>
  <v-container>
 
 <div class="main-content">
   <h1>Health and Coverage</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/NextGen-Health Coverage-Medical Summary-Active-Practice_App.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p>If no medical conditions were selected on the prior page, none will be listed here and you can continue to the next page.</p>
        <p>If medical conditions were selected, they will be listed here.  Be sure to review that the items listed are complete and accurate.</p>
        <p>If changes are needed, tap the <b>Back</b> button to correct the issues before moving forward.</p>

      </div> 
      <div class="help-content help-NY">
        <p>NY applicants will also receive a <a @click="overlay = !overlay">Suitability Questionnaire</a> page before moving on to the Coverage section. </p>

      </div> 
       
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('MedQs2')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('AddCoverage')"
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
    :src="require('../../assets/Life_Regular/LA-22p.png')"
    max-width="500"
    ></v-img>
    <p></p>
      <v-btn
        class="white--text"
        color="primary"
        align="center"
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
      zIndex: 0,
    }),
  }
</script>