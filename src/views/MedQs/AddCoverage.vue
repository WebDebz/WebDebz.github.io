<template>
  <v-container>
 
 <div class="main-content">
   <h1>Health and Coverage</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/LA-23.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p>If you have started this application from a Quick Quote, the coverage information will be pre-filled.</p>
        <p>Otherwise choose the product type, premium class, term, and coverage amount.</p>
        <p>As choices are entered on the screen, the total coverage and premiums amount will display at the bottom of the screen.</p>
        <p><b>Backdate to Save Age</b> allows you to provide a quote based on the insured’s actual age when the insured’s birthday is within the next 6 months. <i class="help-CAN">Why would one do this? Will there be a tool tip for this? If so, can you provide the wording?</i></p>
        <p>Use the <b>Automatic Increase Request</b> (AIR) feature to maximize your applicant’s benefits for their same premium. In the event the applicant qualifies for an insurance class upgrade during underwriting, Primerica will apply the premium savings to adding additional coverage.</p>
        <p>Use the <a @click="overlay = !overlay">Launch AIR Calculator</a> button to view examples. </p>

      </div> 
      <div class="help-content help-regular">
        <p>For more information on premium classes, banding, product limitations, and underwriting considerations, see the Agent Quick Reference Guide. <i style="color:red;">(link to guide – avail Mar/Apr)</i></p>

      </div> 
       
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('MedQs3')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('SignatureSummary')"
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
    :src="require('../../assets/Life_Regular/LA-23p.png')"
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
