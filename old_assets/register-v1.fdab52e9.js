import{k as d,o as v,c as b,m as o,p as e,q as a,w as t,v as c,D as m,x as h,bc as x,r as g}from"./index.4b7a73ae.js";import{a as w,b as k}from"./auth-v1-top-shape.37562e7c.js";import{_ as C}from"./AuthProvider.97fc2b8f.js";import{V as S}from"./VNodeRenderer.9caf17da.js";import{b as u}from"./route-block.7577f022.js";import{V as f}from"./VImg.e357ba01.js";import{a as B,b as P,c as _,V as T}from"./VCard.021af918.js";import{V as U}from"./VForm.5df171eb.js";import{V as I,a as i}from"./VRow.5d75c82a.js";import{V as p}from"./VTextField.29bf31a1.js";import{V as N}from"./VCheckbox.59f7a9e0.js";import{V as R}from"./VInput.3a8b13d6.js";import{V as j}from"./VBtn.617b168f.js";import{V}from"./VDivider.5734bf6b.js";import"./router.9ec7c70f.js";import"./VAvatar.daa638d4.js";import"./position.551d7c7c.js";import"./forwardRefs.c003b6b8.js";/* empty css                   */import"./VField.a011fabd.js";import"./index.7a00345f.js";import"./easing.36b781ab.js";import"./VCounter.aba5f9dd.js";import"./VCheckboxBtn.3c8a331b.js";import"./VSelectionControl.1096d8d7.js";const D={class:"auth-wrapper d-flex align-center justify-center pa-4"},L={class:"position-relative my-sm-16"},A={class:"d-flex"},E=o("h5",{class:"text-h5 font-weight-semibold mb-1"}," Adventure starts here \u{1F680} ",-1),F=o("p",{class:"mb-0"}," Make your app management easy and fun! ",-1),M={class:"d-flex align-center mt-2 mb-4"},$=o("span",{class:"me-1"},"I agree to",-1),q=o("a",{href:"javascript:void(0)",class:"text-primary"},"privacy policy & terms",-1),z=o("span",null,"Already have an account?",-1),G=o("span",{class:"mx-4"},"or",-1),H={__name:"register-v1",setup(J){const l=d({username:"",email:"",password:"",privacyPolicies:!1}),n=d(!1);return(K,s)=>{const y=g("RouterLink");return v(),b("div",D,[o("div",L,[e(f,{src:a(w),class:"auth-v1-top-shape d-none d-sm-block"},null,8,["src"]),e(f,{src:a(k),class:"auth-v1-bottom-shape d-none d-sm-block"},null,8,["src"]),e(T,{class:"auth-card pa-4","max-width":"448"},{default:t(()=>[e(B,{class:"justify-center"},{prepend:t(()=>[o("div",A,[e(a(S),{nodes:a(c).app.logo},null,8,["nodes"])])]),default:t(()=>[e(P,{class:"font-weight-bold text-h5 py-1"},{default:t(()=>[m(h(a(c).app.title),1)]),_:1})]),_:1}),e(_,{class:"pt-2"},{default:t(()=>[E,F]),_:1}),e(_,null,{default:t(()=>[e(U,{onSubmit:s[5]||(s[5]=x(()=>{},["prevent"]))},{default:t(()=>[e(I,null,{default:t(()=>[e(i,{cols:"12"},{default:t(()=>[e(p,{modelValue:a(l).username,"onUpdate:modelValue":s[0]||(s[0]=r=>a(l).username=r),label:"Username"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(p,{modelValue:a(l).email,"onUpdate:modelValue":s[1]||(s[1]=r=>a(l).email=r),label:"Email",type:"email"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(p,{modelValue:a(l).password,"onUpdate:modelValue":s[2]||(s[2]=r=>a(l).password=r),label:"Password",type:a(n)?"text":"password","append-inner-icon":a(n)?"tabler-eye-off":"tabler-eye","onClick:appendInner":s[3]||(s[3]=r=>n.value=!a(n))},null,8,["modelValue","type","append-inner-icon"]),o("div",M,[e(N,{id:"privacy-policy",modelValue:a(l).privacyPolicies,"onUpdate:modelValue":s[4]||(s[4]=r=>a(l).privacyPolicies=r),inline:""},null,8,["modelValue"]),e(R,{for:"privacy-policy",style:{opacity:"1"}},{default:t(()=>[$,q]),_:1})]),e(j,{block:"",type:"submit"},{default:t(()=>[m(" Sign up ")]),_:1})]),_:1}),e(i,{cols:"12",class:"text-center text-base"},{default:t(()=>[z,e(y,{class:"text-primary ms-2",to:{name:"pages-authentication-login-v1"}},{default:t(()=>[m(" Sign in instead ")]),_:1})]),_:1}),e(i,{cols:"12",class:"d-flex align-center"},{default:t(()=>[e(V),G,e(V)]),_:1}),e(i,{cols:"12",class:"text-center"},{default:t(()=>[e(C)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])])}}};typeof u=="function"&&u(H);export{H as default};
