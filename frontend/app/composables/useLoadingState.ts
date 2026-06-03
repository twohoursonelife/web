export const useLoadingState = () => {
  return useState('page-loading-state', () => ({
    isLoading: false,
    isTransitioning: false,
  }))
}
