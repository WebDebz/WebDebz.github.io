<template>
  <v-container>
 
 <div class="main-content">
   <h1>Personal Information</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/NextGen-Personal Info-Child To Be Covered-0 to 14 Medical Questions-Practice_App.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p>Answer each question as it relates to the first child to be covered.</p>
        <p>Once you have entered the child’s date of birth, the medical questions at the bottom of the screen may change depending on the child’s age.</p>
        <p>Children ages 0-14 will receive the questions shown on this screen.</p>
        <p>Children ages 15-18 will <a @click="overlay = !overlay">receive these questions.</a> </p>
        <p>Select all statements that apply to the child’s medical history. If no statements apply, select None of the Above.</p>
        <p>Clicking Save will return you to the previous Child Summary page where you will now see this child listed.</p>
    </div> 
     
      
    
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('ChildSummary')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('ChildSummary3')"
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
    <div class="modal-content" style="text-align:center;">
    <v-img
    :src="require('../../assets/Life_Regular/Child-Coverage-2p.png')"
    max-width="500"
  
    ></v-img>
    <p></p>
      <v-btn
        class="white--text"
        color="primary"
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
