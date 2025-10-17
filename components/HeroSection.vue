<template>
  <section id="hero" class="relative isolate flex min-h-screen items-center bg-black">
    <div class="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" aria-hidden="true"></div>
    <div class="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-32">
      <p class="text-sm uppercase tracking-[0.4em] text-white/60">Black &amp; White Photography Studio</p>
      <h1 class="max-w-3xl font-display text-5xl uppercase tracking-tight text-white sm:text-6xl">
        Minimalist stories carved from light and shadow
      </h1>
      <p class="max-w-2xl text-lg text-white/70">
        Inspired by editorial minimalism and sculpted lighting, Monochrome Muse presents a portfolio of women, editorial, fine
        art, and commercial works that honour tonal nuance.
      </p>
      <div class="flex flex-wrap gap-4">
        <a
          href="#women"
          class="rounded-full border border-white/30 px-6 py-3 text-sm uppercase tracking-[0.3em] text-white transition hover:border-white hover:bg-white/10"
        >
          View Portfolio
        </a>
        <a
          href="#about"
          class="rounded-full border border-white/10 px-6 py-3 text-sm uppercase tracking-[0.3em] text-white/70 transition hover:border-white/40 hover:text-white"
        >
          About the Studio
        </a>
      </div>
    </div>
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.16),transparent_55%)]"></div>
  </section>
</template>
