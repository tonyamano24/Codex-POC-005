<template>
  <section id="top" class="relative isolate flex min-h-screen flex-col justify-end overflow-hidden pt-32">
    <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-ink-900/40 to-ink-900"></div>
    <div class="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 pb-24 text-left sm:px-6 lg:px-8">
      <p class="text-sm uppercase tracking-[0.5em] text-ink-300">Monochrome Narratives</p>
      <h1 class="text-4xl font-light uppercase tracking-[0.15em] text-white sm:text-5xl lg:text-6xl">
        Intimate Portraits in Light and Shadow
      </h1>
      <p class="max-w-2xl text-lg text-ink-200">
        Inspired by the quiet minimalism of TonYamanoStudio.com, this portfolio celebrates women, editorial, fine art,
        and commercial photography through timeless black and white compositions.
      </p>
      <div class="flex flex-wrap gap-4">
        <NuxtLink
          to="#women"
          class="inline-flex items-center justify-center border border-ink-100/40 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition hover:border-white hover:bg-white hover:text-ink-900"
        >
          Explore Collections
        </NuxtLink>
        <NuxtLink
          to="#about"
          class="inline-flex items-center justify-center border border-ink-100/20 bg-ink-800/60 px-6 py-3 text-xs uppercase tracking-[0.3em] text-ink-100 transition hover:border-white/40 hover:bg-ink-700/70"
        >
          About the Artist
        </NuxtLink>
      </div>
    </div>
    <div
      class="absolute inset-0 -z-10 bg-cover bg-center opacity-70"
      role="presentation"
      :style="{ backgroundImage: 'url(' + heroImage + ')' }"
    ></div>
  </section>
</template>

<script setup lang="ts">
const heroImage =
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1800&q=80&sat=-100&exp=-10';
</script>
