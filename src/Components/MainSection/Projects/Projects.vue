<script setup lang="ts">
import { ref } from 'vue';
import MainSectionTitle from '../MainSectionTitle.vue';
import ProjectCard from '../Projects/ProjectCard.vue';
import type Project from '@/Interfaces/Project';
import { store } from '@/Store';

const projects = ref<Project[]>([
  {
    title: 'Realtime-chat-frontend',
    description: 'This is the app where you can send messages with other people. Share photos or videos. Manage your own profile. ',
    images: [
      '/projects/realtime-chat-frontend/Zrzut ekranu 2023-11-21 181755.png', 
      '/projects/realtime-chat-frontend/Zrzut ekranu 2023-11-21 180144.png', 
      '/projects/realtime-chat-frontend/Zrzut ekranu 2023-11-21 181831.png',
      '/projects/realtime-chat-frontend/Zrzut ekranu 2023-11-21 181857.png'
    ],
    githubLink: 'https://github.com/DominikGos/realtime-chat-frontend',
    technologies: 'vue, typescript, tailwind',
  },
  {
    title: 'Realtime-chat-backend',
    description: 'This is the "rest API" for the chat project. With this application you can chat with other people. Manage your own profile. Sending files to other users. When a user sends a request to store a message, the API dispatch a "Message Sent" event. These events are broadcast, so the front-end application has the ability to listen to these events and allows users to conduct conversations in real time.',
    images: [
      '/projects/realtime-chat-backend/Zrzut ekranu 2023-11-24 222155.png', 
      '/projects/realtime-chat-backend/Zrzut ekranu 2023-11-24 222239.png', 
      '/projects/realtime-chat-backend/Zrzut ekranu 2023-11-24 222307.png',
      '/projects/realtime-chat-backend/Zrzut ekranu 2023-11-24 222350.png'
    ],
    githubLink: 'https://github.com/DominikGos/realtime-chat-backend',
    technologies: 'laravel, pusher',
  },
  {
    title: 'Todo-list',
    description: 'It is a simple application for managing user tasks. I made this project because I wanted to learn how to make single page application with inertia and tailwind.',
    images: [
      'https://raw.githubusercontent.com/DominikGos/todo-list/cb8fcf71513b08cb909d8097fa3a2bc476197b1d/public/images/Zrzut%20ekranu%202023-09-17%20170047.png',
      'https://raw.githubusercontent.com/DominikGos/todo-list/cb8fcf71513b08cb909d8097fa3a2bc476197b1d/public/images/Zrzut%20ekranu%202023-09-17%20165713.png', 
      'https://raw.githubusercontent.com/DominikGos/todo-list/cb8fcf71513b08cb909d8097fa3a2bc476197b1d/public/images/Zrzut%20ekranu%202023-09-17%20165933.png', 
    ],
    githubLink: 'https://github.com/DominikGos/todo-list',
    technologies: 'laravel, vue, inertia, tailwind',
  },
  {
    title: 'Forum',
    description: 'It is a simple forum application where you can post threads and take part in discussions.',
    images: [
      '/projects/forum/Zrzut ekranu 2023-11-24 225158.png',
      '/projects/forum/Zrzut ekranu 2023-11-24 225259.png',
      '/projects/forum/Zrzut ekranu 2023-11-24 225316.png',
      '/projects/forum/Zrzut ekranu 2023-11-24 225359.png',
      '/projects/forum/Zrzut ekranu 2023-11-24 225428.png',
    ],
    githubLink: 'https://github.com/DominikGos/forum',
    technologies: 'laravel, bootstrap',
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