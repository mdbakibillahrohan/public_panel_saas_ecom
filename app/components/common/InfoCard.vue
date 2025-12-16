<template>
  <div
    :class="[
      'flex gap-4 rounded-xl border p-6 transition-all duration-300',
      'border-gray-200 dark:border-gray-700',
      'bg-white dark:bg-gray-800',
      'hover:shadow-md hover:border-primary/30'
    ]"
  >
    <!-- Icon -->
    <div
      class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary"
    >
      <span class="material-symbols-outlined">{{ icon }}</span>
    </div>
    
    <!-- Content -->
    <div class="flex flex-col gap-2">
      <h3 class="text-lg font-bold text-gray-900 dark:text-white leading-tight">
        {{ title }}
      </h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">
        {{ content }}
      </p>
      <p 
        v-if="subContent" 
        class="text-xs text-gray-500 dark:text-gray-500"
      >
        {{ subContent }}
      </p>
      
      <!-- Optional action link -->
      <NuxtLink 
        v-if="href"
        :to="href"
        class="text-primary font-medium text-sm hover:underline inline-flex items-center gap-1 mt-1"
      >
        {{ linkText || 'Learn more' }}
        <span class="material-symbols-outlined text-base">arrow_forward</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  content: string
  subContent?: string
  icon: string
  href?: string
  linkText?: string
}

defineProps<Props>()
</script>
