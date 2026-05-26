<script setup lang="ts">
import { ref, watch } from 'vue'

const route = useRoute()
const isMobileMenuOpen = ref(false)
const links = [
  { label: 'Download', to: '/download' },
  { label: 'Instructions', to: '/install' }
]

// Auto-close mobile menu on route change
watch(() => route.fullPath, () => {
  isMobileMenuOpen.value = false
})
</script>

<template>
  <div class="min-h-screen bg-zinc-50 text-zinc-900 flex flex-col font-body">
    <header class="bg-zinc-900 text-white py-4 px-6 sticky top-0 z-50 shadow-md">
      <div class="max-w-6xl mx-auto flex justify-between items-center">
        <NuxtLink to="/" class="hover:opacity-80 transition-opacity">
          <img src="https://twohoursonelife.com/wp-content/uploads/2023/07/logo.webp" alt="2HOL" class="h-8 object-contain" />
        </NuxtLink>
        
        <div class="hidden md:flex items-center space-x-6 font-medium">
          <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="hover:text-[#ffbb35] transition-colors">{{ link.label }}</NuxtLink>
          <UButton 
            to="/download"
            class="bg-[#ffbb35] text-zinc-900 hover:bg-[#ffbb35] transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-[#ffbb35]/20 rounded px-6 py-2 font-bold flex items-center gap-2"
          >
            Play Now
          </UButton>
        </div>

        <div class="md:hidden">
          <UButton color="white" variant="ghost" :icon="isMobileMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'" @click="isMobileMenuOpen = !isMobileMenuOpen" class="hover:text-[#ffbb35]" />
        </div>
      </div>
      
      <div v-if="isMobileMenuOpen" class="md:hidden bg-zinc-800 absolute top-full left-0 right-0 border-t border-zinc-700 flex flex-col px-6 py-4 space-y-4 shadow-xl">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="block pb-2 border-b border-zinc-700 hover:text-[#ffbb35]">{{ link.label }}</NuxtLink>
        <UButton 
          to="/download"
          class="bg-[#ffbb35] text-zinc-900 hover:bg-[#ffbb35] transition-transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-[#ffbb35]/20 rounded py-3 font-bold flex items-center justify-center gap-2 w-full mt-2"
        >
          Play Now
        </UButton>
      </div>
    </header>

    <main class="flex-grow">
      <slot />
    </main>

    <footer class="bg-zinc-900 text-zinc-400 py-12 px-6 border-t border-zinc-800 text-center">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <NuxtLink to="/" class="group">
          <img src="https://twohoursonelife.com/wp-content/uploads/2023/07/icon.webp" alt="2HOL Icon" class="w-10 h-10 object-contain grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100" />
        </NuxtLink>
        <p class="text-sm">
          © {{ new Date().getFullYear() }} Two Hours One Life. An open-source project.
        </p>
        <div class="flex gap-4 font-medium">
          <a href="https://github.com/twohoursonelife" target="_blank" class="hover:text-white transition-colors">GitHub</a>
          <a href="https://discord.com/" target="_blank" class="hover:text-white transition-colors">Discord</a>
        </div>
      </div>
    </footer>
  </div>
</template>