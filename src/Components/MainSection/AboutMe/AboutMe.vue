<script setup lang="ts">
import AboutMeItem from './AboutMeItem.vue';
import { ref } from 'vue';
import { onBeforeEnter, onEnter, onLeave } from '@/Transitions/ListTransition';

interface Technology {
  name: string,
  iconPath: string,
}

const technologies = ref<Technology[]>([
  {
    name: 'Laravel',
    iconPath: '/icons/laravel.svg'
  },
  {
    name: 'PHP',
    iconPath: '/icons/php.svg'
  },
  {
    name: 'Java Script',
    iconPath: '/icons/js.svg'
  },
  {
    name: 'Vue',
    iconPath: '/icons/vue.svg'
  },
  {
    name: 'Bootstrap',
    iconPath: '/icons/bootstrap.svg'
  },
  {
    name: 'Tailwind',
    iconPath: '/icons/tailwind-css.svg'
  },
  {
    name: 'Sass',
    iconPath: '/icons/sass.svg'
  },
  {
    name: 'CSS',
    iconPath: '/icons/css.svg'
  },
  {
    name: 'Symfony',
    iconPath: '/icons/symfony.svg'
  },
  {
    name: 'Docker',
    iconPath: '/icons/docker.svg'
  },
]);
</script>

<template>
  <div class="flex flex-col gap-7" id="aboutMe">
    <header>
      <h3 class="text-4xl font-medium">About me</h3>
    </header>
    <p class="pb-8 border-b-2 border-gray-200 text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra quis mi fringilla porta. Nullam pellentesque,
      diam ut lobortis porta, massa ipsum egestas purus, at ultrices libero diam in dolor. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Nullam orci libero, euismod ac auctor a
    </p>
    <h3 class="text-4xl font-medium">Technologies</h3>
    <div class="flex flex-col gap-10 p-5 rounded-3xl bg-gray-100" id="technologies">
      <TransitionGroup :css="false" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave" appear>
        <AboutMeItem v-for="(technology, index) in technologies" :data-index="index" :iconPath="technology.iconPath" :key="index">
          <p>{{ technology.name }}</p>
        </AboutMeItem>
      </TransitionGroup>
    </div>
  </div>
</template>