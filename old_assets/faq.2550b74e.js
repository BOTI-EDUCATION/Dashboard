import{k as _,O as x,o as n,c,p as t,q as l,C as h,w as a,G as w,H as q,F as V,a as v,s as B,V as g,m as s,D as T,b6 as F,b as y,x as d}from"./index.bb11c4a0.js";import{_ as L}from"./AppSearchHeader.6b255045.js";import{a as b,V as k}from"./VRow.af24397e.js";import{V as N,a as S}from"./VTabs.09f499ad.js";import{V as W}from"./VImg.34958778.js";import{V as E,a as Q}from"./VWindowItem.06adcb2a.js";import{V as D}from"./VChip.a6761daf.js";import{V as I}from"./VAvatar.8f37845b.js";import{V as P,a as R}from"./VExpansionPanel.99290851.js";import{V as A,c as C}from"./VCard.6e17e770.js";import"./VTextField.bd2cab46.js";/* empty css                   */import"./VField.2902781c.js";import"./index.7ea337b7.js";import"./VInput.022d9e09.js";import"./router.f40f8152.js";import"./position.0d284abb.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.7daf2bc1.js";import"./VBtn.ce311982.js";import"./VSlideGroup.9bc496a3.js";import"./lazy.e0cc424a.js";import"./ssrBoot.ea4c149c.js";const G="/assets/sitting-girl-with-laptop.7faa3bb5.png";const H={class:"d-flex align-center mb-6"},O={class:"text-h6"},j={class:"text-sm"},Y=s("span",{class:"text-base font-weight-medium"}," No Results Found!! ",-1),$={class:"text-center pt-15"},J=s("h5",{class:"text-h5 mb-2"}," You still have a question? ",-1),K=s("p",null," If you can't find question in our FAQ, you can contact us. We'll answer you shortly! ",-1),M={class:"text-h6 mb-2"},we={__name:"faq",setup(X){const u=_(""),r=_([]),z=()=>F.get("/pages/faqs",{params:{q:u.value}}).then(f=>{r.value=f.data}).catch(f=>{console.error(f)}),i=_("Payment"),p=_(0);x(i,()=>p.value=0),x(u,z,{immediate:!0});const U=[{icon:"tabler-phone",via:"+ (810) 2548 2568",tagLine:"We are always happy to help!"},{icon:"tabler-mail",via:"hello@help.com",tagLine:"Best way to get answer faster!"}];return(f,o)=>(n(),c("section",null,[t(L,{modelValue:l(u),"onUpdate:modelValue":o[0]||(o[0]=e=>h(u)?u.value=e:null),title:"Hello, how can we help?",subtitle:"or select a category to quickly find the help you require","custom-class":"mb-7"},null,8,["modelValue"]),t(k,null,{default:a(()=>[w(t(b,{cols:"12",sm:"4",lg:"3",class:"position-relative"},{default:a(()=>[t(N,{modelValue:l(i),"onUpdate:modelValue":o[1]||(o[1]=e=>h(i)?i.value=e:null),direction:"vertical",class:"v-tabs-pill",grow:""},{default:a(()=>[(n(!0),c(V,null,v(l(r),e=>(n(),y(S,{key:e.faqTitle,value:e.faqTitle,class:"text-high-emphasis"},{default:a(()=>[t(g,{icon:e.faqIcon,size:20,start:""},null,8,["icon"]),T(" "+d(e.faqTitle),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),t(W,{width:245,src:l(G),class:"d-none d-sm-block mt-10 mx-auto"},null,8,["src"])]),_:1},512),[[q,l(r).length]]),t(b,{cols:"12",sm:"8",lg:"9"},{default:a(()=>[t(E,{modelValue:l(i),"onUpdate:modelValue":o[3]||(o[3]=e=>h(i)?i.value=e:null),class:"faq-v-window disable-tab-transition"},{default:a(()=>[(n(!0),c(V,null,v(l(r),e=>(n(),y(Q,{key:e.faqTitle,value:e.faqTitle},{default:a(()=>[s("div",H,[t(I,{rounded:"",color:"primary",variant:"tonal",class:"me-3",size:"large"},{default:a(()=>[t(g,{size:32,icon:e.faqIcon},null,8,["icon"])]),_:2},1024),s("div",null,[s("h6",O,d(e.faqTitle),1),s("span",j,d(e.faqSubtitle),1)])]),t(P,{modelValue:l(p),"onUpdate:modelValue":o[2]||(o[2]=m=>h(p)?p.value=m:null),multiple:""},{default:a(()=>[(n(!0),c(V,null,v(e.faqs,m=>(n(),y(R,{key:m.question,title:m.question,text:m.answer},null,8,["title","text"]))),128))]),_:2},1032,["modelValue"])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),w(t(b,{cols:"12",class:B(l(r).length?"":"d-flex justify-center align-center")},{default:a(()=>[t(g,{icon:"tabler-help",start:"",size:"20"}),Y]),_:1},8,["class"]),[[q,!l(r).length]])]),_:1}),s("div",$,[t(D,{label:"",color:"primary",size:"small",class:"mb-2"},{default:a(()=>[T(" QUESTION? ")]),_:1}),J,K,t(k,{class:"mt-4"},{default:a(()=>[(n(),c(V,null,v(U,e=>t(b,{key:e.icon,sm:"6",cols:"12"},{default:a(()=>[t(A,{flat:"",variant:"tonal"},{default:a(()=>[t(C,null,{default:a(()=>[t(I,{rounded:"",color:"primary",variant:"tonal",class:"me-3"},{default:a(()=>[t(g,{icon:e.icon},null,8,["icon"])]),_:2},1024)]),_:2},1024),t(C,null,{default:a(()=>[s("h6",M,d(e.via),1),s("span",null,d(e.tagLine),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),64))]),_:1})])]))}};export{we as default};
