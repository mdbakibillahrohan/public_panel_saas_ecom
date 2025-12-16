<template>
  <section
    :class="[
      'relative py-16 md:py-24 overflow-hidden',
      backgroundImage ? '' : 'bg-gradient-to-br from-primary to-blue-700'
    ]"
  >
    <!-- Background Image -->
    <div
      v-if="backgroundImage"
      class="absolute inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    />
    
    <!-- Overlay -->
    <div 
      v-if="overlay || backgroundImage" 
      :class="[
        'absolute inset-0',
        overlayClass
      ]"
    />
    
    <!-- Content -->
    <div 
      :class="[
        'relative z-10 px-4 md:px-6',
        maxWidth
      ]"
    >
      <div :class="['max-w-3xl', align === 'center' ? 'mx-auto text-center' : '']">
        <!-- Eyebrow -->
        <p 
          v-if="eyebrow"
          class="text-sm font-semibold uppercase tracking-wider text-blue-200 mb-4"
        >
          {{ eyebrow }}
        </p>
        
        <!-- Title -->
        <h1 
          :class="[
            'font-bold tracking-tight text-white mb-6',
            sizeClasses
          ]"
        >
          {{ title }}
        </h1>
        
        <!-- Subtitle -->
        <p 
          v-if="subtitle"
          class="text-xl text-blue-100 mb-8 max-w-2xl"
          :class="align === 'center' ? 'mx-auto' : ''"
        >
          {{ subtitle }}
        </p>
        
        <!-- Actions -->
        <div 
          v-if="actions && actions.length > 0"
          :class="[
            'flex flex-wrap gap-4',
            align === 'center' ? 'justify-center' : ''
          ]"
        >
          <NuxtLink
            v-for="(action, index) in actions"
            :key="action.label"
            :to="action.href || '#'"
            :class="[
              'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all',
              index === 0 || action.variant === 'primary'
                ? 'bg-white text-primary hover:bg-gray-100 shadow-lg'
                : 'bg-transparent border-2 border-white text-white hover:bg-white/10'
            ]"
          >
            <span v-if="action.icon" class="material-symbols-outlined text-xl mr-2">
              {{ action.icon }}
            </span>
            {{ action.label }}
          </NuxtLink>
        </div>
        
        <!-- Slot for additional content -->
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface HeroAction {
  label: string
  href?: string
  icon?: string
  variant?: 'primary' | 'outline'
}

interface Props {
  title: string
  subtitle?: string
  eyebrow?: string
  backgroundImage?: string
  overlay?: boolean
  overlayOpacity?: number
  actions?: HeroAction[]
  align?: 'left' | 'center'
  size?: 'md' | 'lg' | 'xl'
  fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  overlay: true,
  overlayOpacity: 60,
  align: 'center',
  size: 'lg',
  fullWidth: false,
})

const sizeClasses = computed(() => {
  const sizes = {
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-5xl lg:text-6xl',
    xl: 'text-5xl md:text-6xl lg:text-7xl',
  }
  return sizes[props.size]
})

const overlayClass = computed(() => {
  return `bg-black/${props.overlayOpacity}`
})

const maxWidth = computed(() => {
  return props.fullWidth ? '' : 'max-w-7xl mx-auto'
})
</script>
