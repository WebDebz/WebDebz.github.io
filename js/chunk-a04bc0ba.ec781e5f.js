(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a04bc0ba"],{"184f":function(t,e,a){t.exports=a.p+"img/Review_and_Pay-Signature_Summary_Start-Practice_App.5f1efa8e.png"},"3c93":function(t,e,a){},a797:function(t,e,a){"use strict";a("a9e3");var i=a("5530"),n=(a("3c93"),a("a9ad")),o=a("7560"),s=a("f2e7"),r=a("58df");e["a"]=Object(r["a"])(n["a"],o["a"],s["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(i["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}})},b1b1:function(t,e,a){t.exports=a.p+"media/life_docusign.54a4136f.mp4"},e4a3:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("div",{staticClass:"main-content"},[i("h1",[t._v("Review and Pay")]),i("v-img",{attrs:{src:a("184f"),"max-width":"500"}})],1),i("div",{staticClass:"right-content"},[i("div",{staticClass:"content-holder"},[i("p",{staticClass:"title"},[t._v("Help Content")]),i("div",{staticClass:"help-content help-regular"},[i("p",[t._v(" All parties required to submit the application will be listed on this page. ")]),i("p",[t._v(" The applicant will receive a new link and access code from DocuSign at the email and mobile number they provided earlier in the application. This information cannot be changed. ")]),i("p",[t._v(" Additional parties, such as the policy holder or payer, will receive their own links and access codes from DocuSign at the mobile number and email provided on this screen. Please make sure to provide accurate and accessible contact information. To edit this contact information, tap their corresponding "),i("b",[t._v("Edit Contact Information")]),t._v(" link. ")]),i("p",[t._v(" Tapping "),i("b",[t._v("Continue")]),t._v(" will begin the signature process and send all necessary links and access codes from DocuSign. ")]),i("p",[t._v(" Please see the "),i("a",{attrs:{href:"./docusign_faqs_edited_v3.pdf"}},[t._v("DocuSign Frequently Asked Questions")]),t._v(" for more information on DocuSign. ")])]),i("div",{staticClass:"help-content help-video"},[i("p",{staticClass:"title"},[i("i",{staticClass:"v-icon mdi mdi-arrow-right-drop-circle",staticStyle:{"font-size":"28px",color:"#fff","padding-right":"12px"},attrs:{"aria-hidden":"true"}}),i("a",{on:{click:function(e){t.overlay=!t.overlay}}},[t._v("Watch Video")])]),i("p",[t._v(" Watch "),i("a",{on:{click:function(e){t.overlay=!t.overlay}}},[t._v("this video")]),t._v(" to learn more about using DocuSign to sign the application. (2:00) ")])]),i("div",{staticClass:"button-container"},[i("v-row",{attrs:{align:"center",justify:"space-around"}},[i("v-btn",{attrs:{outlined:"",tile:"",large:"",color:"primary"},on:{click:function(e){return t.$router.push("Billing3")}}},[t._v(" Back ")]),i("v-btn",{attrs:{color:"primary",tile:"",large:""},on:{click:function(e){return t.$router.push("Signatures2")}}},[t._v(" Continue ")])],1)],1)])]),i("v-row",{attrs:{justify:"center"}},[i("v-overlay",{attrs:{"z-index":t.zIndex,value:t.overlay}},[i("div",{staticClass:"modal-content",staticStyle:{"text-align":"center"}},[i("video",{attrs:{width:"600",controls:"",autoplay:""}},[i("source",{attrs:{src:a("b1b1"),type:"video/mp4"}}),t._v(" Your browser does not support the video tag. ")]),i("p"),i("v-btn",{staticClass:"white--text",attrs:{color:"primary"},on:{click:function(e){t.overlay=!1}}},[t._v(" Close Window ")])],1)])],1)],1)},n=[],o={data:function(){return{overlay:!1,zIndex:0}}},s=o,r=a("2877"),c=a("6544"),l=a.n(c),u=a("8336"),d=a("a523"),v=a("adda"),p=a("a797"),h=a("0fd9"),f=Object(r["a"])(s,i,n,!1,null,null,null);e["default"]=f.exports;l()(f,{VBtn:u["a"],VContainer:d["a"],VImg:v["a"],VOverlay:p["a"],VRow:h["a"]})}}]);
//# sourceMappingURL=chunk-a04bc0ba.ec781e5f.js.map