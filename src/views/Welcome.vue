<template>
  <v-container>
 
 <div class="main-content">
   <h1>Home Page</h1>
        <v-img
          :src="require('../assets/temp-home.png')"
          class="mx-auto"
    max-width="600"
        ></v-img>
  </div>
  
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p>This panel will provide information, tips and tutorials to help you learn how to use the next generation Turbo Life App.</p> 
        <p>Navigate through each page by tapping the <b>Continue</b> or <b>Back</b> buttons at the bottom of this panel or jump to a specific section of the Life  App from the left side navigation menu.</p> 
        <p>Click on the blue links throughout the module to access additional screens, guides, and videos.</p>
      </div> 
      <div class="help-content help-NY">
        <p class="title">New York​</p>
        <p>Information and screens specific to <b>New York</b> residents can be found in the gray boxes.  
</p>
      </div>
      <div class="help-content help-CAN">
        <p class="title">Canada</p>
        <p>Information and screens specific to all <b>Canada</b> residents can be found in the red boxes.  </p>
        <hr>
        <p class="title">Quebec:</p>
        <p>Additional information and screens applying specifically to <b>Quebec</b> residents can be found under the Canada specific information.</p>
      </div> 
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('Home')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('PreliminaryQuestions1')"
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


