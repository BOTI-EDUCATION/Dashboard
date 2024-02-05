import{o as s,c as _,p as t,w as o,D as n,q as v,b2 as b,V as m,aq as T,m as a,K as u,k as g,b as f}from"./index.e6050e69.js";import{V as i}from"./VTooltip.82114532.js";import{V as e}from"./VBtn.3dc08b52.js";import{V as $}from"./VImg.ededc02c.js";import{V as S}from"./VAvatar.521a73f7.js";import{_ as H}from"./AppCardCode.a94f3791.js";import{a as d,V as D}from"./VRow.291b6fb8.js";import"./scopeId.cae28892.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.e8cdaaef.js";import"./router.85b82a14.js";import"./lazy.163ddcb2.js";import"./easing.36b781ab.js";import"./position.c703d118.js";import"./vue.runtime.esm-bundler.05279faf.js";import"./index.1b0e53dd.js";import"./VCard.256d2f93.js";import"./VDivider.0c479dd1.js";const k={class:"demo-space-x"},E=a("span",null,"Tooltip on Icon",-1),I={__name:"DemoTooltipTooltipOnVariousElements",setup(r){return(l,V)=>(s(),_("div",k,[t(e,null,{default:o(()=>[n(" Button "),t(i,{location:"top",activator:"parent"},{default:o(()=>[n(" Tooltip ")]),_:1})]),_:1}),t(S,{color:"info"},{default:o(()=>[t($,{src:v(b)},null,8,["src"]),t(i,{location:"top",activator:"parent"},{default:o(()=>[n(" Tooltip on Avatar ")]),_:1})]),_:1}),t(i,{location:"top"},{activator:o(({props:c})=>[t(m,T(c,{size:"30",icon:"tabler-user"}),null,16)]),default:o(()=>[E]),_:1})]))}},A={},w={class:"demo-space-x"},j=a("span",null,"Scale Transition",-1),F=a("span",null,"Scroll X Transition",-1),X=a("span",null,"Scroll Y Transition",-1);function C(r,l){return s(),_("div",w,[t(e,null,{default:o(()=>[n(" scale transition "),t(i,{location:"top",transition:"scale-transition",activator:"parent"},{default:o(()=>[j]),_:1})]),_:1}),t(e,null,{default:o(()=>[n(" scroll X transition "),t(i,{location:"top",activator:"parent",transition:"scroll-x-transition"},{default:o(()=>[F]),_:1})]),_:1}),t(e,null,{default:o(()=>[n(" scroll y transition "),t(i,{location:"top",activator:"parent",transition:"scroll-y-transition"},{default:o(()=>[X]),_:1})]),_:1})])}const M=u(A,[["render",C]]),P={class:"demo-space-x"},z=a("span",null,"Programmatic tooltip",-1),N={__name:"DemoTooltipVModelSupport",setup(r){const l=g(!1);return(V,c)=>(s(),_("div",P,[t(e,{onClick:c[0]||(c[0]=p=>l.value=!v(l))},{default:o(()=>[n(" toggle tooltip ")]),_:1}),t(i,{"model-value":v(l),location:"top"},{activator:o(({props:p})=>[t(m,T(p,{icon:"tabler-brand-instagram"}),null,16)]),default:o(()=>[z]),_:1},8,["model-value"])]))}},Y={},q=a("span",null,"Open Delay On Hover",-1),L=a("span",null,"Open Delay On Hover",-1);function U(r,l){return s(),f(e,{variant:"outlined"},{default:o(()=>[q,n(),t(i,{"open-delay":"500",location:"top",activator:"parent"},{default:o(()=>[L]),_:1})]),_:1})}const K=u(Y,[["render",U]]),R={},G={class:"demo-space-x"},J=a("span",null,"Open On Hover",-1),Q=a("span",null,"Open On click",-1),W=a("span",null,"Open On Hover + Focus",-1);function Z(r,l){return s(),_("div",G,[t(e,{variant:"outlined"},{default:o(()=>[J,t(i,{activator:"parent",location:"top"},{default:o(()=>[n(" Open On Hover ")]),_:1})]),_:1}),t(e,{variant:"outlined",color:"primary"},{default:o(()=>[Q,t(i,{"open-on-click":"","open-on-hover":!1,location:"top",activator:"parent"},{default:o(()=>[n(" Open On click ")]),_:1})]),_:1}),t(e,{variant:"outlined"},{default:o(()=>[W,t(i,{"open-on-focus":"",location:"top",activator:"parent"},{default:o(()=>[n(" Open On Hover + Focus ")]),_:1})]),_:1})])}const tt=u(R,[["render",Z]]),ot={},nt={class:"demo-space-x"};function at(r,l){return s(),_("div",nt,[t(e,{variant:"outlined"},{default:o(()=>[n(" Tooltip on End "),t(i,{activator:"parent",location:"end"},{default:o(()=>[n(" End Tooltip ")]),_:1})]),_:1}),t(e,{variant:"outlined"},{default:o(()=>[n(" Tooltip on Start "),t(i,{activator:"parent",location:"start"},{default:o(()=>[n(" Start Tooltip ")]),_:1})]),_:1}),t(e,{variant:"outlined"},{default:o(()=>[n(" Tooltip on Top "),t(i,{activator:"parent",location:"top"},{default:o(()=>[n(" Top Tooltip ")]),_:1})]),_:1}),t(e,{variant:"outlined"},{default:o(()=>[n(" Tooltip on Bottom "),t(i,{activator:"parent",location:"bottom"},{default:o(()=>[n(" Bottom Tooltip ")]),_:1})]),_:1})])}const it=u(ot,[["render",at]]),et={ts:`<template>
  <!-- Delay on open -->
  <VBtn variant="outlined">
    <span>Open Delay On Hover</span> <VTooltip
      open-delay="500"
      location="top"
      activator="parent"
    >
      <span>Open Delay On Hover</span>
    </VTooltip>
  </VBtn>
</template>
`,js:`<template>
  <!-- Delay on open -->
  <VBtn variant="outlined">
    <span>Open Delay On Hover</span> <VTooltip
      open-delay="500"
      location="top"
      activator="parent"
    >
      <span>Open Delay On Hover</span>
    </VTooltip>
  </VBtn>
</template>
`},lt={ts:`<template>
  <div class="demo-space-x">
    <!-- open on hover -->
    <VBtn variant="outlined">
      <span>Open On Hover</span>
      <VTooltip
        activator="parent"
        location="top"
      >
        Open On Hover
      </VTooltip>
    </VBtn>

    <!-- open on click -->
    <VBtn
      variant="outlined"
      color="primary"
    >
      <span>Open On click</span>

      <VTooltip
        open-on-click
        :open-on-hover="false"
        location="top"
        activator="parent"
      >
        Open On click
      </VTooltip>
    </VBtn>

    <!-- open on focus -->
    <VBtn variant="outlined">
      <span>Open On Hover + Focus</span>
      <VTooltip
        open-on-focus
        location="top"
        activator="parent"
      >
        Open On Hover + Focus
      </VTooltip>
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <!-- open on hover -->
    <VBtn variant="outlined">
      <span>Open On Hover</span>
      <VTooltip
        activator="parent"
        location="top"
      >
        Open On Hover
      </VTooltip>
    </VBtn>

    <!-- open on click -->
    <VBtn
      variant="outlined"
      color="primary"
    >
      <span>Open On click</span>

      <VTooltip
        open-on-click
        :open-on-hover="false"
        location="top"
        activator="parent"
      >
        Open On click
      </VTooltip>
    </VBtn>

    <!-- open on focus -->
    <VBtn variant="outlined">
      <span>Open On Hover + Focus</span>
      <VTooltip
        open-on-focus
        location="top"
        activator="parent"
      >
        Open On Hover + Focus
      </VTooltip>
    </VBtn>
  </div>
</template>
`},pt={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Tooltip on End
      <VTooltip
        activator="parent"
        location="end"
      >
        End Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="outlined">
      Tooltip on Start
      <VTooltip
        activator="parent"
        location="start"
      >
        Start Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="outlined">
      Tooltip on Top
      <VTooltip
        activator="parent"
        location="top"
      >
        Top Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="outlined">
      Tooltip on Bottom
      <VTooltip
        activator="parent"
        location="bottom"
      >
        Bottom Tooltip
      </VTooltip>
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Tooltip on End
      <VTooltip
        activator="parent"
        location="end"
      >
        End Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="outlined">
      Tooltip on Start
      <VTooltip
        activator="parent"
        location="start"
      >
        Start Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="outlined">
      Tooltip on Top
      <VTooltip
        activator="parent"
        location="top"
      >
        Top Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="outlined">
      Tooltip on Bottom
      <VTooltip
        activator="parent"
        location="bottom"
      >
        Bottom Tooltip
      </VTooltip>
    </VBtn>
  </div>
</template>
`},st={ts:`<script setup lang="ts">
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn>
      Button
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip
      </VTooltip>
    </VBtn>

    <VAvatar color="info">
      <VImg :src="avatar4" />
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip on Avatar
      </VTooltip>
    </VAvatar>

    <VTooltip location="top">
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          size="30"
          icon="tabler-user"
        />
      </template>
      <span>Tooltip on Icon</span>
    </VTooltip>
  </div>
</template>
`,js:`<script setup>
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn>
      Button
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip
      </VTooltip>
    </VBtn>

    <VAvatar color="info">
      <VImg :src="avatar4" />
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip on Avatar
      </VTooltip>
    </VAvatar>

    <VTooltip location="top">
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          size="30"
          icon="tabler-user"
        />
      </template>
      <span>Tooltip on Icon</span>
    </VTooltip>
  </div>
</template>
`},rt={ts:`<template>
  <div class="demo-space-x">
    <!-- Scale transition -->
    <VBtn>
      scale transition
      <VTooltip
        location="top"
        transition="scale-transition"
        activator="parent"
      >
        <span>Scale Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll x transition -->
    <VBtn>
      scroll X transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-x-transition"
      >
        <span>Scroll X Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll y transition -->
    <VBtn>
      scroll y transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-y-transition"
      >
        <span>Scroll Y Transition</span>
      </VTooltip>
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <!-- Scale transition -->
    <VBtn>
      scale transition
      <VTooltip
        location="top"
        transition="scale-transition"
        activator="parent"
      >
        <span>Scale Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll x transition -->
    <VBtn>
      scroll X transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-x-transition"
      >
        <span>Scroll X Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll y transition -->
    <VBtn>
      scroll y transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-y-transition"
      >
        <span>Scroll Y Transition</span>
      </VTooltip>
    </VBtn>
  </div>
</template>
`},ct={ts:`<script lang="ts" setup>
const isTooltipVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn @click="isTooltipVisible = !isTooltipVisible">
      toggle tooltip
    </VBtn>

    <VTooltip
      :model-value="isTooltipVisible"
      location="top"
    >
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          icon="tabler-brand-instagram"
        />
      </template>
      <span>Programmatic tooltip</span>
    </VTooltip>
  </div>
</template>
`,js:`<script setup>
const isTooltipVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn @click="isTooltipVisible = !isTooltipVisible">
      toggle tooltip
    </VBtn>

    <VTooltip
      :model-value="isTooltipVisible"
      location="top"
    >
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          icon="tabler-brand-instagram"
        />
      </template>
      <span>Programmatic tooltip</span>
    </VTooltip>
  </div>
</template>
`},dt=a("p",null,[n("Use the "),a("code",null,"location"),n(" prop to specify on which side of the element the tooltip should show")],-1),_t=a("p",null,[n("Delay (in ms) after which tooltip opens (when "),a("code",null,"open-on-hover"),n(" prop is set to true)")],-1),ut=a("p",null,[n("Tooltip visibility can be programmatically changed using "),a("code",null,"v-model"),n(".")],-1),vt=a("p",null,[n("Use "),a("code",null,"transition"),n(" prop to sets the component transition.")],-1),Vt=a("p",null,"Tooltips can wrap any element.",-1),wt={__name:"tooltip",setup(r){return(l,V)=>{const c=it,p=H,B=tt,O=K,h=N,x=M,y=I;return s(),f(D,null,{default:o(()=>[t(d,{cols:"12"},{default:o(()=>[t(p,{title:"Location",code:pt},{default:o(()=>[dt,t(c)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(p,{title:"Events",code:lt},{default:o(()=>[t(B)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(p,{title:"Delay On Hover",code:et},{default:o(()=>[_t,t(O)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(p,{title:"V-Model Support",code:ct},{default:o(()=>[ut,t(h)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(p,{title:"Transition",code:rt},{default:o(()=>[vt,t(x)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(p,{title:"Tooltip on Various Elements",code:st},{default:o(()=>[Vt,t(y)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{wt as default};