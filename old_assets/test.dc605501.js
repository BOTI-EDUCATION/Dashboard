import{V as g}from"./VBtn.bb0efe4e.js";import{k as N,o as s,b as p,w as e,m as r,p as a,V as f,c as o,F as c,a as m,D as _,x as i,q as V,C as b,s as y}from"./index.096e80e5.js";import{V as w}from"./VMenu.6e3e8d30.js";import{V as x,a as S,b as k}from"./VList.6e549209.js";import{V as A,a as D}from"./VTabs.7f33c4e7.js";import{V as E}from"./VDivider.ecbdc3f7.js";import{c as B,V as I}from"./VCard.02ead318.js";import{V as T,a as z}from"./VWindowItem.04eac7a4.js";import{V as C,a as h}from"./VTimelineItem.a137a9cf.js";import{V as v}from"./VAvatar.b0b1a1e5.js";import{a as H,V as U}from"./VRow.86930b01.js";import"./router.0ecb67ce.js";import"./position.5411af0b.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.0ed33173.js";import"./VOverlay.5268d4d1.js";import"./lazy.5faedddf.js";import"./easing.36b781ab.js";import"./VImg.489e5981.js";import"./dialog-transition.fccdf0ea.js";import"./index.140e4203.js";import"./VSlideGroup.c7f379a0.js";import"./ssrBoot.03a2a4db.js";const W={class:"mt-n4 me-n2"},L={class:"v-timeline-avatar-wrapper rounded-circle",style:{"background-color":"rgb(var(--v-theme-surface))"}},M={class:"font-weight-medium text-high-emphasis mb-0"},O={class:"text-disabled mb-0"},J={class:"v-timeline-avatar-wrapper rounded-circle",style:{"background-color":"rgb(var(--v-theme-surface))"}},$={class:"font-weight-medium text-high-emphasis mb-0"},F={class:"text-disabled mb-0"},P={__name:"Test",setup(R){const n=N("New"),u=[{tabName:"New",timeline1:[{icon:"tabler-circle-check",type:"SENDER",name:"Myrtle Ullrich",address:"101 Boulder, California(CA), 95959"},{icon:"tabler-map-pin",type:"RECEIVER",name:"Barry Schowalter",address:"939 Orange, California(CA),92118"}],timeline2:[{icon:"tabler-circle-check",type:"SENDER",name:"Veronica Herman",address:"162 Windsor, California(CA), 95492"},{icon:"tabler-map-pin",type:"RECEIVER",name:"Helen Jacobs",address:"487 Sunset, California(CA), 94043"}]},{tabName:"Preparing",timeline1:[{icon:"tabler-circle-check",type:"SENDER",name:"Barry Schowalter",address:"939 Orange, California(CA),92118"},{icon:"tabler-map-pin",type:"RECEIVER",name:"Myrtle Ullrich",address:"101 Boulder, California(CA), 95959"}],timeline2:[{icon:"tabler-circle-check",type:"SENDER",name:"Veronica Herman",address:"162 Windsor, California(CA), 95492"},{icon:"tabler-map-pin",type:"RECEIVER",name:"Helen Jacobs",address:"487 Sunset, California(CA), 94043"}]},{tabName:"Shipping",timeline1:[{icon:"tabler-circle-check",type:"SENDER",name:"Veronica Herman",address:"101 Boulder, California(CA), 95959"},{icon:"tabler-map-pin",type:"RECEIVER",name:"Barry Schowalter",address:"939 Orange, California(CA),92118"}],timeline2:[{icon:"tabler-circle-check",type:"SENDER",name:"Myrtle Ullrich",address:"162 Windsor, California(CA), 95492"},{icon:"tabler-map-pin",type:"RECEIVER",name:"Helen Jacobs",address:"487 Sunset, California(CA), 94043"}]}];return(q,d)=>(s(),p(I,{title:"Orders",subtitle:"62 Deliveries in Progress"},{append:e(()=>[r("div",W,[a(g,{icon:"",color:"default",size:"x-small",variant:"plain"},{default:e(()=>[a(f,{size:"22",icon:"tabler-dots-vertical"}),a(w,{activator:"parent"},{default:e(()=>[a(x,null,{default:e(()=>[(s(),o(c,null,m(["Refresh","Download","View All"],(l,t)=>a(S,{key:t,value:t},{default:e(()=>[a(k,null,{default:e(()=>[_(i(l),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})])]),default:e(()=>[a(A,{modelValue:V(n),"onUpdate:modelValue":d[0]||(d[0]=l=>b(n)?n.value=l:null),grow:""},{default:e(()=>[(s(),o(c,null,m(u,l=>a(D,{key:l.tabName,value:l.tabName},{default:e(()=>[_(i(l.tabName),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),a(E),a(B,null,{default:e(()=>[a(T,{modelValue:V(n),"onUpdate:modelValue":d[1]||(d[1]=l=>b(n)?n.value=l:null),class:"disable-tab-transition"},{default:e(()=>[(s(),o(c,null,m(u,l=>a(z,{key:l.tabName,value:l.tabName},{default:e(()=>[a(C,{side:"end",align:"start","truncate-line":"both",density:"compact",class:"v-timeline-density-compact"},{default:e(()=>[(s(!0),o(c,null,m(l.timeline1,t=>(s(),p(h,{key:t.icon,"fill-dot":"",size:"x-small"},{icon:e(()=>[r("div",L,[a(v,null,{default:e(()=>[a(f,{size:"22",icon:t.icon,color:t.type==="SENDER"?"success":"primary"},null,8,["icon","color"])]),_:2},1024)])]),default:e(()=>[r("p",{class:y(`text-sm font-weight-medium text-${t.type==="SENDER"?"success":"primary"} mb-0`)},i(t.type),3),r("p",M,i(t.name),1),r("p",O,i(t.address),1)]),_:2},1024))),128))]),_:2},1024),a(E,{class:"my-3",style:{"border-style":"dashed"}}),a(C,{side:"end",align:"start","truncate-line":"both",density:"compact",class:"v-timeline-density-compact"},{default:e(()=>[(s(!0),o(c,null,m(l.timeline2,t=>(s(),p(h,{key:t.icon,"fill-dot":"",size:"x-small"},{icon:e(()=>[r("div",J,[a(v,null,{default:e(()=>[a(f,{size:"22",icon:t.icon,color:t.type==="SENDER"?"success":"primary"},null,8,["icon","color"])]),_:2},1024)])]),default:e(()=>[r("p",{class:y(`text-sm font-weight-medium text-${t.type==="SENDER"?"success":"primary"} mb-0`)},i(t.type),3),r("p",$,i(t.name),1),r("p",F,i(t.address),1)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}))}};const Ve={__name:"test",setup(R){return(n,u)=>(s(),p(U,null,{default:e(()=>[a(H,{cols:"12",md:"5",lg:"4"},{default:e(()=>[a(P)]),_:1})]),_:1}))}};export{Ve as default};
