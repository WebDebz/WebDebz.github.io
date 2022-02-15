<template>
  <v-container>
 
 <div class="main-content">
   <h1>Existing Insurance</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/NextGen-Existing Insurance-Life Insurance in Force-Active-Practice_App .png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p>If you answer <b>No</b> for these questions, you will skip to the next section of the application and no additional questions will be needed.</p>
        <p>Otherwise:</p>
        <p>If you choose <b>Yes</b> for the “existing life insurance or annuities in force” question, you will be directed to the <b>Policy Details</b> page where you must input details of the  policy/annuity.</p>
        <p>If you choose <b>Yes</b> for the “replacement” question, you will receive an additional <b>Replacement Questions</b> page at the end of this section.</p>

      </div> 
       <div class="help-content help-NY">
        <p class="title">New York</p>
        <p>NY applicants will see the <a @click="overlay = !overlay"><b>Definition of Replacement</b></a> and <a @click="overlay2 = !overlay"><b>Notice Regarding Replacement</b></a> Alerts before reaching this page. Click here to see those screens. </p>
      </div> 
      <div class="help-content help-CAN">
        <p class="title">Canada</p>
        <p>If you choose <b>YES</b> for the “replacement” question, this page will display additional questions.  <router-link to="/InsurForceReplacement">Click here</router-link> to see those screens.  </p>
      </div> 
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('BeneInfo')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('InsurForce2')"
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
    :src="require('../../assets/Life_Regular/LA-15p_a.png')"
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
    :src="require('../../assets/Life_Regular/LA-15p_b.png')"
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
