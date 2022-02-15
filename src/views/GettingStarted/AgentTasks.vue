<template>
  <v-container>
 
 <div class="main-content">
   <h1>Getting Started</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/NextGen-Tasks Acknowledgement-Practice_App.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p>Be sure to complete the tasks in this Agent Tasks Acknowledgement section so that you are compliant with both Primerica and your state or province.
</p>
      </div> 
      <div class="help-content help-NY">
        <p class="title">New York​</p>
        <p>Please note that the NY acknowledgement may be worded differently but the same concept applies</p>
      </div>
      <div class="help-content help-CAN">
        <p class="title">Canada</p>
        <p>Applicants will see this version of the <router-link to="/AgentTasksAck">Agent Tasks Acknowledgement</router-link> page. </p>
        <hr>
        <p class="title">Quebec:</p>
        <p>If an FNA has not been found for this applicant, you will also receive the <router-link to="/AgentTasks-pop">Financial Needs Acknowledgement</router-link> screen prior to reaching the Canada <b>Agent Tasks Acknowledgement page listed above</b>.</p>
      </div> 
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('AgentInfo')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('Applicant')"
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

