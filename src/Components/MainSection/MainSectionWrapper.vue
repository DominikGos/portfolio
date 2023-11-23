<script setup lang="ts">
</script>

<template>
  <div class="bg-white rounded-3xl p-6 w-full shadow-lg">
    <Transition name="fade" appear>
      <slot></slot>
    </Transition> 
  </div>
</template>