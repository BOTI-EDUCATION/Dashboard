import{b0 as m,o as r,b as s,w as a,p as o,V as u,c as g,F as f,a as _,D as d,x as L,t as h}from"./index.822dd088.js";import{V}from"./VMenu.bf630b9b.js";import{V as b,a as v,b as x}from"./VList.f9a3ab4d.js";import{V as C}from"./VBtn.e4d3d498.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.1f71b426.js";import"./VOverlay.7629d092.js";import"./router.80150312.js";import"./lazy.7d584fdc.js";import"./easing.36b781ab.js";import"./VImg.ee928e60.js";import"./dialog-transition.8e07af77.js";import"./index.85e01d0e.js";import"./VAvatar.d8cd070d.js";import"./VDivider.342aecb6.js";import"./position.b45006bd.js";const k={__name:"I18n",props:{languages:{type:Array,required:!0},location:{type:null,required:!1,default:"bottom end"}},emits:["change"],setup(l,{emit:c}){const t=l,{locale:i}=m({useScope:"global"});return(n,p)=>(r(),s(C,{icon:"",variant:"text",color:"default",size:"small"},{default:a(()=>[o(u,{icon:"tabler-language",size:"24"}),o(V,{activator:"parent",location:t.location,offset:"14px"},{default:a(()=>[o(b,{"min-width":"175px"},{default:a(()=>[(r(!0),g(f,null,_(t.languages,e=>(r(),s(v,{key:e.i18nLang,value:e.i18nLang,onClick:I=>{i.value=e.i18nLang,n.$emit("change",e.i18nLang)}},{default:a(()=>[o(x,null,{default:a(()=>[d(L(e.label),1)]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:1})]),_:1},8,["location"])]),_:1}))}},G={__name:"NavBarI18n",setup(l){const{isAppRtl:c}=h(),t=[{label:"English",i18nLang:"en"},{label:"French",i18nLang:"fr"},{label:"Arabic",i18nLang:"ar"}],i=n=>{c.value=n==="ar"};return(n,p)=>(r(),s(k,{languages:t,onChange:i}))}};export{G as default};
