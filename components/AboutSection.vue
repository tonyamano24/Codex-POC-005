<template>
  <section id="about" class="scroll-mt-24 border-t border-white/5 bg-black py-24">
    <div class="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4">
      <div class="grid gap-10 md:grid-cols-[2fr,1fr]">
        <div>
          <p class="text-xs uppercase tracking-[0.4em] text-white/40">About the studio</p>
          <h2 class="mt-3 font-display text-4xl uppercase tracking-wide text-white">{{ content.name }}</h2>
          <p class="mt-4 text-lg text-white/70">{{ content.summary }}</p>
          <ul class="mt-8 space-y-4 text-white/70">
            <li v-for="statement in content.approach" :key="statement" class="flex items-start gap-3">
              <span aria-hidden="true" class="mt-1 inline-flex h-1.5 w-8 bg-white"></span>
              <span>{{ statement }}</span>
            </li>
          </ul>
        </div>
        <aside class="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-white/80">
          <div>
            <p class="uppercase tracking-[0.3em] text-white/40">Location</p>
            <p class="mt-2 text-base text-white">{{ content.contact.location }}</p>
          </div>
          <div>
            <p class="uppercase tracking-[0.3em] text-white/40">Email</p>
            <a
              class="mt-2 inline-flex items-center gap-2 border-b border-white/20 pb-1 text-white transition hover:border-white"
              :href="`mailto:${content.contact.email}`"
            >
              {{ content.contact.email }}
            </a>
          </div>
          <div>
            <p class="uppercase tracking-[0.3em] text-white/40">Instagram</p>
            <a
              class="mt-2 inline-flex items-center gap-2 border-b border-white/20 pb-1 text-white transition hover:border-white"
              href="https://instagram.com/monochromemuse"
            >
              {{ content.contact.instagram }}
            </a>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { AboutContent } from '~/data/galleries'

defineProps<{ content: AboutContent }>({})
</script>
