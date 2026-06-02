<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: {
    type: Object as () => NuxtError,
    required: true
  }
})

const handleError = () => clearError({ redirect: '/' })
const handleBack = () => useRouter().back()

</script>

<template>
  <div class="min-h-screen bg-zinc-50 text-zinc-900 flex flex-col font-body">
    <AppHeader />

    <main class="grow flex items-center justify-center px-6 py-16">
      <div class="max-w-md w-full text-center space-y-8">
        <div class="flex flex-col items-center justify-center space-y-4">
          <div class="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center">
            <img src="/icon.png" alt="2HOL Icon" class="w-10 h-10 object-contain" />
          </div>
          <span class="text-xs font-bold tracking-widest text-zinc-400 uppercase font-heading">
            Error {{ error.status }}
          </span>
        </div>

        <div class="space-y-3">
          <h1 class="text-3xl font-extrabold font-heading text-zinc-900 tracking-tight">
            {{ error.status === 404 ? 'Page not found' : 'Something went wrong' }}
          </h1>
          <p class="text-zinc-600 font-medium leading-relaxed">
            {{ error.status === 404 
              ? "Sorry, we couldn't find the page you're looking for. Please check the URL or return home."
              : (error.message || "An unexpected error occurred. Please try again later or contact support if the issue persists.") 
            }}
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
          <UButton
            @click="handleBack"
            variant="outline"
            icon="i-lucide-arrow-left"
            class="w-full sm:w-auto"
          >
            Go Back
          </UButton>
          <UButton
            @click="handleError"
            icon="i-lucide-home"
            class="w-full sm:w-auto"
          >
            Go Home
          </UButton>
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>
