(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe5b7c80"],{"3c93":function(t,e,a){},5589:function(t,e,a){t.exports=a.p+"img/LA-23p.376e16aa.png"},a797:function(t,e,a){"use strict";a("3c93");var i=a("a9ad"),n=a("7560"),s=a("f2e7"),r=a("58df");e["a"]=Object(r["a"])(i["a"],n["a"],s["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}})},d3d6:function(t,e,a){t.exports=a.p+"img/LA-23.4ffc931f.png"},f517:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("div",{staticClass:"main-content"},[i("h1",[t._v("Health and Coverage")]),i("v-img",{attrs:{src:a("d3d6"),"max-width":"500"}})],1),i("div",{staticClass:"right-content"},[i("div",{staticClass:"content-holder"},[i("p",{staticClass:"title"},[t._v("Help Content ")]),i("div",{staticClass:"help-content help-regular"},[i("p",[t._v("If you have started this application from a Quick Quote, the coverage information will be pre-filled.")]),i("p",[t._v("Otherwise choose the product type, premium class, term, and coverage amount.")]),i("p",[t._v("As choices are entered on the screen, the total coverage and premiums amount will display at the bottom of the screen.")]),i("p",[i("b",[t._v("Backdate to Save Age")]),t._v(" allows you to provide a quote based on the insured’s actual age when the insured’s birthday is within the next 6 months. "),i("i",{staticClass:"help-CAN"},[t._v("Why would one do this? Will there be a tool tip for this? If so, can you provide the wording?")])]),i("p",[t._v("Use the "),i("b",[t._v("Automatic Increase Request")]),t._v(" (AIR) feature to maximize your applicant’s benefits for their same premium. In the event the applicant qualifies for an insurance class upgrade during underwriting, Primerica will apply the premium savings to adding additional coverage.")]),i("p",[t._v("Use the "),i("a",{on:{click:function(e){t.overlay=!t.overlay}}},[t._v("Launch AIR Calculator")]),t._v(" button to view examples. ")])]),i("div",{staticClass:"help-content help-regular"},[i("p",[t._v("For more information on premium classes, banding, product limitations, and underwriting considerations, see the Agent Quick Reference Guide. "),i("i",{staticStyle:{color:"red"}},[t._v("(link to guide – avail Mar/Apr)")])])]),i("div",{staticClass:"button-container"},[i("v-row",{attrs:{align:"center",justify:"space-around"}},[i("v-btn",{attrs:{outlined:"",tile:"",large:"",color:"primary"},on:{click:function(e){return t.$router.push("MedQs3")}}},[t._v("\n           Back\n         ")]),i("v-btn",{attrs:{color:"primary",tile:"",large:""},on:{click:function(e){return t.$router.push("SignatureSummary")}}},[t._v("\n           Continue\n         ")])],1)],1)])]),i("v-row",{attrs:{justify:"center"},on:{click:function(e){t.overlay=!1}}},[i("v-overlay",{attrs:{"z-index":t.zIndex,value:t.overlay}},[i("div",{staticStyle:{overflow:"scroll","text-align":"center"}},[i("v-img",{attrs:{src:a("5589"),"max-width":"500"},on:{click:function(e){t.overlay=!1}}}),i("p"),i("v-btn",{staticClass:"white--text",attrs:{color:"primary",align:"center"},on:{click:function(e){t.overlay=!1}}},[t._v("\n       Close Window\n     ")])],1)])],1)],1)},n=[],s={data:()=>({overlay:!1,zIndex:0})},r=s,o=a("2877"),l=a("6544"),c=a.n(l),u=a("8336"),d=a("a523"),v=a("adda"),p=a("a797"),h=a("0fd9"),m=Object(o["a"])(r,i,n,!1,null,null,null);e["default"]=m.exports;c()(m,{VBtn:u["a"],VContainer:d["a"],VImg:v["a"],VOverlay:p["a"],VRow:h["a"]})}}]);
//# sourceMappingURL=chunk-fe5b7c80.1c3d3871.js.map