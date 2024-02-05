import{K as N,d3 as P,k as y,bk as f,O as A,al as O,o as l,b as g,w as t,p as a,q as r,C as j,cO as I,V as u,m as n,P as E,G as C,c as d,F as b,a as x,D as B,x as V,n as D,H as w,y as z,b8 as G,b9 as H}from"./index.096e80e5.js";import{V as X,c as $}from"./VCard.02ead318.js";import{V as J}from"./VTextField.d1564acf.js";import{V as L}from"./VBtn.bb0efe4e.js";import{V as W}from"./VDivider.ecbdc3f7.js";import{V as R,d as Y,a as K,b as Z}from"./VList.6e549209.js";import{V as ee,a as se}from"./VRow.86930b01.js";import{V as te}from"./VDialog.8736ad25.js";import"./VAvatar.b0b1a1e5.js";import"./router.0ecb67ce.js";import"./VImg.489e5981.js";import"./position.5411af0b.js";/* empty css                   */import"./VField.82ea56ac.js";import"./index.140e4203.js";import"./VInput.34fa8dcc.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.e1af49ba.js";import"./scopeId.0ed33173.js";import"./VOverlay.5268d4d1.js";import"./lazy.5faedddf.js";import"./dialog-transition.fccdf0ea.js";const ae=m=>(G("data-v-dd687002"),m=m(),H(),m),re={class:"d-flex align-center"},le={class:"h-100"},oe={class:"text-xs text-disabled text-uppercase"},ie={class:"h-100"},ne={class:"app-bar-search-suggestions d-flex flex-column align-center justify-center text-high-emphasis h-100"},ce={class:"text-h6 my-3"},ue={key:0,class:"mt-8"},de=ae(()=>n("span",{class:"d-flex justify-center text-disabled"},"Try searching for",-1)),pe=["onClick"],he={class:"text-sm"},fe={__name:"AppBarSearch",props:{isDialogVisible:{type:Boolean,required:!0},searchQuery:{type:String,required:!0},searchResults:{type:Array,required:!0},suggestions:{type:Array,required:!1},noDataSuggestion:{type:Array,required:!1}},emits:["update:isDialogVisible","update:searchQuery","itemSelected"],setup(m,{emit:_}){const o=m,{ctrl_k:Q,meta_k:T}=P(),k=y(),i=y(structuredClone(f(o.searchQuery))),q=y(),S=y(structuredClone(f(o.isDialogVisible))),p=y(structuredClone(f(o.searchResults)));A(o,()=>{S.value=structuredClone(f(o.isDialogVisible)),p.value=structuredClone(f(o.searchResults)),i.value=structuredClone(f(o.searchQuery))}),A([Q,T],()=>{S.value=!0,_("update:isDialogVisible",!0)});const v=()=>{_("update:isDialogVisible",!1),_("update:searchQuery","")};O(()=>{i.value.length||(p.value=[])});const F=e=>{var c,s;e.key==="ArrowDown"?(e.preventDefault(),(c=k.value)==null||c.focus("next")):e.key==="ArrowUp"&&(e.preventDefault(),(s=k.value)==null||s.focus("prev"))},U=e=>{_("update:isDialogVisible",e),_("update:searchQuery","")},M=e=>e==="dashboards"?"Dashboards":e==="appsPages"?"Apps & Pages":e==="userInterface"?"User Interface":e==="formsTables"?"Forms Tables":e==="chartsMisc"?"Charts Misc":"Misc";return(e,c)=>(l(),g(te,{"max-width":"600","model-value":r(S),height:e.$vuetify.display.smAndUp?"550":"100%",fullscreen:e.$vuetify.display.width<600,class:"app-bar-search-dialog","onUpdate:modelValue":U,onKeyup:I(v,["esc"])},{default:t(()=>[a(X,{height:"100%",width:"100%",class:"position-relative"},{default:t(()=>[a($,{class:"pt-1",style:{"max-height":"65px"}},{default:t(()=>[a(J,{ref_key:"refSearchInput",ref:q,modelValue:r(i),"onUpdate:modelValue":[c[0]||(c[0]=s=>j(i)?i.value=s:null),c[1]||(c[1]=s=>e.$emit("update:searchQuery",r(i)))],autofocus:"",variant:"plain",density:"comfortable",class:"app-bar-autocomplete-box",onKeyup:I(v,["esc"]),onKeydown:F},{"prepend-inner":t(()=>[a(L,{icon:"",variant:"text",color:"default",size:"x-small",class:"text-high-emphasis ms-n1"},{default:t(()=>[a(u,{size:"22",icon:"tabler-search"})]),_:1})]),"append-inner":t(()=>[n("div",re,[n("div",{class:"text-base text-disabled cursor-pointer me-2",onClick:v}," [esc] "),a(L,{icon:"",variant:"text",color:"default",size:"x-small",onClick:v},{default:t(()=>[a(u,{size:"22",icon:"tabler-x"})]),_:1})])]),_:1},8,["modelValue","onKeyup"])]),_:1}),a(W),a(r(E),{options:{wheelPropagation:!1,suppressScrollX:!0},class:"h-100"},{default:t(()=>[C(a(r(R),{ref_key:"refSearchList",ref:k,density:"compact",class:"app-bar-search-list"},{default:t(()=>[(l(!0),d(b,null,x(r(p),s=>(l(),d(b,{key:s.title},["header"in s?(l(),g(r(Y),{key:0,class:"text-disabled"},{default:t(()=>[B(V(M(s.title)),1)]),_:2},1024)):D(e.$slots,"searchResult",{key:1,item:s},()=>[a(r(K),{link:"",onClick:h=>e.$emit("itemSelected",s)},{prepend:t(()=>[a(u,{size:"20",icon:s.icon,class:"me-3"},null,8,["icon"])]),append:t(()=>[a(u,{size:"20",icon:"tabler-corner-down-left",class:"enter-icon text-disabled"})]),default:t(()=>[a(Z,null,{default:t(()=>[B(V(s.title),1)]),_:2},1024)]),_:2},1032,["onClick"])],!0)],64))),128))]),_:3},512),[[w,r(i).length&&!!r(p).length]]),C(n("div",le,[D(e.$slots,"suggestions",{},()=>[a($,{class:"app-bar-search-suggestions h-100 pa-10"},{default:t(()=>[o.suggestions?(l(),g(ee,{key:0,class:"gap-y-4"},{default:t(()=>[(l(!0),d(b,null,x(o.suggestions,s=>(l(),g(se,{key:s.title,cols:"12",sm:"6",class:"ps-6"},{default:t(()=>[n("p",oe,V(s.title),1),a(r(R),{class:"card-list"},{default:t(()=>[(l(!0),d(b,null,x(s.content,h=>(l(),g(r(K),{key:h.title,link:"",title:h.title,class:"app-bar-search-suggestion",onClick:me=>e.$emit("itemSelected",h)},{prepend:t(()=>[a(u,{icon:h.icon,size:"20",class:"me-2"},null,8,["icon"])]),_:2},1032,["title","onClick"]))),128))]),_:2},1024)]),_:2},1024))),128))]),_:1})):z("",!0)]),_:1})],!0)],512),[[w,!!r(p)&&!r(i)]]),C(n("div",ie,[D(e.$slots,"noData",{},()=>[a($,{class:"h-100"},{default:t(()=>[n("div",ne,[a(u,{size:"75",icon:"tabler-file-x"}),n("h6",ce,' No Result For "'+V(r(i))+'" ',1),o.noDataSuggestion?(l(),d("div",ue,[de,(l(!0),d(b,null,x(o.noDataSuggestion,s=>(l(),d("h6",{key:s.title,class:"app-bar-search-suggestion text-sm font-weight-regular cursor-pointer mt-3",onClick:h=>e.$emit("itemSelected",s)},[a(u,{size:"20",icon:s.icon,class:"me-3"},null,8,["icon"]),n("span",he,V(s.title),1)],8,pe))),128))])):z("",!0)])]),_:1})],!0)],512),[[w,!r(p).length&&r(i).length]])]),_:3})]),_:3})]),_:3},8,["model-value","height","fullscreen","onKeyup"]))}},Fe=N(fe,[["__scopeId","data-v-dd687002"]]);export{Fe as default};