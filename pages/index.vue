<template>
  <div class="space-y-16">
    <HeroSection />
    <section class="grid gap-6 rounded-3xl border border-white/10 p-10 text-center text-xs uppercase tracking-[0.4em] text-white/60 sm:grid-cols-4">
      <p>Women</p>
      <p>Editorial</p>
      <p>Fine Art</p>
      <p>Commercial</p>
    </section>
    <CategorySection
      v-for="category in categories"
      :key="category.id"
      :category="category"
      @open="selectedImage = $event"
    />
    <AboutSection />
    <LightboxModal v-model="selectedImage" />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue'
import CategorySection from '~/components/CategorySection.vue'
import LightboxModal from '~/components/LightboxModal.vue'
import AboutSection from '~/components/AboutSection.vue'
import { galleryCategories } from '~/data/galleries'

const categories = galleryCategories
const selectedImage = ref<null | (typeof galleryCategories)[number]['images'][number]>(null)
</script>
