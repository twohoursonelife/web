<template>
  <div class="py-20 px-6 max-w-4xl mx-auto min-h-[70vh]">
    <h2 class="text-4xl font-bold mb-4 font-heading">Download 2HOL</h2>
    <p class="text-xl text-zinc-600 mb-12 font-medium">Select your operating system to download the latest client.</p>

    <div class="grid sm:grid-cols-2 gap-6 mb-12">
      <div class="border border-zinc-200 p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
        <UIcon name="i-lucide-monitor" class="w-12 h-12 text-brand-500 mb-4" />
        <h3 class="text-2xl font-bold mb-2 font-heading text-zinc-900">Windows</h3>
        <p class="text-zinc-500 mb-6 font-medium">Windows 10 / 11 (64-bit)</p>
        <UButton class="w-full">
          Download for Windows
        </UButton>
      </div>
      
      <div class="border border-zinc-200 p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
        <UIcon name="i-lucide-github" class="w-12 h-12 text-zinc-400 mb-4" />
        <h3 class="text-2xl font-bold mb-2 font-heading text-zinc-900">Linux / Mac</h3>
        <p class="text-zinc-500 mb-6 font-medium">Build from source</p>
        <UButton to="https://github.com/twohoursonelife" target="_blank" variant="outline" class="w-full">
          View Repository
        </UButton>
      </div>
    </div>

    <div class="bg-zinc-100 border border-zinc-200 p-6 rounded-xl flex flex-col sm:flex-row items-start gap-4">
      <UIcon name="i-lucide-info" class="text-zinc-500 shrink-0 mt-1 w-6 h-6" />
      <div>
        <h4 class="font-bold text-lg mb-1 font-heading text-zinc-900">Need help setting up?</h4>
        <p class="text-zinc-700 mb-3 font-medium">If this is your first time playing, check out our step-by-step guide to get up and running smoothly.</p>
        <NuxtLink to="/first-time-playing" class="text-zinc-900 font-bold underline hover:text-brand-500 transition-colors">
          View First-Time Playing Guide
        </NuxtLink>
      </div>
    </div>
  </div>
</template>