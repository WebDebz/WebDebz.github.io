<template>
  <div class="hidden-xs-and-down">
    <div class="left-nav" id="left-hand-nav">

<v-card
    class="mx-auto"
    max-width="250"
  >
    <v-list-item
      dense
      nav
    >
    
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title><router-link to="/home">Home</router-link> </v-list-item-title>
      </v-list-item>
    

 

    <v-list nav dense>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
      
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
          
        </template>

        <v-list-item
          v-for="child in item.items"
          :key="child.title"
          :to="child.target"
        >
         <v-list-item-icon>
              <v-icon class="submenu-icon"  color="primary" size="20">mdi-checkbox-marked-circle</v-icon>
              <v-icon  />
            </v-list-item-icon>
          <v-list-item-content>
           
             <v-list-item-title v-text="child.title"></v-list-item-title>
          
          </v-list-item-content>
        
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-card>
    
    
    </div>
  </div>


  
</template>

<script>



export default {

  data: () => ({
      selectedItem: 1,
      overlay: false,
      zIndex: 0,
      items: [
        { text: 'Home', icon: 'mdi-home' },
        { text: 'My Activity', icon: 'mdi-format-list-bulleted-square' },
        { text: 'Getting Started', icon: 'mdi-navigation' },
        { text: 'Personal Information', icon: 'mdi-account' },
        { text: 'Existing Insurance', icon: 'mdi-clipboard' },
        { text: 'Health and Coverage', icon: 'mdi-clipboard' },
        { text: 'Review and Pay', icon: 'mdi-message' },
      ],
       items: [
        {
          action: 'mdi-navigation',
          active: true,
          items: [
            { title: 'Preliminary Questions', target:'PreliminaryQuestions1' },
            { title: 'Agent Information', target:'AgentInfo' },
            { title: 'Agent Tasks', target:'AgentTasks' },
          ],
          title: 'Getting Started',
        },
        {
          action: 'mdi-account-check',
          
          items: [
            { title: 'Applicant', target:'/Applicant' },
            { title: 'Child Summary', target:'/ChildSummary' },
            { title: 'Policy Owner', target:'/PolicyOwner' },
            { title: 'Beneficiary Information', target:'/BeneInfo' },
          ],
          title: 'Personal Information',
        },
        {
          action: 'mdi-clipboard-text',
          items: [
            { title: 'Insurance in Force', target:'/InsurForce' }
            ],
          title: 'Existing Insurance',
        },
        {
          action: 'mdi-clipboard-check',
          items: [
            { title: 'Medical Questions', target:'/MedQs' },
            { title: 'Signature Summary', target:'/SignatureSummary' },
            { title: 'Add Coverage', target:'/AddCoverage' },
            { title: 'Personalized Quote', target:'/PersonalizedQuote' },
            { title: 'Underwriting Requirements', target:'/Underwriting' },
            { title: 'Test Disclosure', target:'/TestDisclosure' },
          ],

          title: 'Health and Coverage',
        },
        {
          action: 'mdi mdi-marker-check',
          items: [
            { title: 'Billing Information', target:'/Billing' },
            { title: 'Signatures', target:'/Signatures' },
            
          ],
          title: 'Review and Pay',
        },
        {
          action: 'mdi mdi-settings',
          items: [
            
          ],
          title: 'Tools',
        },
        
      ],
      
    }),
  name: 'LeftNav',
  computed: {
    
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>


<style>


.left-nav{
  background: #FFF;
  height: 100vh;
  overflow: scroll;
  position: fixed;
  left: 0;
  width: 200px;
  padding-top: 0px;
  z-index: 2;
  top:0
  
}
a.left-nav-link {
  text-decoration: none;
  font-size: 16px;
 
}
.theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) { 
  background-color: transparent;
  box-shadow: none;
  width:100%;
  margin-left:0px;
  };
  .v-btn__content {
  justify-content: left;
  padding-left:30px;
  
  }
  .v-btn.v-btn--router.theme--light{
    color:#fff;
  }





#left-hand-nav {
	 width: 254px !important;
	 z-index: 10;
	 background-color: #eee !important;
}

 #left-hand-nav .close.v-list-item:not(.sub-nav-item) {
	 cursor: pointer;
	 height: 36px;
	 background-color: #0c6dca;
}
 #left-hand-nav .close.v-list-item:not(.sub-nav-item) .v-list-item__content {
	 color: #fff;
	 text-align: right;
	 margin-right: 12px;
}
 #left-hand-nav .v-list {
	 padding: 0;
}
 #left-hand-nav .v-list .v-list-group__items {
	 background: white;
}
 #left-hand-nav .v-list .list-items-padding {
	 padding: 10px 0;
}
 #left-hand-nav .v-list-group__header {
	 border-top: none;
	 border-bottom: none;
}
 #left-hand-nav .v-list-item {
	 background-color: #FFF;
}
 #left-hand-nav .v-list-item.v-list-item--disabled .v-icon {
	 color: var(--v-black200-base) !important;
}
 #left-hand-nav .v-list-item.v-list-item--disabled .v-list-item__title {
	 color: var(--v-black200-base);
}
 #left-hand-nav .v-list-item.v-list-item--disabled.sub-nav-item .v-icon {
	 color: var(--v-black200-base) !important;
}
 #left-hand-nav .v-list-item.v-list-item--disabled.sub-nav-item .v-list-item__title {
	 color: var(--v-black200-base);
	 font-size: 14px;
}
 #left-hand-nav .v-list-item .v-list-item__icon:not(.v-list-group__header__append-icon) {
	 margin: 0 4px 0 0 !important;
	 align-self: auto;
}
 #left-hand-nav .v-list-item.sub-nav-item {
	 min-height: 36px;
	 padding-left: 16px !important;
}
 #left-hand-nav .v-list-item.sub-nav-item .v-icon {
	 font-size: 18px;
	 color: #0c6dca !important;
}
 #left-hand-nav .v-list-item.sub-nav-item .v-list-item__title, #left-hand-nav .v-list-item.sub-nav-item .v-list-item__title:a {
	 color: #0c6dca !important;
	 font-size: 14px;
}
 #left-hand-nav .v-list-item.sub-nav-item .v-list-item__content {
	 padding: 6px 0 !important;
}
 #left-hand-nav .v-list-item:not(.sub-nav-item) {
	 height: 36px;
	 color: var(--v-primary-base);
}
 #left-hand-nav .v-list-item:not(.sub-nav-item) .v-list-item__content {
	 color: var(--v-primary-base);
	 font-weight: 400;
}
 #left-hand-nav .v-list-item:not(.sub-nav-item) .v-list-item__icon:not(.v-list-group__header__append-icon) {
	 margin: 0 4px 0 0 !important;
}
 #left-hand-nav .v-list-item:not(.sub-nav-item) .v-list-item__icon:not(.v-list-group__header__append-icon) .v-icon {
	 opacity: 0.3;
	 font-size: 18px;
	 color: var(--v-primary-base);
	 transition: none;
}
 #left-hand-nav .v-list-item:not(.sub-nav-item) .v-list-item__icon:not(.v-list-group__header__append-icon) .v-icon.mdi-close {
	 color: #fff;
	 opacity: 1;
	 font-size: 19px;
}
 #left-hand-nav .v-list-item:not(.sub-nav-item) .v-list-group__header__append-icon {
	 min-width: auto !important;
}
 #left-hand-nav .v-list-item:not(.sub-nav-item) .v-list-group__header__append-icon .v-icon {
	 color: var(--v-primary-base);
}
 #left-hand-nav .v-list-item.v-list-item--active {
	 background: #063562;
	 color: #FFF;
   border-radius: 0;
}
 #left-hand-nav .v-list-item.v-list-item--active .v-list-item__title {
	 color: #FFF;
}
 #left-hand-nav .v-list-item.v-list-item--active .v-icon {
	 color: #FFF !important;
}
 #left-hand-nav .v-list-item.v-list-item--active .v-list-item__icon:not(.v-list-group__header__append-icon) {
   margin: 12px 10px 12px -0px !important;
}
 #left-hand-nav .v-list-item.v-list-item--active .v-list-item__icon:not(.v-list-group__header__append-icon) .v-icon {
   color: var(--v-white-base);
   border: 3px solid #063562;
   opacity: 1;
   transform: none !important;
   transition: none;
   background: #063562;
   border-radius: 50%;
}

 #left-hand-nav .v-list-group__items .v-list-item.v-list-item--active  {
	 background: #FFF;
	 color: #063562;
   border-radius: 0;
}
#left-hand-nav .v-list-group__items .v-list-item.v-list-item--active .v-list-item__title {
	 color: #063562;
}
#left-hand-nav .v-list-group__items .v-list-item.v-list-item--active .v-list-item__title:a  {
	 color: #0c6dca !important;
}

#left-hand-nav .v-list-group__items .v-list-item .submenu-icon {
  display: none  !important;
}
#left-hand-nav .v-list-group__items .v-list-item.v-list-item--active .submenu-icon {
  display: inline-block !important;
	 color: #063562;
   outline: none;
   border: none  !important;
   padding:0;
}
.v-icon.notranslate.material-icons.theme--light {display:none;}
.v-list--nav .v-list-item, .v-list--nav .v-list-item {margin-bottom: 0 !important;}
.v-list--nav .v-list-item, .v-list--nav .v-list-item:before{border-radius: 0 !important;}
 #left-hand-nav .v-list-group__items .v-list-item.v-list-item--active .v-icon {
	 color: #063562 !important;
}
 #left-hand-nav .v-list-group__items .v-list-item.v-list-item--active .v-list-item__icon:not(.v-list-group__header__append-icon) {
   margin: 12px 10px 12px -4px !important;
}
 #left-hand-nav .v-list-group__items .v-list-item.v-list-item--active .v-list-item__icon:not(.v-list-group__header__append-icon) .v-icon {
   color: #063562;
   border: 0px solid #063562;
   opacity: 1;
   transform: translate(1px,0px);
   transition: none;
   background: #FFF;
   border-radius: 50%;
}

 #left-hand-nav .grey .v-list-group__header {
   border-top: 0.5px solid #fff;
   border-bottom: 0.5px solid #fff;
}
 #left-hand-nav .grey .v-list-item {
   background-color: var(--v-white-base);
}
 #left-hand-nav .grey .v-list-item:not(.sub-nav-item) {
   height: 48px;
   background-color: var(--v-navToolsBlue-base);
}
 #left-hand-nav .grey .v-list-item:not(.sub-nav-item) .v-list-item__content {
   color: var(--v-primary-base);
}
 #left-hand-nav .grey .v-list-item:not(.sub-nav-item) .v-list-item__content .v-list-item__title {
   color: var(--v-white-base);
}
 #left-hand-nav .grey .v-list-item.sub-nav-item {
   min-height: 36px;
}
 #left-hand-nav .grey .v-list-item.sub-nav-item .v-list-item__title {
   color: #0c6dca;
   font-size: 14px !important;
}
 #left-hand-nav .grey .v-list-item .v-icon {
   color: var(--v-white-base);
   opacity: 1;
}
 #left-hand-nav .grey .v-list-item.v-list-item--active {
   color: var(--v-white-base);
}
 #left-hand-nav .grey .v-list-item.v-list-item--active .v-list-item__title {
   color: var(--v-white-base);
}
 #left-hand-nav .grey .v-list-item.v-list-item--active .v-icon {
   color: var(--v-white-base);
}
 #left-hand-nav .grey .v-list-item.v-list-item--active .v-list-item__icon:not(.v-list-group__header__append-icon) {
   margin: 12px 10px 12px -4px !important;
}


 #left-hand-nav .v-list-item.grey .v-icon {
   color: #FFF;
   opacity: 1;
}
 #left-hand-nav .v-list-item.grey .v-list-item__content {
   color: #FFF;
   font-weight: 600;
}
#left-hand-nav .v-navigation-drawer__content .v-icon.mdi.mdi-tag {
  transform: scaleX(-1);
}
#left-hand-nav .v-list-item:not(.sub-nav-item) {
  height: 36px;
  color: #FFF;
}

#left-hand-nav .v-list-item {
  background-color: #FFF;
}

.v-application--is-ltr .v-list--dense.v-list--nav .v-list-group--no-action > .v-list-group__items > div > .v-list-item {
  padding-left:15px !important;
  
}
 .u-nav__tab-item--active {background-color: #ff9933;}

</style>
