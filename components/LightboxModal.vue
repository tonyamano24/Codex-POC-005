<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
        role="dialog"
        aria-modal="true"
        :aria-label="modelValue?.alt || 'Lightbox image'"
        @click.self="close"
      >
        <button
          class="absolute right-6 top-6 rounded-full border border-white/40 px-4 py-2 text-xs uppercase tracking-[0.3em] transition hover:border-white focus-visible:border-white"
          type="button"
          @click="close"
        >
          Close
        </button>
        <div class="max-w-4xl space-y-4 text-center">
          <img
            v-if="modelValue"
            class="mx-auto max-h-[70vh] w-full rounded-3xl object-contain"
            :src="modelValue.src"
            :alt="modelValue.alt"
          />
          <p class="text-xs uppercase tracking-[0.3em] text-white/70">{{ modelValue?.caption }}</p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: { src: string; alt: string; caption: string } | null
}>()

const emit = defineEmits<{ (e: 'update:modelValue', value: null): void }>()

function close() {
  emit('update:modelValue', null)
}

const handleKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.modelValue) {
    close()
  }
}

onMounted(() => window.addEventListener('keydown', handleKey))
onBeforeUnmount(() => window.removeEventListener('keydown', handleKey))
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
