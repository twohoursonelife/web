export default defineAppConfig({
  ui: {
    colors: {
      primary: 'brand',
    },
    button: {
      slots: {
        base: '!text-zinc-900 font-bold rounded-none transition-all duration-200 hover:scale-105 active:scale-95 flex justify-center items-center gap-2 cursor-pointer shadow-none'
      },
      variants: {
        variant: {
          solid: {
            base: 'bg-brand-500 !text-zinc-900 hover:bg-brand-600 border border-transparent shadow-none'
          },
          outline: {
            base: 'border border-zinc-300 !text-zinc-900 hover:bg-zinc-100 hover:text-zinc-900 hover:border-zinc-400 rounded-none shadow-none'
          }
        },
        size: {
          md: {
            base: 'px-6 py-2 text-base'
          },
          lg: {
            base: 'px-8 py-3 text-lg'
          },
          xl: {
            base: 'px-10 py-3 text-xl'
          }
        }
      },
      defaultVariants: {
        color: 'primary',
        variant: 'solid',
        size: 'md'
      }
    }
  }
})
