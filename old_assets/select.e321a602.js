import{k as _,o as p,b as d,w as a,p as e,m as l,x as F,q as b,C as f,cQ as D,cR as B,b4 as w,b2 as x,b3 as O,D as o}from"./index.096e80e5.js";import{V as k}from"./VChip.41118be1.js";import{V as y}from"./VAvatar.b0b1a1e5.js";import{V as m}from"./VSelect.3e7af17c.js";import{a as r,V}from"./VRow.86930b01.js";import{_ as G}from"./AppCardCode.2a4ae2c5.js";import"./VBtn.bb0efe4e.js";import"./router.0ecb67ce.js";import"./position.5411af0b.js";import"./index.140e4203.js";import"./VImg.489e5981.js";import"./VTextField.d1564acf.js";/* empty css                   */import"./VField.82ea56ac.js";import"./VInput.34fa8dcc.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.e1af49ba.js";import"./VList.6e549209.js";import"./VDivider.ecbdc3f7.js";import"./dialog-transition.fccdf0ea.js";import"./VMenu.6e3e8d30.js";import"./scopeId.0ed33173.js";import"./VOverlay.5268d4d1.js";import"./lazy.5faedddf.js";import"./VCheckboxBtn.5ca78a5c.js";import"./VSelectionControl.796dce69.js";import"./vue.runtime.esm-bundler.05246581.js";import"./VCard.02ead318.js";const $={__name:"DemoSelectSelectionSlot",setup(u){const t=[{name:"Sandra Adams",avatar:D},{name:"Ali Connors",avatar:B},{name:"Trevor Hansen",avatar:w},{name:"Tucker Smith",avatar:x},{name:"Britta Holt",avatar:O}],i=_(["Sandra Adams"]);return(c,s)=>(p(),d(m,{modelValue:b(i),"onUpdate:modelValue":s[0]||(s[0]=n=>f(i)?i.value=n:null),items:t,"item-title":"name","item-value":"name",label:"Select Item",multiple:"",clearable:"","clear-icon":"tabler-x"},{selection:a(({item:n})=>[e(k,null,{default:a(()=>[e(y,{start:"",image:n.raw.avatar},null,8,["image"]),l("span",null,F(n.title),1)]),_:2},1024)]),_:1},8,["modelValue"]))}},N={__name:"DemoSelectMultiple",setup(u){const t=_(["Alabama"]),i=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam"];return(c,s)=>(p(),d(m,{modelValue:b(t),"onUpdate:modelValue":s[0]||(s[0]=n=>f(t)?t.value=n:null),items:i,"menu-props":{maxHeight:"400"},label:"Select",multiple:"","persistent-hint":""},null,8,["modelValue"]))}},j={__name:"DemoSelectMenuProps",setup(u){const t=["Foo","Bar","Fizz","Buzz"];return(i,c)=>(p(),d(m,{items:t,"menu-props":{transition:"scroll-y-transition"},label:"Label"}))}},T={__name:"DemoSelectChips",setup(u){const t=["foo","bar","fizz","buzz"],i=_(["foo","bar","fizz","buzz"]);return(c,s)=>(p(),d(m,{modelValue:b(i),"onUpdate:modelValue":s[0]||(s[0]=n=>f(i)?i.value=n:null),items:t,label:"Chips",chips:"",multiple:""},null,8,["modelValue"]))}},U={__name:"DemoSelectIcons",setup(u){const t=_("Florida"),i=_("Texas"),c=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam"];return(s,n)=>(p(),d(V,null,{default:a(()=>[e(r,{cols:"12"},{default:a(()=>[e(m,{modelValue:b(t),"onUpdate:modelValue":n[0]||(n[0]=v=>f(t)?t.value=v:null),items:c,label:"Select","prepend-icon":"tabler-map","single-line":"",variant:"filled"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:a(()=>[e(m,{modelValue:b(i),"onUpdate:modelValue":n[1]||(n[1]=v=>f(i)?i.value=v:null),items:c,"append-icon":"tabler-map",label:"Select","single-line":"",variant:"filled"},null,8,["modelValue"])]),_:1})]),_:1}))}},M={__name:"DemoSelectCustomTextAndValue",setup(u){const t=_({state:"Florida",abbr:"FL"}),i=[{state:"Florida",abbr:"FL"},{state:"Georgia",abbr:"GA"},{state:"Nebraska",abbr:"NE"},{state:"California",abbr:"CA"},{state:"New York",abbr:"NY"}];return(c,s)=>(p(),d(m,{modelValue:b(t),"onUpdate:modelValue":s[0]||(s[0]=n=>f(t)?t.value=n:null),hint:`${b(t).state}, ${b(t).abbr}`,items:i,"item-title":"state","item-value":"abbr",label:"Select","persistent-hint":"","return-object":"","single-line":""},null,8,["modelValue","hint"]))}},R={__name:"DemoSelectVariant",setup(u){const t=["Foo","Bar","Fizz","Buzz"];return(i,c)=>(p(),d(V,null,{default:a(()=>[e(r,{cols:"12",sm:"6"},{default:a(()=>[e(m,{items:t,label:"Outlined"})]),_:1}),e(r,{cols:"12",sm:"6"},{default:a(()=>[e(m,{items:t,label:"Filled",variant:"filled"})]),_:1}),e(r,{cols:"12",sm:"6"},{default:a(()=>[e(m,{items:t,label:"Solo",variant:"solo"})]),_:1}),e(r,{cols:"12",sm:"6"},{default:a(()=>[e(m,{items:t,label:"Plain",variant:"plain"})]),_:1}),e(r,{cols:"12",sm:"6"},{default:a(()=>[e(m,{items:t,label:"Underlined",variant:"underlined",density:"default"})]),_:1})]),_:1}))}},H={__name:"DemoSelectDensity",setup(u){const t=["Foo","Bar","Fizz","Buzz"];return(i,c)=>(p(),d(m,{items:t,label:"Density",density:"compact"}))}},L={__name:"DemoSelectBasic",setup(u){const t=["Foo","Bar","Fizz","Buzz"];return(i,c)=>(p(),d(m,{items:t,label:"Standard"}))}},P={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <VSelect
    :items="items"
    label="Standard"
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <VSelect
    :items="items"
    label="Standard"
  />
</template>
`},Y={ts:`<script lang="ts" setup>
const items = ['foo', 'bar', 'fizz', 'buzz']
const selected = ref(['foo', 'bar', 'fizz', 'buzz'])
<\/script>

<template>
  <VSelect
    v-model="selected"
    :items="items"
    label="Chips"
    chips
    multiple
  />
</template>
`,js:`<script setup>
const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const selected = ref([
  'foo',
  'bar',
  'fizz',
  'buzz',
])
<\/script>

<template>
  <VSelect
    v-model="selected"
    :items="items"
    label="Chips"
    chips
    multiple
  />
</template>
`},I={ts:`<script lang="ts" setup>
const selectedOption = ref({ state: 'Florida', abbr: 'FL' })

const items = [
  { state: 'Florida', abbr: 'FL' },
  { state: 'Georgia', abbr: 'GA' },
  { state: 'Nebraska', abbr: 'NE' },
  { state: 'California', abbr: 'CA' },
  { state: 'New York', abbr: 'NY' },
]
<\/script>

<template>
  <VSelect
    v-model="selectedOption"
    :hint="\`\${selectedOption.state}, \${selectedOption.abbr}\`"
    :items="items"
    item-title="state"
    item-value="abbr"
    label="Select"
    persistent-hint
    return-object
    single-line
  />
</template>
`,js:`<script setup>
const selectedOption = ref({
  state: 'Florida',
  abbr: 'FL',
})

const items = [
  {
    state: 'Florida',
    abbr: 'FL',
  },
  {
    state: 'Georgia',
    abbr: 'GA',
  },
  {
    state: 'Nebraska',
    abbr: 'NE',
  },
  {
    state: 'California',
    abbr: 'CA',
  },
  {
    state: 'New York',
    abbr: 'NY',
  },
]
<\/script>

<template>
  <VSelect
    v-model="selectedOption"
    :hint="\`\${selectedOption.state}, \${selectedOption.abbr}\`"
    :items="items"
    item-title="state"
    item-value="abbr"
    label="Select"
    persistent-hint
    return-object
    single-line
  />
</template>
`},E={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <VSelect
    :items="items"
    label="Density"
    density="compact"
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <VSelect
    :items="items"
    label="Density"
    density="compact"
  />
</template>
`},q={ts:`<script lang="ts" setup>
const selectedOption1 = ref('Florida')
const selectedOption2 = ref('Texas')

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSelect
        v-model="selectedOption1"
        :items="states"
        label="Select"
        prepend-icon="tabler-map"
        single-line
        variant="filled"
      />
    </VCol>

    <VCol cols="12">
      <VSelect
        v-model="selectedOption2"
        :items="states"
        append-icon="tabler-map"
        label="Select"
        single-line
        variant="filled"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedOption1 = ref('Florida')
const selectedOption2 = ref('Texas')

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSelect
        v-model="selectedOption1"
        :items="states"
        label="Select"
        prepend-icon="tabler-map"
        single-line
        variant="filled"
      />
    </VCol>

    <VCol cols="12">
      <VSelect
        v-model="selectedOption2"
        :items="states"
        append-icon="tabler-map"
        label="Select"
        single-line
        variant="filled"
      />
    </VCol>
  </VRow>
</template>
`},Q={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <VSelect
    :items="items"
    :menu-props="{ transition: 'scroll-y-transition' }"
    label="Label"
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <VSelect
    :items="items"
    :menu-props="{ transition: 'scroll-y-transition' }"
    label="Label"
  />
</template>
`},J={ts:`<script lang="ts" setup>
const selectedOptions = ref(['Alabama'])

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <VSelect
    v-model="selectedOptions"
    :items="states"
    :menu-props="{ maxHeight: '400' }"
    label="Select"
    multiple
    persistent-hint
  />
</template>
`,js:`<script setup>
const selectedOptions = ref(['Alabama'])

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <VSelect
    v-model="selectedOptions"
    :items="states"
    :menu-props="{ maxHeight: '400' }"
    label="Select"
    multiple
    persistent-hint
  />
</template>
`},K={ts:`<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'

const items: { name: string; avatar: string }[] = [
  { name: 'Sandra Adams', avatar: avatar1 },
  { name: 'Ali Connors', avatar: avatar2 },
  { name: 'Trevor Hansen', avatar: avatar3 },
  { name: 'Tucker Smith', avatar: avatar4 },
  { name: 'Britta Holt', avatar: avatar5 },
]

const value = ref(['Sandra Adams'])
<\/script>

<template>
  <VSelect
    v-model="value"
    :items="items"
    item-title="name"
    item-value="name"
    label="Select Item"
    multiple
    clearable
    clear-icon="tabler-x"
  >
    <template #selection="{ item }">
      <VChip>
        <VAvatar
          start
          :image="item.raw.avatar"
        />
        <span>{{ item.title }}</span>
      </VChip>
    </template>
  </VSelect>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'

const items = [
  {
    name: 'Sandra Adams',
    avatar: avatar1,
  },
  {
    name: 'Ali Connors',
    avatar: avatar2,
  },
  {
    name: 'Trevor Hansen',
    avatar: avatar3,
  },
  {
    name: 'Tucker Smith',
    avatar: avatar4,
  },
  {
    name: 'Britta Holt',
    avatar: avatar5,
  },
]

const value = ref(['Sandra Adams'])
<\/script>

<template>
  <VSelect
    v-model="value"
    :items="items"
    item-title="name"
    item-value="name"
    label="Select Item"
    multiple
    clearable
    clear-icon="tabler-x"
  >
    <template #selection="{ item }">
      <VChip>
        <VAvatar
          start
          :image="item.raw.avatar"
        />
        <span>{{ item.title }}</span>
      </VChip>
    </template>
  </VSelect>
</template>
`},W={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Outlined"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Plain"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Outlined"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Plain"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`},X=l("p",null,"Select fields components are used for collecting user provided information from a list of options.",-1),Z=l("p",null,[o("You can use "),l("code",null,"density"),o(" prop to reduce the field height and lower max height of list items.")],-1),ee=l("p",null,[o(" Use "),l("code",null,"filled"),o(", "),l("code",null,"outlined"),o(", "),l("code",null,"solo"),o(", "),l("code",null,"underlined"),o(" and "),l("code",null,"plain"),o(" options of "),l("code",null,"variant"),o(" prop to change appearance of select. ")],-1),te=l("p",null,"You can specify the specific properties within your items array that correspond to the title and value fields. In this example we also use the return-object prop which will return the entire object of the selected item on selection.",-1),ae=l("p",null,[o("Use a custom "),l("code",null,"prepend"),o(" or "),l("code",null,"appended"),o(" icon.")],-1),le=l("p",null,[o("Use "),l("code",null,"chips"),o(" prop to make selected option as chip.")],-1),se=l("p",null,[o("Custom props can be passed directly to "),l("code",null,"v-menu"),o(" using "),l("code",null,"menuProps"),o(" prop.")],-1),oe=l("p",null,[o("Use "),l("code",null,"multiple"),o(" prop to select multiple option.")],-1),ie=l("p",null,[o("The "),l("code",null,"selection"),o(" slot can be used to customize the way selected values are shown in the input.")],-1),je={__name:"select",setup(u){return(t,i)=>{const c=L,s=G,n=H,v=R,S=M,C=U,z=T,g=j,h=N,A=$;return p(),d(V,null,{default:a(()=>[e(r,{cols:"12",md:"6"},{default:a(()=>[e(s,{title:"Basic",code:P},{default:a(()=>[X,e(c)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:a(()=>[e(s,{title:"Density",code:E},{default:a(()=>[Z,e(n)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12"},{default:a(()=>[e(s,{title:"Variant",code:W},{default:a(()=>[ee,e(v)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:a(()=>[e(s,{title:"Custom text and value",code:I},{default:a(()=>[te,e(S)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:a(()=>[e(s,{title:"Icons",code:q},{default:a(()=>[ae,e(C)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:a(()=>[e(s,{title:"Chips",code:Y},{default:a(()=>[le,e(z)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:a(()=>[e(s,{title:"Menu Props",code:Q},{default:a(()=>[se,e(g)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:a(()=>[e(s,{title:"Multiple",code:J},{default:a(()=>[oe,e(h)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:a(()=>[e(s,{title:"Selection slot",code:K},{default:a(()=>[ie,e(A)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{je as default};
