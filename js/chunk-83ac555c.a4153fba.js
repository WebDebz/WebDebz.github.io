(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-83ac555c"],{"004c":function(t,e,a){t.exports=a.p+"img/Child-Coverage-2p.5208dc01.png"},"3c93":function(t,e,a){},a797:function(t,e,a){"use strict";a("3c93");var s=a("a9ad"),n=a("7560"),i=a("f2e7"),r=a("58df");e["a"]=Object(r["a"])(s["a"],n["a"],i["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}})},c5bf:function(t,e,a){t.exports=a.p+"img/NextGen-Personal Info-Child To Be Covered-0 to 14 Medical Questions-Practice_App.f76c3e75.png"},f752:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("div",{staticClass:"main-content"},[s("h1",[t._v("Personal Information")]),s("v-img",{attrs:{src:a("c5bf"),"max-width":"500"}})],1),s("div",{staticClass:"right-content"},[s("div",{staticClass:"content-holder"},[s("p",{staticClass:"title"},[t._v("Help Content ")]),s("div",{staticClass:"help-content help-regular"},[s("p",[t._v("Every question should be answered for each child being added to the child rider coverage.")]),s("p",[t._v("Once you have entered the child’s date of birth, the medical questions at the bottom of the screen may change depending on the child’s age.")]),s("p",[t._v("Children ages 0-14 will receive the questions shown on this screen.")]),s("p",[t._v("Children ages 15-18 will "),s("a",{on:{click:function(e){t.overlay=!t.overlay}}},[t._v("receive these questions.")])]),s("p",[t._v("Select all statements that apply to the child’s medical history. If no statements apply, select "),s("b",[t._v("None of the Above.")])]),s("p",[t._v("Clicking "),s("b",[t._v("Save")]),t._v(" will return you to the previous "),s("b",[t._v("Child Summary")]),t._v(" page where you will now see this child listed.")])]),s("div",{staticClass:"button-container"},[s("v-row",{attrs:{align:"center",justify:"space-around"}},[s("v-btn",{attrs:{outlined:"",tile:"",large:"",color:"primary"},on:{click:function(e){return t.$router.push("child-summary")}}},[t._v("\n           Back\n         ")]),s("v-btn",{attrs:{color:"primary",tile:"",large:""},on:{click:function(e){return t.$router.push("child-summary-three")}}},[t._v("\n           Continue\n         ")])],1)],1)])]),s("v-row",{attrs:{justify:"center"},on:{click:function(e){t.overlay=!1}}},[s("v-overlay",{attrs:{"z-index":t.zIndex,value:t.overlay}},[s("div",{staticClass:"modal-content",staticStyle:{"text-align":"center"}},[s("v-img",{attrs:{src:a("004c"),"max-width":"500"}}),s("p"),s("v-btn",{staticClass:"white--text",attrs:{color:"primary"}},[t._v("\n       Close Window\n     ")])],1)])],1)],1)},n=[],i={data:()=>({overlay:!1,zIndex:0})},r=i,o=a("2877"),l=a("6544"),c=a.n(l),d=a("8336"),v=a("a523"),u=a("adda"),h=a("a797"),p=a("0fd9"),y=Object(o["a"])(r,s,n,!1,null,null,null);e["default"]=y.exports;c()(y,{VBtn:d["a"],VContainer:v["a"],VImg:u["a"],VOverlay:h["a"],VRow:p["a"]})}}]);
//# sourceMappingURL=chunk-83ac555c.a4153fba.js.map