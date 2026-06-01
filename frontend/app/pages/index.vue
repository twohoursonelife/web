<script setup lang="ts">
useSeoMeta({
  title: 'Two Hours One Life | Play for free',
  description: 'Two Hours One Life is a standalone fork (mod) of the original game One Hour One Life. Our game is completely free to play and driven by the community.',
})
</script>

<template>
  <div class="font-body text-zinc-900">
    
    <section class="relative bg-zinc-900 text-white pt-16 pb-24 px-6 border-t border-zinc-800 overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="~/assets/img/background.jpg" class="w-full h-full object-cover" alt="Hero Background" />
        <div class="absolute inset-0 bg-zinc-900/70"></div>
      </div>
      
      <div class="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <h1 class="text-5xl md:text-6xl font-extrabold leading-tight font-heading drop-shadow-lg text-white">
          Two Hours <span class="text-brand-500">One Life</span>
        </h1>
        <p class="text-xl md:text-2xl text-zinc-200 max-w-2xl mx-auto font-medium leading-relaxed">
          A completely free-to-play fork of the open source game, One Hour One Life, originally created by Jason Rohrer.
        </p>
        
        <div class="flex flex-col items-center gap-4 pt-4">
          <UButton 
            to="/first-time-playing"
            trailing-icon="i-lucide-chevron-right"
            size="lg"
            class="w-full sm:w-auto"
          >
            Play Now
          </UButton>
          <a 
            href="https://github.com/twohoursonelife" 
            target="_blank"
            class="text-zinc-300 text-sm hover:text-white transition-colors flex items-center justify-center gap-2 mt-2 bg-black/40 rounded-full px-5 py-2 backdrop-blur-sm border border-zinc-700"
          >
            <UIcon name="i-lucide-github" class="w-4 h-4" /> View source code
          </a>
        </div>
      </div>
    </section>

    <section id="about" class="py-20 px-6 max-w-6xl mx-auto bg-zinc-50">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold mb-4 font-heading text-zinc-900">What is 2HOL?</h2>
        <div class="w-20 h-2 bg-brand-500 mx-auto rounded-none"></div>
      </div>
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6 text-lg text-zinc-700 leading-relaxed font-medium">
          <p>
            Two Hours One Life is a standalone moderation of the original game <a href="https://onehouronelife.com/" target="_blank" class="text-zinc-900 font-bold underline hover:text-brand-600 transition-colors">One Hour One Life</a>, originally created by <a href="http://hcsoftware.sourceforge.net/jason-rohrer/" target="_blank" class="text-zinc-900 font-bold underline hover:text-brand-600 transition-colors">Jason Rohrer</a>. Our game is completely free to play and driven by the community.
          </p>
          <p>
            2HOL is different, allowing you much more freedom in how you want to play the game, with additional content and systems to enable you to enjoy it with strangers, friends or alone.
          </p>
        </div>
        <div class="rounded-none h-80 shadow-lg overflow-hidden relative">
          <img src="~/assets/img/background-2024.png" alt="2HOL Game Screenshot" class="w-full h-full object-cover" />
        </div>
      </div>
    </section>

    <section id="community" class="py-24 px-6 max-w-4xl mx-auto text-center bg-zinc-100 rounded-none mb-12 shadow-sm border border-zinc-200">
      <h2 class="text-3xl font-bold mb-4 font-heading text-zinc-900">Support Open Source</h2>
      <div class="w-20 h-2 bg-brand-500 mx-auto rounded-none mb-8"></div>
      
      <p class="text-xl text-zinc-600 mb-6 font-medium max-w-2xl mx-auto">
        While Two Hours One Life will always be free to play for any person, there are still costs to keep a volunteer-run game going every day.
      </p>
      
      <p class="text-zinc-600 mb-10 font-medium max-w-xl mx-auto text-sm md:text-base leading-relaxed">
        We’re committed to never putting you in a position where you're pressured to pay for benefit or advancements in the game. Any amount of support, monetary or not, is greatly appreciated and will go directly into the game.
      </p>
      
      <div class="flex flex-col items-center gap-6">
        <div class="flex flex-wrap justify-center gap-4">
          <UButton 
            to="/first-time-playing"
            size="lg"
          >
            Play Now
          </UButton>
          <UButton 
            to="https://opencollective.com/twohoursonelife" 
            target="_blank" 
            variant="outline"
            class="group rounded-none border-zinc-300 hover:bg-zinc-200 hover:text-zinc-900"
          >
            <template #leading>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                stroke-width="2" 
                stroke="currentColor" 
                fill="none" 
                stroke-linecap="round" 
                stroke-linejoin="round"
                class="w-5 h-5 text-zinc-900 group-hover:text-red-500 group-hover:fill-red-500 transition-colors duration-200"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
            </template>
            Support us
          </UButton>
        </div>
      </div>
    </section>
  </div>
</template>