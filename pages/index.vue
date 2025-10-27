<template>
  <div class="relative min-h-screen bg-black text-white">
    <SiteNavbar />
    <main id="main-content" class="flex flex-col">
      <HeroSection />
      <section aria-label="Portfolio categories" class="bg-black">
        <div class="space-y-10 pt-24">
          <GallerySection v-for="category in categories" :key="category.id" :category="category" />
        </div>
      </section>
      <AboutSection :content="aboutContent" />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { aboutContent, categories } from '~/data/galleries'
</script>
