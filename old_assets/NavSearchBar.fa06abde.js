import{K as S,d as x,t as V,k as l,al as A,b4 as C,o as p,c as d,m as c,p as i,w as I,q as a,y as P,aq as k,C as m,F as B,b5 as D,V as N,j as q,b6 as R,b7 as T,b8 as L}from"./index.822dd088.js";import{V as w}from"./VBtn.e4d3d498.js";import"./router.80150312.js";import"./position.b45006bd.js";const b=n=>(T("data-v-d2275827"),n=n(),L(),n),E={key:0,class:"d-none d-md-flex align-center text-disabled"},U=b(()=>c("span",{class:"me-3"},"Search",-1)),z=b(()=>c("span",{class:"meta-key"},"\u2318K",-1)),O=[U,z],j=x({inheritAttrs:!1}),F=Object.assign(j,{__name:"NavSearchBar",setup(n){const{appContentLayoutNav:g}=V(),e=l(!1),h=[{title:"Popular Searches",content:[{icon:"tabler-chart-donut",title:"Analytics",url:{name:"dashboards-analytics"}},{icon:"tabler-chart-bubble",title:"CRM",url:{name:"dashboards-crm"}},{icon:"tabler-file",title:"Invoice List",url:{name:"apps-invoice-list"}},{icon:"tabler-users",title:"User List",url:{name:"apps-user-list"}}]},{title:"Apps & Pages",content:[{icon:"tabler-calendar",title:"Calendar",url:{name:"apps-calendar"}},{icon:"tabler-file-plus",title:"Invoice Add",url:{name:"apps-invoice-add"}},{icon:"tabler-currency-dollar",title:"Pricing",url:{name:"pages-pricing"}},{icon:"tabler-user",title:"Account Settings",url:{name:"pages-account-settings-tab",params:{tab:"account"}}}]},{title:"User Interface",content:[{icon:"tabler-letter-a",title:"Typography",url:{name:"pages-typography"}},{icon:"tabler-square",title:"Tabs",url:{name:"components-tabs"}},{icon:"tabler-hand-click",title:"Buttons",url:{name:"components-button"}},{icon:"tabler-keyboard",title:"Statistics",url:{name:"pages-cards-card-statistics"}}]},{title:"Popular Searches",content:[{icon:"tabler-list",title:"Select",url:{name:"forms-select"}},{icon:"tabler-space",title:"Combobox",url:{name:"forms-combobox"}},{icon:"tabler-calendar",title:"Date & Time Picker",url:{name:"forms-date-time-picker"}},{icon:"tabler-hexagon",title:"Rating",url:{name:"forms-rating"}}]}],_=[{title:"Analytics Dashboard",icon:"tabler-shopping-cart",url:{name:"dashboards-analytics"}},{title:"Account Settings",icon:"tabler-user",url:{name:"pages-account-settings-tab",params:{tab:"account"}}},{title:"Pricing Page",icon:"tabler-cash",url:{name:"pages-pricing"}}],s=l(""),u=l([]),f=q();A(()=>{D.get("/app-bar/search",{params:{q:s.value}}).then(r=>{u.value=r.data})});const v=r=>{f.push(r.url),e.value=!1,s.value=""},y=C(()=>R(()=>import("./AppBarSearch.fd70c9ad.js"),["assets/AppBarSearch.fd70c9ad.js","assets/index.822dd088.js","assets/index.3157ff87.css","assets/VCard.6b3a5132.js","assets/VAvatar.d8cd070d.js","assets/router.80150312.js","assets/router.1e6db107.css","assets/VImg.ee928e60.js","assets/VImg.3a095760.css","assets/VAvatar.1c9d231f.css","assets/position.b45006bd.js","assets/position.65ee821e.css","assets/VCard.ec4d23b9.css","assets/VTextField.763959d6.js","assets/VField.65a84282.js","assets/index.85e01d0e.js","assets/VInput.aaf7c006.js","assets/VInput.194111c3.css","assets/easing.36b781ab.js","assets/VField.cb4cc03f.css","assets/forwardRefs.c003b6b8.js","assets/VCounter.d040aa04.js","assets/VCounter.66d880d8.css","assets/VTextField.ad436dbf.css","assets/VBtn.e4d3d498.js","assets/VBtn.1958adaf.css","assets/VDivider.342aecb6.js","assets/VDivider.5d6d66e0.css","assets/VList.f9a3ab4d.js","assets/VList.f3553822.css","assets/VRow.75b352c3.js","assets/VRow.0b79ff68.css","assets/VDialog.31a01103.js","assets/scopeId.1f71b426.js","assets/VOverlay.7629d092.js","assets/lazy.7d584fdc.js","assets/VOverlay.72fa3373.css","assets/dialog-transition.8e07af77.js","assets/VDialog.0e0bf965.css","assets/AppBarSearch.fae80d89.css"]));return(r,t)=>(p(),d(B,null,[c("div",k({class:"d-flex align-center cursor-pointer"},r.$attrs,{onClick:t[0]||(t[0]=o=>e.value=!a(e))}),[i(w,{icon:"",variant:"text",color:"default",size:"small"},{default:I(()=>[i(N,{icon:"tabler-search",size:"24"})]),_:1}),a(g)==="vertical"?(p(),d("span",E,O)):P("",!0)],16),i(a(y),{isDialogVisible:a(e),"onUpdate:isDialogVisible":t[1]||(t[1]=o=>m(e)?e.value=o:null),"search-query":a(s),"onUpdate:searchQuery":t[2]||(t[2]=o=>m(s)?s.value=o:null),"search-results":a(u),suggestions:h,"no-data-suggestion":_,onItemSelected:v},null,8,["isDialogVisible","search-query","search-results"])],64))}}),M=S(F,[["__scopeId","data-v-d2275827"]]);export{M as default};