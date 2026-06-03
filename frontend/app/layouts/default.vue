<template>
  <div class="min-h-screen bg-zinc-50 text-zinc-900 flex flex-col font-body">
    <AppHeader />

    <main class="grow">
      <slot />
    </main>

    <LazyAppFooter />
  </div>
</template>