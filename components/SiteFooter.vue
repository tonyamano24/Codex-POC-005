<template>
  <footer id="contact" class="border-t border-white/5 bg-black py-12">
    <div class="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 text-sm text-white/60">
      <div class="flex flex-col gap-2">
        <p class="text-xs uppercase tracking-[0.4em] text-white/40">Stay in touch</p>
        <a
          class="w-fit border-b border-white/20 pb-1 text-white transition hover:border-white"
          href="mailto:hello@monochromemuse.studio"
        >
          hello@monochromemuse.studio
        </a>
      </div>
      <div class="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-white/40">
        <span>© {{ new Date().getFullYear() }} Monochrome Muse Studio</span>
        <span>Minimalist Black &amp; White Photography</span>
      </div>
    </div>
  </footer>
</template>
