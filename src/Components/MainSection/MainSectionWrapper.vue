<script setup lang="ts">
</script>

<template>
  <div class="bg-white rounded-3xl p-5 w-full">
    <Transition name="fade" appear>
      <slot></slot>
    </Transition>
  </div>
</template>