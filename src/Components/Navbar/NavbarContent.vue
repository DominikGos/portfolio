<script lang="ts" setup>
import NavButton from './NavButton.vue';
import { store } from '@/Store';

function setMainSectionComponentName(name: string): void {
  store.commit('setInnerComponentName', name);
}

function isActive(sectionName: string): boolean {
  return store.state.mainSection.innerComponentName === sectionName;
}
</script>

<template>
  <NavButton @click="setMainSectionComponentName('AboutMe')" :active="isActive('AboutMe')">
    <p>About me</p>
  </NavButton>
  <NavButton @click="setMainSectionComponentName('Projects')" :active="isActive('Projects')">
    <p>Projects</p>
  </NavButton>
</template>