<script setup lang="ts">
useSeoMeta({
  title: 'About - Two Hours One Life',
  ogTitle: 'About - Two Hours One Life',
  description: 'Learn about the philosophy, mechanisms, and vision behind Two Hours One Life—a multiplayer game of survival, family, and civilization building.',
  ogDescription: 'Learn about the philosophy, mechanisms, and vision behind Two Hours One Life—a multiplayer game of survival, family, and civilization building.'
})
</script>

<template>
  <div class="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <article class="prose dark:prose-invert max-w-none">
      <h1 class="text-4xl font-extrabold tracking-tight text-gray-950 dark:text-white mb-6">About the Project</h1>
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
        <strong>Two Hours One Life</strong> is a unique, persistent-world multiplayer survival game. It explores the depths of human cooperation, lineage, and legacy. Every server is a blank canvas where players must build a world from scratch across generations.
      </p>

      <section class="mt-12" aria-labelledby="philosophy-heading">
        <h2 id="philosophy-heading" class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Core Philosophy</h2>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          In most survival games, you start naked, build a base, and accumulate wealth for yourself. In <em>Two Hours One Life</em>, you cannot survive alone, and you cannot take anything with you. When your two hours are up, you die of old age. Your legacy is defined entirely by what you pass down to your descendants—the tools you crafted, the fields you cleared, and the knowledge you shared.
        </p>
      </section>

      <section class="mt-12" aria-labelledby="rules-heading">
        <h2 id="rules-heading" class="text-2xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
        <ul class="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-300">
          <li><strong>Life Span:</strong> You live for a maximum of 120 minutes (2 hours). Every minute represents a year of your life.</li>
          <li><strong>Birth:</strong> You don't spawn in an empty world. You are born as a helpless baby to another active player who is randomly assigned as your mother.</li>
          <li><strong>Development:</strong> In your early years, you rely on your family for food and warmth. As you grow, your capacity to work, craft, and explore expands.</li>
          <li><strong>Society:</strong> Work together with siblings, aunts, uncles, and your own children to farm, cook, build shelter, and sustain the community.</li>
        </ul>
      </section>

      <section class="mt-12" aria-labelledby="vision-heading">
        <h2 id="vision-heading" class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h2>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          This project is designed as an interactive marketing site scaffold, preparing the foundation for a larger gaming community space. It is fully built with state-of-the-art web performance, pre-rendered with Nuxt Nitro for blazing fast loading times, and crafted to meet AAA accessibility guidelines.
        </p>
      </section>
    </article>
  </div>
</template>
