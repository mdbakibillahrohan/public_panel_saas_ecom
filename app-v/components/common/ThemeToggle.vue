<template>
  <button
    type="button"
    @click="toggleTheme"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    :class="[
      'relative inline-flex items-center justify-center rounded-lg transition-all duration-300',
      sizeClasses,
      variantClasses
    ]"
  >
    <!-- Sun Icon (Light Mode) -->
    <span
      :class="[
        'material-symbols-outlined transition-all duration-300 absolute',
        isDark ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
      ]"
    >
      light_mode
    </span>
    
    <!-- Moon Icon (Dark Mode) -->
    <span
      :class="[
        'material-symbols-outlined transition-all duration-300 absolute',
        isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
      ]"
    >
      dark_mode
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from '~/composables/useTheme'

interface Props {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'ghost' | 'outline' | 'solid'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  variant: 'ghost',
})

const { isDark, toggleTheme } = useTheme()

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'w-8 h-8 text-lg',
    md: 'w-10 h-10 text-xl',
    lg: 'w-12 h-12 text-2xl',
  }
  return sizes[props.size]
})

const variantClasses = computed(() => {
  const variants = {
    ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400',
    outline: 'border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400',
    solid: 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300',
  }
  return variants[props.variant]
})
</script>
