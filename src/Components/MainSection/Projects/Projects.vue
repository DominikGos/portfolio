<script setup lang="ts">
import { ref } from 'vue';
import MainSectionTitle from '../MainSectionTitle.vue';
import ProjectCard from '../Projects/ProjectCard.vue';
import type Project from '@/Interfaces/Project';

const projects = ref<Project[]>([
  {
    title: 'Realtime chat',
    description: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum',
    imagePath: '/projects/Zrzut ekranu 2023-11-21 181755.png',
    githubLink: 'https://github.com/DominikGos/realtime-chat-frontend',
    mediaPaths: []
  },
  {
    title: 'Realtime chat',
    description: 'Lorem ipsum lorem ipsum',
    imagePath: '/projects/Zrzut ekranu 2023-11-21 181755.png',
    githubLink: 'https://github.com/DominikGos/realtime-chat-frontend',
    mediaPaths: []
  },
  {
    title: 'Realtime chat',
    description: 'Lorem ipsum lorem ipsum',
    imagePath: '/projects/Zrzut ekranu 2023-11-21 181755.png',
    githubLink: 'https://github.com/DominikGos/realtime-chat-frontend',
    mediaPaths: []
  },
  {
    title: 'Realtime chat',
    description: 'Lorem ipsum lorem ipsum',
    imagePath: '/projects/Zrzut ekranu 2023-11-21 181755.png',
    githubLink: 'https://github.com/DominikGos/realtime-chat-frontend',
    mediaPaths: []
  },
  {
    title: 'Realtime chat',
    description: 'Lorem ipsum lorem ipsum',
    imagePath: '/projects/Zrzut ekranu 2023-11-21 181755.png',
    githubLink: 'https://github.com/DominikGos/realtime-chat-frontend',
    mediaPaths: []
  },
]);
</script>

<template>
  <div class="flex flex-col gap-8" id="projects">
    <header>
      <MainSectionTitle>
        My projects
      </MainSectionTitle>
    </header>
    <main class="flex flex-col p-3 rounded-3xl bg-white gap-8 xl:flex-wrap xl:flex-row justify-center">
      <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
    </main>
  </div>
</template>