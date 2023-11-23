<script setup lang="ts">
import AboutMeItem from './AboutMeItem.vue';
</script>

<template>
  <div class="flex flex-col gap-7">
    <header>
      <h3 class="text-4xl font-medium">About me</h3>
    </header>
    <p class="pb-8 border-b-2 border-gray-200 text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra quis mi fringilla porta. Nullam pellentesque,
      diam ut lobortis porta, massa ipsum egestas purus, at ultrices libero diam in dolor. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Nullam orci libero, euismod ac auctor a
    </p>
    <h3 class="text-4xl font-medium">Technologies</h3>
    <div class="flex flex-col gap-8 p-5 rounded-3xl bg-gray-100">
      <AboutMeItem :iconPath="'/icons/laravel.svg'">
        <p>Laravel</p>
      </AboutMeItem>
      <AboutMeItem :iconPath="'/icons/php.svg'">
        <p>PHP</p>
      </AboutMeItem>
      <AboutMeItem :iconPath="'/icons/js.svg'">
        <p>Java Script</p>
      </AboutMeItem>
      <AboutMeItem :iconPath="'/icons/vue.svg'">
        <p>Vue</p>
      </AboutMeItem>
      <AboutMeItem :iconPath="'/icons/bootstrap.svg'">
        <p>Bootstrap</p>
      </AboutMeItem>
      <AboutMeItem :iconPath="'/icons/tailwind-css.svg'">
        <p>Tailwind</p>
      </AboutMeItem>
      <AboutMeItem :iconPath="'/icons/sass.svg'">
        <p>Sass</p>
      </AboutMeItem>
      <AboutMeItem :iconPath="'/icons/css.svg'">
        <p>CSS</p>
      </AboutMeItem>
      <AboutMeItem :iconPath="'/icons/symfony.svg'">
        <p>Symfony</p>
      </AboutMeItem>
      <AboutMeItem :iconPath="'/icons/docker.svg'">
        <p>Docker</p>
      </AboutMeItem>
    </div>
  </div>
</template>