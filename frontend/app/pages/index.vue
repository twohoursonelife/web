<template>
  <div>
    <section class="relative bg-zinc-900 text-white pt-16 pb-24 px-6 border-t border-zinc-800 overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="/background.jpg" class="w-full h-full object-cover" alt="Hero Background" />
        <div class="absolute inset-0 bg-zinc-900/70"></div>
      </div>
      
      <div class="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <h1 class="text-5xl md:text-6xl font-extrabold leading-tight font-heading drop-shadow-lg">
          Two Hours <span class="text-brand-500">One Life</span>
        </h1>
        <p class="text-xl md:text-2xl text-zinc-200 max-w-2xl mx-auto font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas ornare tincidunt. Proin magna tellus, elementum vel sem at, viverra placerat leo.
        </p>
        
        <div class="flex flex-col items-center gap-4 pt-4">
          <UButton 
            to="https://discord.gg/Jd9Es3f"
            target="_blank"
            trailing-icon="i-lucide-chevron-right"
            size="lg"
            class="w-full sm:w-auto"
          >
            Join Discord
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
        <div class="w-20 h-2 bg-brand-500 mx-auto rounded-full"></div>
      </div>
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6 text-lg text-zinc-700 leading-relaxed font-medium">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas ornare tincidunt.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas ornare tincidunt. Proin magna tellus, elementum vel sem at, viverra placerat leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas ornare tincidunt.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas ornare tincidunt. Proin magna tellus, elementum vel sem at, viverra placerat leo.
          </p>
        </div>
        <div class="bg-zinc-200 rounded-xl h-80 flex items-center justify-center border-4 border-zinc-100 shadow-xl overflow-hidden relative">
           <div class="absolute inset-0 bg-zinc-800 opacity-10"></div>
           <UIcon name="i-lucide-globe" class="w-24 h-24 text-zinc-400" />
           <div class="absolute bottom-4 left-4 bg-zinc-900/80 text-white px-3 py-1 text-sm rounded backdrop-blur-sm">
              Game Screenshot Placeholder
           </div>
        </div>
      </div>
    </section>

    <section id="community" class="py-24 px-6 max-w-4xl mx-auto text-center bg-zinc-100 rounded-3xl mb-12 shadow-sm border border-zinc-200">
      <h2 class="text-3xl font-bold mb-8 font-heading text-zinc-900">Join the Community</h2>
      <p class="text-xl text-zinc-600 mb-10 font-medium">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas ornare tincidunt. Proin magna tellus.
      </p>
      
      <div class="flex flex-col items-center gap-6">
        <UButton 
          to="https://discord.gg/Jd9Es3f"
          target="_blank"
          size="lg"
        >
          Join Discord
        </UButton>
        
        <div class="flex flex-wrap justify-center gap-4">
          <UButton 
            to="https://twohoursonelife.fandom.com/" 
            target="_blank"
            variant="outline"
            icon="i-lucide-book-open"
          >
            Read the Wiki
          </UButton>
          <UButton 
            to="https://opencollective.com/twohoursonelife" 
            target="_blank" 
            variant="outline"
            icon="i-lucide-heart"
          >
            Support via Open Collective
          </UButton>
        </div>
      </div>
    </section>
  </div>
</template>