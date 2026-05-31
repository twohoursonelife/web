<template>
  <footer class="bg-zinc-900 text-zinc-400 py-12 px-6 border-t border-zinc-800 text-center">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <NuxtLink to="/" class="group">
        <img src="/icon.png" alt="2HOL Icon" class="w-10 h-10 object-contain grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100" />
      </NuxtLink>
      <p class="text-sm">
        © {{ new Date().getFullYear() }} Two Hours One Life.
      </p>
      <div class="flex gap-4 font-medium">
        <a href="https://github.com/twohoursonelife" target="_blank" class="hover:text-white transition-colors">GitHub</a>
        <a href="https://discord.gg/Jd9Es3f" target="_blank" class="hover:text-white transition-colors">Discord</a>
      </div>
    </div>
  </footer>
</template>
