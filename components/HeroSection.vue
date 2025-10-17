<template>
  <section
    id="hero"
    class="flex flex-col gap-10 py-16 sm:flex-row sm:items-end sm:justify-between"
    aria-labelledby="hero-heading"
  >
    <div class="max-w-xl space-y-6">
      <p class="text-xs uppercase tracking-[0.5em] text-white/60">Monochrome Muse Studio</p>
      <h1 id="hero-heading" class="text-4xl font-light uppercase tracking-[0.3em] sm:text-5xl">
        Sculpting light into story
      </h1>
      <p class="text-base text-white/70">
        Inspired by the quiet drama of black-and-white film, this portfolio explores the tension between shadow
        and luminosity. Each series is curated to celebrate shape, movement, and emotion.
      </p>
      <div class="flex flex-wrap gap-3">
        <a
          class="rounded-full border border-white/40 px-6 py-3 text-xs uppercase tracking-[0.3em] transition hover:border-white hover:bg-white hover:text-black focus-visible:border-white focus-visible:bg-white focus-visible:text-black"
          href="#women"
        >
          Explore Work
        </a>
        <a
          class="rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.3em] transition hover:border-white/40 focus-visible:border-white"
          href="#about"
        >
          About the studio
        </a>
      </div>
    </div>
    <div class="flex-1">
      <div class="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10">
        <img
          class="h-full w-full object-cover object-center"
          src="https://images.unsplash.com/photo-1511288594014-05a0f6d4e4ee?auto=format&fit=crop&w=800&q=80"
          alt="A model bathed in light and shadow"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>
