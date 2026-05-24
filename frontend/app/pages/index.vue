<script setup lang="ts">
useSeoMeta({
  title: 'Two Hours One Life - Multiplayer Survival & Civilization Building Game',
  ogTitle: 'Two Hours One Life - Multiplayer Survival & Civilization Building Game',
  description: 'An online multiplayer survival and society building game. Live for two hours, make every minute a year, cooperate with others, and build a lasting legacy.',
  ogDescription: 'An online multiplayer survival and society building game. Live for two hours, make every minute a year, cooperate with others, and build a lasting legacy.',
  ogType: 'website'
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-primary-50 to-background dark:from-primary-950/20 dark:to-background" aria-labelledby="hero-heading">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 id="hero-heading" class="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-gray-950 dark:text-white leading-none">
          One Life. <span class="text-primary-600 dark:text-primary-400">Two Hours.</span><br />
          Infinite Possibilities.
        </h1>
        <p class="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Every minute represents a year. Born as a helpless baby to another player, you have exactly two hours to survive, thrive, collaborate, and leave a lasting legacy for the next generation.
        </p>
        <div class="mt-10 flex flex-wrap justify-center gap-4">
          <UButton
            size="xl"
            color="primary"
            variant="solid"
            to="/about"
            aria-label="Learn more about the game"
          >
            Discover the Story
          </UButton>
          <UButton
            size="xl"
            color="neutral"
            variant="outline"
            to="/contact"
            aria-label="Get in touch with us"
          >
            Get in Touch
          </UButton>
        </div>
      </div>
    </section>

    <!-- Core Features Section -->
    <section class="py-16 md:py-24 bg-background" aria-labelledby="features-heading">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto">
          <h2 id="features-heading" class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            A Social Experiment of Generational Scale
          </h2>
          <p class="mt-4 text-gray-500 dark:text-gray-400">
            Survival is impossible alone. Only together can we build a civilization from scratch.
          </p>
        </div>

        <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Feature 1 -->
          <div class="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col gap-4">
            <div class="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
              <span class="font-bold text-lg" aria-hidden="true">1</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Generational Gameplay</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              You are born to a real player who acts as your mother. Grow up, learn survival skills, become a parent, and care for your own children.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col gap-4">
            <div class="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
              <span class="font-bold text-lg" aria-hidden="true">2</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Deep Crafting Tree</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Go from primitive stone tools to advanced machinery and agriculture. Discover thousands of craftable items in a rich, historical tech tree.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col gap-4">
            <div class="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
              <span class="font-bold text-lg" aria-hidden="true">3</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Cooperative Society</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Specialization is key. No single player can do everything. Share resources, trade with neighbors, and work together to prevent starvation.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
