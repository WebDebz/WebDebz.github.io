(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ce4afce4"],{"0fd9":function(t,e,s){"use strict";s("4b85");var i=s("2b0e"),n=s("d9f7"),a=s("80d2");const r=["sm","md","lg","xl"],l=["start","end","center"];function o(t,e){return r.reduce((s,i)=>{return s[t+Object(a["n"])(i)]=e(),s},{})}const c=t=>[...l,"baseline","stretch"].includes(t),u=o("align",()=>({type:String,default:null,validator:c})),d=t=>[...l,"space-between","space-around"].includes(t),h=o("justify",()=>({type:String,default:null,validator:d})),p=t=>[...l,"space-between","space-around","stretch"].includes(t),v=o("alignContent",()=>({type:String,default:null,validator:p})),g={align:Object.keys(u),justify:Object.keys(h),alignContent:Object.keys(v)},b={align:"align",justify:"justify",alignContent:"align-content"};function f(t,e,s){let i=b[t];if(null!=s){if(e){const s=e.replace(t,"");i+=`-${s}`}return i+=`-${s}`,i.toLowerCase()}}const m=new Map;e["a"]=i["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...u,justify:{type:String,default:null,validator:d},...h,alignContent:{type:String,default:null,validator:p},...v},render(t,{props:e,data:s,children:i}){let a="";for(const n in e)a+=String(e[n]);let r=m.get(a);if(!r){let t;for(t in r=[],g)g[t].forEach(s=>{const i=e[s],n=f(t,s,i);n&&r.push(n)});r.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),m.set(a,r)}return t(e.tag,Object(n["a"])(s,{staticClass:"row",class:r}),i)}})},8336:function(t,e,s){"use strict";s("86cc");var i=s("10d2"),n=(s("8d4f"),s("a9ad")),a=s("80d2"),r=n["a"].extend({name:"v-progress-circular",props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:Object(a["c"])(this.calculatedSize),width:Object(a["c"])(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:`v-progress-circular__${t}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),l=r,o=s("4e82"),c=s("f2e7"),u=s("fe6c"),d=s("1c87"),h=s("af2b"),p=s("58df"),v=s("d9bd");const g=Object(p["a"])(i["a"],d["a"],u["a"],h["a"],Object(o["a"])("btnToggle"),Object(c["b"])("inputValue"));e["a"]=g.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...d["a"].options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--contained":this.contained,"v-btn--depressed":this.depressed||this.outlined,"v-btn--disabled":this.disabled,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--flat":this.isFlat,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},contained(){return Boolean(!this.isFlat&&!this.depressed&&!this.elevation)},computedRipple(){const t=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=this.ripple?this.ripple:t)},isFlat(){return Boolean(this.icon||this.text||this.outlined)},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const t=[["flat","text"],["outline","outlined"],["round","rounded"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(v["a"])(t,e,this)})},methods:{click(t){this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(l,{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],s=this.isFlat?this.setTextColor:this.setBackgroundColor,{tag:i,data:n}=this.generateRouteLink();return"button"===i&&(n.attrs.type=this.type,n.attrs.disabled=this.disabled),n.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(i,this.disabled?n:s(this.color,n),e)}})},"86cc":function(t,e,s){},"8d4f":function(t,e,s){},a925:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("div",{staticClass:"main-content"},[i("h1",[t._v("Health and Coverage")]),i("v-img",{attrs:{src:s("c6d4"),"max-width":"500"}})],1),i("div",{staticClass:"right-content"},[i("div",{staticClass:"content-holder"},[i("p",{staticClass:"title"},[t._v("Help Content ")]),i("div",{staticClass:"help-content help-regular"},[i("p",[t._v("If a "),i("b",[t._v("Paramed Exam")]),t._v(" is needed, the applicant can schedule the appointment in real time at the kitchen table")]),i("p",[t._v("We highly recommended that the applicant schedule their appointment now, as scheduling the appointment during the application process can speed up the underwriting process by up to a week.")]),i("p",[t._v("To schedule the appointment, tap the "),i("b",[t._v("Schedule Appointment Now link.")])]),i("p",[t._v("If the applicant does not wish to schedule their appointment now, check the corresponding box. A drop-down will appear asking for the reason why.  ")]),i("p",[t._v("Options include:")]),i("ul",[i("li",[t._v("Schedule Not Available")]),i("li",[t._v("Desired Time Unavailable")]),i("li",[t._v("Client Asked to Schedule Later")])])]),i("div",{staticClass:"help-content help-CAN"},[i("p",{staticClass:"title"},[t._v("Canada")]),i("p",{staticClass:"help-NY"},[t._v("Does CAN get this screen – not in Mural")])]),i("div",{staticClass:"button-container"},[i("v-row",{attrs:{align:"center",justify:"space-around"}},[i("v-btn",{attrs:{outlined:"",tile:"",large:"",color:"primary"},on:{click:function(e){return t.$router.push("TestDisclosure")}}},[t._v("\n           Back\n         ")]),i("v-btn",{attrs:{color:"primary",tile:"",large:""},on:{click:function(e){return t.$router.push("TestDisclosure3")}}},[t._v("\n           Continue\n         ")])],1)],1)])])])},n=[],a={name:"TestDisclosure",data(){return{title:"TestDisclosure"}}},r=a,l=s("2877"),o=s("6544"),c=s.n(o),u=s("8336"),d=s("a523"),h=s("adda"),p=s("0fd9"),v=Object(l["a"])(r,i,n,!1,null,null,null);e["default"]=v.exports;c()(v,{VBtn:u["a"],VContainer:d["a"],VImg:h["a"],VRow:p["a"]})},c6d4:function(t,e,s){t.exports=s.p+"img/LA-31.21fdcc21.png"}}]);
//# sourceMappingURL=chunk-ce4afce4.d902b216.js.map