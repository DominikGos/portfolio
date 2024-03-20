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
    name: 'Vue',
    iconPath: '/icons/vue.svg'
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
    name: 'Mysql',
    iconPath: '/icons/mysql-svgrepo-com.svg'
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
    name: 'HTML',
    iconPath: '/icons/html-svgrepo-com.svg'
  },
  {
    name: 'Windows',
    iconPath: '/icons/windows-applications-svgrepo-com.svg'
  },
  {
    name: 'Linux',
    iconPath: '/icons/linux-svgrepo-com.svg'
  },
  {
    name: 'Docker',
    iconPath: '/icons/docker.svg'
  },
  {
    name: 'AWS',
    iconPath: '/icons/aws-svgrepo-com.svg'
  },
  {
    name: 'Github',
    iconPath: '/icons/github-142-svgrepo-com.svg'
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
      Hi, I am Dominik. I am currently studying computer science at the University of Kielce. I am looking for a job as
      a full-stack developer. My favorite stack is Laravel and Vue, but I am open to new technologies because I like to
      develop my skills and knowledge. Below you can see most of the technologies I have dealt with. Select "Projects"
      in the navigation bar to see these technologies in action.
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