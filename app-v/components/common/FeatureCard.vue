<template>
  <div
    :class="[
      'flex flex-col gap-4 rounded-xl p-6 transition-all duration-300',
      variantClasses,
    ]"
  >
    <!-- Icon -->
    <div
      :class="[
        'flex items-center justify-center rounded-xl transition-transform group-hover:scale-110',
        iconSizeClasses,
        iconBgClasses,
      ]"
    >
      <span 
        :class="[
          'material-symbols-outlined text-primary',
          size === 'sm' ? 'text-2xl' : 'text-3xl'
        ]"
      >
        {{ icon }}
      </span>
    </div>
    
    <!-- Content -->
    <div>
      <h3 
        :class="[
          'font-bold text-gray-900 dark:text-white mb-2',
          size === 'sm' ? 'text-base' : 'text-lg'
        ]"
      >
        {{ title }}
      </h3>
      <p 
        :class="[
          'text-gray-600 dark:text-gray-400',
          size === 'sm' ? 'text-sm' : 'text-base'
        ]"
      >
        {{ description }}
      </p>
    </div>
    
    <!-- Optional link -->
    <NuxtLink 
      v-if="href"
      :to="href"
      class="text-primary font-medium text-sm hover:underline inline-flex items-center gap-1 mt-auto"
    >
      {{ linkText || 'Learn more' }}
      <span class="material-symbols-outlined text-base">arrow_forward</span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  title: string
  description: string
  icon: string
  variant?: 'default' | 'outlined' | 'highlighted' | 'minimal'
  size?: 'sm' | 'md'
  href?: string
  linkText?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
})

const variantClasses = computed(() => {
  const variants = {
    default: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-md',
    outlined: 'bg-transparent border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-md',
    highlighted: 'bg-primary/5 dark:bg-primary/10 border border-primary/20 hover:bg-primary/10 dark:hover:bg-primary/20',
    minimal: 'bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800',
  }
  return variants[props.variant]
})

const iconSizeClasses = computed(() => {
  return props.size === 'sm' ? 'w-10 h-10' : 'w-12 h-12'
})

const iconBgClasses = computed(() => {
  const variants = {
    default: 'bg-primary/10',
    outlined: 'bg-primary/10',
    highlighted: 'bg-primary/20',
    minimal: 'bg-primary/10',
  }
  return variants[props.variant]
})
</script>
