<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
    <nav class="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 text-sm uppercase tracking-[0.2em] sm:px-6 lg:px-8">
      <a class="font-semibold" href="#top">Monochrome Muse</a>
      <ul class="hidden items-center gap-6 text-[0.65rem] sm:flex">
        <li v-for="item in navItems" :key="item.href">
          <a class="rounded-full border border-transparent px-4 py-2 transition hover:border-white/40 focus-visible:border-white" :href="item.href">
            {{ item.label }}
          </a>
        </li>
      </ul>
      <button
        class="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs transition hover:border-white focus-visible:border-white sm:hidden"
        type="button"
        @click="isOpen = !isOpen"
        :aria-expanded="isOpen"
        aria-controls="primary-navigation"
      >
        <span>{{ isOpen ? 'Close' : 'Menu' }}</span>
      </button>
    </nav>
    <nav
      id="primary-navigation"
      class="mx-auto max-w-6xl px-4 pb-6 text-xs uppercase tracking-[0.3em] sm:hidden"
      :class="[
        'grid gap-2 overflow-hidden transition-[grid-template-rows] duration-300 ease-out',
        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
      ]"
    >
      <ul class="min-h-0 space-y-2" @click="isOpen = false">
        <li v-for="item in navItems" :key="item.href">
          <a
            class="block rounded-full border border-transparent px-4 py-2 text-center transition hover:border-white/40 focus-visible:border-white"
            :href="item.href"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
const navItems = [
  { label: 'Women', href: '#women' },
  { label: 'Editorial', href: '#editorial' },
  { label: 'Fine Art', href: '#fine-art' },
  { label: 'Commercial', href: '#commercial' },
  { label: 'About', href: '#about' }
] as const

const isOpen = ref(false)

watch(
  () => useRoute().path,
  () => {
    isOpen.value = false
  }
)
</script>
