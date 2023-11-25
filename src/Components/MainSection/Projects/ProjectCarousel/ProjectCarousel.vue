<script lang="ts" setup>
import { ref } from 'vue';
import RoundedButton from '@/Components/Buttons/RoundedButton.vue';
import SwitchButtonWrapper from './SwitchButtonWrapper.vue';

const props = defineProps<{
  images: string[],
  videos: string[],
}>();

interface CarouselItem {
  type: 'image' | 'video',
  path: string
}

const enum Transitions {
  slideToLeft = 'slide-to-left',
  slideToRight = 'slide-to-right',
}

const items = ref<CarouselItem[]>(setCarouselItems());
const currentTransition = ref<string>('slide-to-left');
const itemIndex = ref<number>(0);
const itemsLength: number = items.value.length;

function setCarouselItems(): CarouselItem[] {
  let imageItems: CarouselItem[] = [];
  let videoItems: CarouselItem[] = [];

  props.images.forEach((image: string) => {
    imageItems.push({
      path: image,
      type: 'image'
    });
  });

  props.videos.forEach((video: string) => {
    imageItems.push({
      path: video,
      type: 'video'
    });
  });

  return [...imageItems, ...videoItems];
}

function increaseItemIndex(): void {
  currentTransition.value = Transitions.slideToRight;

  if (itemIndex.value + 1 === itemsLength) {
    itemIndex.value = 0;
  } else {
    itemIndex.value++;
  }
}

function decreaseItemIndex(): void {
  currentTransition.value = Transitions.slideToLeft;

  if (itemIndex.value - 1 === -1) {
    itemIndex.value = itemsLength - 1;
  } else {
    itemIndex.value--;
  }
}

</script>
<template>
  <div class="flex justify-center transition-all duration-1000 rounded-xl overflow-hidden shadow-md relative bg-white">
    <div class="absolute right-2 top-2 p-3 rounded-xl bg-white border-2 shadow-md z-50">
      {{ itemIndex + 1 }} / {{ itemsLength }}
    </div>
    <SwitchButtonWrapper class="left-0">
      <RoundedButton @click="decreaseItemIndex">
        <i class="fa-solid fa-angle-left"></i>
      </RoundedButton>
    </SwitchButtonWrapper>
    <Transition :name="currentTransition" mode="out-in">
      <a :href="items[itemIndex].path" target="_blank" :key="itemIndex" class="flex justify-center items-center h-44 md:h-64 lg:h-80 xl:h-[35rem]">
        <img v-if="items[itemIndex].type === 'image'" :src="items[itemIndex].path" class="max-h-full max-w-full">
        <video v-else-if="items[itemIndex].type === 'video'" :src="items[itemIndex].path" autoplay loop controls
          class="max-h-full max-w-full"></video>
      </a>
    </Transition>
    <SwitchButtonWrapper class="right-0">
      <RoundedButton @click="increaseItemIndex">
        <i class="fa-solid fa-angle-right"></i>
      </RoundedButton>
    </SwitchButtonWrapper>
  </div>
</template>