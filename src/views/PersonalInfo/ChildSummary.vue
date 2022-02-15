<template>
  <v-container>
 
 <div class="main-content">
   <h1>Personal Information</h1>

   
    <v-img
          :src="require('../../assets/Life_Regular/NextGen-Personal Info-Child Summary-No-Practice_App.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p>If the applicant is adding a child rider to the policy, tap <b>Yes</b> in this section.</p>
        <p>If you choose <b>No</b>, you will continue to the <b>Policy Owner Information</b> screen.</p>
        <p>If you choose <b>Yes</b>, you will need to add details for that child on the next page.</p>
        <p>Note: A child rider can be added to  policy coverage as early as 5 days old and prior to the child’s 18th birthday. After a child’s 18th birthday, a separate application for an individual policy would be required.</p>
    </div> 
     
      
    
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('Applicant3')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('ChildSummary2')"
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

