<template>
  <div class="border-b border-gray-200 dark:border-gray-700">
    <!-- Question/Header -->
    <button
      @click="toggle"
      class="flex w-full items-center justify-between py-4 text-left group"
    >
      <span 
        :class="[
          'text-base font-medium transition-colors',
          isOpen 
            ? 'text-primary' 
            : 'text-gray-900 dark:text-white group-hover:text-primary'
        ]"
      >
        {{ question }}
      </span>
      <span
        :class="[
          'material-symbols-outlined text-xl transition-transform duration-300 ml-4 shrink-0',
          isOpen ? 'rotate-180 text-primary' : 'text-gray-400'
        ]"
      >
        expand_more
      </span>
    </button>
    
    <!-- Answer/Content -->
    <div
      ref="contentRef"
      :style="{ maxHeight: isOpen ? contentHeight + 'px' : '0px' }"
      class="overflow-hidden transition-all duration-300 ease-in-out"
    >
      <div 
        ref="innerRef"
        class="pb-4 text-gray-600 dark:text-gray-400 text-base leading-relaxed"
      >
        <!-- Slot for custom content -->
        <slot>
          {{ answer }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue'

interface Props {
  question: string
  answer?: string
  open?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  open: false,
})

const emit = defineEmits<{
  toggle: [isOpen: boolean]
}>()

const isOpen = ref(props.open)
const contentRef = ref<HTMLElement | null>(null)
const innerRef = ref<HTMLElement | null>(null)
const contentHeight = ref(0)

function toggle() {
  isOpen.value = !isOpen.value
  emit('toggle', isOpen.value)
}

function updateHeight() {
  if (innerRef.value) {
    contentHeight.value = innerRef.value.scrollHeight
  }
}

watch(() => props.open, (newValue) => {
  isOpen.value = newValue
})

watch(isOpen, async () => {
  await nextTick()
  updateHeight()
})

onMounted(() => {
  updateHeight()
})

// Expose for external control
defineExpose({
  toggle,
  isOpen,
})
</script>
