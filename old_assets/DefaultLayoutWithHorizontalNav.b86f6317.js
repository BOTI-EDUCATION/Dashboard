import{_ as b}from"./TheCustomizer.0c5b854c.js";import{o as n,c as _,F as w,a as k,b as f,e as $,_ as C,f as z,g as N,i as V,j as I,k as L,l as R,m as o,n as c,p as e,q as t,s as h,t as S,w as r,v as y,x as B,T,r as g}from"./index.e6050e69.js";import x from"./Footer.0e3d6fa0.js";import E from"./NavbarThemeSwitcher.acdabe2d.js";import{V as W}from"./VNodeRenderer.79281b2a.js";import{V as q}from"./VSpacer.6a975bf7.js";import"./VDivider.0c479dd1.js";import"./index.1b0e53dd.js";import"./VBtn.3dc08b52.js";import"./router.85b82a14.js";import"./position.c703d118.js";import"./VRadioGroup.fad9a28e.js";import"./VSelectionControl.76c19d18.js";import"./VInput.94131958.js";import"./VImg.ededc02c.js";import"./VSwitch.f440cc4b.js";import"./VRow.291b6fb8.js";import"./VSelect.ab9d8e67.js";import"./VTextField.434ecef9.js";/* empty css                   */import"./VField.6b9f2954.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.c0e5ea63.js";import"./VList.e3ec73d9.js";import"./VAvatar.521a73f7.js";import"./dialog-transition.926fb05a.js";import"./VMenu.87e6a729.js";import"./scopeId.cae28892.js";import"./VOverlay.e8cdaaef.js";import"./lazy.163ddcb2.js";import"./VCheckboxBtn.2baae432.js";import"./VChip.5e312822.js";import"./VNavigationDrawer.fb9b8c6a.js";import"./ssrBoot.b248f87c.js";const D={class:"nav-items"},F={__name:"HorizontalNav",props:{navItems:{type:null,required:!0}},setup(p){const i=l=>"children"in l?C:z;return(l,u)=>(n(),_("ul",D,[(n(!0),_(w,null,k(p.navItems,(a,m)=>(n(),f($(i(a)),{key:m,item:a},null,8,["item"]))),128))]))}},H={class:"layout-navbar"},j={class:"navbar-content-container"},P={class:"layout-horizontal-nav"},Y={class:"horizontal-nav-content-container"},A={class:"layout-page-content"},G={class:"layout-footer"},J={class:"footer-content-container"},K={__name:"HorizontalNavLayout",props:{navItems:{type:null,required:!0}},setup(p){const{y:i}=N(),{width:l}=V(),u=I(),a=L(!1);u.beforeEach(()=>{a.value=!0}),u.afterEach(()=>{a.value=!1});const{_layoutClasses:m,isNavbarBlurEnabled:d}=R();return(s,v)=>(n(),_("div",{class:h(["layout-wrapper",t(m)(t(l),t(i))])},[o("div",{class:h(["layout-navbar-and-nav-container",t(d)&&"header-blur"])},[o("div",H,[o("div",j,[c(s.$slots,"navbar")])]),o("div",P,[o("div",Y,[e(t(F),{"nav-items":p.navItems},null,8,["nav-items"])])])],2),o("main",A,[s.$slots["content-loading"]?(n(),_(w,{key:0},[t(a)?c(s.$slots,"content-loading",{key:0}):c(s.$slots,"default",{key:1})],64)):c(s.$slots,"default",{key:1})]),o("footer",G,[o("div",J,[c(s.$slots,"footer")])])],2))}},M=[{title:"Inscriptions",icon:{icon:"tabler-user"},to:"analytics-inscriptions"}],O=[...M],Q={class:"app-title font-weight-bold leading-normal text-xl"},Bt={__name:"DefaultLayoutWithHorizontalNav",setup(p){const{appRouteTransition:i}=S();return(l,u)=>{const a=g("RouterLink"),m=g("RouterView"),d=b;return n(),f(t(K),{"nav-items":t(O)},{navbar:r(()=>[e(a,{to:"/",class:"app-logo d-flex align-center gap-x-3"},{default:r(()=>[e(t(W),{nodes:t(y).app.logo},null,8,["nodes"]),o("h1",Q,B(t(y).app.title),1)]),_:1}),e(q),e(E)]),footer:r(()=>[e(x)]),default:r(()=>[e(m,null,{default:r(({Component:s,route:v})=>[e(T,{name:t(i),mode:"out-in"},{default:r(()=>[(n(),f($(s),{key:v.path}))]),_:2},1032,["name"])]),_:1}),e(d)]),_:1},8,["nav-items"])}}};export{Bt as default};