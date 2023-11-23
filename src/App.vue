<script setup lang="ts">
import ProfileCard from './Components/Profile/ProfileCard.vue';
import MobileNavbar from './Components/Navbar/MobileNavbar.vue';
import DesktopNavbar from './Components/Navbar/DesktopNavbar.vue';
import MainSectionWrapper from './Components/MainSection/MainSectionWrapper.vue';
import ProjectModal from './Components/MainSection/Projects/ProjectModal.vue';
import { ref } from 'vue';
</script>

<template>
  <ProjectModal />
  <MobileNavbar />
  <div class="flex flex-col items-center gap-10 md:p-5 lg:flex-row lg:justify-center lg:items-start xl:p-10">
    <Transition name="slide" appear>
      <ProfileCard />
    </Transition>
    <main class="flex flex-col w-full gap-10 items-center lg:w-8/12 pb-5">
      <Transition name="slide" appear>
        <DesktopNavbar />
      </Transition>
      <Transition name="slide" appear>
        <MainSectionWrapper />
      </Transition>
    </main>
  </div>
</template>