<script setup lang="ts">
import AboutMe from '@/Components/MainSection/AboutMe/AboutMe.vue';
import { store } from '@/Store';
</script>

<template>
  <div class="bg-white rounded-3xl p-6 w-full shadow-lg">
    <Transition name="fade" appear>
      <AboutMe v-if="store.state.mainSection.innerComponentName === 'AboutMe'" />
    </Transition> 
  </div>
</template>