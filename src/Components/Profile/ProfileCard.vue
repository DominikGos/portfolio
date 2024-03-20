<script setup lang="ts">
import ProfileCardItem from './ProfileCardItem.vue';
import SquareWrapper from '../SquareWrapper.vue';
</script>

<template>
  <div class="flex flex-col rounded-3xl p-5 bg-white mt-8 w-full gap-8 max-md:landscape:w-5/6 lg:w-96 shadow-lg">
    <header class="text-center">
      <p class="font-medium text-2xl">Dominik Gos</p>
      <p class="text-small text-gray-500">Full stack developer.</p>
    </header>
    <main class="flex flex-col gap-3 p-3 rounded-xl bg-gray-100">
      <ProfileCardItem>
        <SquareWrapper><i class="fa-solid fa-envelope text-yellow-500"></i></SquareWrapper> 
        <p>dominikgos3@gmail.com</p>
      </ProfileCardItem>
      <ProfileCardItem>
        <a target="_blank" href="https://www.google.pl/maps/place/Kielce/@50.8541194,20.5332415,12z/data=!3m1!4b1!4m6!3m5!1s0x47178818af891105:0x5025d8b8c0cdcdf3!8m2!3d50.8660773!4d20.6285676!16zL20vMGp4MF8?entry=ttu">
          <SquareWrapper><i class="fa-solid fa-location-dot text-green-700"></i></SquareWrapper> 
        </a>
        <a target="_blank" href="https://www.google.pl/maps/place/Kielce/@50.8541194,20.5332415,12z/data=!3m1!4b1!4m6!3m5!1s0x47178818af891105:0x5025d8b8c0cdcdf3!8m2!3d50.8660773!4d20.6285676!16zL20vMGp4MF8?entry=ttu">
          Kielce
        </a>
      </ProfileCardItem>
      <ProfileCardItem>
        <a href="https://github.com/DominikGos" target="_blank">
          <SquareWrapper><i class="fa-brands fa-github"></i></SquareWrapper> 
        </a>
        <a href="https://github.com/DominikGos" target="_blank">Github</a>
      </ProfileCardItem>
      <ProfileCardItem>
        <a href="https://www.linkedin.com/in/dominik-gos-29b301263/" target="_blank">
          <SquareWrapper><i class="fa-brands fa-linkedin text-blue-500"></i></SquareWrapper> 
        </a>
        <a href="https://www.linkedin.com/in/dominik-gos-29b301263/" target="_blank">Linkedin</a>
      </ProfileCardItem>
    </main>
  </div>
</template>