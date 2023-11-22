<script lang="ts" setup>
import NavButton from './NavButton.vue';
</script>

<template>
  <NavButton :active="true">
    <p>About me</p>
  </NavButton>
  <NavButton>
    <p>Projects</p>
  </NavButton>
</template>