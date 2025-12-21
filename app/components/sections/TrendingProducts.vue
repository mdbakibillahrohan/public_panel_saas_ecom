<template>
  <section class="py-12 md:py-20 bg-accent/30">
    <div class="container mx-auto px-4">
      <!-- Header with Tabs -->
      <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
        <div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            {{ config.title || 'Trending Now' }}
          </h2>
          <p class="text-muted-foreground">{{ config.description || 'Most popular products this week' }}</p>
        </div>

        <!-- Category Tabs -->
        <div class="flex gap-2 overflow-x-auto">
          <button
            v-for="tab in tabs"
            :key="tab"
            @click="activeTab = tab"
            class="px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all"
            :class="activeTab === tab ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-accent'"
          >
            {{ tab }}
          </button>
        </div>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        <div
          v-for="product in displayedProducts"
          :key="product.id"
          class="group bg-background rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
        >
          <NuxtLink :to="`/product/${product.id}`" class="block">
            <!-- Image -->
            <div class="relative aspect-square bg-muted overflow-hidden">
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <button class="absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <div v-if="product.badge" class="absolute top-3 left-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                {{ product.badge }}
              </div>
            </div>

            <!-- Content -->
            <div class="p-4">
              <h3 class="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {{ product.name }}
              </h3>
              <div class="flex items-center gap-2 mb-2">
                <div class="flex items-center">
                  <svg v-for="i in 5" :key="i" class="w-4 h-4" :class="i <= product.rating ? 'text-yellow-400' : 'text-gray-300'" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span class="text-xs text-muted-foreground">({{ product.reviews }})</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-lg font-bold text-primary">${{ product.price }}</span>
                <span v-if="product.originalPrice" class="text-sm text-muted-foreground line-through">
                  ${{ product.originalPrice }}
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- View All Button -->
      <div class="text-center mt-12">
        <NuxtLink
          to="/products"
          class="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105"
        >
          View All Products
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  config?: Record<string, any>
}>()

const config = computed(() => props.config || {})

const tabs = ['All', 'New Arrivals', 'Best Sellers', 'Sale']
const activeTab = ref('All')

const products = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Premium Product ${i + 1}`,
  price: (Math.random() * 100 + 20).toFixed(2),
  originalPrice: i % 3 === 0 ? (Math.random() * 150 + 50).toFixed(2) : null,
  image: `/placeholder.svg?height=400&width=400&query=product+${i + 1}`,
  rating: Math.floor(Math.random() * 2) + 4,
  reviews: Math.floor(Math.random() * 200) + 50,
  badge: i % 4 === 0 ? 'NEW' : i % 3 === 0 ? 'SALE' : null,
}))

const displayedProducts = computed(() => products)
</script>
