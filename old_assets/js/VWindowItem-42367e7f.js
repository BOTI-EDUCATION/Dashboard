import{cT as X,af as V,X as W,Y as M,Z as A,aD as P,at as G,k as T,A as h,O,p as m,a1 as Y,G as I,ao as j,a5 as D,Q as z,a6 as F,H as Q,ak as B,am as U}from"./index-5b2e12ce.js";import{u as Z,V as E,b as q,c as J}from"./VBtn-9b2206a8.js";import{m as K,u as N}from"./lazy-84d4a476.js";import{M as p}from"./VImg-35a07238.js";import{u as ee}from"./ssrBoot-6f94db5f.js";const te=e=>{const{touchstartX:n,touchendX:o,touchstartY:t,touchendY:a}=e,u=.5,s=16;e.offsetX=o-n,e.offsetY=a-t,Math.abs(e.offsetY)<u*Math.abs(e.offsetX)&&(e.left&&o<n-s&&e.left(e),e.right&&o>n+s&&e.right(e)),Math.abs(e.offsetX)<u*Math.abs(e.offsetY)&&(e.up&&a<t-s&&e.up(e),e.down&&a>t+s&&e.down(e))};function ne(e,n){var o;const t=e.changedTouches[0];n.touchstartX=t.clientX,n.touchstartY=t.clientY,(o=n.start)==null||o.call(n,{originalEvent:e,...n})}function oe(e,n){var o;const t=e.changedTouches[0];n.touchendX=t.clientX,n.touchendY=t.clientY,(o=n.end)==null||o.call(n,{originalEvent:e,...n}),te(n)}function se(e,n){var o;const t=e.changedTouches[0];n.touchmoveX=t.clientX,n.touchmoveY=t.clientY,(o=n.move)==null||o.call(n,{originalEvent:e,...n})}function ae(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:o=>ne(o,n),touchend:o=>oe(o,n),touchmove:o=>se(o,n)}}function ie(e,n){var d,l;var o;const t=n.value,a=t!=null&&t.parent?e.parentElement:e,u=(d=t==null?void 0:t.options)!=null?d:{passive:!0},s=(o=n.instance)==null?void 0:o.$.uid;if(!a||!s)return;const v=ae(n.value);a._touchHandlers=(l=a._touchHandlers)!=null?l:Object.create(null),a._touchHandlers[s]=v,X(v).forEach(g=>{a.addEventListener(g,v[g],u)})}function ue(e,n){var o,t;const a=(o=n.value)!=null&&o.parent?e.parentElement:e,u=(t=n.instance)==null?void 0:t.$.uid;if(!(a!=null&&a._touchHandlers)||!u)return;const s=a._touchHandlers[u];X(s).forEach(v=>{a.removeEventListener(v,s[v])}),delete a._touchHandlers[u]}const S={mounted:ie,unmounted:ue},le=S,H=Symbol.for("vuetify:v-window"),k=Symbol.for("vuetify:v-window-group"),he=V()({name:"VWindow",directives:{Touch:S},props:{continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{default:"force"},...W(),...M()},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:o}=n;const{themeClasses:t}=A(e),{isRtl:a}=P(),{t:u}=G(),s=Z(e,k),v=T(),d=h(()=>a.value?!e.reverse:e.reverse),l=T(!1),g=h(()=>{const i=e.direction==="vertical"?"y":"x",f=(d.value?!l.value:l.value)?"-reverse":"";return`v-window-${i}${f}-transition`}),w=T(0),_=T(void 0),y=h(()=>s.items.value.findIndex(i=>s.selected.value.includes(i.id)));O(y,(i,r)=>{const f=s.items.value.length,C=f-1;f<=2?l.value=i<r:i===C&&r===0?l.value=!0:i===0&&r===C?l.value=!1:l.value=i<r}),D(H,{transition:g,isReversed:l,transitionCount:w,transitionHeight:_,rootRef:v});const c=h(()=>e.continuous||y.value!==0),b=h(()=>e.continuous||y.value!==s.items.value.length-1);function $(){c.value&&s.prev()}function x(){b.value&&s.next()}const L=h(()=>{const i=[],r={icon:a.value?e.nextIcon:e.prevIcon,class:`v-window__${d.value?"right":"left"}`,onClick:s.prev,ariaLabel:u("$vuetify.carousel.prev")};i.push(c.value?o.prev?o.prev({props:r}):m(E,r,null):m("div",null,null));const f={icon:a.value?e.prevIcon:e.nextIcon,class:`v-window__${d.value?"left":"right"}`,onClick:s.next,ariaLabel:u("$vuetify.carousel.next")};return i.push(b.value?o.next?o.next({props:f}):m(E,f,null):m("div",null,null)),i}),R=h(()=>e.touch===!1?e.touch:{...{left:()=>{d.value?$():x()},right:()=>{d.value?x():$()},start:r=>{let{originalEvent:f}=r;f.stopPropagation()}},...e.touch===!0?{}:e.touch});return Y(()=>{var i,r;return I(m(e.tag,{ref:v,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},t.value]},{default:()=>[m("div",{class:"v-window__container",style:{height:_.value}},[(i=o.default)==null?void 0:i.call(o,{group:s}),e.showArrows!==!1&&m("div",{class:"v-window__controls"},[L.value])]),(r=o.additional)==null?void 0:r.call(o,{group:s})]}),[[j("touch"),R.value]])}),{group:s}}}),me=z({name:"VWindowItem",directives:{Touch:le},props:{reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...q(),...K()},emits:{"group:selected":e=>!0},setup(e,n){let{slots:o}=n;const t=F(H),a=J(e,k),{isBooted:u}=ee();if(!t||!a)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=T(!1),v=h(()=>t.isReversed.value?e.reverseTransition!==!1:e.transition!==!1);function d(){!s.value||!t||(s.value=!1,t.transitionCount.value>0&&(t.transitionCount.value-=1,t.transitionCount.value===0&&(t.transitionHeight.value=void 0)))}function l(){if(!(s.value||!t)){if(s.value=!0,t.transitionCount.value===0){var c;t.transitionHeight.value=B((c=t.rootRef.value)==null?void 0:c.clientHeight)}t.transitionCount.value+=1}}function g(){d()}function w(c){!s.value||U(()=>{!v.value||!s.value||!t||(t.transitionHeight.value=B(c.clientHeight))})}const _=h(()=>{const c=t.isReversed.value?e.reverseTransition:e.transition;return v.value?{name:typeof c!="string"?t.transition.value:c,onBeforeEnter:l,onAfterEnter:d,onEnterCancelled:g,onBeforeLeave:l,onAfterLeave:d,onLeaveCancelled:g,onEnter:w}:!1}),{hasContent:y}=N(e,a.isSelected);return Y(()=>{var c;return m(p,{transition:u.value&&_.value},{default:()=>[I(m("div",{class:["v-window-item",a.selectedClass.value]},[y.value&&((c=o.default)==null?void 0:c.call(o))]),[[Q,a.isSelected.value]])]})}),{}}});export{he as V,me as a};
