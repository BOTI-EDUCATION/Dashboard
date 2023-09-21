import{a2 as x,an as P,ab as U,Y as j,Q as q,a9 as $,a4 as F,A as n,a5 as E,$ as L,a0 as a,a1 as G,p as v,af as M,k as S,as as z,G as N,ao as Q,V as Y,aq as B,az as H,a6 as J,ac as _,ai as K,aP as h}from"./index.096e80e5.js";import{a as W,R as X,u as Z}from"./router.0ecb67ce.js";import{V as p}from"./VInput.34fa8dcc.js";const D=Symbol.for("vuetify:selection-control-group"),R=x({color:String,disabled:Boolean,error:Boolean,id:String,inline:Boolean,falseIcon:P,trueIcon:P,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,modelValue:null,type:String,valueComparator:{type:Function,default:U},...j(),...W()},"v-selection-control-group"),ue=q({name:"VSelectionControlGroup",props:{defaultsTarget:{type:String,default:"VSelectionControl"},...R()},emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:f}=u;const l=$(e,"modelValue"),i=F(),c=n(()=>e.id||`v-selection-control-group-${i}`),t=n(()=>e.name||c.value);return E(D,{modelValue:l}),L({[e.defaultsTarget]:{color:a(e,"color"),disabled:a(e,"disabled"),density:a(e,"density"),error:a(e,"error"),inline:a(e,"inline"),modelValue:l,multiple:n(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:t,falseIcon:a(e,"falseIcon"),trueIcon:a(e,"trueIcon"),readonly:a(e,"readonly"),ripple:a(e,"ripple"),type:a(e,"type"),valueComparator:a(e,"valueComparator")}}),G(()=>{var r;return v("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline}],"aria-labelled-by":e.type==="radio"?c.value:void 0,role:e.type==="radio"?"radiogroup":void 0},[(r=f.default)==null?void 0:r.call(f)])}),{}}}),ee=x({label:String,trueValue:null,falseValue:null,value:null,...R()},"v-selection-control");function le(e){const u=J(D,void 0),{densityClasses:f}=Z(e),l=$(e,"modelValue"),i=n(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),c=n(()=>e.falseValue!==void 0?e.falseValue:!1),t=n(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),r=n({get(){const o=u?u.modelValue.value:l.value;return t.value?o.some(s=>e.valueComparator(s,i.value)):e.valueComparator(o,i.value)},set(o){if(e.readonly)return;const s=o?i.value:c.value;let d=s;t.value&&(d=o?[..._(l.value),s]:_(l.value).filter(V=>!e.valueComparator(V,i.value))),u?u.modelValue.value=d:l.value=d}}),{textColorClasses:y,textColorStyles:C}=K(n(()=>r.value&&!e.error&&!e.disabled?e.color:void 0)),b=n(()=>r.value?e.trueIcon:e.falseIcon);return{group:u,densityClasses:f,trueValue:i,falseValue:c,model:r,textColorClasses:y,textColorStyles:C,icon:b}}const ae=M()({name:"VSelectionControl",directives:{Ripple:X},inheritAttrs:!1,props:ee(),emits:{"update:modelValue":e=>!0},setup(e,u){let{attrs:f,slots:l}=u;const{densityClasses:i,icon:c,model:t,textColorClasses:r,textColorStyles:y,trueValue:C}=le(e),b=F(),o=n(()=>e.id||`input-${b}`),s=S(!1),d=S(!1),V=S();function g(m){s.value=!0,(!h||h&&m.target.matches(":focus-visible"))&&(d.value=!0)}function I(){s.value=!1,d.value=!1}function T(m){t.value=m.target.checked}return G(()=>{var m,k;const A=l.label?l.label({label:e.label,props:{for:o.value}}):e.label,[w,O]=z(f);return v("div",B({class:["v-selection-control",{"v-selection-control--dirty":t.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":s.value,"v-selection-control--focus-visible":d.value,"v-selection-control--inline":e.inline},i.value]},w),[v("div",{class:["v-selection-control__wrapper",r.value],style:y.value},[(m=l.default)==null?void 0:m.call(l),N(v("div",{class:["v-selection-control__input"]},[c.value&&v(Y,{key:"icon",icon:c.value},null),v("input",B({ref:V,checked:t.value,disabled:e.disabled,id:o.value,onBlur:I,onFocus:g,onInput:T,"aria-readonly":e.readonly,type:e.type,value:C.value,name:e.name,"aria-checked":e.type==="checkbox"?t.value:void 0},O),null),(k=l.input)==null?void 0:k.call(l,{model:t,textColorClasses:r,textColorStyles:y,props:{onFocus:g,onBlur:I,id:o.value}})]),[[Q("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),A&&v(p,{for:o.value,clickable:!0},{default:()=>[A]})])}),{isFocused:s,input:V}}});function ie(e){return H(e,Object.keys(ae.props))}export{ae as V,R as a,ue as b,ie as f,ee as m};
