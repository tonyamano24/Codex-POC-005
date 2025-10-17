<template>
  <section :id="sectionId" class="scroll-mt-24 border-t border-ink-800/80 bg-ink-900" :aria-labelledby="headingId">
    <div class="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 lg:px-8">
      <header>
        <p class="text-xs uppercase tracking-[0.4em] text-ink-400">{{ tagline }}</p>
        <h2 :id="headingId" class="mt-4 text-3xl font-light uppercase tracking-[0.2em] text-white sm:text-4xl">
          {{ title }}
        </h2>
        <p v-if="description" class="mt-4 max-w-3xl text-sm text-ink-300">
          {{ description }}
        </p>
      </header>
      <ul role="list" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="image in images" :key="image.id" class="group relative">
          <button
            type="button"
            class="peer block w-full overflow-hidden rounded-sm border border-ink-700/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            @click="$emit('open', image)"
          >
            <img
              :src="image.src"
              :alt="image.alt"
              loading="lazy"
              class="h-full w-full object-cover transition duration-300 ease-out group-hover:scale-105"
            />
          </button>
          <div class="mt-3 flex items-center justify-between text-left text-xs uppercase tracking-[0.3em] text-ink-400">
            <span>{{ image.title }}</span>
            <span>{{ image.year }}</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
interface GalleryImage {
  id: string;
  title: string;
  alt: string;
  src: string;
  year: string;
}

defineProps<{
  sectionId: string;
  headingId: string;
  title: string;
  tagline: string;
  description?: string;
  images: GalleryImage[];
}>();

defineEmits<{ (event: 'open', image: GalleryImage): void }>();
</script>
