<template>
  <v-container>
 
 <div class="main-content">
   <h1>Getting Started</h1>
    <v-img
          :src="require('../../assets/Life_Regular/NextGen-Get Started-Agent Info-Practice_App.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p>As the writing agent, you must confirm all <b>Agent Information</b> is correct.</p>
        <p>If you are splitting this sale with another agent, add the agent to the application by tapping <b>Add Agent</b>.  Search for and select the agent to be added. Keep in mind, a sale can only be split between 2 licensed agents <router-link to="/AgentInfo-pop">Click here to see this process.</router-link> </p>
        <p>If a Trainee is participating in the sale, add them to the application so that they may receive their Field Training Bonus credit. Click <b>Add Trainee</b>, search, and add the trainee to the application. Note: only 1 Trainee can be added to an application.
​</p>
      </div> 
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('PreliminaryQuestions')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('AgentTasks')"
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


