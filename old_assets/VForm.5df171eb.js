import{d as p,e as v}from"./VInput.3a8b13d6.js";import{f as b}from"./forwardRefs.c003b6b8.js";import{Q as h,k as V,a1 as F,p as R}from"./index.4b7a73ae.js";const P=h({name:"VForm",props:{...p()},emits:{"update:modelValue":a=>!0,submit:a=>!0},setup(a,i){let{slots:s,emit:m}=i;const r=v(a),n=V();function f(t){t.preventDefault(),r.reset()}function u(t){const o=t,e=r.validate();o.then=e.then.bind(e),o.catch=e.catch.bind(e),o.finally=e.finally.bind(e),m("submit",o),o.defaultPrevented||e.then(d=>{let{valid:c}=d;if(c){var l;(l=n.value)==null||l.submit()}}),o.preventDefault()}return F(()=>{var t;return R("form",{ref:n,class:"v-form",novalidate:!0,onReset:f,onSubmit:u},[(t=s.default)==null?void 0:t.call(s,r)])}),b(r,n)}});export{P as V};
