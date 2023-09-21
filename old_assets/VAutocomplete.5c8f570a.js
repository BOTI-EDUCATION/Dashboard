import{m as Q}from"./VSelect.7d4f5c30.js";import{m as W,u as X}from"./filter.f43ed048.js";import{m as Y}from"./VImg.e357ba01.js";import{f as Z}from"./forwardRefs.c003b6b8.js";import{u as ee,V as le,a as O}from"./VList.bc8bed17.js";import{af as te,ar as ae,at as ne,k as h,a9 as D,ac as ue,A as x,O as M,am as N,a1 as oe,p as u,F as U,aq as _,D as se}from"./index.4b7a73ae.js";import{m as ie,f as re,V as ce}from"./VTextField.29bf31a1.js";import{V as ve}from"./VMenu.336f89d2.js";import{V as me}from"./VCheckboxBtn.3c8a331b.js";import{V as de}from"./router.9ec7c70f.js";import{V as fe}from"./VChip.a2ad707e.js";function pe(e,v,t){if(Array.isArray(v))throw new Error("Multiple matches is not implemented");return typeof v=="number"&&~v?u(U,null,[u("span",{class:"v-autocomplete__unmask"},[e.substr(0,v)]),u("span",{class:"v-autocomplete__mask"},[e.substr(v,t)]),u("span",{class:"v-autocomplete__unmask"},[e.substr(v+t)])]):e}const Ae=te()({name:"VAutocomplete",props:{search:String,...W({filterKeys:["title"]}),...Q(),...ae(ie({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...Y({transition:!1})},emits:{"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,v){let{slots:t}=v;const{t:K}=ne(),F=h(),d=h(!1),m=h(!0),s=D(e,"menu"),{items:w,transformIn:B,transformOut:R}=ee(e),i=D(e,"search",""),r=D(e,"modelValue",[],l=>B(ue(l)),l=>{var n;const a=R(l);return e.multiple?a:(n=a[0])!=null?n:null}),{filteredItems:P}=X(e,w,x(()=>m.value?void 0:i.value)),k=x(()=>r.value.map(l=>w.value.find(a=>a.value===l.value)||l)),T=x(()=>k.value.map(l=>l.props.value)),A=h();function $(l){r.value=[],e.openOnClear&&(s.value=!0),i.value=""}function b(){e.hideNoData&&!w.value.length||e.readonly||(s.value=!0)}function q(l){if(!e.readonly){if(["Enter","ArrowDown"].includes(l.key)&&(s.value=!0),["Escape"].includes(l.key)&&(s.value=!1),["Enter","Escape","Tab"].includes(l.key)&&(m.value=!0),l.key==="ArrowDown"){var a;l.preventDefault(),(a=A.value)==null||a.focus("next")}else if(l.key==="ArrowUp"){var n;l.preventDefault(),(n=A.value)==null||n.focus("prev")}}}function z(l){i.value=l.target.value}function j(){d.value&&(m.value=!0)}function G(l){d.value=!0}function H(l){if(l.relatedTarget==null){var a;(a=F.value)==null||a.focus()}}const f=h(!1);function C(l){if(e.multiple){const a=T.value.findIndex(n=>n===l.value);if(a===-1)r.value=[...r.value,l],i.value="";else{const n=[...r.value];n.splice(a,1),r.value=n}}else r.value=[l],f.value=!0,t.selection||(i.value=l.title),s.value=!1,m.value=!0,N(()=>f.value=!1)}return M(d,l=>{var n;if(l){var a;f.value=!0,i.value=e.multiple||!!t.selection?"":String((n=(a=k.value.at(-1))==null?void 0:a.props.title)!=null?n:""),m.value=!0,N(()=>f.value=!1)}else s.value=!1,i.value=""}),M(i,l=>{!d.value||f.value||(l&&(s.value=!0),m.value=!l)}),oe(()=>{const l=!!(e.chips||t.chip),[a]=re(e);return u(ce,_({ref:F},a,{modelValue:i.value,"onUpdate:modelValue":n=>{n==null&&(r.value=[])},validationValue:r.externalValue,dirty:r.value.length>0,onInput:z,class:["v-autocomplete",{"v-autocomplete--active-menu":s.value,"v-autocomplete--chips":!!e.chips,[`v-autocomplete--${e.multiple?"multiple":"single"}`]:!0,"v-autocomplete--selection-slot":!!t.selection}],appendInnerIcon:e.menuIcon,readonly:e.readonly,"onClick:clear":$,"onClick:control":b,"onClick:input":b,onFocus:()=>d.value=!0,onBlur:()=>d.value=!1,onKeydown:q}),{...t,default:()=>{var n,S,E;return u(U,null,[u(ve,_({modelValue:s.value,"onUpdate:modelValue":o=>s.value=o,activator:"parent",contentClass:"v-autocomplete__content",eager:e.eager,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:j},e.menuProps),{default:()=>[u(le,{ref:A,selected:T.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:o=>o.preventDefault(),onFocusin:G,onFocusout:H},{default:()=>{var o;return[!P.value.length&&!e.hideNoData&&((o=(n=t["no-data"])==null?void 0:n.call(t))!=null?o:u(O,{title:K(e.noDataText)},null)),(S=t["prepend-item"])==null?void 0:S.call(t),P.value.map((p,y)=>{var L;var V;let{item:c,matches:J}=p;return(L=(V=t.item)==null?void 0:V.call(t,{item:c,index:y,props:_(c.props,{onClick:()=>C(c)})}))!=null?L:u(O,_({key:y},c.props,{onClick:()=>C(c)}),{prepend:g=>{let{isSelected:I}=g;return e.multiple&&!e.hideSelected?u(me,{modelValue:I,ripple:!1},null):void 0},title:()=>{var I;var g;return m.value?c.title:pe(c.title,J.title,(I=(g=i.value)==null?void 0:g.length)!=null?I:0)}})}),(E=t["append-item"])==null?void 0:E.call(t)]}})]}),k.value.map((o,p)=>{function y(c){c.stopPropagation(),c.preventDefault(),C(o)}const V={"onClick:close":y,modelValue:!0,"onUpdate:modelValue":void 0};return u("div",{key:o.value,class:"v-autocomplete__selection"},[l?u(de,{defaults:{VChip:{closable:e.closableChips,size:"small",text:o.title}}},{default:()=>[t.chip?t.chip({item:o,index:p,props:V}):u(fe,V,null)]}):t.selection?t.selection({item:o,index:p}):u("span",{class:"v-autocomplete__selection-text"},[o.title,e.multiple&&p<k.value.length-1&&u("span",{class:"v-autocomplete__selection-comma"},[se(",")])])])})])}})}),Z({isFocused:d,isPristine:m,menu:s,search:i,filteredItems:P,select:C},F)}});export{Ae as V};
