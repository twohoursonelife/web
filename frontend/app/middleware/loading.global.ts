export default defineNuxtRouteMiddleware((to, from) => {
  if (import.meta.client) {
    const isFirstLoad = useState('is-first-load', () => true)
    
    // Skip delay on initial page load / hydration
    if (isFirstLoad.value) {
      isFirstLoad.value = false
      return
    }

    // Skip delay if navigating to the same path (e.g., hash or query changes)
    if (to.path === from.path) {
      return
    }

    const loadingState = useLoadingState()
    const appConfig = useAppConfig()
    const delay = appConfig.pageTransitionDelay as number

    loadingState.value.isLoading = true
    loadingState.value.isTransitioning = true

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve()
      }, delay)
    })
  }
})
