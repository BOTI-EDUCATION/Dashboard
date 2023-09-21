import{V as P}from"./index.140e4203.js";import{af as $,an as F,X as ee,aD as te,aE as le,k as b,A as h,aj as C,aM as ae,O as ne,a1 as se,p as m,V as H,aY as ue}from"./index.096e80e5.js";import{m as oe,u as ie}from"./VBtn.bb0efe4e.js";function G(n){const i=Math.abs(n);return Math.sign(n)*(i/((1/.501-2)*(1-i)+1))}function L(n){let{selectedElement:f,containerSize:i,contentSize:r,isRtl:S,currentScrollOffset:a,isHorizontal:s}=n;const t=s?f.clientWidth:f.clientHeight,u=s?f.offsetLeft:f.offsetTop,c=S&&s?r-u-t:u,o=i+a,g=t+c,x=t*.4;return c<=a?a=Math.max(c-x,0):o<=g&&(a=Math.min(a-(o-g-x),r-i)),a}function re(n){let{selectedElement:f,containerSize:i,contentSize:r,isRtl:S,isHorizontal:a}=n;const s=a?f.clientWidth:f.clientHeight,t=a?f.offsetLeft:f.offsetTop,u=S&&a?r-t-s/2-i/2:t+s/2-i/2;return Math.min(r-i,Math.max(0,u))}const ce=Symbol.for("vuetify:v-slide-group"),pe=$()({name:"VSlideGroup",props:{centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:ce},nextIcon:{type:F,default:"$next"},prevIcon:{type:F,default:"$prev"},showArrows:{type:[Boolean,String],validator:n=>typeof n=="boolean"||["always","desktop","mobile"].includes(n)},...ee(),...oe({selectedClass:"v-slide-group-item--active"})},emits:{"update:modelValue":n=>!0},setup(n,f){let{slots:i}=f;const{isRtl:r}=te(),{mobile:S}=le(),a=ie(n,n.symbol),s=b(!1),t=b(0),u=b(0),c=b(0),o=h(()=>n.direction==="horizontal"),{resizeRef:g,contentRect:x}=C(),{resizeRef:v,contentRect:O}=C(),M=h(()=>a.selected.value.length?a.items.value.findIndex(e=>e.id===a.selected.value[0]):-1),X=h(()=>a.selected.value.length?a.items.value.findIndex(e=>e.id===a.selected.value[a.selected.value.length-1]):-1);if(ae){let e=-1;ne(()=>[a.selected.value,x.value,O.value,o.value],()=>{cancelAnimationFrame(e),e=requestAnimationFrame(()=>{if(x.value&&O.value){const l=o.value?"width":"height";u.value=x.value[l],c.value=O.value[l],s.value=u.value+1<c.value}if(M.value>=0&&v.value){const l=v.value.children[X.value];M.value===0||!s.value?t.value=0:n.centerActive?t.value=re({selectedElement:l,containerSize:u.value,contentSize:c.value,isRtl:r.value,isHorizontal:o.value}):s.value&&(t.value=L({selectedElement:l,containerSize:u.value,contentSize:c.value,isRtl:r.value,currentScrollOffset:t.value,isHorizontal:o.value}))}})})}const k=b(!1);let V=0,_=0;function Y(e){const l=o.value?"clientX":"clientY";_=(r.value&&o.value?-1:1)*t.value,V=e.touches[0][l],k.value=!0}function B(e){if(!s.value)return;const l=o.value?"clientX":"clientY",d=r.value&&o.value?-1:1;t.value=d*(_+V-e.touches[0][l])}function D(e){const l=c.value-u.value;t.value<0||!s.value?t.value=0:t.value>=l&&(t.value=l),k.value=!1}function N(){!g.value||(g.value[o.value?"scrollLeft":"scrollTop"]=0)}const A=b(!1);function W(e){if(A.value=!0,!(!s.value||!v.value)){for(const l of e.composedPath())for(const d of v.value.children)if(d===l){t.value=L({selectedElement:d,containerSize:u.value,contentSize:c.value,isRtl:r.value,currentScrollOffset:t.value,isHorizontal:o.value});return}}}function j(e){A.value=!1}function q(e){var l;!A.value&&!(e.relatedTarget&&(l=v.value)!=null&&l.contains(e.relatedTarget))&&p()}function K(e){!v.value||(o.value?e.key==="ArrowRight"?p(r.value?"prev":"next"):e.key==="ArrowLeft"&&p(r.value?"next":"prev"):e.key==="ArrowDown"?p("next"):e.key==="ArrowUp"&&p("prev"),e.key==="Home"?p("first"):e.key==="End"&&p("last"))}function p(e){if(!!v.value)if(e){if(e==="next"){var d;const y=(d=v.value.querySelector(":focus"))==null?void 0:d.nextElementSibling;y?y.focus():p("first")}else if(e==="prev"){var z;const y=(z=v.value.querySelector(":focus"))==null?void 0:z.previousElementSibling;y?y.focus():p("last")}else if(e==="first"){var w;(w=v.value.firstElementChild)==null||w.focus()}else if(e==="last"){var E;(E=v.value.lastElementChild)==null||E.focus()}}else{var l;(l=[...v.value.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter(Z=>!Z.hasAttribute("disabled"))[0])==null||l.focus()}}function R(e){const l=t.value+(e==="prev"?-1:1)*u.value;t.value=ue(l,0,c.value-u.value)}const U=h(()=>{let e=t.value>c.value-u.value?-(c.value-u.value)+G(c.value-u.value-t.value):-t.value;t.value<=0&&(e=G(-t.value));const l=r.value&&o.value?-1:1;return{transform:`translate${o.value?"X":"Y"}(${l*e}px)`,transition:k.value?"none":"",willChange:k.value?"transform":""}}),T=h(()=>({next:a.next,prev:a.prev,select:a.select,isSelected:a.isSelected})),I=h(()=>{switch(n.showArrows){case"always":return!0;case"desktop":return!S.value;case!0:return s.value||Math.abs(t.value)>0;case"mobile":return S.value||s.value||Math.abs(t.value)>0;default:return!S.value&&(s.value||Math.abs(t.value)>0)}}),J=h(()=>Math.abs(t.value)>0),Q=h(()=>c.value>Math.abs(t.value)+u.value);return se(()=>{var e,l,d;return m(n.tag,{class:["v-slide-group",{"v-slide-group--vertical":!o.value,"v-slide-group--has-affixes":I.value,"v-slide-group--is-overflowing":s.value}],tabindex:A.value||a.selected.value.length?-1:0,onFocus:q},{default:()=>{var z,w;return[I.value&&m("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!J.value}],onClick:()=>R("prev")},[(z=(e=i.prev)==null?void 0:e.call(i,T.value))!=null?z:m(P,null,{default:()=>[m(H,{icon:r.value?n.nextIcon:n.prevIcon},null)]})]),m("div",{key:"container",ref:g,class:"v-slide-group__container",onScroll:N},[m("div",{ref:v,class:"v-slide-group__content",style:U.value,onTouchstartPassive:Y,onTouchmovePassive:B,onTouchendPassive:D,onFocusin:W,onFocusout:j,onKeydown:K},[(l=i.default)==null?void 0:l.call(i,T.value)])]),I.value&&m("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!Q.value}],onClick:()=>R("next")},[(w=(d=i.next)==null?void 0:d.call(i,T.value))!=null?w:m(P,null,{default:()=>[m(H,{icon:r.value?n.prevIcon:n.nextIcon},null)]})])]}})}),{selected:a.selected,scrollTo:R,scrollOffset:t,focus:p}}});export{pe as V,ce as a};
