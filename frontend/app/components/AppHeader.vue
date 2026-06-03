<script setup lang="ts">
import { ref, watch } from 'vue'

const route = useRoute()
const isMobileMenuOpen = ref(false)

const links = [
  { label: 'Wiki', title: 'Community Wiki', to: 'https://twohoursonelife.fandom.com/', target: '_blank' },
  { label: 'Twotech', title: 'Visual crafting guide', to: 'https://twotech.twohoursonelife.com/', target: '_blank' },
  { label: 'Discord', title: 'Community', to: 'https://discord.gg/Jd9Es3f', target: '_blank' },
  { label: 'Download', title: 'Download the game', to: '/first-time-playing' },
]

// Auto-close mobile menu on route change
watch(() => route.fullPath, () => {
  isMobileMenuOpen.value = false
})
</script>

<template>
  <header class="bg-zinc-900 text-white py-4 px-6 sticky top-0 z-50 shadow-md">
    <div class="max-w-6xl mx-auto flex justify-between items-center">
      <NuxtLink to="/" class="hover:opacity-80 transition-opacity">
        <img src="/img/logo.png" alt="2HOL" class="h-10 object-contain" />
      </NuxtLink>
      
      <div class="hidden md:flex items-center space-x-4 font-medium">
        <NuxtLink 
          v-for="link in links" 
          :key="link.to" 
          :to="link.to" 
          :target="link.target" 
          :title="link.title"
          class="hover:text-primary-500 transition-colors w-20 text-center"
        >
          {{ link.label }}
        </NuxtLink>
        <UButton 
          to="/first-time-playing"
        >
          Play Now
        </UButton>
      </div>

      <div class="md:hidden">
        <UButton variant="ghost" :icon="isMobileMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'" @click="isMobileMenuOpen = !isMobileMenuOpen" class="bg-zinc-800 hover:bg-zinc-700 w-10 h-10 p-0! text-primary-500! hover:text-primary-400!" />
      </div>
    </div>
    
    <div v-if="isMobileMenuOpen" class="md:hidden bg-zinc-800 absolute top-full left-0 right-0 border-t border-zinc-700 flex flex-col px-6 py-3 space-y-3 shadow-xl">
      <NuxtLink 
        v-for="link in links" 
        :key="link.to" 
        :to="link.to" 
        :target="link.target"
        :title="link.title"
        class="block pb-1.5 border-b border-zinc-700 text-center hover:text-primary-500"
      >
        {{ link.label }}
      </NuxtLink>
      <UButton 
        to="/first-time-playing"
        class="w-full mt-2"
      >
        Play Now
      </UButton>
    </div>
  </header>
</template>
