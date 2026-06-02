<script setup lang="ts">
const { downloads } = useAppConfig()

useSeoMeta({
  title: 'Download Game Client | Two Hours One Life',
  description: 'Download the latest version of Two Hours One Life. Precompiled Windows and Linux builds with mirror options are available.',
})
</script>

<template>
  <div class="py-20 px-6 max-w-4xl mx-auto min-h-[70vh] font-body text-zinc-900">
    <div class="space-y-12">
      
      <div class="text-center space-y-3">
        <h1 class="text-3xl md:text-4xl font-extrabold font-heading text-zinc-900 tracking-tight">
          Download Two Hours One Life
        </h1>
        <h2 class="text-lg md:text-xl font-bold font-heading text-zinc-600">
          Version {{ downloads.version }} Released
        </h2>
        
        <p class="text-zinc-600 text-sm md:text-base font-medium pt-2">
          Need an account? Join our 
          <a 
            href="https://discord.gg/Jd9Es3f" 
            target="_blank" 
            class="text-primary-700 font-bold underline hover:text-primary-600 transition-colors"
          >
            discord server
          </a>
        </p>
      </div>

      <div class="grid sm:grid-cols-2 gap-6">
        
        <div class="border border-zinc-200 p-8 rounded-none bg-white shadow-sm hover:border-zinc-300 transition-colors flex flex-col justify-between space-y-6">
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <UIcon name="i-lucide-monitor" class="w-8 h-8 text-primary-600" />
              <h3 class="text-xl font-bold font-heading text-zinc-900">Windows</h3>
            </div>
            <p class="text-zinc-500 text-sm font-medium">Windows 10 / 11 (32-bit)</p>
          </div>
          
          <div class="space-y-3">
            <UButton 
              :to="downloads.windows.link"
              class="w-full justify-center rounded-none py-2.5 font-bold shadow-none bg-primary-500 hover:bg-primary-600 border border-transparent"
              icon="i-lucide-download"
            >
              Download Now
            </UButton>
            <a 
              :href="downloads.windows.mirror" 
              class="block text-center text-xs font-bold text-zinc-600 hover:text-zinc-900 transition-colors underline"
            >
              Mirror Link
            </a>
          </div>
        </div>
        
        <div class="border border-zinc-200 p-8 rounded-none bg-white shadow-sm hover:border-zinc-300 transition-colors flex flex-col justify-between space-y-6">
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <UIcon name="i-lucide-terminal" class="w-8 h-8 text-zinc-600" />
              <h3 class="text-xl font-bold font-heading text-zinc-900">Linux</h3>
            </div>
            <p class="text-zinc-500 text-sm font-medium">Ubuntu (32-bit)</p>
          </div>
          
          <div class="space-y-3">
            <UButton 
              :to="downloads.linux.link"
              class="w-full justify-center rounded-none py-2.5 font-bold shadow-none bg-primary-500 hover:bg-primary-600 border border-transparent"
              icon="i-lucide-download"
            >
              Download now
            </UButton>
            <a 
              :href="downloads.linux.mirror" 
              class="block text-center text-xs font-bold text-zinc-600 hover:text-zinc-900 transition-colors underline"
            >
              Mirror Link
            </a>
          </div>
        </div>
      </div>

      <div class="bg-zinc-100 border border-zinc-200 p-6 rounded-none flex flex-col sm:flex-row items-start gap-4 shadow-sm">
        <UIcon name="i-lucide-info" class="text-primary-600 shrink-0 mt-1 w-6 h-6" />
        <div>
          <h4 class="font-bold text-lg mb-1 font-heading text-zinc-900">Need help setting up the game?</h4>
          <p class="text-zinc-600 mb-3 text-sm md:text-base font-medium">
            If this is your first time playing, check out our guide to learn how to get started.
          </p>
          <NuxtLink to="/first-time-playing" class="text-zinc-900 font-bold underline hover:text-primary-600 transition-colors text-sm">
            View First Time Playing Guide
          </NuxtLink>
        </div>
      </div>

    </div>
  </div>
</template>