<template>
  <v-container>
 
 <div class="main-content">
   <h1>Getting Started</h1>
    <v-img
          :src="require('../../assets/Life_Regular/NextGen-Get Started-Preliminary Questions-Active-Practice_App.png')"
        
    max-width="500"
        ></v-img>
  </div>
  <div class="right-content">
    <div class="content-holder">
      <p class="title">Help Content </p>
      <div class="help-content help-regular">
        <p>The <b>Covid-19 Application Considerations</b> outline how the Covid-19 Pandemic may affect the answers submitted in this application.  Be sure to read and understand them prior to moving forward.</p>
        <p>The <b>country</b> and <b>location of transaction</b> questions set the groundwork for your application. The application will be built based on the requirements of the state/province you choose here.</p>
        <p>Choosing to <b>add a spouse or child-rider conversion</b> (exchange) allows a spouse/child rider to convert to a plan of coverage without needing to provide additional evidence of insurability upon death of the insured or prior to the termination of the rider. Any spouse conversion not due to death will require full underwriting.</p>
        <p>If you are not meeting face to face with the applicant and are using a third-party video web conferencing tool, be sure to follow Primerica’s <b>Video Web Conferencing Guidelines</b> via the link or in the Support Center on POL.</p>
      </div> 
      <div class="button-container">
        <v-row
        align="center"
        justify="space-around"
        >
          <v-btn 
          @click="$router.push('PreliminaryQuestions1')"
          outlined
          tile
          large
          color="primary"
          >
            Back
          </v-btn>
          <v-btn
          @click="$router.push('AgentInfo')"
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

<script>


export default {
  name:'PreliminaryQuestions',
  data (){
   return{
    title:'PreliminaryQuestions'
   }
  }
    
};
</script>