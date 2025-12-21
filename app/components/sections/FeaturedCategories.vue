<template>
  <section class="py-12 md:py-20">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {{ config.title || 'Shop by Category' }}
        </h2>
        <p class="text-muted-foreground text-lg max-w-2xl mx-auto">
          {{ config.description || 'Explore our wide range of product categories' }}
        </p>
      </div>

      <!-- Categories Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        <NuxtLink
          v-for="category in categories"
          :key="category.id"
          :to="category.url"
          class="group relative overflow-hidden rounded-2xl aspect-square bg-accent hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <img
            :src="category.image"
            :alt="category.name"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div class="absolute bottom-0 left-0 right-0 p-6">
            <h3 class="text-white font-bold text-xl md:text-2xl mb-1">{{ category.name }}</h3>
            <p class="text-white/80 text-sm">{{ category.count }} items</p>
          </div>
        </NuxtLink>
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

const categories = [
  {
    id: 1,
    name: 'Women',
    count: 520,
    url: '/products?category=women',
    image: '/placeholder.svg?height=400&width=400',
  },
  {
    id: 2,
    name: 'Men',
    count: 380,
    url: '/products?category=men',
    image: '/placeholder.svg?height=400&width=400',
  },
  {
    id: 3,
    name: 'Accessories',
    count: 210,
    url: '/products?category=accessories',
    image: '/placeholder.svg?height=400&width=400',
  },
  {
    id: 4,
    name: 'Shoes',
    count: 340,
    url: '/products?category=shoes',
    image: '/placeholder.svg?height=400&width=400',
  },
  {
    id: 5,
    name: 'Bags',
    count: 180,
    url: '/products?category=bags',
    image: '/placeholder.svg?height=400&width=400',
  },
  {
    id: 6,
    name: 'Jewelry',
    count: 95,
    url: '/products?category=jewelry',
    image: '/placeholder.svg?height=400&width=400',
  },
  {
    id: 7,
    name: 'Sports',
    count: 250,
    url: '/products?category=sports',
    image: '/placeholder.svg?height=400&width=400',
  },
  {
    id: 8,
    name: 'Kids',
    count: 410,
    url: '/products?category=kids',
    image: '/placeholder.svg?height=400&width=400',
  },
]
</script>
