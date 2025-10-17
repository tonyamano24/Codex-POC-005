<template>
  <section :id="category.id" class="space-y-10 py-16" :aria-labelledby="`${category.id}-heading`">
    <header class="space-y-4">
      <p class="text-xs uppercase tracking-[0.4em] text-white/50">{{ category.kicker }}</p>
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 :id="`${category.id}-heading`" class="text-3xl font-light uppercase tracking-[0.3em] sm:text-4xl">
          {{ category.title }}
        </h2>
        <p class="max-w-lg text-sm text-white/60">{{ category.description }}</p>
      </div>
    </header>

    <div class="grid gap-6 md:grid-cols-2">
      <button
        v-for="image in category.images"
        :key="image.src"
        class="group relative overflow-hidden rounded-3xl border border-white/10 text-left focus-visible:border-white"
        type="button"
        @click="open(image)"
      >
        <img
          class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          :src="image.src"
          :alt="image.alt"
          loading="lazy"
        />
        <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 text-xs uppercase tracking-[0.3em] text-white/80">
          {{ image.caption }}
        </div>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  category: {
    id: string
    title: string
    kicker: string
    description: string
    images: Array<{ src: string; alt: string; caption: string }>
  }
}>()

const emit = defineEmits<{
  (e: 'open', image: { src: string; alt: string; caption: string }): void
}>()

function open(image: { src: string; alt: string; caption: string }) {
  emit('open', image)
}
</script>
