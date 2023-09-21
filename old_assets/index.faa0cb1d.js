import{_ as w}from"./AppSearchHeader.6b255045.js";import{a as g,V as f}from"./VRow.af24397e.js";import{V as k,c as i}from"./VCard.6e17e770.js";import{V as $}from"./VImg.34958778.js";import{V as b}from"./VBtn.ce311982.js";import{o,b as m,w as t,p as e,c as d,F as C,a as V,m as s,x as h,D as n,K as A,r as B,k as L,q as _,y as H,b6 as D}from"./index.bb11c4a0.js";import{V as K}from"./VAvatar.8f37845b.js";import"./VTextField.bd2cab46.js";/* empty css                   */import"./VField.2902781c.js";import"./index.7ea337b7.js";import"./VInput.022d9e09.js";import"./router.f40f8152.js";import"./position.0d284abb.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.7daf2bc1.js";const N={class:"text-h6 my-3"},v={__name:"HelpCenterLandingArticlesOverview",props:{articles:{type:Array,required:!0}},setup(p){const a=p;return(y,c)=>(o(),m(f,null,{default:t(()=>[e(g,{cols:"12",lg:"10",class:"mx-auto mb-8"},{default:t(()=>[e(f,null,{default:t(()=>[(o(!0),d(C,null,V(a.articles,r=>(o(),m(g,{key:r.title,cols:"12",md:"4"},{default:t(()=>[e(k,{flat:"",border:""},{default:t(()=>[e(i,{class:"text-center"},{default:t(()=>[e($,{src:r.img,"aspect-ratio":"1",width:"58",class:"mx-auto"},null,8,["src"]),s("h6",N,h(r.title),1),s("p",null,h(r.subtitle),1),e(b,{size:"small",variant:"tonal",to:{name:"pages-help-center-category-subcategory-article",params:{category:"getting-started",subcategory:"account",article:"changing-your-username"}}},{default:t(()=>[n(" Read More ")]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}))}},R={},q={class:"bg-var-theme-background py-12"},F=s("h5",{class:"text-h5 text-center mb-6"}," Still need help? ",-1),S=s("p",null,[n(" Our specialists are always happy to help. Contact us during standard business hours or email us "),s("br"),n(" 24/7 and we'll get back to you. ")],-1),I={class:"d-flex justify-center gap-4 flex-wrap"};function O(p,a){return o(),d("div",q,[e(i,{class:"text-center py-6"},{default:t(()=>[F,S,s("div",I,[e(b,null,{default:t(()=>[n("Visit our community")]),_:1}),e(b,null,{default:t(()=>[n("Contact us")]),_:1})])]),_:1})])}const T=A(R,[["render",O]]),j={class:"ps-6",style:{"list-style":"disc"}},z={class:"mt-4"},E={__name:"HelpCenterLandingKnowledgeBase",props:{categories:{type:Array,required:!0}},setup(p){const a=p,y=c=>c.subCategories.map(r=>r.articles.length).reduce((r,u)=>r+u,0);return(c,r)=>{const u=B("RouterLink");return o(),m(f,null,{default:t(()=>[e(g,{cols:"12",lg:"10",class:"mx-auto mb-8"},{default:t(()=>[e(f,null,{default:t(()=>[(o(!0),d(C,null,V(a.categories,l=>(o(),m(g,{key:l.title,cols:"12",sm:"6",md:"4"},{default:t(()=>[e(k,{title:l.title},{prepend:t(()=>[e(K,{icon:l.icon,rounded:"",color:l.avatarColor,variant:"tonal"},null,8,["icon","color"])]),default:t(()=>[e(i,null,{default:t(()=>[s("ul",j,[(o(!0),d(C,null,V(l.subCategories,x=>(o(),d("li",{key:x.title,class:"text-primary mb-2"},[e(u,{to:{name:"pages-help-center-category-subcategory",params:{category:l.slug,subcategory:x.slug}}},{default:t(()=>[n(h(x.title),1)]),_:2},1032,["to"])]))),128))]),s("div",z,[e(u,{to:{name:"pages-help-center-category-subcategory",params:{category:l.slug,subcategory:l.subCategories[0].slug}},class:"text-base font-weight-semibold"},{default:t(()=>[n(h(y(l))+" articles ",1)]),_:2},1032,["to"])])]),_:2},1024)]),_:2},1032,["title"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})}}},M=s("h5",{class:"text-h5 text-center my-6"}," Popular Articles ",-1),P=s("h5",{class:"text-h5 text-center my-6"}," Knowledge Base ",-1),G=s("h5",{class:"text-h5 text-center my-6"}," Keep Learning ",-1),ie={__name:"index",setup(p){const a=L();return(()=>D.get("/pages/help-center/landing").then(c=>{a.value=c.data}))(),(c,r)=>{const u=w;return _(a)?(o(),m(k,{key:0},{default:t(()=>[e(u,{title:"Hello, how can we help?",subtitle:"Common troubleshooting topics: eCommerce, Blogging to payment","custom-class":"rounded-0"}),e(i,{class:"py-12"},{default:t(()=>[M,e(v,{articles:_(a).popularArticles},null,8,["articles"])]),_:1}),s("div",null,[e(i,{class:"bg-var-theme-background py-12"},{default:t(()=>[P,e(E,{categories:_(a).categories},null,8,["categories"])]),_:1})]),e(i,{class:"py-12"},{default:t(()=>[G,e(v,{articles:_(a).keepLearning},null,8,["articles"])]),_:1}),e(T)]),_:1})):H("",!0)}}};export{ie as default};
