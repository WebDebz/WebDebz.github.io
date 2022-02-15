<template>
  <v-container>
 
 <div class="main-content">
   <h1>Getting Started</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/LA-6p_a.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <div class="help-content help-CAN">
        <p class="title">Canada</p>
        <p><b>This page applies to Canada residents ONLY.</b></p>
        <p>The <b>Agent Tasks Acknowledgement</b> outlines all tasks that you must complete to be in compliance with both Primerica and province standards.</p>
        <p>Prior to moving forward you must also attest that you have not used any coercion or undue influence to secure the sale, and that you have not put your personal interest above that of the client. </p>
        <p>Indicate whether you have a familial relationship with the applicant, and if so, denote the relationship. Options include:</p>
        <ul>
            <li>Self</li>
            <li>Spouse</li>
            <li>Child</li>
            <li>Parent/In-Law</li>
            <li>Sister/Sister-In-Law</li>
            <li>Brother/Brother-In-Law</li>
            <li>Other</li>
        </ul>
      </div> 
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('AgentTasks')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          
        </v-row>
      </div>
    </div>
  </div>
  
  </v-container>

</template>

