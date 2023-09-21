<script setup>
let base_link = window.document
  .querySelector("meta[name=school]")
  .getAttribute("content");
</script>
<template>
  <img
    style="width: 100%; height: 100%; object-fit: contain"
    v-bind:src="base_link + 'assets/box.png'"
    alt="aaa"
  />
</template>
