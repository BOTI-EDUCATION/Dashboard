import{b1 as m,o as r,b as s,w as a,p as o,V as u,c as g,F as f,a as _,D as d,x as L,t as h}from"./index.bb11c4a0.js";import{V}from"./VMenu.20a9d99a.js";import{V as b,a as v,b as x}from"./VList.46357442.js";import{V as C}from"./VBtn.ce311982.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.c2c81749.js";import"./VOverlay.729c1a86.js";import"./router.f40f8152.js";import"./lazy.e0cc424a.js";import"./easing.36b781ab.js";import"./VImg.34958778.js";import"./dialog-transition.d8219c0c.js";import"./index.7ea337b7.js";import"./VAvatar.8f37845b.js";import"./VDivider.03393ba8.js";import"./position.0d284abb.js";const k={__name:"I18n",props:{languages:{type:Array,required:!0},location:{type:null,required:!1,default:"bottom end"}},emits:["change"],setup(l,{emit:c}){const t=l,{locale:i}=m({useScope:"global"});return(n,p)=>(r(),s(C,{icon:"",variant:"text",color:"default",size:"small"},{default:a(()=>[o(u,{icon:"tabler-language",size:"24"}),o(V,{activator:"parent",location:t.location,offset:"14px"},{default:a(()=>[o(b,{"min-width":"175px"},{default:a(()=>[(r(!0),g(f,null,_(t.languages,e=>(r(),s(v,{key:e.i18nLang,value:e.i18nLang,onClick:I=>{i.value=e.i18nLang,n.$emit("change",e.i18nLang)}},{default:a(()=>[o(x,null,{default:a(()=>[d(L(e.label),1)]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:1})]),_:1},8,["location"])]),_:1}))}},G={__name:"NavBarI18n",setup(l){const{isAppRtl:c}=h(),t=[{label:"English",i18nLang:"en"},{label:"French",i18nLang:"fr"},{label:"Arabic",i18nLang:"ar"}],i=n=>{c.value=n==="ar"};return(n,p)=>(r(),s(k,{languages:t,onChange:i}))}};export{G as default};