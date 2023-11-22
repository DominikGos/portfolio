<script setup lang="ts">
import ProfileCard from './Components/Profile/ProfileCard.vue';
import MobileNavbar from './Components/Navbar/MobileNavbar.vue';
</script>

<template>
  <MobileNavbar />
  <div class="flex flex-col items-center w-screen h-screen md:p-5 lg:flex-row lg:justify-start lg:items-start">
    <ProfileCard />
  </div>
</template>