(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f4f5bb00"],{"0fd9":function(t,e,i){"use strict";i("4b85");var s=i("2b0e"),n=i("d9f7"),a=i("80d2");const r=["sm","md","lg","xl"],l=["start","end","center"];function o(t,e){return r.reduce((i,s)=>{return i[t+Object(a["n"])(s)]=e(),i},{})}const u=t=>[...l,"baseline","stretch"].includes(t),c=o("align",()=>({type:String,default:null,validator:u})),d=t=>[...l,"space-between","space-around"].includes(t),h=o("justify",()=>({type:String,default:null,validator:d})),b=t=>[...l,"space-between","space-around","stretch"].includes(t),g=o("alignContent",()=>({type:String,default:null,validator:b})),v={align:Object.keys(c),justify:Object.keys(h),alignContent:Object.keys(g)},p={align:"align",justify:"justify",alignContent:"align-content"};function f(t,e,i){let s=p[t];if(null!=i){if(e){const i=e.replace(t,"");s+=`-${i}`}return s+=`-${i}`,s.toLowerCase()}}const m=new Map;e["a"]=s["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u},...c,justify:{type:String,default:null,validator:d},...h,alignContent:{type:String,default:null,validator:b},...g},render(t,{props:e,data:i,children:s}){let a="";for(const n in e)a+=String(e[n]);let r=m.get(a);if(!r){let t;for(t in r=[],v)v[t].forEach(i=>{const s=e[i],n=f(t,i,s);n&&r.push(n)});r.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),m.set(a,r)}return t(e.tag,Object(n["a"])(i,{staticClass:"row",class:r}),s)}})},"7d7c":function(t,e,i){t.exports=i.p+"img/LA-28.8b4be5dc.png"},8336:function(t,e,i){"use strict";i("86cc");var s=i("10d2"),n=(i("8d4f"),i("a9ad")),a=i("80d2"),r=n["a"].extend({name:"v-progress-circular",props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:Object(a["c"])(this.calculatedSize),width:Object(a["c"])(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:`v-progress-circular__${t}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),l=r,o=i("4e82"),u=i("f2e7"),c=i("fe6c"),d=i("1c87"),h=i("af2b"),b=i("58df"),g=i("d9bd");const v=Object(b["a"])(s["a"],d["a"],c["a"],h["a"],Object(o["a"])("btnToggle"),Object(u["b"])("inputValue"));e["a"]=v.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...d["a"].options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--contained":this.contained,"v-btn--depressed":this.depressed||this.outlined,"v-btn--disabled":this.disabled,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--flat":this.isFlat,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},contained(){return Boolean(!this.isFlat&&!this.depressed&&!this.elevation)},computedRipple(){const t=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=this.ripple?this.ripple:t)},isFlat(){return Boolean(this.icon||this.text||this.outlined)},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const t=[["flat","text"],["outline","outlined"],["round","rounded"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(g["a"])(t,e,this)})},methods:{click(t){this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(l,{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],i=this.isFlat?this.setTextColor:this.setBackgroundColor,{tag:s,data:n}=this.generateRouteLink();return"button"===s&&(n.attrs.type=this.type,n.attrs.disabled=this.disabled),n.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(s,this.disabled?n:i(this.color,n),e)}})},"86cc":function(t,e,i){},"8d4f":function(t,e,i){},ae32:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("div",{staticClass:"main-content"},[s("h1",[t._v("Health and Coverage")]),s("v-img",{attrs:{src:i("7d7c"),"max-width":"500"}})],1),s("div",{staticClass:"right-content"},[s("div",{staticClass:"content-holder"},[s("p",{staticClass:"title"},[t._v("Help Content ")]),s("div",{staticClass:"help-content help-regular"},[s("p",{attrs:{bold:""}},[t._v("In most cases, the application will be underwritten and a decision can be made in real-time")]),s("p",[t._v("From this screen, you can review and edit the applicant’s coverage by using the edit pencil under the Actions column– right from the kitchen table! \n")])]),s("div",{staticClass:"button-container"},[s("v-row",{attrs:{align:"center",justify:"space-around"}},[s("v-btn",{attrs:{outlined:"",tile:"",large:"",color:"primary"},on:{click:function(e){return t.$router.push("PersonalizedQuote")}}},[t._v("\n            Back\n          ")]),s("v-btn",{attrs:{color:"primary",tile:"",large:""},on:{click:function(e){return t.$router.push("Underwriting")}}},[t._v("\n            Continue\n          ")])],1)],1)])])])},n=[],a={name:"PersonalizedQuote2",data(){return{title:"PersonalizedQuote2"}}},r=a,l=i("2877"),o=i("6544"),u=i.n(o),c=i("8336"),d=i("a523"),h=i("adda"),b=i("0fd9"),g=Object(l["a"])(r,s,n,!1,null,null,null);e["default"]=g.exports;u()(g,{VBtn:c["a"],VContainer:d["a"],VImg:h["a"],VRow:b["a"]})}}]);
//# sourceMappingURL=chunk-f4f5bb00.41e7c58c.js.map