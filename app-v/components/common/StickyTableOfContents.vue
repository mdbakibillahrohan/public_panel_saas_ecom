<template>
  <aside class="hidden lg:block lg:w-64 shrink-0">
    <div 
      :class="[
        'sticky',
        `top-${stickyTop}`,
        'bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700'
      ]"
      :style="{ top: `${stickyTop}px` }"
    >
      <!-- Title -->
      <h3 class="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 pl-3">
        {{ title }}
      </h3>
      
      <!-- Navigation Items -->
      <nav class="flex flex-col space-y-1">
        <a
          v-for="item in items"
          :key="item.id"
          :href="`#${item.id}`"
          @click.prevent="scrollTo(item.id)"
          :class="[
            'block px-3 py-2 text-sm font-medium rounded-lg transition-colors',
            activeId === item.id
              ? 'text-primary bg-primary/10'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700'
          ]"
        >
          <span 
            v-if="item.icon" 
            class="material-symbols-outlined text-base align-middle mr-2"
          >
            {{ item.icon }}
          </span>
          {{ item.label }}
        </a>
      </nav>
      
      <!-- Optional Download Button -->
      <div 
        v-if="showDownload" 
        class="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700"
      >
        <button
          @click="emit('download')"
          class="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
        >
          <span class="material-symbols-outlined text-[20px]">picture_as_pdf</span>
          Download as PDF
        </button>
      </div>
      
      <!-- Optional Support Section -->
      <div 
        v-if="showSupport" 
        class="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700"
      >
        <p class="text-xs text-gray-500 dark:text-gray-400 mb-3">
          Need help understanding our policies?
        </p>
        <NuxtLink
          to="/contact"
          class="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <span class="material-symbols-outlined text-[18px]">support_agent</span>
          Contact Support
        </NuxtLink>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface TOCItem {
  id: string
  label: string
  icon?: string
}

interface Props {
  items: TOCItem[]
  title?: string
  activeId?: string
  stickyTop?: number
  showDownload?: boolean
  showSupport?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: 'On this page',
  stickyTop: 96,
  showDownload: false,
  showSupport: false,
})

const emit = defineEmits<{
  download: []
  itemClick: [id: string]
}>()

const activeId = ref(props.activeId || (props.items[0]?.id ?? ''))

function scrollTo(id: string) {
  const element = document.getElementById(id)
  if (element) {
    const offset = props.stickyTop + 20
    const top = element.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
    activeId.value = id
    emit('itemClick', id)
  }
}

// Intersection Observer for active section detection
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id
        }
      })
    },
    {
      rootMargin: `-${props.stickyTop + 50}px 0px -70% 0px`,
      threshold: 0,
    }
  )

  props.items.forEach((item) => {
    const element = document.getElementById(item.id)
    if (element) {
      observer?.observe(element)
    }
  })
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>
