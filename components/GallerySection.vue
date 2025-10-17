<template>
  <section :id="category.id" class="scroll-mt-24 border-t border-white/5 bg-black py-24">
    <div class="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4">
      <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div class="max-w-2xl">
          <p class="text-xs uppercase tracking-[0.4em] text-white/40">{{ padId(category.id) }}</p>
          <h2 class="mt-2 font-display text-4xl uppercase tracking-wide text-white">{{ category.name }}</h2>
          <p class="mt-4 text-white/70">{{ category.summary }}</p>
        </div>
        <p class="text-sm uppercase tracking-[0.3em] text-white/50">{{ category.tagline }}</p>
      </div>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="image in category.images"
          :key="image.id"
          class="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5/10"
        >
          <button
            type="button"
            class="peer block w-full text-left focus:outline-none"
            @click="() => handleImageClick(image)"
          >
            <nuxt-img
              :src="image.src"
              :alt="image.alt"
              class="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
              :width="640"
              :height="800"
              format="webp"
              loading="lazy"
            />
            <span class="sr-only">Expand {{ image.title }}</span>
          </button>
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80 opacity-0 transition duration-300 group-hover:opacity-100"></div>
          <div class="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6">
            <h3 class="font-display text-2xl uppercase tracking-wide text-white">{{ image.title }}</h3>
            <p class="text-sm text-white/70">{{ image.description }}</p>
          </div>
        </article>
      </div>
      <div>
        <a
          class="inline-flex items-center gap-2 border-b border-white/20 pb-1 text-xs uppercase tracking-[0.3em] text-white/70 transition hover:border-white hover:text-white"
          href="#contact"
        >
          {{ category.cta }}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
    <Lightbox :open="lightboxOpen" :active-image="activeImage" @close="closeLightbox" />
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { GalleryCategory, GalleryImage } from '~/data/galleries'

const props = defineProps<{ category: GalleryCategory }>()
const category = computed(() => props.category)

const lightboxOpen = ref(false)
const activeImage = ref<GalleryImage | null>(null)

const padId = (id: string) => `00${id}`.replace(/-/g, ' ').toUpperCase()

const handleImageClick = (image: GalleryImage) => {
  activeImage.value = image
  lightboxOpen.value = true
}

const closeLightbox = () => {
  lightboxOpen.value = false
}
</script>
