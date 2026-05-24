<script setup lang="ts">
import { reactive, ref } from 'vue'

useSeoMeta({
  title: 'Contact - Two Hours One Life',
  ogTitle: 'Contact - Two Hours One Life',
  description: 'Have questions, feedback, or want to get involved? Contact the team behind Two Hours One Life.',
  ogDescription: 'Have questions, feedback, or want to get involved? Contact the team behind Two Hours One Life.'
})

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const isSubmitted = ref(false)

const handleSubmit = () => {
  // Simple visual validation, actual submission can be wired up later
  if (form.name && form.email && form.message) {
    isSubmitted.value = true
    form.name = ''
    form.email = ''
    form.message = ''
  }
}
</script>

<template>
  <div class="py-16 md:py-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-2xl mx-auto mb-12">
      <h1 class="text-4xl font-extrabold tracking-tight text-gray-950 dark:text-white">Get in Touch</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Have questions about the project, suggestions, or want to participate? Reach out using the form below.
      </p>
    </div>

    <!-- Contact Form with deep Accessibility features -->
    <div class="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-10 shadow-sm">
      <div v-if="isSubmitted" class="p-4 mb-6 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-green-900/30 dark:text-green-400" role="alert">
        <p class="font-bold">Thank you for your message!</p>
        <p class="mt-1">We have received your placeholder submission. Since this is a static marketing scaffold, no real emails were sent, but the form operates perfectly.</p>
        <UButton class="mt-4" color="green" variant="outline" @click="isSubmitted = false">Send another message</UButton>
      </div>

      <form v-else @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-750 dark:text-gray-250 mb-2">Full Name</label>
          <UInput
            id="name"
            v-model="form.name"
            placeholder="John Doe"
            required
            autocomplete="name"
            size="md"
            aria-required="true"
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-750 dark:text-gray-250 mb-2">Email Address</label>
          <UInput
            id="email"
            v-model="form.email"
            type="email"
            placeholder="john@example.com"
            required
            autocomplete="email"
            size="md"
            aria-required="true"
          />
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-gray-750 dark:text-gray-250 mb-2">Your Message</label>
          <UTextarea
            id="message"
            v-model="form.message"
            placeholder="Let us know what's on your mind..."
            required
            :rows="6"
            size="md"
            aria-required="true"
          />
        </div>

        <div>
          <UButton
            type="submit"
            color="primary"
            variant="solid"
            size="lg"
            class="w-full justify-center"
            aria-label="Submit contact form"
          >
            Send Message
          </UButton>
        </div>
      </form>
    </div>
  </div>
</template>
