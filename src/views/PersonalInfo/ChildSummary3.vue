<template>
  <v-container>
 
 <div class="main-content">
   <h1>Personal Information</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/NextGen-Personal Info-Child Summary-Yes-Child Added-Practice_App.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p>After you have added the first child, tap the Add Child button and repeat the  process as needed to add additional children.</p>
        <p>You may include up to 10 children on this application.</p>
        <p>When all children have been entered, tap Continue.</p>
    </div> 
     
      
    
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('ChildSummary2')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('PolicyOwner')"
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

