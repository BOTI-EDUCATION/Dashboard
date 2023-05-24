<!-- eslint-disable vue/component-api-style -->
<!-- eslint-disable vue/component-api-style -->
<!-- eslint-disable vue/no-empty-component-block -->
<!-- eslint-disable vue/component-api-style -->
<template>
  <!--
    <select
    v-model="cycle"
    style="width: 100%;"
    @change="changeniv"
    >
    <option
    v-for="(item, index) in cycles"
    :key="index"
    :value="item"
    />
    </select> 
  -->
  
  <VSelectt
    v-model="cycle"
    :options="cycles"
    :on-change="changeNN"
  />
</template>

<script>
export default {
  // eslint-disable-next-line vue/component-api-style
  data() {
    return {
      noteEv : null,
      cycles : [
        { label: 'Canada', code: 'ca' },
        { label: 'maroc', code: 'mr' },
      ],
      cycle : { label: 'Canada', code: 'ca' },
    }
  },
  // eslint-disable-next-line vue/component-api-style
  mounted() {
    // this.cycle = this.cycles[0]
  },
  // eslint-disable-next-line vue/component-api-style
  methods: {
    changeniv(){
      alert(this.cycle)
    },
    changeNN(){
      alert(this.cycle)
    },
  },
}
</script>

<style>
h3 {
  background: greenyellow;
}
</style>
