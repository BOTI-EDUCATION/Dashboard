import{m as V,u as C,f as P,a as v}from"./VInput.94131958.js";import{m as A,f as B,V as I}from"./VCheckboxBtn.2baae432.js";import{Q as F,a4 as g,A as y,a1 as R,as as _,p as t,aq as o}from"./index.e6050e69.js";const U=F({name:"VCheckbox",inheritAttrs:!1,props:{...V(),...A()},emits:{"update:focused":e=>!0},setup(e,a){let{attrs:r,slots:s}=a;const{isFocused:u,focus:c,blur:n}=C(e),i=g(),d=y(()=>e.id||`checkbox-${i}`);return R(()=>{const[l,p]=_(r),[f,$]=P(e),[m,q]=B(e);return t(v,o({class:"v-checkbox"},l,f,{id:d.value,focused:u.value}),{...s,default:b=>{let{id:k,isDisabled:h,isReadonly:x}=b;return t(I,o(m,{id:k.value,disabled:h.value,readonly:x.value},p,{onFocus:c,onBlur:n}),s)}})}),{}}});export{U as V};
