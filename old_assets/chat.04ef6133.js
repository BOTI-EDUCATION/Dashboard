import{ba as ee,b6 as E,q as e,o as c,c as _,m as s,p as t,w as l,V as h,s as $,b as y,x as b,P as F,F as V,y as z,A as j,cZ as te,C as w,a as I,G as Z,H as K,D as L,aE as se,k as S,O as ae,bc as oe,am as Q}from"./index.096e80e5.js";import{a as R,b as le,f as ne}from"./formatters.1ccc6423.js";import{V as g}from"./VBtn.bb0efe4e.js";import{V as U}from"./VAvatar.b0b1a1e5.js";import{V as D}from"./VImg.489e5981.js";import{V as A}from"./VBadge.743467a3.js";import{V as Y}from"./VTextField.d1564acf.js";import{V as G}from"./VDivider.ecbdc3f7.js";import{V as ie}from"./VTextarea.bdb4f98a.js";import{V as ce,a as re}from"./VRadioGroup.3a17dbe6.js";import{u as de,V as ue,a as me}from"./useResponsiveSidebar.25c21390.js";import{b as W}from"./route-block.7577f022.js";import{V as q}from"./VNavigationDrawer.2ae2fd40.js";import{V as he}from"./VSpacer.2fe71f8b.js";import{V as fe}from"./VMenu.6e3e8d30.js";import{V as pe,a as ve,b as _e}from"./VList.6e549209.js";import{V as be}from"./VForm.347d3dbf.js";import"./index.0d4b9ec4.js";import"./router.0ecb67ce.js";import"./position.5411af0b.js";/* empty css                   */import"./VField.82ea56ac.js";import"./index.140e4203.js";import"./VInput.34fa8dcc.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.e1af49ba.js";import"./VSelectionControl.796dce69.js";import"./ssrBoot.03a2a4db.js";import"./scopeId.0ed33173.js";import"./VOverlay.5268d4d1.js";import"./lazy.5faedddf.js";import"./dialog-transition.fccdf0ea.js";const P=()=>({resolveAvatarBadgeVariant:n=>n==="online"?"success":n==="busy"?"error":n==="away"?"warning":"secondary"}),M=ee("chat",{state:()=>({contacts:[],chatsContacts:[],profileUser:void 0,activeChat:null}),actions:{async fetchChatsAndContacts(x){const{data:n}=await E.get("/apps/chat/chats-and-contacts",{params:{q:x}}),{chatsContacts:a,contacts:r,profileUser:p}=n;this.chatsContacts=a,this.contacts=r,this.profileUser=p},async getChat(x){const{data:n}=await E.get(`/apps/chat/chats/${x}`);this.activeChat=n},async sendMsg(x){var d,o,f,m,k;const n=(d=this.profileUser)==null?void 0:d.id,{data:a}=await E.post(`/apps/chat/chats/${(o=this.activeChat)==null?void 0:o.contact.id}`,{message:x,senderId:n}),{msg:r,chat:p}=a;if(p!==void 0){const N=this.activeChat;this.chatsContacts.push({...N.contact,chat:{id:p.id,lastMessage:[],unseenMsgs:0,messages:[r]}}),this.activeChat&&(this.activeChat.chat={id:p.id,messages:[r],unseenMsgs:0,userId:(f=this.activeChat)==null?void 0:f.contact.id})}else(k=(m=this.activeChat)==null?void 0:m.chat)==null||k.messages.push(r);const i=this.chatsContacts.find(N=>this.activeChat?N.id===this.activeChat.contact.id:!1);i.chat.lastMessage=r}}}),xe={class:"text-center px-6"},ge={key:1,class:"text-3xl"},Ce={class:"mb-1 font-weight-medium text-high-emphasis text-base"},ye={class:"text-capitalize text-sm text-medium-emphasis"},$e={class:"my-8"},ke=s("span",{for:"textarea-user-about",class:"text-sm text-disabled"},"ABOUT",-1),Ve={class:"mt-2"},we={class:"mb-8"},ze=s("span",{class:"d-block text-sm text-disabled mb-3"},"PERSONAL INFORMATION",-1),Ue={class:"d-flex align-center"},Se=s("span",null,"lucifer@email.com",-1),Ie={class:"d-flex align-center my-3"},Ae=s("span",null,"+1(123) 456 - 7890",-1),De={class:"d-flex align-center"},Me=s("span",null,"Mon - Fri 10AM - 8PM",-1),Ne=s("span",{class:"d-block text-sm text-disabled mb-3"},"OPTIONS",-1),Oe={class:"d-flex align-center"},Be=s("span",null,"Add Tag",-1),Te={class:"d-flex align-center my-3"},Pe=s("span",null,"Important Contact",-1),Le={class:"d-flex align-center mb-3"},Fe=s("span",null,"Shared Media",-1),Re={class:"d-flex align-center mb-3"},Ee=s("span",null,"Delete Contact",-1),qe={class:"d-flex align-center"},je=s("span",null,"Block Contact",-1),He={__name:"ChatActiveChatUserProfileSidebarContent",emits:["close"],setup(x,{emit:n}){const a=M(),{resolveAvatarBadgeVariant:r}=P();return(p,i)=>e(a).activeChat?(c(),_(V,{key:0},[s("div",{class:$(["pt-2 me-2",p.$vuetify.locale.isRtl?"text-left":"text-right"])},[t(g,{variant:"text",color:"default",icon:"",size:"small",onClick:i[0]||(i[0]=d=>p.$emit("close"))},{default:l(()=>[t(h,{size:"24",icon:"tabler-x",class:"text-medium-emphasis"})]),_:1})],2),s("div",xe,[t(A,{location:"bottom right","offset-x":"7","offset-y":"4",bordered:"",color:e(r)(e(a).activeChat.contact.status),class:"chat-user-profile-badge mb-5"},{default:l(()=>[t(U,{size:"80",class:$(["bg-surface",`text-${e(r)(e(a).activeChat.contact.status)}`]),variant:"tonal"},{default:l(()=>[e(a).activeChat.contact.avatar?(c(),y(D,{key:0,src:e(a).activeChat.contact.avatar},null,8,["src"])):(c(),_("span",ge,b(e(R)(e(a).activeChat.contact.fullName)),1))]),_:1},8,["class"])]),_:1},8,["color"]),s("h2",Ce,b(e(a).activeChat.contact.fullName),1),s("p",ye,b(e(a).activeChat.contact.role),1)]),t(e(F),{class:"ps-chat-user-profile-sidebar-content text-medium-emphasis pb-5 px-5",options:{wheelPropagation:!1}},{default:l(()=>[s("div",$e,[ke,s("p",Ve,b(e(a).activeChat.contact.about),1)]),s("div",we,[ze,s("div",Ue,[t(h,{class:"me-2",icon:"tabler-mail",size:"22"}),Se]),s("div",Ie,[t(h,{class:"me-2",icon:"tabler-phone",size:"22"}),Ae]),s("div",De,[t(h,{class:"me-2",icon:"tabler-clock",size:"22"}),Me])]),s("div",null,[Ne,s("div",Oe,[t(h,{class:"me-2",icon:"tabler-bookmark",size:"22"}),Be]),s("div",Te,[t(h,{class:"me-2",icon:"tabler-star",size:"22"}),Pe]),s("div",Le,[t(h,{class:"me-2",icon:"tabler-photo",size:"22"}),Fe]),s("div",Re,[t(h,{class:"me-2",icon:"tabler-trash",size:"22"}),Ee]),s("div",qe,[t(h,{class:"me-2 ms-1",size:"18",icon:"tabler-ban"}),je])])]),_:1})],64)):z("",!0)}};const Je=["data-x"],Ze={key:1},Ke={class:"flex-grow-1 ms-4 overflow-hidden"},Qe={class:"d-block text-sm text-truncate text-disabled"},We={key:0,class:"d-flex flex-column align-self-start"},Xe={class:"d-block text-disabled whitespace-no-wrap"},X={__name:"ChatContact",props:{isChatContact:{type:Boolean,required:!1,default:!1},user:{type:null,required:!0}},setup(x){const n=x,a=M(),{resolveAvatarBadgeVariant:r}=P(),p=j(()=>{var d,o;const i=((d=a.activeChat)==null?void 0:d.contact.id)===n.user.id;return(n.isChatContact||!((o=a.activeChat)!=null&&o.chat))&&i});return(i,d)=>(c(),_("li",{key:e(a).chatsContacts.length,class:$(["chat-contact cursor-pointer d-flex align-center",{"chat-contact-active":e(p)}]),"data-x":e(a).chatsContacts.length},[t(A,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:e(r)(n.user.status),bordered:"","model-value":n.isChatContact},{default:l(()=>[t(U,{size:"40",variant:"tonal",color:e(r)(n.user.status)},{default:l(()=>[n.user.avatar?(c(),y(D,{key:0,src:n.user.avatar,alt:"John Doe"},null,8,["src"])):(c(),_("span",Ze,b(e(R)(x.user.fullName)),1))]),_:1},8,["color"])]),_:1},8,["color","model-value"]),s("div",Ke,[s("span",null,b(n.user.fullName),1),s("span",Qe,b(n.isChatContact&&"chat"in n.user?n.user.chat.lastMessage.message:n.user.about),1)]),n.isChatContact&&"chat"in n.user?(c(),_("div",We,[s("span",Xe,b(e(le)(n.user.chat.lastMessage.time)),1),n.user.chat.unseenMsgs?(c(),y(A,{key:0,color:"error",inline:"",content:n.user.chat.unseenMsgs,class:"ms-auto"},null,8,["content"])):z("",!0)])):z("",!0)],10,Je))}};const Ye={key:0,class:"chat-list-header"},Ge=s("li",null,[s("span",{class:"chat-contact-header d-block text-primary text-xl font-weight-medium"},"Chats")],-1),et={class:"no-chat-items-text text-disabled"},tt=s("li",null,[s("span",{class:"chat-contact-header d-block text-primary text-xl font-weight-medium"},"Contacts")],-1),st={class:"no-chat-items-text text-disabled"},at={__name:"ChatLeftSidebarContent",props:{search:{type:String,required:!0},isDrawerOpen:{type:Boolean,required:!0}},emits:["openChatOfContact","showUserProfile","close"],setup(x,{emit:n}){const a=x,{resolveAvatarBadgeVariant:r}=P(),p=te(a,"search"),i=M();return(d,o)=>(c(),_(V,null,[e(i).profileUser?(c(),_("div",Ye,[t(A,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:e(r)(e(i).profileUser.status),bordered:""},{default:l(()=>[t(U,{size:"38",class:"cursor-pointer",onClick:o[0]||(o[0]=f=>d.$emit("showUserProfile"))},{default:l(()=>[t(D,{src:e(i).profileUser.avatar,alt:"John Doe"},null,8,["src"])]),_:1})]),_:1},8,["color"]),t(Y,{modelValue:e(p),"onUpdate:modelValue":o[1]||(o[1]=f=>w(p)?p.value=f:null),density:"compact",placeholder:"Search...",class:"ms-4 me-1 chat-list-search"},{"prepend-inner":l(()=>[t(h,{size:"22",icon:"tabler-search"})]),_:1},8,["modelValue"]),d.$vuetify.display.smAndDown?(c(),y(g,{key:0,variant:"text",color:"default",icon:"",size:"small",onClick:o[2]||(o[2]=f=>d.$emit("close"))},{default:l(()=>[t(h,{size:"24",icon:"tabler-x",class:"text-medium-emphasis"})]),_:1})):z("",!0)])):z("",!0),t(G),t(e(F),{tag:"ul",class:"chat-contacts-list px-3",options:{wheelPropagation:!1}},{default:l(()=>[Ge,(c(!0),_(V,null,I(e(i).chatsContacts,f=>(c(),y(X,{key:`chat-${f.id}`,user:f,"is-chat-contact":"",onClick:m=>d.$emit("openChatOfContact",f.id)},null,8,["user","onClick"]))),128)),Z(s("span",et,"No chats found",512),[[K,!e(i).chatsContacts.length]]),tt,(c(!0),_(V,null,I(e(i).contacts,f=>(c(),y(X,{key:`chat-${f.id}`,user:f,onClick:m=>d.$emit("openChatOfContact",f.id)},null,8,["user","onClick"]))),128)),Z(s("span",st,"No contacts found",512),[[K,!e(i).contacts.length]])]),_:1})],64))}};const ot={class:"chat-log pa-5"},lt={class:"text-xs me-1 text-disabled"},nt={__name:"ChatLog",setup(x){const n=M(),a=j(()=>{var i,d;return{id:(i=n.activeChat)==null?void 0:i.contact.id,avatar:(d=n.activeChat)==null?void 0:d.contact.avatar}}),r=i=>i.isSeen?{icon:"tabler-checks",color:"success"}:i.isDelivered?{icon:"tabler-checks",color:void 0}:{icon:"tabler-check",color:void 0},p=j(()=>{let i=[];const d=[];if(n.activeChat.chat){i=n.activeChat.chat.messages;let o=i[0].senderId,f={senderId:o,messages:[]};i.forEach((m,k)=>{o===m.senderId?f.messages.push({message:m.message,time:m.time,feedback:m.feedback}):(o=m.senderId,d.push(f),f={senderId:m.senderId,messages:[{message:m.message,time:m.time,feedback:m.feedback}]}),k===i.length-1&&d.push(f)})}return d});return(i,d)=>(c(),_("div",ot,[(c(!0),_(V,null,I(e(p),(o,f)=>(c(),_("div",{key:o.senderId+String(f),class:$(["chat-group d-flex align-start",[{"flex-row-reverse":o.senderId!==e(a).id,"mb-8":e(p).length-1!==f}]])},[s("div",{class:$(["chat-avatar",o.senderId!==e(a).id?"ms-4":"me-4"])},[t(U,{size:"38"},{default:l(()=>{var m;return[t(D,{src:o.senderId===e(a).id?e(a).avatar:(m=e(n).profileUser)==null?void 0:m.avatar},null,8,["src"])]}),_:2},1024)],2),s("div",{class:$(["chat-body d-inline-flex flex-column",o.senderId!==e(a).id?"align-end":"align-start"])},[(c(!0),_(V,null,I(o.messages,(m,k)=>(c(),_("p",{key:m.time,class:$(["chat-content text-sm py-3 px-4 elevation-1",[o.senderId===e(a).id?"bg-surface chat-left":"bg-primary text-white chat-right",o.messages.length-1!==k?"mb-2":"mb-1"]])},b(m.message),3))),128)),s("div",{class:$({"text-right":o.senderId!==e(a).id})},[s("span",lt,b(e(ne)(o.messages[o.messages.length-1].time,{hour:"numeric",minute:"numeric"})),1),o.senderId!==e(a).id?(c(),y(h,{key:0,size:"16",color:r(o.messages[o.messages.length-1].feedback).color},{default:l(()=>[L(b(r(o.messages[o.messages.length-1].feedback).icon),1)]),_:2},1032,["color"])):z("",!0)],2)],2)],2))),128))]))}},it={class:"pt-2 me-2 text-end"},ct={class:"text-center px-6"},rt={key:1,class:"text-3xl"},dt={class:"mb-1 text-high-emphasis font-weight-medium text-base"},ut={class:"text-capitalize text-medium-emphasis text-sm"},mt={class:"my-5 text-medium-emphasis"},ht=s("span",{for:"textarea-user-about",class:"text-sm text-disabled"},"ABOUT",-1),ft={class:"mb-5"},pt=s("span",{class:"text-sm text-disabled"},"STATUS",-1),vt={class:"text-medium-emphasis"},_t=s("span",{class:"text-sm text-disabled"},"SETTINGS",-1),bt={class:"d-flex align-center my-3"},xt=s("span",null,"Two-step Verification",-1),gt={class:"d-flex align-center mb-3"},Ct=s("span",null,"Notification",-1),yt={class:"d-flex align-center mb-3"},$t=s("span",null,"Invite Friends",-1),kt={class:"d-flex align-center"},Vt=s("span",null,"Delete Account",-1),wt={__name:"ChatUserProfileSidebarContent",emits:["close"],setup(x,{emit:n}){const a=M(),{resolveAvatarBadgeVariant:r}=P(),p=[{title:"Online",value:"online",color:"success"},{title:"Away",value:"away",color:"warning"},{title:"Do not disturb",value:"busy",color:"error"},{title:"Offline",value:"offline",color:"secondary"}];return(i,d)=>e(a).profileUser?(c(),_(V,{key:0},[s("div",it,[t(g,{variant:"text",color:"default",icon:"",size:"small",onClick:d[0]||(d[0]=o=>i.$emit("close"))},{default:l(()=>[t(h,{size:"24",class:"text-medium-emphasis",icon:"tabler-x"})]),_:1})]),s("div",ct,[t(A,{location:"bottom right","offset-x":"7","offset-y":"4",bordered:"",color:e(r)(e(a).profileUser.status),class:"chat-user-profile-badge mb-5"},{default:l(()=>[t(U,{size:"84",variant:"tonal",class:$(`text-${e(r)(e(a).profileUser.status)}`)},{default:l(()=>[e(a).profileUser.avatar?(c(),y(D,{key:0,src:e(a).profileUser.avatar},null,8,["src"])):(c(),_("span",rt,b(e(R)(e(a).profileUser.fullName)),1))]),_:1},8,["class"])]),_:1},8,["color"]),s("h2",dt,b(e(a).profileUser.fullName),1),s("p",ut,b(e(a).profileUser.role),1)]),t(e(F),{class:"ps-chat-user-profile-sidebar-content pb-5 px-5",options:{wheelPropagation:!1}},{default:l(()=>[s("div",mt,[ht,t(ie,{id:"textarea-user-about",modelValue:e(a).profileUser.about,"onUpdate:modelValue":d[1]||(d[1]=o=>e(a).profileUser.about=o),"auto-grow":"",class:"mt-1",rows:"4"},null,8,["modelValue"])]),s("div",ft,[pt,t(ce,{modelValue:e(a).profileUser.status,"onUpdate:modelValue":d[2]||(d[2]=o=>e(a).profileUser.status=o),class:"mt-1"},{default:l(()=>[(c(),_(V,null,I(p,o=>t(re,{key:o.title,label:o.title,value:o.value,color:o.color},null,8,["label","value","color"])),64))]),_:1},8,["modelValue"])]),s("div",vt,[_t,s("div",bt,[t(h,{class:"me-2",icon:"tabler-circle-check",size:"22"}),xt]),s("div",gt,[t(h,{class:"me-2",icon:"tabler-bell",size:"22"}),Ct]),s("div",yt,[t(h,{class:"me-2",icon:"tabler-user",size:"22"}),$t]),s("div",kt,[t(h,{class:"me-2",icon:"tabler-trash",size:"22"}),Vt])]),t(g,{color:"primary",class:"mt-11"},{default:l(()=>[L(" Logout ")]),_:1})]),_:1})],64)):z("",!0)}};const zt={key:0,class:"d-flex flex-column h-100"},Ut={class:"active-chat-header d-flex align-center text-medium-emphasis"},St={key:1},It={class:"flex-grow-1 ms-4 overflow-hidden"},At={class:"text-base font-weight-regular"},Dt={class:"d-block text-sm text-truncate text-disabled"},Mt={class:"d-sm-flex align-center d-none"},Nt={key:1,class:"d-flex h-100 align-center justify-center flex-column"},Ot={__name:"chat",setup(x){const n=se(),a=M(),{isLeftSidebarOpen:r}=de(n.smAndDown),{resolveAvatarBadgeVariant:p}=P(),i=S(),d=()=>{const C=i.value.$el||i.value;C.scrollTop=C.scrollHeight},o=S("");ae(o,C=>a.fetchChatsAndContacts(C),{immediate:!0});const f=()=>{n.mdAndUp.value||(r.value=!0)},m=S(""),k=async()=>{!m.value||(await a.sendMsg(m.value),m.value="",Q(()=>{d()}))},N=async C=>{await a.getChat(C),m.value="";const u=a.chatsContacts.find(v=>v.id===C);u&&(u.chat.unseenMsgs=0),n.smAndDown.value&&(r.value=!1),Q(()=>{d()})},O=S(!1),B=S(!1),H=S();return(C,u)=>(c(),y(me,{class:"chat-app-layout bg-surface"},{default:l(()=>[t(q,{modelValue:e(O),"onUpdate:modelValue":u[1]||(u[1]=v=>w(O)?O.value=v:null),temporary:"",touchless:"",absolute:"",class:"user-profile-sidebar",location:"start",width:"370"},{default:l(()=>[t(wt,{onClose:u[0]||(u[0]=v=>O.value=!1)})]),_:1},8,["modelValue"]),t(q,{modelValue:e(B),"onUpdate:modelValue":u[3]||(u[3]=v=>w(B)?B.value=v:null),width:"374",absolute:"",temporary:"",location:"end",touchless:"",class:"active-chat-user-profile-sidebar"},{default:l(()=>[t(He,{onClose:u[2]||(u[2]=v=>B.value=!1)})]),_:1},8,["modelValue"]),t(q,{modelValue:e(r),"onUpdate:modelValue":u[8]||(u[8]=v=>w(r)?r.value=v:null),absolute:"",touchless:"",location:"start",width:"370",temporary:C.$vuetify.display.smAndDown,class:"chat-list-sidebar",permanent:C.$vuetify.display.mdAndUp},{default:l(()=>[t(at,{isDrawerOpen:e(r),"onUpdate:isDrawerOpen":u[4]||(u[4]=v=>w(r)?r.value=v:null),search:e(o),"onUpdate:search":u[5]||(u[5]=v=>w(o)?o.value=v:null),onOpenChatOfContact:N,onShowUserProfile:u[6]||(u[6]=v=>O.value=!0),onClose:u[7]||(u[7]=v=>r.value=!1)},null,8,["isDrawerOpen","search"])]),_:1},8,["modelValue","temporary","permanent"]),t(ue,{class:"chat-content-container"},{default:l(()=>[e(a).activeChat?(c(),_("div",zt,[s("div",Ut,[t(g,{variant:"text",color:"default",icon:"",size:"small",class:"d-md-none me-3",onClick:u[9]||(u[9]=v=>r.value=!0)},{default:l(()=>[t(h,{size:"24",icon:"tabler-menu-2"})]),_:1}),s("div",{class:"d-flex align-center cursor-pointer",onClick:u[10]||(u[10]=v=>B.value=!0)},[t(A,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:e(p)(e(a).activeChat.contact.status),bordered:""},{default:l(()=>[t(U,{size:"40",variant:"tonal",color:e(p)(e(a).activeChat.contact.status),class:"cursor-pointer"},{default:l(()=>[e(a).activeChat.contact.avatar?(c(),y(D,{key:0,src:e(a).activeChat.contact.avatar,alt:e(a).activeChat.contact.fullName},null,8,["src","alt"])):(c(),_("span",St,b(e(R)(e(a).activeChat.contact.fullName)),1))]),_:1},8,["color"])]),_:1},8,["color"]),s("div",It,[s("h6",At,b(e(a).activeChat.contact.fullName),1),s("span",Dt,b(e(a).activeChat.contact.role),1)])]),t(he),s("div",Mt,[t(g,{variant:"text",color:"default",icon:"",size:"small"},{default:l(()=>[t(h,{size:"22",icon:"tabler-phone"})]),_:1}),t(g,{variant:"text",color:"default",icon:"",size:"small"},{default:l(()=>[t(h,{size:"22",icon:"tabler-video"})]),_:1}),t(g,{variant:"text",color:"default",icon:"",size:"small"},{default:l(()=>[t(h,{size:"22",icon:"tabler-search"})]),_:1})]),t(g,{variant:"text",color:"default",icon:"",size:"small"},{default:l(()=>[t(h,{size:"22",icon:"tabler-dots-vertical"}),t(fe,{activator:"parent"},{default:l(()=>[t(pe,null,{default:l(()=>[(c(),_(V,null,I(["View Contact","Mute Notifications","Block Contact","Clear Chat","Report"],(v,T)=>t(ve,{key:T,value:T},{default:l(()=>[t(_e,null,{default:l(()=>[L(b(v),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})]),t(G),t(e(F),{ref_key:"chatLogPS",ref:i,tag:"ul",options:{wheelPropagation:!1},class:"flex-grow-1"},{default:l(()=>[t(nt)]),_:1},512),t(be,{class:"chat-log-message-form mb-5 mx-5",onSubmit:oe(k,["prevent"])},{default:l(()=>{var v;return[(c(),y(Y,{key:(v=e(a).activeChat)==null?void 0:v.contact.id,modelValue:e(m),"onUpdate:modelValue":u[12]||(u[12]=T=>w(m)?m.value=T:null),variant:"solo",class:"chat-message-input",placeholder:"Type your message...",density:"default",autofocus:""},{"append-inner":l(()=>[t(g,{icon:"",size:"small",variant:"text",color:"default"},{default:l(()=>[t(h,{size:"22",icon:"tabler-microphone"})]),_:1}),t(g,{icon:"",size:"small",variant:"text",color:"default",class:"me-4",onClick:u[11]||(u[11]=T=>{var J;return(J=e(H))==null?void 0:J.click()})},{default:l(()=>[t(h,{size:"22",icon:"tabler-link"})]),_:1}),t(g,{onClick:k},{default:l(()=>[L(" Send ")]),_:1})]),_:1},8,["modelValue"])),s("input",{ref_key:"refInputEl",ref:H,type:"file",name:"file",accept:".jpeg,.png,.jpg,GIF",hidden:""},null,512)]}),_:1},8,["onSubmit"])])):(c(),_("div",Nt,[t(U,{size:"109",class:"elevation-3 mb-6 bg-surface"},{default:l(()=>[t(h,{size:"50",class:"rounded-0 text-high-emphasis",icon:"tabler-message"})]),_:1}),s("p",{class:$(["mb-0 px-6 py-1 font-weight-medium text-lg elevation-3 rounded-xl text-high-emphasis bg-surface",[{"cursor-pointer":C.$vuetify.display.smAndDown}]]),onClick:f}," Start Conversation ",2)]))]),_:1})]),_:1}))}};typeof W=="function"&&W(Ot);export{Ot as default};
