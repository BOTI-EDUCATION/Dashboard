import{k as n,o as D,b as P,w as a,q as l,p as e,y as x,D as i,m as s,C as r,bb as A}from"./index-5b2e12ce.js";import{_ as N,a as T}from"./InvoiceSendInvoiceDrawer-846b2179.js";import{_ as U}from"./InvoiceEditable-61c71dee.js";import{u as B}from"./useInvoiceStore-7d41a117.js";import{a as S,V as h}from"./VRow-d905acec.js";import{V as I,c as O}from"./VCard-187af164.js";import{V as u}from"./VBtn-9b2206a8.js";import{V as $}from"./VSelect-41a03c02.js";import{V as b}from"./VInput-f15c4a71.js";import{V as _}from"./VSwitch-12ca2516.js";import"./AppDateTimePicker-287f6c97.js";import"./VField-525ea766.js";import"./index-37d7d91d.js";import"./position-9bf61908.js";import"./router-e9adad12.js";import"./easing-3b7943b3.js";import"./VSpacer-c21d1c39.js";import"./VAvatar-0a3d82c4.js";import"./VImg-35a07238.js";import"./VForm-8f7f70c7.js";import"./forwardRefs-90328b1a.js";import"./VTextField-11a713cf.js";/* empty css                   */import"./VCounter-5694f2a9.js";import"./VTextarea-18cf338e.js";import"./VNavigationDrawer-40d170f6.js";import"./ssrBoot-6f94db5f.js";import"./VChip-2e699338.js";import"./VTooltip-2e6df182.js";import"./scopeId-1bb0a392.js";import"./VOverlay-f8193782.js";import"./lazy-84d4a476.js";import"./VNodeRenderer-fded05a5.js";import"./VDivider-0274a6d2.js";import"./VList-4ff1373e.js";import"./dialog-transition-8f1b11e1.js";import"./VMenu-78c9d6d9.js";import"./VCheckboxBtn-e3df07ab.js";import"./VSelectionControl-1c78c438.js";const j={class:"d-flex gap-2"},M={class:"w-50"},R={class:"w-50"},L={class:"d-flex align-center justify-space-between"},q={class:"d-flex align-center justify-space-between"},W={class:"d-flex align-center justify-space-between"},Ne={__name:"[id]",setup(Y){const C=B(),w=A(),c=n();C.fetchInvoice(Number(w.params.id)).then(m=>{c.value={invoice:m.data.invoice,paymentDetails:m.data.paymentDetails,purchasedProducts:[{title:"App Design",cost:24,hours:2,description:"Designed UI kit & app pages."}],note:"It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!",paymentMethod:"Bank Account",salesperson:"Tom Cook",thanksNote:"Thanks for your business"}}).catch(m=>{console.log(m)});const d=n(!1),p=n(!1),f=n(!0),v=n(!1),V=n(!1),y=n("Bank Account"),g=["Bank Account","PayPal","UPI Transfer"];return(m,t)=>(D(),P(h,null,{default:a(()=>{var k;return[(k=l(c))!=null&&k.invoice?(D(),P(S,{key:0,cols:"12",md:"9"},{default:a(()=>[e(U,{data:l(c)},null,8,["data"])]),_:1})):x("",!0),e(S,{cols:"12",md:"3"},{default:a(()=>[e(I,{class:"mb-8"},{default:a(()=>[e(O,null,{default:a(()=>[e(u,{block:"","prepend-icon":"tabler-send",class:"mb-2",onClick:t[0]||(t[0]=o=>d.value=!0)},{default:a(()=>[i(" Send Invoice ")]),_:1}),s("div",j,[s("div",M,[e(u,{block:"",color:"secondary",variant:"tonal",class:"mb-2",to:{name:"apps-invoice-preview-id",params:{id:l(w).params.id}}},{default:a(()=>[i(" Preview ")]),_:1},8,["to"])]),s("div",R,[e(u,{block:"",color:"secondary",variant:"tonal",class:"mb-2"},{default:a(()=>[i(" Save ")]),_:1})])]),e(u,{block:"","prepend-icon":"tabler-currency-dollar",onClick:t[1]||(t[1]=o=>p.value=!0)},{default:a(()=>[i(" Add Payment ")]),_:1})]),_:1})]),_:1}),e($,{modelValue:l(y),"onUpdate:modelValue":t[2]||(t[2]=o=>r(y)?y.value=o:null),items:g,label:"Accept Payment Via",class:"mb-6"},null,8,["modelValue"]),s("div",L,[e(b,{for:"payment-terms"},{default:a(()=>[i(" Payment Terms ")]),_:1}),s("div",null,[e(_,{id:"payment-terms",modelValue:l(f),"onUpdate:modelValue":t[3]||(t[3]=o=>r(f)?f.value=o:null)},null,8,["modelValue"])])]),s("div",q,[e(b,{for:"client-notes"},{default:a(()=>[i(" Client Notes ")]),_:1}),s("div",null,[e(_,{id:"client-notes",modelValue:l(v),"onUpdate:modelValue":t[4]||(t[4]=o=>r(v)?v.value=o:null)},null,8,["modelValue"])])]),s("div",W,[e(b,{for:"payment-stub"},{default:a(()=>[i(" Payment Stub ")]),_:1}),s("div",null,[e(_,{id:"payment-stub",modelValue:l(V),"onUpdate:modelValue":t[5]||(t[5]=o=>r(V)?V.value=o:null)},null,8,["modelValue"])])])]),_:1}),e(N,{isDrawerOpen:l(d),"onUpdate:isDrawerOpen":t[6]||(t[6]=o=>r(d)?d.value=o:null)},null,8,["isDrawerOpen"]),e(T,{isDrawerOpen:l(p),"onUpdate:isDrawerOpen":t[7]||(t[7]=o=>r(p)?p.value=o:null)},null,8,["isDrawerOpen"])]}),_:1}))}};export{Ne as default};
