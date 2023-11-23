<script setup lang="ts">
const props = defineProps<{
  iconPath: string,
}>();
</script>

<template>
  <div class="flex items-center gap-5 font-medium">
    <img :src="iconPath" alt="language icon" class="w-11 max-h-11">
    <slot></slot>
  </div>
</template>