<template>
  <div :class="['mb-8', align === 'center' ? 'text-center' : '']">
    <!-- Icon -->
    <div 
      v-if="icon" 
      :class="[
        'inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4',
        'bg-primary/10 text-primary'
      ]"
    >
      <span class="material-symbols-outlined text-2xl">{{ icon }}</span>
    </div>
    
    <!-- Eyebrow text -->
    <p 
      v-if="eyebrow"
      class="text-sm font-semibold uppercase tracking-wider text-primary mb-2"
    >
      {{ eyebrow }}
    </p>
    
    <!-- Title -->
    <h2 
      :class="[
        'font-bold tracking-tight text-gray-900 dark:text-white',
        sizeClasses
      ]"
    >
      {{ title }}
    </h2>
    
    <!-- Subtitle -->
    <p 
      v-if="subtitle"
      :class="[
        'mt-3 text-gray-600 dark:text-gray-400',
        size === 'sm' ? 'text-base' : 'text-lg max-w-2xl',
        align === 'center' ? 'mx-auto' : ''
      ]"
    >
      {{ subtitle }}
    </p>
    
    <!-- Slot for additional content -->
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  title: string
  subtitle?: string
  eyebrow?: string
  icon?: string
  align?: 'left' | 'center'
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  align: 'left',
  size: 'md',
})

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'text-xl sm:text-2xl',
    md: 'text-2xl sm:text-3xl',
    lg: 'text-3xl sm:text-4xl',
  }
  return sizes[props.size]
})
</script>
