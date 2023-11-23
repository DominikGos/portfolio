<script setup lang="ts">
import type Project from '@/Interfaces/Project';
import { store } from '@/Store';
import { computed, ref, watch } from 'vue';

const showModal = ref<boolean>(false);
const project = ref<Project>();

watch(
  () => store.state.projectModal.project,
  (projectValue: Project) => {
    if( ! projectValue) {
      return;
    }

    project.value = projectValue;
    showModal.value = true;
  }
)

const backgroundClasses = computed<string>(() => {
  let classes: string = 'w-screen h-screen fixed top-0 left-0 bg-black z-50 p-3 overflow-y-auto transition-all duration-500 ';

  if(showModal.value === true) {
    classes += 'bg-opacity-50 visible';
  } else {
    classes += 'bg-opacity-0 invisible';
  }

  return classes;
});

function closeModal(): void {
  store.commit('setProject', null);
  showModal.value = false;
}
</script>

<template>
  <div :class="backgroundClasses">
    <Transition name="slide" appear>
      <div v-if="showModal && project" class="flex flex-col gap-5 p-4 w-full bg-white rounded-xl m-auto md:p-6 md:max-w-lg lg:max-w-2xl xl:max-w-6xl">
        <header class="flex items-center relative">
          <h3 class="font-medium text-2xl">{{ project.title }}</h3>
          <div class="absolute right-3">
            <button @click="closeModal" class="border-2 p-2 rounded-full flex items-center justify-center w-8 h-8">
              <i class="fa-solid fa-xmark text-xl"></i>
            </button>
          </div>
        </header>
        <main class="flex flex-col gap-3">
          <div class="flex flex-wrap justify-between gap-8">
            <div class="flex gap-3 items-center w-1/4">
              <i class="fa-brands fa-github"></i>
              <a :href="project.githubLink" target="_blank">Github</a>
            </div>
            <div class="flex gap-3 items-center w-2/4">
              <i class="fa-solid fa-code"></i>
              <p>Laravel </p>
            </div>
          </div>
          <p class="text-gray-500">
            {{ project.description }}
          </p>
          <div class="flex flex-col gap-3 mt-5">
            <div class="rounded-xl shadow-md">
              <img :src="project.imagePath" :alt="project.title" class="rounded-xl">
            </div>
          </div>
        </main>
      </div>
    </Transition>
  </div>
</template>