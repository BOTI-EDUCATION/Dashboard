import{o as n,b as c,w as t,p as e,q as o,V as r,D as s,x as u,j as V,b9 as y}from"./index.822dd088.js";import{u as v}from"./useAppAbility.59298094.js";import{V as m}from"./VBadge.ff7996e5.js";import{V as p}from"./VImg.ee928e60.js";import{V as I}from"./VMenu.bf630b9b.js";import{V as h,a as l,b as i,c as k}from"./VList.f9a3ab4d.js";import{V as x}from"./VListItemAction.af607b3b.js";import{V as f}from"./VAvatar.d8cd070d.js";import{V as d}from"./VDivider.342aecb6.js";import"./router.80150312.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.1f71b426.js";import"./VOverlay.7629d092.js";import"./lazy.7d584fdc.js";import"./easing.36b781ab.js";import"./dialog-transition.8e07af77.js";import"./index.85e01d0e.js";const E={__name:"UserProfile",setup(S){const _=V(),g=v(),a=JSON.parse(localStorage.getItem("userData")||"null"),b=()=>{localStorage.removeItem("userData"),localStorage.removeItem("accessToken"),_.push("/login").then(()=>{localStorage.removeItem("userAbilities"),g.update(y)})};return(A,D)=>(n(),c(m,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",bordered:"",color:"success"},{default:t(()=>[e(f,{class:"cursor-pointer",color:"primary",variant:"tonal"},{default:t(()=>[o(a)&&o(a).avatar?(n(),c(p,{key:0,src:o(a).avatar},null,8,["src"])):(n(),c(r,{key:1,icon:"tabler-user"})),e(I,{activator:"parent",width:"230",location:"bottom end",offset:"14px"},{default:t(()=>[e(h,null,{default:t(()=>[e(l,null,{prepend:t(()=>[e(x,{start:""},{default:t(()=>[e(m,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:"success"},{default:t(()=>[e(f,{color:"primary",variant:"tonal"},{default:t(()=>[o(a)&&o(a).avatar?(n(),c(p,{key:0,src:o(a).avatar},null,8,["src"])):(n(),c(r,{key:1,icon:"tabler-user"}))]),_:1})]),_:1})]),_:1})]),default:t(()=>[e(i,{class:"font-weight-semibold"},{default:t(()=>[s(u(o(a).fullName),1)]),_:1}),e(k,null,{default:t(()=>[s(u(o(a).role),1)]),_:1})]),_:1}),e(d,{class:"my-2"}),e(l,{to:{name:"apps-user-view-id",params:{id:21}}},{prepend:t(()=>[e(r,{class:"me-2",icon:"tabler-user",size:"22"})]),default:t(()=>[e(i,null,{default:t(()=>[s("Profile")]),_:1})]),_:1}),e(l,{to:{name:"pages-account-settings-tab",params:{tab:"account"}}},{prepend:t(()=>[e(r,{class:"me-2",icon:"tabler-settings",size:"22"})]),default:t(()=>[e(i,null,{default:t(()=>[s("Settings")]),_:1})]),_:1}),e(l,{to:{name:"pages-pricing"}},{prepend:t(()=>[e(r,{class:"me-2",icon:"tabler-currency-dollar",size:"22"})]),default:t(()=>[e(i,null,{default:t(()=>[s("Pricing")]),_:1})]),_:1}),e(l,{to:{name:"pages-faq"}},{prepend:t(()=>[e(r,{class:"me-2",icon:"tabler-help",size:"22"})]),default:t(()=>[e(i,null,{default:t(()=>[s("FAQ")]),_:1})]),_:1}),e(d,{class:"my-2"}),e(l,{link:"",onClick:b},{prepend:t(()=>[e(r,{class:"me-2",icon:"tabler-logout",size:"22"})]),default:t(()=>[e(i,null,{default:t(()=>[s("Logout")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{E as default};
