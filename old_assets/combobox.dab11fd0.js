import{V as c}from"./VCombobox.70c273af.js";import{k as d,o as V,b,q as r,C as u,O as y,am as I,w as s,p as t,D as i,m as a,x as C}from"./index.bb11c4a0.js";import{a as P,b as D}from"./VList.46357442.js";import{a as n,V as _}from"./VRow.af24397e.js";import{V as w}from"./VChip.a6761daf.js";import{V as U}from"./VAvatar.8f37845b.js";import{_ as L}from"./AppCardCode.180e59a8.js";import"./VSelect.9962f6d4.js";import"./VTextField.bd2cab46.js";/* empty css                   */import"./VField.2902781c.js";import"./index.7ea337b7.js";import"./VInput.022d9e09.js";import"./router.f40f8152.js";import"./VImg.34958778.js";import"./position.0d284abb.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.7daf2bc1.js";import"./dialog-transition.d8219c0c.js";import"./VMenu.20a9d99a.js";import"./scopeId.c2c81749.js";import"./VOverlay.729c1a86.js";import"./lazy.e0cc424a.js";import"./VCheckboxBtn.c3bc6935.js";import"./VSelectionControl.5fbdc2b9.js";import"./filter.7773fb98.js";import"./VDivider.03393ba8.js";import"./VBtn.ce311982.js";import"./vue.runtime.esm-bundler.7804bb0f.js";import"./VCard.6e17e770.js";const k={__name:"DemoComboboxClearable",setup(g){const e=d(["Vuetify","Programming"]),m=["Programming","Design","Vue","Vuetify"];return(p,l)=>(V(),b(c,{modelValue:r(e),"onUpdate:modelValue":l[0]||(l[0]=o=>u(e)?e.value=o:null),items:m,label:"Combobox",multiple:"",clearable:""},null,8,["modelValue"]))}},A=a("kbd",null,"enter",-1),R={__name:"DemoComboboxNoDataWithChips",setup(g){const e=["Gaming","Programming","Vue","Vuetify"],m=d(["Vuetify"]),p=d(null);return y(m,l=>{l.length>5&&I(()=>m.value.pop())}),(l,o)=>(V(),b(c,{modelValue:r(m),"onUpdate:modelValue":o[0]||(o[0]=f=>u(m)?m.value=f:null),"search-input":r(p),"onUpdate:searchInput":o[1]||(o[1]=f=>u(p)?p.value=f:null),items:e,"hide-selected":"","hide-no-data":!1,hint:"Maximum of 5 tags",label:"Add some tags",multiple:"","persistent-hint":""},{"no-data":s(()=>[t(P,null,{default:s(()=>[t(D,null,{default:s(()=>[i(' No results matching "'),a("strong",null,C(r(p)),1),i('". Press '),A,i(" to create a new one ")]),_:1})]),_:1})]),_:1},8,["modelValue","search-input"]))}},N={__name:"DemoComboboxMultiple",setup(g){const e=d(["Vuetify","Programming"]),m=["Programming","Design","Vue","Vuetify"];return(p,l)=>(V(),b(_,null,{default:s(()=>[t(n,{cols:"12"},{default:s(()=>[t(c,{modelValue:r(e),"onUpdate:modelValue":l[0]||(l[0]=o=>u(e)?e.value=o:null),items:m,label:"Select a favorite activity or create a new one",multiple:""},null,8,["modelValue"])]),_:1}),t(n,{cols:"12"},{default:s(()=>[t(c,{modelValue:r(e),"onUpdate:modelValue":l[1]||(l[1]=o=>u(e)?e.value=o:null),items:m,label:"I use chips",multiple:"",chips:""},null,8,["modelValue"])]),_:1}),t(n,{cols:"12"},{default:s(()=>[t(c,{modelValue:r(e),"onUpdate:modelValue":l[2]||(l[2]=o=>u(e)?e.value=o:null),label:"I'm readonly",chips:"",multiple:"",readonly:""},null,8,["modelValue"])]),_:1}),t(n,{cols:"12"},{default:s(()=>[t(c,{modelValue:r(e),"onUpdate:modelValue":l[3]||(l[3]=o=>u(e)?e.value=o:null),items:m,label:"I use selection slot",multiple:""},{selection:s(({item:o})=>[t(w,{class:"mt-1"},{default:s(()=>[t(U,{start:"",color:"primary"},{default:s(()=>[i(C(String(o.title).charAt(0).toUpperCase()),1)]),_:2},1024),i(" "+C(o.title),1)]),_:2},1024)]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},T={__name:"DemoComboboxVariant",setup(g){const e=d(["Programming"]),m=["Programming","Design","Vue","Vuetify"];return(p,l)=>(V(),b(_,null,{default:s(()=>[t(n,{cols:"12"},{default:s(()=>[t(c,{modelValue:r(e),"onUpdate:modelValue":l[0]||(l[0]=o=>u(e)?e.value=o:null),items:m,multiple:"",chips:"",variant:"solo",label:"solo"},null,8,["modelValue"])]),_:1}),t(n,{cols:"12"},{default:s(()=>[t(c,{modelValue:r(e),"onUpdate:modelValue":l[1]||(l[1]=o=>u(e)?e.value=o:null),multiple:"",chips:"",items:m,variant:"outlined",label:"Outlined"},null,8,["modelValue"])]),_:1}),t(n,{cols:"12"},{default:s(()=>[t(c,{modelValue:r(e),"onUpdate:modelValue":l[2]||(l[2]=o=>u(e)?e.value=o:null),multiple:"",chips:"",items:m,variant:"underlined",label:"Underlined"},null,8,["modelValue"])]),_:1}),t(n,{cols:"12"},{default:s(()=>[t(c,{modelValue:r(e),"onUpdate:modelValue":l[3]||(l[3]=o=>u(e)?e.value=o:null),multiple:"",chips:"",items:m,variant:"filled",label:"Filled"},null,8,["modelValue"])]),_:1}),t(n,{cols:"12"},{default:s(()=>[t(c,{modelValue:r(e),"onUpdate:modelValue":l[4]||(l[4]=o=>u(e)?e.value=o:null),multiple:"",chips:"",items:m,variant:"plain",label:"Plain"},null,8,["modelValue"])]),_:1})]),_:1}))}},$={__name:"DemoComboboxDensity",setup(g){const e=d(["Vuetify","Programming"]),m=["Programming","Design","Vue","Vuetify"];return(p,l)=>(V(),b(c,{modelValue:r(e),"onUpdate:modelValue":l[0]||(l[0]=o=>u(e)?e.value=o:null),items:m,label:"Combobox",density:"compact",multiple:""},null,8,["modelValue"]))}},S={__name:"DemoComboboxBasic",setup(g){const e=d("Programming"),m=["Programming","Design","Vue","Vuetify"];return(p,l)=>(V(),b(c,{modelValue:r(e),"onUpdate:modelValue":l[0]||(l[0]=o=>u(e)?e.value=o:null),items:m},null,8,["modelValue"]))}},j={ts:`<script lang="ts" setup>
const selectedItem = ref('Programming')
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VCombobox
    v-model="selectedItem"
    :items="items"
  />
</template>
`,js:`<script setup>
const selectedItem = ref('Programming')

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VCombobox
    v-model="selectedItem"
    :items="items"
  />
</template>
`},B={ts:`<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    clearable
  />
</template>
`,js:`<script setup>
const select = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    clearable
  />
</template>
`},M={ts:`<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    multiple
  />
</template>
`,js:`<script setup>
const select = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    multiple
  />
</template>
`},O={ts:`<script lang="ts" setup>
const selectedItem = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        label="Select a favorite activity or create a new one"
        multiple
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        label="I use chips"
        multiple
        chips
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        label="I'm readonly"
        chips
        multiple
        readonly
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        label="I use selection slot"
        multiple
      >
        <template #selection="{ item }">
          <VChip class="mt-1">
            <VAvatar
              start
              color="primary"
            >
              {{ String(item.title).charAt(0).toUpperCase() }}
            </VAvatar>
            {{ item.title }}
          </VChip>
        </template>
      </VCombobox>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedItem = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        label="Select a favorite activity or create a new one"
        multiple
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        label="I use chips"
        multiple
        chips
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        label="I'm readonly"
        chips
        multiple
        readonly
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        label="I use selection slot"
        multiple
      >
        <template #selection="{ item }">
          <VChip class="mt-1">
            <VAvatar
              start
              color="primary"
            >
              {{ String(item.title).charAt(0).toUpperCase() }}
            </VAvatar>
            {{ item.title }}
          </VChip>
        </template>
      </VCombobox>
    </VCol>
  </VRow>
</template>
`},W={ts:`<script lang="ts" setup>
const items = ['Gaming', 'Programming', 'Vue', 'Vuetify']
const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <VCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </VCombobox>
</template>
`,js:`<script setup>
const items = [
  'Gaming',
  'Programming',
  'Vue',
  'Vuetify',
]

const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <VCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </VCombobox>
</template>
`},F={ts:`<script lang="ts" setup>
const selectedItem = ref(['Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        chips
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="plain"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedItem = ref(['Programming'])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        chips
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="plain"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`},G=a("p",null,"With Combobox, you can allow a user to create new values that may not be present in a provided items list.",-1),q=a("p",null,[i(" You can use "),a("code",null,"Density"),i(" prop to reduce combobox height and lower max height of list items. Available options are: "),a("code",null,"default"),i(", "),a("code",null,"comfortable"),i(", and "),a("code",null,"compact"),i(". ")],-1),Y=a("p",null,[i("Use "),a("code",null,"solo"),i(", "),a("code",null,"outlined"),i(", "),a("code",null,"underlined"),i(", "),a("code",null,"filled"),i(" and "),a("code",null,"plain"),i(" options of "),a("code",null,"variant"),i(" prop to change the look of combobox. ")],-1),z=a("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1),E=a("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1),H=a("p",null,[i("Use "),a("code",null,"clearable"),i(" prop to clear combobox.")],-1),De={__name:"combobox",setup(g){return(e,m)=>{const p=S,l=L,o=$,f=T,v=N,h=R,x=k;return V(),b(_,{class:"match-height"},{default:s(()=>[t(n,{cols:"12",md:"6"},{default:s(()=>[t(l,{title:"Basic",code:j},{default:s(()=>[G,t(p)]),_:1},8,["code"])]),_:1}),t(n,{cols:"12",md:"6"},{default:s(()=>[t(l,{title:"Density",code:M},{default:s(()=>[q,t(o)]),_:1},8,["code"])]),_:1}),t(n,{cols:"12",md:"6"},{default:s(()=>[t(l,{title:"Variant",code:F},{default:s(()=>[Y,t(f)]),_:1},8,["code"])]),_:1}),t(n,{cols:"12",md:"6"},{default:s(()=>[t(l,{title:"Multiple",code:O},{default:s(()=>[z,t(v)]),_:1},8,["code"])]),_:1}),t(n,{cols:"12",md:"6"},{default:s(()=>[t(l,{title:"No data with chips",code:W},{default:s(()=>[E,t(h)]),_:1},8,["code"])]),_:1}),t(n,{cols:"12",md:"6"},{default:s(()=>[t(l,{title:"Clearable",code:B},{default:s(()=>[H,t(x)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{De as default};