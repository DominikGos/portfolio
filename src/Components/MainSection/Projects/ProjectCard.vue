<script setup lang="ts">
import type Project from '@/Interfaces/Project';

const props = defineProps<{
  project: Project
}>();
</script>

<template>
  <div class="p-5 rounded-xl bg-gray-100 xl:w-[calc(50%-20px)]">
    <div class="overflow-hidden rounded-xl">
      <img :src="project.imagePath" :alt="project.title"
        class="hover:scale-125 transition-all duration-500 cursor-pointer delay-150">
    </div>
    <div class="pt-3">
      <h3 class="font-medium text-xl">{{ project.title }}</h3>
      <p class="text-gray-500 truncate w-full">{{ project.description }}</p>
    </div>
  </div>
</template>