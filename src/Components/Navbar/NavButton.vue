<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  active?: boolean
}>();

const classes = computed<string>(() => {
  let classes: string = 'flex gap-2 items-center p-3 border-b-2 border-t-2 ';
  
  if(props.active) {
    classes += 'text-blue-500 border-b-blue-400 border-t-transparent';
  } else {
    classes += 'text-gray-400 border-transparent';
  }

  return classes;
});

</script>

<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>