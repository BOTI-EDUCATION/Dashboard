import{Q as $,an as P,X as I,Y as j,ai as q,A as z,k as x,a1 as M,az as H,p as m,aq as w,a9 as N,ap as O,a0 as l,$ as U,ak as F}from"./index.bb11c4a0.js";import{b as Q,V as W}from"./VBtn.ce311982.js";import{j as J,a as K,u as L}from"./router.f40f8152.js";import{a as Z,s as ee}from"./easing.36b781ab.js";import{V as te}from"./VSlideGroup.9bc496a3.js";const R=Symbol.for("vuetify:v-tabs"),ae=$({name:"VTab",props:{fixed:Boolean,icon:[Boolean,String,Function,Object],prependIcon:P,appendIcon:P,stacked:Boolean,title:String,ripple:{type:Boolean,default:!0},color:String,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...I(),...J(),...Q({selectedClass:"v-tab--selected"}),...j()},setup(e,t){let{slots:d,attrs:u}=t;const{textColorClasses:g,textColorStyles:v}=q(e,"sliderColor"),a=z(()=>e.direction==="horizontal"),c=x(!1),o=x(),C=x();function E(h){let{value:k}=h;if(c.value=k,k){var V,T;const y=(V=o.value)==null||(T=V.$el.parentElement)==null?void 0:T.querySelector(".v-tab--selected .v-tab__slider"),S=C.value;if(!y||!S)return;const A=getComputedStyle(y).color,s=y.getBoundingClientRect(),n=S.getBoundingClientRect(),f=a.value?"x":"y",b=a.value?"X":"Y",p=a.value?"right":"bottom",r=a.value?"width":"height",D=s[f],G=n[f],i=D>G?s[p]-n[p]:s[f]-n[f],X=Math.sign(i)>0?a.value?"right":"bottom":Math.sign(i)<0?a.value?"left":"top":"center",Y=(Math.abs(i)+(Math.sign(i)<0?s[r]:n[r]))/Math.max(s[r],n[r]),_=s[r]/n[r],B=1.5;Z(S,{backgroundColor:[A,""],transform:[`translate${b}(${i}px) scale${b}(${_})`,`translate${b}(${i/B}px) scale${b}(${(Y-1)/B+1})`,""],transformOrigin:Array(3).fill(X)},{duration:225,easing:ee})}}return M(()=>{const[h]=H(e,["href","to","replace","icon","stacked","prependIcon","appendIcon","ripple","theme","disabled","selectedClass","value","color"]);return m(W,w({_as:"VTab",symbol:R,ref:o,class:["v-tab"],tabindex:c.value?0:-1,role:"tab","aria-selected":String(c.value),active:!1,block:e.fixed,maxWidth:e.fixed?300:void 0,variant:"text",rounded:0},h,u,{"onGroup:selected":E}),{default:()=>[d.default?d.default():e.title,!e.hideSlider&&m("div",{ref:C,class:["v-tab__slider",g.value],style:v.value},null)]})}),{}}});function oe(e){return e?e.map(t=>typeof t=="string"?{title:t,value:t}:t):[]}const ce=$({name:"VTabs",props:{alignTabs:{type:String,default:"start"},color:String,direction:{type:String,default:"horizontal"},fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,modelValue:null,mandatory:{type:[Boolean,String],default:"force"},...K(),...I()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:d}=t;const u=N(e,"modelValue"),g=z(()=>oe(e.items)),{densityClasses:v}=L(e),{backgroundColorClasses:a,backgroundColorStyles:c}=O(l(e,"bgColor"));return U({VTab:{color:l(e,"color"),direction:l(e,"direction"),stacked:l(e,"stacked"),fixed:l(e,"fixedTabs"),sliderColor:l(e,"sliderColor"),hideSlider:l(e,"hideSlider")}}),M(()=>m(te,{modelValue:u.value,"onUpdate:modelValue":o=>u.value=o,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},v.value,a.value],style:[{"--v-tabs-height":F(e.height)},c.value],role:"tablist",symbol:R,mandatory:e.mandatory,direction:e.direction},{default:()=>[d.default?d.default():g.value.map(o=>m(ae,w(o,{key:o.title}),null))]})),{}}});export{ce as V,ae as a};