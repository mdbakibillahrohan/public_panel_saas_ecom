<template>
  <section class="py-12 md:py-20 bg-accent/30">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ config.title || 'Trusted by Leading Brands' }}
        </h2>
        <p class="text-muted-foreground">
          {{ config.description || 'Partner with the worlds most recognized brands' }}
        </p>
      </div>

      <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
        <div
          v-for="brand in brands"
          :key="brand.id"
          class="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
        >
          <img :src="brand.logo" :alt="brand.name" class="h-12 md:h-16 w-auto" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  config?: Record<string, any>
}>()

const config = computed(() => props.config || {})

const brands = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Brand ${i + 1}`,
  logo: `/placeholder.svg?height=80&width=120&query=brand+logo+${i + 1}`,
}))
</script>
