import{aG as $,d as q,aH as F,$ as K,a2 as d,A as c,ak as m,au as y,C as T,p as E,F as z,q as x,aI as G,aJ as J,aK as N,aD as U,e as Q,aL as R,a0 as Z,a3 as ee,aM as te,am as ne,aN as ie}from"./index.822dd088.js";const D=["top","bottom"],re=["start","end","left","right"];function se(e,t){let[n,i]=e.split(" ");return i||(i=$(D,n)?"start":$(re,n)?"top":"center"),{side:P(n,t),align:P(i,t)}}function P(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function fe(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function ve(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function he(e){return{side:e.align,align:e.side}}function ge(e){return $(D,e.side)?"y":"x"}const _e=q({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,t){let{slots:n}=t;const{defaults:i,reset:o,root:r,scoped:s}=F(e);return K(i,{reset:o,root:r,scoped:s}),()=>{var a;return(a=n.default)==null?void 0:a.call(n)}}}),ye=d({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function we(e){return{dimensionStyles:c(()=>({height:m(e.height),maxHeight:m(e.maxHeight),maxWidth:m(e.maxWidth),minHeight:m(e.minHeight),minWidth:m(e.minWidth),width:m(e.width)}))}}const be=d({border:[Boolean,Number,String]},"border");function Ee(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:y();return{borderClasses:c(()=>{const i=T(e)?e.value:e.border,o=[];if(i===!0||i==="")o.push(`${t}--border`);else if(typeof i=="string"||i===0)for(const r of String(i).split(" "))o.push(`border-${r}`);return o})}}const Le=d({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Ce(e){return{elevationClasses:c(()=>{const n=T(e)?e.value:e.elevation,i=[];return n==null||i.push(`elevation-${n}`),i})}}const $e=d({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function ke(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:y();return{roundedClasses:c(()=>{const i=T(e)?e.value:e.rounded,o=[];if(i===!0||i==="")o.push(`${t}--rounded`);else if(typeof i=="string"||i===0)for(const r of String(i).split(" "))o.push(`rounded-${r}`);return o})}}const oe=[null,"default","comfortable","compact"],Se=d({density:{type:String,default:"default",validator:e=>oe.includes(e)}},"density");function Te(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:y();return{densityClasses:c(()=>`${t}--density-${e.density}`)}}const ae=["elevated","flat","tonal","outlined","text","plain"];function xe(e,t){return E(z,null,[e&&E("span",{key:"overlay",class:`${t}__overlay`},null),E("span",{key:"underlay",class:`${t}__underlay`},null)])}const Ne=d({color:String,variant:{type:String,default:"elevated",validator:e=>ae.includes(e)}},"variant");function Re(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:y();const n=c(()=>{const{variant:r}=x(e);return`${t}--variant-${r}`}),{colorClasses:i,colorStyles:o}=G(c(()=>{const{variant:r,color:s}=x(e);return{[["elevated","flat"].includes(r)?"background":"text"]:s}}));return{colorClasses:i,colorStyles:o,variantClasses:n}}const k=Symbol("rippleStop"),le=80;function B(e,t){e.style.transform=t,e.style.webkitTransform=t}function L(e,t){e.style.opacity=`calc(${t} * var(--v-theme-overlay-multiplier))`}function S(e){return e.constructor.name==="TouchEvent"}function V(e){return e.constructor.name==="KeyboardEvent"}const ue=function(e,t){var n;let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=0,r=0;if(!V(e)){const f=t.getBoundingClientRect(),v=S(e)?e.touches[e.touches.length-1]:e;o=v.clientX-f.left,r=v.clientY-f.top}let s=0,a=.3;(n=t._ripple)!=null&&n.circle?(a=.15,s=t.clientWidth/2,s=i.center?s:s+Math.sqrt((o-s)**2+(r-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const l=`${(t.clientWidth-s*2)/2}px`,p=`${(t.clientHeight-s*2)/2}px`,w=i.center?l:`${o-s}px`,b=i.center?p:`${r-s}px`;return{radius:s,scale:a,x:w,y:b,centerX:l,centerY:p}},_={show(e,t){var n;let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!(t!=null&&(n=t._ripple)!=null&&n.enabled))return;const o=document.createElement("span"),r=document.createElement("span");o.appendChild(r),o.className="v-ripple__container",i.class&&(o.className+=` ${i.class}`);const{radius:s,scale:a,x:l,y:p,centerX:w,centerY:b}=ue(e,t,i),f=`${s*2}px`;r.className="v-ripple__animation",r.style.width=f,r.style.height=f,t.appendChild(o);const v=window.getComputedStyle(t);v&&v.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),B(r,`translate(${l}, ${p}) scale3d(${a},${a},${a})`),L(r,0),r.dataset.activated=String(performance.now()),setTimeout(()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),B(r,`translate(${w}, ${b}) scale3d(1,1,1)`),L(r,.08)},0)},hide(e){var t;if(!(e!=null&&(t=e._ripple)!=null&&t.enabled))return;const n=e.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const i=n[n.length-1];if(i.dataset.isHiding)return;i.dataset.isHiding="true";const o=performance.now()-Number(i.dataset.activated),r=Math.max(250-o,0);setTimeout(()=>{i.classList.remove("v-ripple__animation--in"),i.classList.add("v-ripple__animation--out"),L(i,0),setTimeout(()=>{e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),i.parentNode&&e.removeChild(i.parentNode)},300)},r)}};function W(e){return typeof e>"u"||!!e}function h(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[k])){if(e[k]=!0,S(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||V(e),n._ripple.class&&(t.class=n._ripple.class),S(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{_.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var i;n!=null&&(i=n._ripple)!=null&&i.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},le)}else _.show(e,n,t)}}function H(e){e[k]=!0}function u(e){const t=e.currentTarget;if(!(!t||!t._ripple)){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{u(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),_.hide(t)}}function I(e){const t=e.currentTarget;!t||!t._ripple||(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let g=!1;function Y(e){!g&&(e.keyCode===N.enter||e.keyCode===N.space)&&(g=!0,h(e))}function O(e){g=!1,u(e)}function X(e){g&&(g=!1,u(e))}function M(e,t,n){var s;const{value:i,modifiers:o}=t,r=W(i);if(r||_.hide(e),e._ripple=(s=e._ripple)!=null?s:{},e._ripple.enabled=r,e._ripple.centered=o.center,e._ripple.circle=o.circle,J(i)&&i.class&&(e._ripple.class=i.class),r&&!n){if(o.stop){e.addEventListener("touchstart",H,{passive:!0}),e.addEventListener("mousedown",H);return}e.addEventListener("touchstart",h,{passive:!0}),e.addEventListener("touchend",u,{passive:!0}),e.addEventListener("touchmove",I,{passive:!0}),e.addEventListener("touchcancel",u),e.addEventListener("mousedown",h),e.addEventListener("mouseup",u),e.addEventListener("mouseleave",u),e.addEventListener("keydown",Y),e.addEventListener("keyup",O),e.addEventListener("blur",X),e.addEventListener("dragstart",u,{passive:!0})}else!r&&n&&j(e)}function j(e){e.removeEventListener("mousedown",h),e.removeEventListener("touchstart",h),e.removeEventListener("touchend",u),e.removeEventListener("touchmove",I),e.removeEventListener("touchcancel",u),e.removeEventListener("mouseup",u),e.removeEventListener("mouseleave",u),e.removeEventListener("keydown",Y),e.removeEventListener("keyup",O),e.removeEventListener("dragstart",u),e.removeEventListener("blur",X)}function ce(e,t){M(e,t,!1)}function de(e){delete e._ripple,j(e)}function pe(e,t){if(t.value===t.oldValue)return;const n=W(t.oldValue);M(e,t,n)}const Pe={mounted:ce,unmounted:de,updated:pe},A={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Be=d({location:String},"location");function He(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:i}=U();return{locationStyles:c(()=>{if(!e.location)return{};const{side:r,align:s}=se(e.location.split(" ").length>1?e.location:`${e.location} center`,i.value);function a(p){return n?n(p):0}const l={};return r!=="center"&&(t?l[A[r]]=`calc(100% - ${a(r)}px)`:l[r]=0),s!=="center"?t?l[A[s]]=`calc(100% - ${a(s)}px)`:l[s]=0:(r==="center"?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[r]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[r]),l})}}function Ae(){var e,t;return(e=ee("useRouter"))==null||(t=e.proxy)==null?void 0:t.$router}function De(e,t){const n=Q("RouterLink"),i=c(()=>!!(e.href||e.to)),o=c(()=>(i==null?void 0:i.value)||R(t,"click")||R(e,"click"));if(typeof n=="string")return{isLink:i,isClickable:o,href:Z(e,"href")};const r=e.to?n.useLink(e):void 0;return{isLink:i,isClickable:o,route:r==null?void 0:r.route,navigate:r==null?void 0:r.navigate,isActive:r&&c(()=>{var s,a;return e.exact?(s=r.isExactActive)==null?void 0:s.value:(a=r.isActive)==null?void 0:a.value}),href:c(()=>e.to?r==null?void 0:r.route.value.href:e.href)}}const Ve=d({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let C=!1;function We(e,t){let n=!1,i,o;te&&(ne(()=>{window.addEventListener("popstate",r),i=e==null?void 0:e.beforeEach((s,a,l)=>{C?n?t(l):l():setTimeout(()=>n?t(l):l()),C=!0}),o=e==null?void 0:e.afterEach(()=>{C=!1})}),ie(()=>{var s,a;window.removeEventListener("popstate",r),(s=i)==null||s(),(a=o)==null||a()}));function r(s){var a;(a=s.state)!=null&&a.replaced||(n=!0,setTimeout(()=>n=!1))}}export{Pe as R,_e as V,Se as a,Le as b,$e as c,Ne as d,Ee as e,Ce as f,ke as g,ye as h,Be as i,Ve as j,Re as k,we as l,be as m,He as n,De as o,xe as p,Ae as q,se as r,fe as s,P as t,Te as u,ve as v,he as w,ge as x,We as y};
