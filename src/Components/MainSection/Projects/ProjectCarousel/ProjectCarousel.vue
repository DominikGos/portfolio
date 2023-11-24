<script lang="ts" setup>
import { ref } from 'vue';
import RoundedButton from '@/Components/Buttons/RoundedButton.vue';
import SwitchButtonWrapper from './SwitchButtonWrapper.vue';

const props = defineProps<{
  images: string[]
}>();

const imageIndex = ref<number>(0);
const imagesLength: number = props.images.length;

function increaseImageIndex(): void {
  if (imageIndex.value + 1 === imagesLength) {
    imageIndex.value = 0;
  } else {
    imageIndex.value++;
  }
}

function decreaseImageIndex(): void {
  if (imageIndex.value - 1 === -1) {
    imageIndex.value = imagesLength - 1;
  } else {
    imageIndex.value--;
  }
}

</script>
<template>
  <div class="flex rounded-xl overflow-hidden shadow-md relative">
    <div class="absolute right-2 top-2 p-3 rounded-xl bg-white border-2 shadow-md z-50">
      {{ imageIndex + 1 }} / {{ imagesLength }}
    </div>
    <SwitchButtonWrapper class="left-0">
      <RoundedButton @click="decreaseImageIndex">
        <i class="fa-solid fa-angle-left"></i>
      </RoundedButton>
    </SwitchButtonWrapper>
    <Transition name="slide" mode="out-in">
      <img :src="images[imageIndex]" :key="imageIndex">
    </Transition>
    <SwitchButtonWrapper class="right-0">
      <RoundedButton @click="increaseImageIndex">
        <i class="fa-solid fa-angle-right"></i>
      </RoundedButton>
    </SwitchButtonWrapper>
  </div>
</template>