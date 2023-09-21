import{k as f,q as e,o as x,c as w,p as s,w as n,m as t,v as y,x as o,F as C,a as T,D as d,C as v,y as I,bc as B}from"./index.822dd088.js";import{V as N}from"./VNodeRenderer.cb9349dc.js";import{a as O,_ as P}from"./InvoiceSendInvoiceDrawer.baa1c443.js";import{u as $}from"./useInvoiceStore.e6f0c349.js";import{a as g,V as q}from"./VRow.75b352c3.js";import{V as D,c as m}from"./VCard.6b3a5132.js";import{V as h}from"./VDivider.342aecb6.js";import{V as A}from"./VTable.f339ffda.js";import{V as p}from"./VBtn.e4d3d498.js";import"./AppDateTimePicker.07e55e57.js";import"./VField.65a84282.js";import"./index.85e01d0e.js";import"./VInput.aaf7c006.js";import"./router.80150312.js";import"./VImg.ee928e60.js";import"./position.b45006bd.js";import"./easing.36b781ab.js";import"./VSpacer.ab78b571.js";import"./VAvatar.d8cd070d.js";import"./VForm.66ccf6f7.js";import"./forwardRefs.c003b6b8.js";import"./VTextField.763959d6.js";/* empty css                   */import"./VCounter.d040aa04.js";import"./VSelect.5a48ff41.js";import"./VList.f9a3ab4d.js";import"./dialog-transition.8e07af77.js";import"./VMenu.bf630b9b.js";import"./scopeId.1f71b426.js";import"./VOverlay.7629d092.js";import"./lazy.7d584fdc.js";import"./VCheckboxBtn.61076dbe.js";import"./VSelectionControl.e5f30ccf.js";import"./VChip.2126f5c4.js";import"./VTextarea.dfa04ba6.js";import"./VNavigationDrawer.5c59279f.js";import"./ssrBoot.e41710e6.js";const E={key:0},R={class:"ma-sm-4"},j={class:"d-flex align-center mb-6"},U={class:"font-weight-bold text-xl"},W=t("p",{class:"mb-0"}," Office 149, 450 South Brand Brooklyn ",-1),F=t("p",{class:"mb-0"}," San Diego County, CA 91905, USA ",-1),L=t("p",{class:"mb-0"}," +1 (123) 456 7891, +44 (876) 543 2198 ",-1),M={class:"mt-4 ma-sm-4"},Y={class:"font-weight-medium text-xl mb-6"},z={class:"mb-2"},H=t("span",null,"Date Issued: ",-1),J={class:"font-weight-semibold"},Q={class:"mb-2"},G=t("span",null,"Due Date: ",-1),K={class:"font-weight-semibold"},X={class:"ma-sm-4"},Z=t("h6",{class:"text-sm font-weight-semibold mb-3"}," Invoice To: ",-1),tt={class:"mb-1"},st={class:"mb-1"},et={class:"mb-1"},ot={class:"mb-1"},nt={class:"mb-0"},at={class:"mt-4 ma-sm-4"},lt=t("h6",{class:"text-sm font-weight-semibold mb-3"}," Bill To: ",-1),it=t("td",{class:"pe-6"}," Total Due: ",-1),ct=t("td",{class:"pe-6"}," Bank Name: ",-1),rt=t("td",{class:"pe-6"}," Country: ",-1),dt=t("td",{class:"pe-6"}," IBAN: ",-1),mt=t("td",{class:"pe-6"}," SWIFT Code: ",-1),pt=t("thead",null,[t("tr",null,[t("th",{scope:"col"}," ITEM "),t("th",{scope:"col"}," DESCRIPTION "),t("th",{scope:"col",class:"text-center"}," HOURS "),t("th",{scope:"col",class:"text-center"}," QTY "),t("th",{scope:"col",class:"text-center"}," TOTAL ")])],-1),ut={class:"text-no-wrap"},_t={class:"text-no-wrap"},ft={class:"text-center"},ht={class:"text-center"},bt={class:"text-center"},xt=t("div",{class:"my-2 mx-sm-4"},[t("div",{class:"d-flex align-center mb-1"},[t("h6",{class:"text-sm font-weight-semibold me-1"}," Salesperson: "),t("span",null,"Jenny Parker")]),t("p",null,"Thanks for your business")],-1),wt=t("div",{class:"my-2 mx-sm-4"},[t("table",null,[t("tr",null,[t("td",{class:"text-end"},[t("div",{class:"me-5"},[t("p",{class:"mb-2"}," Subtotal: "),t("p",{class:"mb-2"}," Discount: "),t("p",{class:"mb-2"}," Tax: "),t("p",{class:"mb-2"}," Total: ")])]),t("td",{class:"font-weight-semibold"},[t("p",{class:"mb-2"}," $154.25 "),t("p",{class:"mb-2"}," $00.00 "),t("p",{class:"mb-2"}," $50.00 "),t("p",{class:"mb-2"}," $204.25 ")])])])],-1),yt=t("div",{class:"d-flex mx-sm-4"},[t("h6",{class:"text-sm font-weight-semibold me-1"}," Note: "),t("span",null,"It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!")],-1),as={__name:"[id]",setup(vt){const k=$(),b=B(),l=f(),c=f(),u=f(!1),_=f(!1);k.fetchInvoice(Number(b.params.id)).then(r=>{l.value=r.data.invoice,c.value=r.data.paymentDetails}).catch(r=>{console.log(r)});const V=[{name:"Premium Branding Package",description:"Branding & Promotion",qty:1,hours:15,price:32},{name:"SMM",description:"Social media templates",qty:1,hours:14,price:28},{name:"Web Design",description:"Web designing package",qty:1,hours:12,price:24},{name:"SEO",description:"Search engine optimization",qty:1,hours:5,price:22}],S=()=>{window.print()};return(r,i)=>e(l)?(x(),w("section",E,[s(q,null,{default:n(()=>[s(g,{cols:"12",md:"9"},{default:n(()=>[s(D,null,{default:n(()=>[s(m,{class:"d-flex flex-wrap justify-space-between flex-column flex-sm-row print-row"},{default:n(()=>[t("div",R,[t("div",j,[s(e(N),{nodes:e(y).app.logo,class:"me-3"},null,8,["nodes"]),t("h6",U,o(e(y).app.title),1)]),W,F,L]),t("div",M,[t("h6",Y," Invoice #"+o(e(l).id),1),t("p",z,[H,t("span",J,o(e(l).issuedDate),1)]),t("p",Q,[G,t("span",K,o(e(l).dueDate),1)])])]),_:1}),s(h),s(m,{class:"d-flex justify-space-between flex-wrap flex-column flex-sm-row print-row"},{default:n(()=>[t("div",X,[Z,t("p",tt,o(e(l).client.name),1),t("p",st,o(e(l).client.company),1),t("p",et,o(e(l).client.address)+", "+o(e(l).client.country),1),t("p",ot,o(e(l).client.contact),1),t("p",nt,o(e(l).client.companyEmail),1)]),t("div",at,[lt,t("table",null,[t("tr",null,[it,t("td",null,o(e(c).totalDue),1)]),t("tr",null,[ct,t("td",null,o(e(c).bankName),1)]),t("tr",null,[rt,t("td",null,o(e(c).country),1)]),t("tr",null,[dt,t("td",null,o(e(c).iban),1)]),t("tr",null,[mt,t("td",null,o(e(c).swiftCode),1)])])])]),_:1}),s(h),s(A,null,{default:n(()=>[pt,t("tbody",null,[(x(),w(C,null,T(V,a=>t("tr",{key:a.name},[t("td",ut,o(a.name),1),t("td",_t,o(a.description),1),t("td",ft,o(a.hours),1),t("td",ht,o(a.qty),1),t("td",bt," $"+o(a.price),1)])),64))])]),_:1}),s(h,{class:"my-2"}),s(m,{class:"d-flex justify-space-between flex-column flex-sm-row print-row"},{default:n(()=>[xt,wt]),_:1}),s(h),s(m,null,{default:n(()=>[yt]),_:1})]),_:1})]),_:1}),s(g,{cols:"12",md:"3",class:"d-print-none"},{default:n(()=>[s(D,null,{default:n(()=>[s(m,null,{default:n(()=>[s(p,{block:"","prepend-icon":"tabler-send",class:"mb-2",onClick:i[0]||(i[0]=a=>_.value=!0)},{default:n(()=>[d(" Send Invoice ")]),_:1}),s(p,{block:"",variant:"tonal",color:"secondary",class:"mb-2"},{default:n(()=>[d(" Download ")]),_:1}),s(p,{block:"",variant:"tonal",color:"secondary",class:"mb-2",onClick:S},{default:n(()=>[d(" Print ")]),_:1}),s(p,{block:"",color:"secondary",variant:"tonal",class:"mb-2",to:{name:"apps-invoice-edit-id",params:{id:e(b).params.id}}},{default:n(()=>[d(" Edit Invoice ")]),_:1},8,["to"]),s(p,{block:"","prepend-icon":"tabler-currency-dollar",onClick:i[1]||(i[1]=a=>u.value=!0)},{default:n(()=>[d(" Add Payment ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(O,{isDrawerOpen:e(u),"onUpdate:isDrawerOpen":i[2]||(i[2]=a=>v(u)?u.value=a:null)},null,8,["isDrawerOpen"]),s(P,{isDrawerOpen:e(_),"onUpdate:isDrawerOpen":i[3]||(i[3]=a=>v(_)?_.value=a:null)},null,8,["isDrawerOpen"])])):I("",!0)}};export{as as default};
