<template>
  <Transition name="fade">
    <div
      v-if="loadingState.isLoading"
      class="fixed top-0 left-0 right-0 h-[2px] z-[60] overflow-hidden pointer-events-none transition-opacity duration-300"
      :class="{ 'opacity-0': !loadingState.isTransitioning }"
    >
      <div class="h-full bg-primary-500 animate-progress"></div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const loadingState = useLoadingState()
const appConfig = useAppConfig()
const delay = computed(() => appConfig.pageTransitionDelay as number)
const animationDuration = computed(() => `${delay.value}ms`)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.animate-progress {
  width: 0%;
  animation-name: progress-grow;
  animation-duration: v-bind(animationDuration);
  animation-timing-function: cubic-bezier(0.1, 0.8, 0.25, 1);
  animation-fill-mode: forwards;
}

@keyframes progress-grow {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>
