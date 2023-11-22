<script setup lang="ts">
import ProfileCard from './Components/Profile/ProfileCard.vue';
import MobileNavbar from './Components/Navbar/MobileNavbar.vue';
import DesktopNavbar from './Components/Navbar/DesktopNavbar.vue';
import MainSectionWrapper from './Components/MainSection/MainSectionWrapper.vue';
</script>

<template>
  <MobileNavbar />
  <div
    class="flex flex-col items-center w-screen h-screen gap-10 md:p-5 lg:flex-row lg:justify-start lg:items-start xl:p-10">
    <ProfileCard />
    <main class="flex flex-col w-full gap-10 items-center lg:w-8/12">
      <DesktopNavbar />
      <MainSectionWrapper>
      </MainSectionWrapper>
    </main>
  </div>
</template>