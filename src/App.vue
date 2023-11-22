<script setup lang="ts">
import ProfileCard from './Components/Profile/ProfileCard.vue';
import MobileNavbar from './Components/Navbar/MobileNavbar.vue';
import DesktopNavbar from './Components/Navbar/DesktopNavbar.vue';
</script>

<template>
  <MobileNavbar />
  <div class="flex flex-col items-center w-screen h-screen gap-10 md:p-5 lg:flex-row lg:justify-start lg:items-start">
    <ProfileCard />
    <main class="flex flex-col gap-5 p-3 items-center w-8/12">
      <DesktopNavbar />
    </main>
  </div>
</template>