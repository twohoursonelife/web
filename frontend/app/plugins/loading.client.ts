export default defineNuxtPlugin((nuxtApp) => {
  const loadingState = useLoadingState()
  const router = useRouter()

  router.afterEach(() => {
    if (loadingState.value.isLoading) {
      // Start fade out transition
      loadingState.value.isTransitioning = false

      // Unmount loader after transition completes (300ms transition duration)
      setTimeout(() => {
        loadingState.value.isLoading = false
      }, 300)
    }
  })
})
