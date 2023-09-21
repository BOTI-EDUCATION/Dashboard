import{k as i,o as D,b as K,w as l,m as a,p as e,V as I,q as o,P as Z,C as d,bc as ee,D as A,am as G,al as B,A as le,c as L,F as H,a as Q,G as te,H as ae,x as p,r as oe,s as se}from"./index-5b2e12ce.js";import{r as w,e as re}from"./validators-9e07059f.js";import{V as W}from"./VSpacer-c21d1c39.js";import{V as y}from"./VBtn-9b2206a8.js";import{V as M,c as T}from"./VCard-187af164.js";import{V as ne}from"./VForm-8f7f70c7.js";import{V as q,a as m}from"./VRow-d905acec.js";import{V as N}from"./VTextField-11a713cf.js";import{V as P}from"./VSelect-41a03c02.js";import{V as ie}from"./VNavigationDrawer-40d170f6.js";import{u as ue}from"./useUserListStore-28aec8fe.js";import{a as de}from"./formatters-94381996.js";import{V as F}from"./VDivider-0274a6d2.js";import{V as ce}from"./VTable-53ab57e7.js";import{V as me}from"./VPagination-0a5c9e68.js";import{V as $}from"./VAvatar-0a3d82c4.js";import{V as pe}from"./VImg-35a07238.js";import{V as ve}from"./VChip-2e699338.js";import{V as fe}from"./VMenu-78c9d6d9.js";import{V as Ve,a as J}from"./VList-4ff1373e.js";import"./index-eaa957a5.js";import"./router-e9adad12.js";import"./position-9bf61908.js";import"./VInput-f15c4a71.js";import"./index-37d7d91d.js";import"./forwardRefs-90328b1a.js";/* empty css                   */import"./VField-525ea766.js";import"./easing-3b7943b3.js";import"./VCounter-5694f2a9.js";import"./dialog-transition-8f1b11e1.js";import"./VCheckboxBtn-e3df07ab.js";import"./VSelectionControl-1c78c438.js";import"./ssrBoot-6f94db5f.js";import"./scopeId-1bb0a392.js";import"./VOverlay-f8193782.js";import"./lazy-84d4a476.js";const be={class:"d-flex align-center pa-6 pb-1"},_e=a("h6",{class:"text-h6"}," Add User ",-1),xe={__name:"AddNewUserDrawer",props:{isDrawerOpen:{type:Boolean,required:!0}},emits:["update:isDrawerOpen","userData"],setup(j,{emit:h}){const k=j,g=i(!1),v=i(),x=i(""),f=i(""),c=i(""),V=i(""),U=i(""),b=i(),S=i(),C=i(),O=()=>{h("update:isDrawerOpen",!1),G(()=>{var _,s;(_=v.value)==null||_.reset(),(s=v.value)==null||s.resetValidation()})},R=()=>{var _;(_=v.value)==null||_.validate().then(({valid:s})=>{s&&(h("userData",{id:0,fullName:x.value,company:c.value,role:b.value,country:V.value,contact:U.value,email:f.value,currentPlan:S.value,status:C.value,avatar:"",billing:"Auto Debit"}),h("update:isDrawerOpen",!1),G(()=>{var r,E;(r=v.value)==null||r.reset(),(E=v.value)==null||E.resetValidation()}))})},z=_=>{h("update:isDrawerOpen",_)};return(_,s)=>(D(),K(ie,{temporary:"",width:400,location:"end",class:"scrollable-content","model-value":k.isDrawerOpen,"onUpdate:modelValue":z},{default:l(()=>[a("div",be,[_e,e(W),e(y,{variant:"tonal",color:"default",icon:"",size:"32",class:"rounded",onClick:O},{default:l(()=>[e(I,{size:"18",icon:"tabler-x"})]),_:1})]),e(o(Z),{options:{wheelPropagation:!1}},{default:l(()=>[e(M,{flat:""},{default:l(()=>[e(T,null,{default:l(()=>[e(ne,{ref_key:"refForm",ref:v,modelValue:o(g),"onUpdate:modelValue":s[8]||(s[8]=r=>d(g)?g.value=r:null),onSubmit:ee(R,["prevent"])},{default:l(()=>[e(q,null,{default:l(()=>[e(m,{cols:"12"},{default:l(()=>[e(N,{modelValue:o(x),"onUpdate:modelValue":s[0]||(s[0]=r=>d(x)?x.value=r:null),rules:[o(w)],label:"Full Name"},null,8,["modelValue","rules"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[e(N,{modelValue:o(f),"onUpdate:modelValue":s[1]||(s[1]=r=>d(f)?f.value=r:null),rules:[o(w),o(re)],label:"Email"},null,8,["modelValue","rules"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[e(N,{modelValue:o(c),"onUpdate:modelValue":s[2]||(s[2]=r=>d(c)?c.value=r:null),rules:[o(w)],label:"Company"},null,8,["modelValue","rules"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[e(N,{modelValue:o(V),"onUpdate:modelValue":s[3]||(s[3]=r=>d(V)?V.value=r:null),rules:[o(w)],label:"Country"},null,8,["modelValue","rules"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[e(N,{modelValue:o(U),"onUpdate:modelValue":s[4]||(s[4]=r=>d(U)?U.value=r:null),type:"number",rules:[o(w)],label:"Contact"},null,8,["modelValue","rules"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[e(P,{modelValue:o(b),"onUpdate:modelValue":s[5]||(s[5]=r=>d(b)?b.value=r:null),label:"Select Role",rules:[o(w)],items:["Admin","Author","Editor","Maintainer","Subscriber"]},null,8,["modelValue","rules"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[e(P,{modelValue:o(S),"onUpdate:modelValue":s[6]||(s[6]=r=>d(S)?S.value=r:null),label:"Select Plan",rules:[o(w)],items:["Basic","Company","Enterprise","Team"]},null,8,["modelValue","rules"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[e(P,{modelValue:o(C),"onUpdate:modelValue":s[7]||(s[7]=r=>d(C)?C.value=r:null),label:"Select Status",rules:[o(w)],items:[{title:"Active",value:"active"},{title:"Inactive",value:"inactive"},{title:"Pending",value:"pending"}]},null,8,["modelValue","rules"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[e(y,{type:"submit",class:"me-3"},{default:l(()=>[A(" Submit ")]),_:1}),e(y,{type:"reset",variant:"tonal",color:"secondary",onClick:O},{default:l(()=>[A(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"]))}};const ge={class:"d-flex align-center gap-2 my-1"},we={class:"text-h6"},ye={class:"me-3",style:{width:"80px"}},he={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},Ue={style:{width:"10rem"}},Se=a("thead",null,[a("tr",null,[a("th",{scope:"col"}," USER "),a("th",{scope:"col"}," ROLE "),a("th",{scope:"col"}," PLAN "),a("th",{scope:"col"}," BILLING "),a("th",{scope:"col"}," STATUS "),a("th",{scope:"col"}," ACTIONS ")])],-1),De={class:"d-flex align-center"},Pe={key:1},ke={class:"d-flex flex-column"},Ce={class:"text-base"},Ne={class:"text-sm text-disabled"},Ae={class:"text-capitalize text-base"},ze={class:"text-capitalize text-base font-weight-semibold"},Le={class:"text-base"},Te={class:"text-center",style:{width:"5rem"}},Oe=a("tr",null,[a("td",{colspan:"7",class:"text-center"}," No data available ")],-1),Ee=[Oe],Ie={class:"text-sm text-disabled"},wl={__name:"index",setup(j){const h=ue(),k=i(""),g=i(),v=i(),x=i(),f=i(10),c=i(1),V=i(1),U=i(0),b=i([]),S=()=>{h.fetchUsers({q:k.value,status:x.value,plan:v.value,role:g.value,perPage:f.value,currentPage:c.value}).then(n=>{b.value=n.data.users,V.value=n.data.totalPage,U.value=n.data.totalUsers}).catch(n=>{console.error(n)})};B(S),B(()=>{c.value>V.value&&(c.value=V.value)});const C=[{title:"Admin",value:"admin"},{title:"Author",value:"author"},{title:"Editor",value:"editor"},{title:"Maintainer",value:"maintainer"},{title:"Subscriber",value:"subscriber"}],O=[{title:"Basic",value:"basic"},{title:"Company",value:"company"},{title:"Enterprise",value:"enterprise"},{title:"Team",value:"team"}],R=[{title:"Pending",value:"pending"},{title:"Active",value:"active"},{title:"Inactive",value:"inactive"}],z=n=>n==="subscriber"?{color:"warning",icon:"tabler-user"}:n==="author"?{color:"success",icon:"tabler-circle-check"}:n==="maintainer"?{color:"primary",icon:"tabler-chart-pie-2"}:n==="editor"?{color:"info",icon:"tabler-pencil"}:n==="admin"?{color:"secondary",icon:"tabler-device-laptop"}:{color:"primary",icon:"tabler-user"},_=n=>n==="pending"?"warning":n==="active"?"success":n==="inactive"?"secondary":"primary",s=i(!1);B(()=>{c.value>V.value&&(c.value=V.value)});const r=le(()=>{const n=b.value.length?(c.value-1)*f.value+1:0,u=b.value.length+(c.value-1)*f.value;return`Showing ${n} to ${u} of ${U.value} entries`}),E=n=>{h.addUser(n),S()},X=[{icon:"tabler-user",color:"primary",title:"Session",stats:"21,459",percentage:29,subtitle:"Total Users"},{icon:"tabler-user-plus",color:"error",title:"Paid Users",stats:"4,567",percentage:18,subtitle:"Last week analytics"},{icon:"tabler-user-check",color:"success",title:"Active Users",stats:"19,860",percentage:-14,subtitle:"Last week analytics"},{icon:"tabler-user-exclamation",color:"warning",title:"Pending Users",stats:"237",percentage:42,subtitle:"Last week analytics"}];return(n,u)=>{const Y=oe("RouterLink");return D(),L("section",null,[e(q,null,{default:l(()=>[(D(),L(H,null,Q(X,t=>e(m,{key:t.title,cols:"12",sm:"6",lg:"3"},{default:l(()=>[e(M,null,{default:l(()=>[e(T,{class:"d-flex justify-space-between"},{default:l(()=>[a("div",null,[a("span",null,p(t.title),1),a("div",ge,[a("h6",we,p(t.stats),1),a("span",{class:se(t.percentage>0?"text-success":"text-error")},"("+p(t.percentage)+"%)",3)]),a("span",null,p(t.subtitle),1)]),e($,{rounded:"",variant:"tonal",color:t.color,icon:t.icon},null,8,["color","icon"])]),_:2},1024)]),_:2},1024)]),_:2},1024)),64)),e(m,{cols:"12"},{default:l(()=>[e(M,{title:"Search Filter"},{default:l(()=>[e(T,null,{default:l(()=>[e(q,null,{default:l(()=>[e(m,{cols:"12",sm:"4"},{default:l(()=>[e(P,{modelValue:o(g),"onUpdate:modelValue":u[0]||(u[0]=t=>d(g)?g.value=t:null),label:"Select Role",items:C,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12",sm:"4"},{default:l(()=>[e(P,{modelValue:o(v),"onUpdate:modelValue":u[1]||(u[1]=t=>d(v)?v.value=t:null),label:"Select Plan",items:O,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12",sm:"4"},{default:l(()=>[e(P,{modelValue:o(x),"onUpdate:modelValue":u[2]||(u[2]=t=>d(x)?x.value=t:null),label:"Select Status",items:R,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(F),e(T,{class:"d-flex flex-wrap py-4 gap-4"},{default:l(()=>[a("div",ye,[e(P,{modelValue:o(f),"onUpdate:modelValue":u[3]||(u[3]=t=>d(f)?f.value=t:null),density:"compact",variant:"outlined",items:[10,20,30,50]},null,8,["modelValue"])]),e(W),a("div",he,[a("div",Ue,[e(N,{modelValue:o(k),"onUpdate:modelValue":u[4]||(u[4]=t=>d(k)?k.value=t:null),placeholder:"Search",density:"compact"},null,8,["modelValue"])]),e(y,{variant:"tonal",color:"secondary","prepend-icon":"tabler-screen-share"},{default:l(()=>[A(" Export ")]),_:1}),e(y,{"prepend-icon":"tabler-plus",onClick:u[5]||(u[5]=t=>s.value=!0)},{default:l(()=>[A(" Add New User ")]),_:1})])]),_:1}),e(F),e(ce,{class:"text-no-wrap"},{default:l(()=>[Se,a("tbody",null,[(D(!0),L(H,null,Q(o(b),t=>(D(),L("tr",{key:t.id,style:{height:"3.75rem"}},[a("td",null,[a("div",De,[e($,{variant:"tonal",color:z(t.role).color,class:"me-3",size:"38"},{default:l(()=>[t.avatar?(D(),K(pe,{key:0,src:t.avatar},null,8,["src"])):(D(),L("span",Pe,p(o(de)(t.fullName)),1))]),_:2},1032,["color"]),a("div",ke,[a("h6",Ce,[e(Y,{to:{name:"apps-user-view-id",params:{id:t.id}},class:"font-weight-medium user-list-name"},{default:l(()=>[A(p(t.fullName),1)]),_:2},1032,["to"])]),a("span",Ne,"@"+p(t.email),1)])])]),a("td",null,[e($,{color:z(t.role).color,icon:z(t.role).icon,variant:"tonal",size:"30",class:"me-4"},null,8,["color","icon"]),a("span",Ae,p(t.role),1)]),a("td",null,[a("span",ze,p(t.currentPlan),1)]),a("td",null,[a("span",Le,p(t.billing),1)]),a("td",null,[e(ve,{label:"",color:_(t.status),size:"small",class:"text-capitalize"},{default:l(()=>[A(p(t.status),1)]),_:2},1032,["color"])]),a("td",Te,[e(y,{icon:"",size:"x-small",color:"default",variant:"text"},{default:l(()=>[e(I,{size:"22",icon:"tabler-edit"})]),_:1}),e(y,{icon:"",size:"x-small",color:"default",variant:"text"},{default:l(()=>[e(I,{size:"22",icon:"tabler-trash"})]),_:1}),e(y,{icon:"",size:"x-small",color:"default",variant:"text"},{default:l(()=>[e(I,{size:"22",icon:"tabler-dots-vertical"}),e(fe,{activator:"parent"},{default:l(()=>[e(Ve,null,{default:l(()=>[e(J,{title:"View",to:{name:"apps-user-view-id",params:{id:t.id}}},null,8,["to"]),e(J,{title:"Suspend",href:"javascript:void(0)"})]),_:2},1024)]),_:2},1024)]),_:2},1024)])]))),128))]),te(a("tfoot",null,Ee,512),[[ae,!o(b).length]])]),_:1}),e(F),e(T,{class:"d-flex align-center flex-wrap justify-space-between gap-4 py-3 px-5"},{default:l(()=>[a("span",Ie,p(o(r)),1),e(me,{modelValue:o(c),"onUpdate:modelValue":u[6]||(u[6]=t=>d(c)?c.value=t:null),size:"small","total-visible":5,length:o(V)},null,8,["modelValue","length"])]),_:1})]),_:1})]),_:1})]),_:1}),e(xe,{isDrawerOpen:o(s),"onUpdate:isDrawerOpen":u[7]||(u[7]=t=>d(s)?s.value=t:null),onUserData:E},null,8,["isDrawerOpen"])])}}};export{wl as default};
