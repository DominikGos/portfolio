<script setup lang="ts">
import { ref } from 'vue';
import MainSectionTitle from '../MainSectionTitle.vue';
import ProjectCard from '../Projects/ProjectCard.vue';
import type Project from '@/Interfaces/Project';
import { store } from '@/Store';

const projects = ref<Project[]>([
  {
    title: 'realtime chat front-end',
    description: 'This is the app where you can send messages with other people. Share photos or videos. Manage your own profile.',
    imagePath: '/projects/Zrzut ekranu 2023-11-21 181755.png',
    githubLink: 'https://github.com/DominikGos/realtime-chat-frontend',
    technologies: 'vue, typescript, tailwind',
    mediaPaths: []
  },
 
]);

function showDetails(project: Project): void {
  store.commit('setProject', project);
}
</script>

<template>
  <div class="flex flex-col gap-8" id="projects">
    <header>
      <MainSectionTitle>
        My projects
      </MainSectionTitle>
    </header>
    <main class="flex flex-col p-3 rounded-3xl bg-white gap-8 xl:flex-wrap xl:flex-row xl:justify-center">
      <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" @click="showDetails(project)" />
    </main>
  </div>
</template>