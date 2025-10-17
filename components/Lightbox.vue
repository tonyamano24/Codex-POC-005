<template>
  <teleport to="body">
    <transition name="fade">
      <div
        v-if="open"
        class="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 px-6 py-12"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="`lightbox-title-${activeImage?.id ?? ''}`"
      >
        <button
          type="button"
          class="absolute right-6 top-6 rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white transition hover:border-white"
          @click="emit('close')"
        >
          Close
        </button>
        <div class="flex max-w-5xl flex-col gap-6">
          <figure class="flex flex-col gap-4 text-center">
            <img
              v-if="activeImage"
              :src="activeImage.src"
              :alt="activeImage.alt"
              class="max-h-[70vh] w-full rounded border border-white/10 object-contain"
              :width="1024"
              :height="1280"
              loading="lazy"
            />
            <figcaption class="text-sm text-white/70">
              <span class="block font-display text-2xl uppercase tracking-wide" :id="`lightbox-title-${activeImage?.id}`">
                {{ activeImage?.title }}
              </span>
              <span class="mt-2 block">{{ activeImage?.description }}</span>
              <span class="mt-1 block text-xs uppercase tracking-[0.3em] text-white/40">{{ activeImage?.dimensions }}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, watch } from 'vue'
import type { GalleryImage } from '~/data/galleries'

interface Props {
  open: boolean
  activeImage: GalleryImage | null
}

const props = defineProps<Props>()
const emit = defineEmits<{ (e: 'close'): void }>()

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

watch(
  () => props.open,
  (isOpen) => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  },
  { immediate: true }
)

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 250ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
