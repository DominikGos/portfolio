<script setup lang="ts">
import AboutMe from '@/Components/MainSection/AboutMe/AboutMe.vue';
import Projects from '@/Components/MainSection/Projects/Projects.vue';
import { store } from '@/Store';
</script>

<template>
  <div class="bg-white rounded-3xl p-6 w-full shadow-lg transition-all duration-300 xl:max-w-screen-lg min-h-[45rem]">
    <Transition name="fade" appear mode="out-in">
      <AboutMe v-if="store.state.mainSection.innerComponentName === 'AboutMe'" />
      <Projects v-else-if="store.state.mainSection.innerComponentName === 'Projects'" />
    </Transition> 
  </div>
</template>