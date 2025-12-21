<template>
  <section class="relative bg-accent overflow-hidden">
    <div class="container mx-auto px-4 py-12 md:py-20 lg:py-32">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Content -->
        <div class="text-center lg:text-left space-y-6 md:space-y-8">
          <div class="space-y-4">
            <p class="text-primary font-medium tracking-wide uppercase text-sm">{{ config.badge || 'New Collection' }}</p>
            <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              {{ config.title || 'Discover Your Style' }}
            </h1>
            <p class="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              {{ config.description || 'Explore our curated collection of premium products designed for modern living' }}
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <NuxtLink
              :to="config.primaryButtonLink || '/products'"
              class="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
            >
              {{ config.primaryButtonText || 'Shop Now' }}
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
            <NuxtLink
              :to="config.secondaryButtonLink || '/about'"
              class="inline-flex items-center justify-center px-8 py-4 bg-background border-2 border-border rounded-lg font-semibold hover:bg-accent transition-all"
            >
              {{ config.secondaryButtonText || 'Learn More' }}
            </NuxtLink>
          </div>

          <!-- Stats -->
          <div class="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
            <div v-for="(stat, index) in stats" :key="index" class="text-center lg:text-left">
              <div class="text-3xl md:text-4xl font-bold text-primary">{{ stat.value }}</div>
              <div class="text-sm text-muted-foreground mt-1">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Image -->
        <div class="relative">
          <div class="aspect-square relative rounded-2xl overflow-hidden bg-muted">
            <img
              :src="config.image || '/placeholder.svg?height=600&width=600'"
              :alt="config.title || 'Hero image'"
              class="w-full h-full object-cover"
            />
          </div>
          <!-- Floating Badge -->
          <div class="absolute top-8 right-8 bg-background shadow-xl rounded-full px-6 py-3 border border-border">
            <div class="text-center">
              <div class="text-2xl font-bold text-primary">{{ config.badge_value || '50%' }}</div>
              <div class="text-xs text-muted-foreground">{{ config.badge_label || 'OFF' }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  config?: Record<string, any>
}>()

const config = computed(() => props.config || {})

const stats = [
  { value: '10K+', label: 'Happy Customers' },
  { value: '50+', label: 'Countries' },
  { value: '99%', label: 'Satisfaction' },
]
</script>
