import{f as y}from"./forwardRefs.c003b6b8.js";import{af as C,ar as O,a9 as S,a4 as M,A as h,k as w,a6 as D,a5 as b,O as x,a1 as A,p as m,aq as p}from"./index.4b7a73ae.js";import{u as $}from"./scopeId.4a75480b.js";import{m as k,V as v,f as I,a as R}from"./VOverlay.6fd45b95.js";import{V as T}from"./dialog-transition.0bb0f8a6.js";import{V as U}from"./router.9ec7c70f.js";const F=C()({name:"VMenu",props:{id:String,...O(k({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:T}}),["absolute"])},emits:{"update:modelValue":a=>!0},setup(a,f){let{slots:s}=f;const o=S(a,"modelValue"),{scopeId:V}=$(),g=M(),i=h(()=>a.id||`v-menu-${g}`),u=w(),e=D(v,null);let n=0;b(v,{register(){++n},unregister(){--n},closeParents(){setTimeout(()=>{n||(o.value=!1,e==null||e.closeParents())},40)}}),x(o,l=>{l?e==null||e.register():e==null||e.unregister()});function P(){e==null||e.closeParents()}return A(()=>{const[l]=I(a);return m(R,p({ref:u,class:["v-menu"]},l,{modelValue:o.value,"onUpdate:modelValue":t=>o.value=t,absolute:!0,activatorProps:p({"aria-haspopup":"menu","aria-expanded":String(o.value),"aria-owns":i.value},a.activatorProps),"onClick:outside":P},V),{activator:s.activator,default:function(){for(var t,c=arguments.length,d=new Array(c),r=0;r<c;r++)d[r]=arguments[r];return m(U,{root:!0},{default:()=>[(t=s.default)==null?void 0:t.call(s,...d)]})}})}),y({id:i},u)}});export{F as V};