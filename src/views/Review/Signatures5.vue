<template>
  <v-container>
 
 <div class="main-content">
   <h1>Review and Pay</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/NextGen-Review and Pay-My Primerica Link-Practice_App.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p>Congratulations – you have submitted an application!</p>
        <p>If your RVP has enabled their review process, the application will be routed to them for review and approval before being forwarded to Home Office.</p>
        <p>Otherwise, your application is already on its way.</p>
        <p>If additional information is needed, such as lab work, consult Life Manager on POL and guide your client through the next steps.</p>
       </div>
       
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('Signatures4')"
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

