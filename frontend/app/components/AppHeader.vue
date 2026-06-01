<script setup lang="ts">
import { ref, watch } from 'vue'

const route = useRoute()
const isMobileMenuOpen = ref(false)
const links = [
  { label: 'Twotech', to: 'https://twotech.twohoursonelife.com/' },
  { label: 'Discord', to: 'https://discord.gg/Jd9Es3f' },
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
        <img src="/logo.png" alt="2HOL" class="h-10 object-contain" />
      </NuxtLink>
      
      <div class="hidden md:flex items-center space-x-6 font-medium">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="hover:text-brand-500 transition-colors">{{ link.label }}</NuxtLink>
        <UButton 
          to="/download"
        >
          Play Now
        </UButton>
      </div>

      <div class="md:hidden">
        <UButton variant="ghost" :icon="isMobileMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'" @click="isMobileMenuOpen = !isMobileMenuOpen" class="hover:text-brand-500" />
      </div>
    </div>
    
    <div v-if="isMobileMenuOpen" class="md:hidden bg-zinc-800 absolute top-full left-0 right-0 border-t border-zinc-700 flex flex-col px-6 py-4 space-y-4 shadow-xl">
      <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="block pb-2 border-b border-zinc-700 hover:text-brand-500">{{ link.label }}</NuxtLink>
      <UButton 
        to="/download"
        class="w-full mt-2"
      >
        Play Now
      </UButton>
    </div>
  </header>
</template>
