import{a as b}from"./formatters.1ccc6423.js";import{V as u}from"./VBtn.ce311982.js";import{V as f}from"./VBadge.78e96ed6.js";import{o,b as n,w as e,p as t,V as y,D as _,x as r,y as g,c as s,F as v,a as h,q as N,m as x,aq as k,b2 as w,b3 as A,b4 as B}from"./index.bb11c4a0.js";import{V as C}from"./VMenu.20a9d99a.js";import{V as I,a as l}from"./VList.46357442.js";import{V as L}from"./VChip.a6761daf.js";import{V}from"./VDivider.03393ba8.js";import{V as P}from"./VListItemAction.bad2cc74.js";import{V as T}from"./VAvatar.8f37845b.js";import"./index.0d4b9ec4.js";import"./router.f40f8152.js";import"./position.0d284abb.js";import"./VImg.34958778.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.c2c81749.js";import"./VOverlay.729c1a86.js";import"./lazy.e0cc424a.js";import"./easing.36b781ab.js";import"./dialog-transition.d8219c0c.js";import"./index.7ea337b7.js";const q={key:0},z={class:"whitespace-no-wrap text-medium-emphasis"},D={__name:"Notifications",props:{notifications:{type:Array,required:!0},badgeProps:{type:null,required:!1,default:void 0},location:{type:null,required:!1,default:"bottom end"}},emits:["click:readAllNotifications"],setup(m,{emit:c}){const i=m;return(p,d)=>(o(),n(f,k({"model-value":!!i.badgeProps},i.badgeProps),{default:e(()=>[t(u,{icon:"",variant:"text",color:"default",size:"small"},{default:e(()=>[t(f,{"model-value":!!i.notifications.length,color:"error",content:"4"},{default:e(()=>[t(y,{icon:"tabler-bell",size:"24"})]),_:1},8,["model-value"]),t(C,{activator:"parent",width:"380px",location:i.location,offset:"14px"},{default:e(()=>[t(I,{class:"py-0"},{default:e(()=>[t(l,{title:"Notifications",class:"notification-section",height:"48px"},{append:e(()=>[i.notifications.length?(o(),n(L,{key:0,color:"primary",size:"small"},{default:e(()=>[_(r(i.notifications.length)+" New ",1)]),_:1})):g("",!0)]),_:1}),t(V),(o(!0),s(v,null,h(i.notifications,a=>(o(),s(v,{key:a.title},[t(l,{title:a.title,subtitle:a.subtitle,link:"",lines:"one","min-height":"66px"},{prepend:e(()=>[t(P,{start:""},{default:e(()=>[t(T,{color:a.color||"primary",image:a.img||void 0,icon:a.icon||void 0,size:"40",variant:"tonal"},{default:e(()=>[a.text?(o(),s("span",q,r(N(b)(a.text)),1)):g("",!0)]),_:2},1032,["color","image","icon"])]),_:2},1024)]),append:e(()=>[x("small",z,r(a.time),1)]),_:2},1032,["title","subtitle"]),t(V)],64))),128)),t(l,{class:"notification-section"},{default:e(()=>[t(u,{block:"",onClick:d[0]||(d[0]=a=>p.$emit("click:readAllNotifications"))},{default:e(()=>[_(" READ ALL NOTIFICATIONS ")]),_:1})]),_:1})]),_:1})]),_:1},8,["location"])]),_:1})]),_:1},16,["model-value"]))}},F="/assets/paypal.01b645d1.svg",oe={__name:"NavBarNotifications",setup(m){const c=[{img:w,title:"Congratulation Flora! \u{1F389}",subtitle:"Won the monthly best seller badge",time:"Today"},{text:"Tom Holland",title:"New user registered.",subtitle:"5 hours ago",time:"Yesterday"},{img:A,title:"New message received \u{1F44B}\u{1F3FB}",subtitle:"You have 10 unread messages",time:"11 Aug"},{img:F,title:"Paypal",subtitle:"Received Payment",time:"25 May",color:"error"},{img:B,title:"Received Order \u{1F4E6}",subtitle:"New order received from john",time:"19 Mar"}];return(i,p)=>(o(),n(D,{notifications:c}))}};export{oe as default};
