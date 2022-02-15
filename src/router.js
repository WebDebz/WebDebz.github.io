import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    
    {
      path: '/Welcome',
      name: 'Welcome',
      component: () => import('./views/Welcome.vue')
    },
    {
      path: '/PreliminaryQuestions1',
      name: 'Preliminary Questions1',
      component: () => import( './views/GettingStarted/PreliminaryQuestions1.vue')
    },{
      path: '/PreliminaryQuestions',
      name: 'Preliminary Questions',
      component: () => import( './views/GettingStarted/PreliminaryQuestions.vue')
    },
    {
      path: '/AgentInfo',
      name: 'Agent Info',
      component: () => import('./views/GettingStarted/AgentInfo.vue')
    },
    {
      path: '/AgentInfo-pop',
      name: 'Agent Info Pop',
      component: () => import('./views/GettingStarted/AgentInfo-pop.vue')
    },
    {
      path: '/AgentTasks',
      name: 'Agent Tasks',
      component: () => import( './views/GettingStarted/AgentTasks.vue')
    },
    {
      path: '/AgentTasksAck',
      name: 'Agent Tasks Acknowledgement',
      component: () => import( './views/GettingStarted/AgentTasksAck.vue')
    },
    {
      path: '/AgentTasks-pop',
      name: 'Agent Tasks Pop',
      component: () => import( './views/GettingStarted/AgentTasks-pop.vue')
    },
    {
      path: '/Applicant',
      name: 'Applicant',
      component: () => import( './views/PersonalInfo/Applicant.vue')
    },
        {
      path: '/Applicant2',
      name: 'Applicant',
      component: () => import( './views/PersonalInfo/Applicant2.vue')
    },
        {
      path: '/Applicant2-pop',
      name: 'Applicant',
      component: () => import( './views/PersonalInfo/Applicant2-pop.vue')
    },
    {
      path: '/Applicant3',
      name: 'Applicant',
      component: () => import( './views/PersonalInfo/Applicant3.vue')
    },
        {
      path: '/Applicant3-pop',
      name: 'Applicant',
      component: () => import( './views/PersonalInfo/Applicant3-pop.vue')
    },
    {
      path: '/ChildSummary',
      name: 'ChildSummary',
      component: () => import( './views/PersonalInfo/ChildSummary.vue')
    },
    {
      path: '/ChildSummary2',
      name: 'ChildSummary',
      component: () => import( './views/PersonalInfo/ChildSummary2.vue')
    },
    {
      path: '/ChildSummary3',
      name: 'ChildSummary',
      component: () => import( './views/PersonalInfo/ChildSummary3.vue')
    },
    {
      path: '/PolicyOwner',
      name: 'PolicyOwner',
      component: () => import( './views/PersonalInfo/PolicyOwner.vue')
    },
    {
      path: '/BeneInfo',
      name: 'BeneInfo',
      component: () => import( './views/PersonalInfo/BeneInfo.vue')
    },
    {
      path: '/InsurForce',
      name: 'InsurForce',
      component: () => import( './views/ExistingInsurance/InsurForce.vue')
    },
    {
      path: '/InsurForce2',
      name: 'InsurForce',
      component: () => import( './views/ExistingInsurance/InsurForce2.vue')
    },
    {
      path: '/InsurForce3',
      name: 'InsurForce',
      component: () => import( './views/ExistingInsurance/InsurForce3.vue')
    },
    {
      path: '/InsurForceReplacement',
      name: 'InsurForce',
      component: () => import( './views/ExistingInsurance/InsurForceReplacement.vue')
    },
    {
      path: '/InsurForce5',
      name: 'InsurForce',
      component: () => import( './views/ExistingInsurance/InsurForce5.vue')
    },
    {
      path: '/MedQs',
      name: 'MedicalQuestions',
      component: () => import( './views/MedQs/MedQs.vue')
    },
    {
      path: '/MedQs2',
      name: 'MedicalQuestions',
      component: () => import( './views/MedQs/MedQs2.vue')
    },
    {
      path: '/MedQs3',
      name: 'MedicalQuestions',
      component: () => import( './views/MedQs/MedQs3.vue')
    },
    {
      path: '/AddCoverage',
      name: 'AddCoverage',
      component: () => import( './views/MedQs/AddCoverage.vue')
    },
    {
      path: '/SignatureSummary',
      name: 'SignatureSummary',
      component: () => import( './views/MedQs/SignatureSummary.vue')
    },
    {
      path: '/SignatureSummary2',
      name: 'SignatureSummary2',
      component: () => import( './views/MedQs/SignatureSummary2.vue')
    },
    {
      path: '/SignatureSummary3',
      name: 'SignatureSummary3',
      component: () => import( './views/MedQs/SignatureSummary3.vue')
    },
    {
      path: '/PersonalizedQuote',
      name: 'PersonalizedQuote',
      component: () => import( './views/MedQs/PersonalizedQuote.vue')
    },
    {
      path: '/PersonalizedQuote2',
      name: 'PersonalizedQuote2',
      component: () => import( './views/MedQs/PersonalizedQuote2.vue')
    },
    {
      path: '/Underwriting',
      name: 'Underwriting',
      component: () => import( './views/MedQs/Underwriting.vue')
    },
    {
      path: '/TestDisclosure',
      name: 'TestDisclosure',
      component: () => import( './views/MedQs/TestDisclosure.vue')
    },
    {
      path: '/TestDisclosure2',
      name: 'TestDisclosure2',
      component: () => import( './views/MedQs/TestDisclosure2.vue')
    },
    {
      path: '/TestDisclosure3',
      name: 'TestDisclosure3',
      component: () => import( './views/MedQs/TestDisclosure3.vue')
    },
    {
      path: '/Billing',
      name: 'Billing',
      component: () => import( './views/Review/Billing.vue')
    },
    {
      path: '/Billing2',
      name: 'Billing2',
      component: () => import( './views/Review/Billing2.vue')
    },
    {
      path: '/Billing3',
      name: 'Billing3',
      component: () => import( './views/Review/Billing3.vue')
    },
    {
      path: '/Signatures',
      name: 'Signatures',
      component: () => import( './views/Review/Signatures.vue')
    },
    {
      path: '/Signatures2',
      name: 'Signatures2',
      component: () => import( './views/Review/Signatures2.vue')
    },
    {
      path: '/Signatures3',
      name: 'Signatures3',
      component: () => import( './views/Review/Signatures3.vue')
    },
    {
      path: '/Signatures4',
      name: 'Signatures4',
      component: () => import( './views/Review/Signatures4.vue')
    },
    {
      path: '/Signatures5',
      name: 'Signatures5',
      component: () => import( './views/Review/Signatures5.vue')
    }
  ]
})
