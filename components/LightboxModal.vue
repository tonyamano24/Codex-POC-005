<template>
  <Transition name="fade">
    <div
      v-if="visible"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="headingId"
      @keydown.esc.prevent="close"
      @click.self="close"
    >
      <div
        ref="dialogRef"
        class="relative flex w-full max-w-5xl flex-col overflow-hidden rounded-md border border-ink-600 bg-ink-900 shadow-2xl"
        tabindex="-1"
      >
        <button
          type="button"
          class="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-white transition hover:border-white hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          @click="close"
        >
          <span class="sr-only">Close</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div class="flex flex-col gap-6 p-6 sm:flex-row sm:items-start">
          <img
            v-if="image"
            :src="image.src"
            :alt="image.alt"
            class="max-h-[70vh] w-full rounded-sm object-contain sm:w-2/3"
          />
          <div class="flex flex-1 flex-col gap-4 text-sm text-ink-200">
            <div>
              <h3 :id="headingId" class="text-xl font-light uppercase tracking-[0.3em] text-white">{{ image?.title }}</h3>
              <p class="mt-1 text-xs uppercase tracking-[0.4em] text-ink-400">{{ image?.year }}</p>
            </div>
            <p>{{ image?.description }}</p>
            <a
              v-if="image?.credit"
              :href="image.credit.url"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ink-300 transition hover:text-white"
            >
              {{ image.credit.label }}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
                <path d="M12.293 2.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L14 5.414V14a1 1 0 11-2 0V5.414l-2.293 2.293A1 1 0 018.293 6.293l4-4z" />
                <path d="M3 9a1 1 0 011-1h3a1 1 0 010 2H5v7h10v-3a1 1 0 112 0v3a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
interface LightboxImage {
  id: string;
  title: string;
  alt: string;
  src: string;
  year: string;
  description?: string;
  credit?: { label: string; url: string };
}

const props = defineProps<{
  visible: boolean;
  image: LightboxImage | null;
}>();

const emit = defineEmits<{ (event: 'close'): void }>();

const headingId = 'lightbox-heading';
const dialogRef = ref<HTMLDivElement | null>(null);

const close = () => emit('close');

watch(
  () => props.visible,
  (value) => {
    if (value) {
      nextTick(() => dialogRef.value?.focus());
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
);

onBeforeUnmount(() => {
  document.body.style.overflow = '';
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
