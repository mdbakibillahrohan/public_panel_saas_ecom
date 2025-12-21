<template>
  <section
    :class="[
      'rounded-2xl px-6 py-12 md:py-16 md:px-12',
      variantClasses,
    ]"
  >
    <div :class="['max-w-3xl', align === 'center' ? 'mx-auto text-center' : '']">
      <!-- Icon -->
      <div 
        v-if="icon"
        :class="[
          'inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6',
          iconClasses
        ]"
      >
        <span class="material-symbols-outlined text-3xl">{{ icon }}</span>
      </div>
      
      <!-- Title -->
      <h2 
        :class="[
          'text-2xl md:text-3xl font-bold mb-4',
          titleClasses
        ]"
      >
        {{ title }}
      </h2>
      
      <!-- Subtitle -->
      <p 
        v-if="subtitle"
        :class="[
          'text-lg mb-8',
          subtitleClasses
        ]"
      >
        {{ subtitle }}
      </p>
      
      <!-- Actions -->
      <div 
        v-if="primaryAction || secondaryAction"
        :class="[
          'flex flex-wrap gap-4',
          align === 'center' ? 'justify-center' : ''
        ]"
      >
        <NuxtLink
          v-if="primaryAction"
          :to="primaryAction.href || '#'"
          :class="[
            'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all',
            primaryButtonClasses
          ]"
        >
          <span v-if="primaryAction.icon" class="material-symbols-outlined text-xl mr-2">
            {{ primaryAction.icon }}
          </span>
          {{ primaryAction.label }}
        </NuxtLink>
        
        <NuxtLink
          v-if="secondaryAction"
          :to="secondaryAction.href || '#'"
          :class="[
            'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all',
            secondaryButtonClasses
          ]"
        >
          <span v-if="secondaryAction.icon" class="material-symbols-outlined text-xl mr-2">
            {{ secondaryAction.icon }}
          </span>
          {{ secondaryAction.label }}
        </NuxtLink>
      </div>
      
      <!-- Slot for custom content -->
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface CTAAction {
  label: string
  href?: string
  icon?: string
}

interface Props {
  title: string
  subtitle?: string
  icon?: string
  primaryAction?: CTAAction
  secondaryAction?: CTAAction
  variant?: 'primary' | 'dark' | 'gradient' | 'light'
  align?: 'left' | 'center'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  align: 'center',
})

const variantClasses = computed(() => {
  const variants = {
    primary: 'bg-primary text-white',
    dark: 'bg-gray-900 dark:bg-gray-800 text-white',
    gradient: 'bg-gradient-to-r from-primary to-blue-600 text-white',
    light: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
  }
  return variants[props.variant]
})

const titleClasses = computed(() => {
  return props.variant === 'light' 
    ? 'text-gray-900 dark:text-white' 
    : 'text-white'
})

const subtitleClasses = computed(() => {
  const variants = {
    primary: 'text-blue-100',
    dark: 'text-gray-300',
    gradient: 'text-blue-100',
    light: 'text-gray-600 dark:text-gray-400',
  }
  return variants[props.variant]
})

const iconClasses = computed(() => {
  const variants = {
    primary: 'bg-white/20 text-white',
    dark: 'bg-primary text-white',
    gradient: 'bg-white/20 text-white',
    light: 'bg-primary/10 text-primary',
  }
  return variants[props.variant]
})

const primaryButtonClasses = computed(() => {
  const variants = {
    primary: 'bg-white text-primary hover:bg-gray-100',
    dark: 'bg-primary text-white hover:bg-blue-600',
    gradient: 'bg-white text-primary hover:bg-gray-100',
    light: 'bg-primary text-white hover:bg-blue-600',
  }
  return variants[props.variant]
})

const secondaryButtonClasses = computed(() => {
  const variants = {
    primary: 'bg-transparent border-2 border-white text-white hover:bg-white/10',
    dark: 'bg-transparent border-2 border-gray-500 text-gray-300 hover:border-gray-400',
    gradient: 'bg-transparent border-2 border-white text-white hover:bg-white/10',
    light: 'bg-transparent border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700',
  }
  return variants[props.variant]
})
</script>
