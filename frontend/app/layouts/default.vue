<script setup lang="ts">
import { computed } from 'vue'

const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <div class="min-h-screen flex flex-col bg-background text-foreground antialiased font-sans transition-colors duration-200">
    <!-- Skip to content link for a11y -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-500 focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
    >
      Skip to main content
    </a>

    <!-- Header Section -->
    <header class="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-white/85 dark:bg-gray-950/85 backdrop-blur-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div class="flex items-center gap-6">
          <NuxtLink to="/" class="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-md p-1" aria-label="Two Hours One Life Home">
            <span class="font-bold text-xl tracking-wider text-primary-600 dark:text-primary-400">Two Hours One Life</span>
          </NuxtLink>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center gap-4" aria-label="Main Navigation">
            <ULink
              to="/"
              active-class="text-primary-600 dark:text-primary-400 font-semibold"
              inactive-class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              class="text-sm font-medium transition-colors"
            >
              Home
            </ULink>
            <ULink
              to="/about"
              active-class="text-primary-600 dark:text-primary-400 font-semibold"
              inactive-class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              class="text-sm font-medium transition-colors"
            >
              About
            </ULink>
            <ULink
              to="/contact"
              active-class="text-primary-600 dark:text-primary-400 font-semibold"
              inactive-class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              class="text-sm font-medium transition-colors"
            >
              Contact
            </ULink>
          </nav>
        </div>

        <!-- Right Header controls -->
        <div class="flex items-center gap-4">
          <!-- Accessible Theme Toggle -->
          <UButton
            :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
            color="neutral"
            variant="ghost"
            aria-label="Toggle dark mode"
            @click="isDark = !isDark"
          />

          <!-- Mobile Navigation Links directly placed -->
          <nav class="flex md:hidden items-center gap-3" aria-label="Mobile Navigation">
            <ULink
              to="/"
              active-class="text-primary-600 dark:text-primary-400 font-semibold"
              inactive-class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              class="text-xs font-semibold px-2 py-1 rounded"
            >
              Home
            </ULink>
            <ULink
              to="/about"
              active-class="text-primary-600 dark:text-primary-400 font-semibold"
              inactive-class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              class="text-xs font-semibold px-2 py-1 rounded"
            >
              About
            </ULink>
            <ULink
              to="/contact"
              active-class="text-primary-600 dark:text-primary-400 font-semibold"
              inactive-class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              class="text-xs font-semibold px-2 py-1 rounded"
            >
              Contact
            </ULink>
          </nav>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main id="main-content" class="flex-grow focus:outline-none" tabindex="-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="text-center md:text-left">
          <p class="font-bold text-lg text-gray-900 dark:text-white">Two Hours One Life</p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">A multiplayer survival and society building game of generations.</p>
        </div>
        <div class="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400" aria-label="Footer Navigation">
          <NuxtLink to="/" class="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded">Home</NuxtLink>
          <NuxtLink to="/about" class="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded">About</NuxtLink>
          <NuxtLink to="/contact" class="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded">Contact</NuxtLink>
        </div>
        <p class="text-xs text-gray-400 dark:text-gray-500">&copy; {{ new Date().getFullYear() }} Two Hours One Life. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
