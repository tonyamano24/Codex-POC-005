<template>
  <div>
    <StickyNavbar />
    <main>
      <HeroSection />
      <GallerySection
        v-for="gallery in galleries"
        :key="gallery.id"
        :section-id="gallery.id"
        :heading-id="`${gallery.id}-heading`"
        :title="gallery.title"
        :tagline="gallery.tagline"
        :description="gallery.description"
        :images="gallery.images"
        @open="handleOpen"
      />
      <section id="about" class="border-t border-ink-800/80 bg-ink-900">
        <div class="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:px-8 lg:grid-cols-[2fr,3fr]">
          <div class="space-y-6">
            <p class="text-xs uppercase tracking-[0.4em] text-ink-400">About</p>
            <h2 class="text-3xl font-light uppercase tracking-[0.2em] text-white sm:text-4xl">Toni Yamano</h2>
            <p class="text-sm text-ink-300">
              Toni Yamano is a Tokyo-born photographer translating the quiet intensity of urban life into stark monochrome
              studies. With a decade of experience across editorial and commercial assignments, Toni’s work is known for
              its sculptural lighting, restraint, and sensitivity to the subject’s emotional landscape.
            </p>
            <p class="text-sm text-ink-300">
              Currently based between New York and Kyoto, Toni collaborates with fashion houses, art directors, and
              cultural institutions who value refined visual storytelling.
            </p>
          </div>
          <div class="space-y-6">
            <div>
              <h3 class="text-sm uppercase tracking-[0.3em] text-ink-400">Exhibitions</h3>
              <ul class="mt-3 space-y-3 text-sm text-ink-200">
                <li class="flex items-start justify-between gap-4 border-b border-ink-800 pb-3">
                  <span class="uppercase tracking-[0.25em]">Silver Cities</span>
                  <span>Kyoto Contemporary, 2024</span>
                </li>
                <li class="flex items-start justify-between gap-4 border-b border-ink-800 pb-3">
                  <span class="uppercase tracking-[0.25em]">Monochrome Lines</span>
                  <span>Neue Galerie, Berlin, 2023</span>
                </li>
                <li class="flex items-start justify-between gap-4">
                  <span class="uppercase tracking-[0.25em]">Light Study</span>
                  <span>The Modern, NYC, 2022</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm uppercase tracking-[0.3em] text-ink-400">Connect</h3>
              <ul class="mt-3 space-y-3 text-sm text-ink-200">
                <li>
                  <a href="mailto:studio@tonyamano.com" class="transition hover:text-white">studio@tonyamano.com</a>
                </li>
                <li>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener" class="transition hover:text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.behance.net" target="_blank" rel="noopener" class="transition hover:text-white">
                    Behance
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
    <LightboxModal :visible="lightboxVisible" :image="activeImage" @close="handleClose" />
    <footer class="border-t border-ink-800 bg-ink-900 py-8 text-center text-xs uppercase tracking-[0.4em] text-ink-500">
      © {{ new Date().getFullYear() }} Toni Yamano Studio
    </footer>
  </div>
</template>

<script setup lang="ts">
import { galleries } from '@/data/galleries';

type GalleryImage = (typeof galleries)[number]['images'][number];

const lightboxVisible = ref(false);
const activeImage = ref<GalleryImage | null>(null);

const handleOpen = (image: GalleryImage) => {
  activeImage.value = image;
  lightboxVisible.value = true;
};

const handleClose = () => {
  lightboxVisible.value = false;
  activeImage.value = null;
};
</script>
