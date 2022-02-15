<template>
  <v-container>
 
 <div class="main-content">
   <h1>Health and Coverage</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/NextGen-Review and Pay-Paramed Exam-Practice_App.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p>If a <b>Paramed Exam</b> is needed, the applicant can schedule the appointment in real time at the kitchen table</p>
        <p>We highly recommended that the applicant schedule their appointment now, as scheduling the appointment during the application process can speed up the underwriting process by up to a week.</p>
        <p>To schedule the appointment, tap the <b>Schedule Appointment Now link.</b> </p>
        <p>If the applicant does not wish to schedule their appointment now, check the corresponding box. A drop-down will appear asking for the reason why.  </p>
        <p>Options include:</p>
        <ul>
            <li>Schedule Not Available</li>
            <li>Desired Time Unavailable</li>
            <li>Client Asked to Schedule Later</li>
        </ul>

      </div>
      <div class="help-content help-CAN">
        <p class="title">Canada</p>
        <p class="help-NY">Does CAN get this screen – not in Mural</p>
      </div>
      
       
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('TestDisclosure')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('TestDisclosure3')"
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

