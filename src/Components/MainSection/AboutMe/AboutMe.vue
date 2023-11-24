<script setup lang="ts">
import AboutMeItem from './AboutMeItem.vue';
import MainSectionTitle from '../MainSectionTitle.vue';
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
    name: 'TypeScript',
    iconPath: '/icons/typescript.svg'
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
      <MainSectionTitle>
        About me
      </MainSectionTitle>
    </header>
    <p class="pb-8 border-b-2 border-gray-200 text-gray-500">
      I am Dominik. I have always enjoyed creating. I am interested in art and astronomy. Programming has, in a sense,
      given me the opportunity to bring it all together. I like exploring new technologies because it brings me a lot of
      joy and satisfaction. I am persistent in what I do, and solving complex problems does not pose a challenge for me.
      Currently, I am working on projects using Laravel, Vue, Typescript and Tailwind.
    </p>
    <MainSectionTitle>
      Technologies
    </MainSectionTitle>
    <div class="flex flex-col gap-10 p-5 rounded-3xl bg-gray-100" id="technologies">
      <TransitionGroup :css="false" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave" appear>
        <AboutMeItem v-for="(technology, index) in technologies" :data-index="index" :iconPath="technology.iconPath"
          :key="index">
          <p>{{ technology.name }}</p>
        </AboutMeItem>
      </TransitionGroup>
    </div>
  </div>
</template>