import{k as c,al as I,A as R,q as i,o as _,b as z,w as l,p as t,m as e,C as V,D as m,V as d,c as g,a as q,F,G as O,H as G,x as n,y as H,r as M,aq as k}from"./index.e6050e69.js";import{u as Q}from"./useInvoiceStore.b9f7c1ce.js";import{a as j}from"./formatters.1ccc6423.js";import{V as C}from"./VSelect.ab9d8e67.js";import{V as x}from"./VBtn.3dc08b52.js";import{V as T}from"./VSpacer.6a975bf7.js";import{V as J}from"./VTextField.434ecef9.js";import{c as L,V as K}from"./VCard.256d2f93.js";import{V as N}from"./VDivider.0c479dd1.js";import{V as W}from"./VTable.47ea8b9a.js";import{V as X}from"./VPagination.039cc84c.js";import{V as Y}from"./VTooltip.82114532.js";import{V as B}from"./VAvatar.521a73f7.js";import{V as Z}from"./VImg.ededc02c.js";import{V as tt}from"./VChip.5e312822.js";import{V as et}from"./VMenu.87e6a729.js";import{V as at,a as w,b as y}from"./VList.e3ec73d9.js";import"./index.0d4b9ec4.js";import"./forwardRefs.c003b6b8.js";import"./dialog-transition.926fb05a.js";import"./easing.36b781ab.js";import"./VCheckboxBtn.2baae432.js";import"./VSelectionControl.76c19d18.js";import"./router.85b82a14.js";import"./VInput.94131958.js";import"./index.1b0e53dd.js";import"./position.c703d118.js";/* empty css                   */import"./VField.6b9f2954.js";import"./VCounter.c0e5ea63.js";import"./scopeId.cae28892.js";import"./VOverlay.e8cdaaef.js";import"./lazy.163ddcb2.js";const lt={class:"d-flex align-center",style:{width:"135px"}},ot=e("span",{class:"text-no-wrap me-3"},"Show:",-1),st={class:"me-3"},nt={class:"d-flex align-center flex-wrap gap-4"},it={class:"invoice-list-filter"},rt={class:"invoice-list-filter"},ct={class:"text-uppercase"},dt=e("th",{scope:"col"}," #ID ",-1),ut={scope:"col",class:"text-center"},pt=e("th",{scope:"col"}," CLIENT ",-1),mt=e("th",{scope:"col",class:"text-center"}," TOTAL ",-1),_t=e("th",{scope:"col"}," Issued Date ",-1),ft=e("th",{scope:"col",class:"text-center"}," BALANCE ",-1),vt=e("th",{scope:"col"}," ACTIONS ",-1),ht={class:"text-center"},Vt={class:"mb-0"},xt={class:"mb-0"},bt={class:"mb-0"},gt={class:"d-flex align-center"},wt={key:1},yt={class:"d-flex flex-column"},St={class:"text-base font-weight-medium mb-0"},Pt={class:"text-disabled text-sm"},Dt={class:"text-center"},It={class:"text-center"},zt={style:{width:"8rem"}},kt=e("tr",null,[e("td",{colspan:"8",class:"text-center text-body-1"}," No data available ")],-1),Ct=[kt],Tt={class:"text-sm text-disabled"},pe={__name:"index",setup(Lt){const A=Q(),f=c(""),v=c(),u=c(10),r=c(1),h=c(1),S=c(0),p=c([]),P=c([]);I(()=>{A.fetchInvoices({q:f.value,status:v.value,perPage:u.value,currentPage:r.value}).then(o=>{p.value=o.data.invoices,h.value=o.data.totalPage,S.value=o.data.totalInvoices}).catch(o=>{console.log(o)})}),I(()=>{r.value>h.value&&(r.value=h.value)});const E=R(()=>{const o=p.value.length?(r.value-1)*u.value+1:0,s=p.value.length+(r.value-1)*u.value;return`Showing ${o} to ${s} of ${S.value} entries`}),D=(o,s)=>o===s?{status:"Unpaid",chip:{color:"error"}}:o===0?{status:"Paid",chip:{color:"success"}}:{status:o,chip:{variant:"text"}},b=o=>o==="Partial Payment"?{variant:"success",icon:"tabler-circle-half-2"}:o==="Paid"?{variant:"warning",icon:"tabler-chart-pie"}:o==="Downloaded"?{variant:"info",icon:"tabler-arrow-down-circle"}:o==="Draft"?{variant:"primary",icon:"tabler-device-floppy"}:o==="Sent"?{variant:"secondary",icon:"tabler-circle-check"}:o==="Past Due"?{variant:"error",icon:"tabler-alert-circle"}:{variant:"secondary",icon:"tabler-x"};return(o,s)=>{const $=M("RouterLink");return i(p)?(_(),z(K,{key:0,id:"invoice-list"},{default:l(()=>[t(L,{class:"d-flex align-center flex-wrap gap-4"},{default:l(()=>[e("div",lt,[ot,t(C,{modelValue:i(u),"onUpdate:modelValue":s[0]||(s[0]=a=>V(u)?u.value=a:null),density:"compact",items:[10,20,30,50]},null,8,["modelValue"])]),e("div",st,[t(x,{"prepend-icon":"tabler-plus",to:{name:"apps-invoice-add"}},{default:l(()=>[m(" Create invoice ")]),_:1})]),t(T),e("div",nt,[e("div",it,[t(J,{modelValue:i(f),"onUpdate:modelValue":s[1]||(s[1]=a=>V(f)?f.value=a:null),placeholder:"Search Invoice",density:"compact"},null,8,["modelValue"])]),e("div",rt,[t(C,{modelValue:i(v),"onUpdate:modelValue":s[2]||(s[2]=a=>V(v)?v.value=a:null),label:"Select Status",clearable:"","clear-icon":"tabler-x","single-line":"",items:["Downloaded","Draft","Sent","Paid","Partial Payment","Past Due"]},null,8,["modelValue"])])])]),_:1}),t(N),t(W,{class:"text-no-wrap invoice-list-table"},{default:l(()=>[e("thead",ct,[e("tr",null,[dt,e("th",ut,[t(d,{icon:"tabler-trending-up"})]),pt,mt,_t,ft,vt])]),e("tbody",null,[(_(!0),g(F,null,q(i(p),a=>(_(),g("tr",{key:a.id,style:{height:"3.75rem"}},[e("td",null,[t($,{to:{name:"apps-invoice-preview-id",params:{id:a.id}}},{default:l(()=>[m(" #"+n(a.id),1)]),_:2},1032,["to"])]),e("td",ht,[t(Y,null,{activator:l(({props:U})=>[t(B,k({size:30},U,{color:b(a.invoiceStatus).variant,variant:"tonal"}),{default:l(()=>[t(d,{size:20,icon:b(a.invoiceStatus).icon},null,8,["icon"])]),_:2},1040,["color"])]),default:l(()=>[e("p",Vt,n(a.invoiceStatus),1),e("p",xt," Balance: "+n(a.balance),1),e("p",bt," Due date: "+n(a.dueDate),1)]),_:2},1024)]),e("td",null,[e("div",gt,[t(B,{size:"34",color:b(a.invoiceStatus).variant,variant:"tonal",class:"me-3"},{default:l(()=>[a.avatar.length?(_(),z(Z,{key:0,src:a.avatar},null,8,["src"])):(_(),g("span",wt,n(i(j)(a.client.name)),1))]),_:2},1032,["color"]),e("div",yt,[e("h6",St,n(a.client.name),1),e("span",Pt,n(a.client.companyEmail),1)])])]),e("td",Dt," $"+n(a.total),1),e("td",null,n(a.issuedDate),1),e("td",It,[t(tt,k({label:""},D(a.balance,a.total).chip,{size:"small"}),{default:l(()=>[m(n(D(a.balance,a.total).status),1)]),_:2},1040)]),e("td",zt,[t(x,{icon:"",variant:"text",color:"default",size:"x-small"},{default:l(()=>[t(d,{icon:"tabler-mail",size:22})]),_:1}),t(x,{icon:"",variant:"text",color:"default",size:"x-small",to:{name:"apps-invoice-preview-id",params:{id:a.id}}},{default:l(()=>[t(d,{size:22,icon:"tabler-eye"})]),_:2},1032,["to"]),t(x,{icon:"",variant:"text",color:"default",size:"x-small"},{default:l(()=>[t(d,{size:22,icon:"tabler-dots-vertical"}),t(et,{activator:"parent"},{default:l(()=>[t(at,null,{default:l(()=>[t(w,{value:"download"},{prepend:l(()=>[t(d,{size:"24",class:"me-3",icon:"tabler-download"})]),default:l(()=>[t(y,null,{default:l(()=>[m("Download")]),_:1})]),_:1}),t(w,{to:{name:"apps-invoice-edit-id",params:{id:a.id}}},{prepend:l(()=>[t(d,{size:"24",class:"me-3",icon:"tabler-pencil"})]),default:l(()=>[t(y,null,{default:l(()=>[m("Edit")]),_:1})]),_:2},1032,["to"]),t(w,{value:"duplicate"},{prepend:l(()=>[t(d,{size:"24",class:"me-3",icon:"tabler-stack"})]),default:l(()=>[t(y,null,{default:l(()=>[m("Duplicate")]),_:1})]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024)])]))),128))]),O(e("tfoot",null,Ct,512),[[G,!i(p).length]])]),_:1}),t(N),t(L,{class:"d-flex align-center flex-wrap gap-4 py-3"},{default:l(()=>[e("span",Tt,n(i(E)),1),t(T),t(X,{modelValue:i(r),"onUpdate:modelValue":s[3]||(s[3]=a=>V(r)?r.value=a:null),size:"small","total-visible":5,length:i(h),onNext:s[4]||(s[4]=a=>P.value=[]),onPrev:s[5]||(s[5]=a=>P.value=[])},null,8,["modelValue","length"])]),_:1})]),_:1})):H("",!0)}}};export{pe as default};
