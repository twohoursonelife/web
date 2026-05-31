<template>
  <div class="min-h-screen bg-zinc-50 text-zinc-900 flex flex-col font-body">
    <Header />

    <main class="grow">
      <slot />
    </main>

    <Footer />
  </div>
</template>