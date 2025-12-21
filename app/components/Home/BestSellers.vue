<template>
  <section class="flex flex-col gap-6">
    <div class="flex items-center justify-between">
      <h2 class="text-[#111318] dark:text-white text-2xl font-bold">Best Sellers</h2>
      <NuxtLink 
        to="/products" 
        class="text-primary font-medium hover:underline text-sm flex items-center gap-1"
      >
        View All 
        <span class="material-symbols-outlined text-sm">arrow_forward</span>
      </NuxtLink>
    </div>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <div
        v-for="product in bestSellers"
        :key="product.id"
        class="group flex flex-col gap-3 bg-white dark:bg-[#1a202c] p-3 rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300"
      >
        <NuxtLink :to="`/products/${product.slug}`" class="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
          <img
            :src="product.images[0]"
            :alt="product.name"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          <!-- Wishlist Button -->
          <button
            @click.prevent="toggleWishlist(product)"
            :class="[
              'absolute top-3 right-3 size-8 rounded-full backdrop-blur-sm flex items-center justify-center transition-all duration-300',
              isInWishlist(product.id)
                ? 'bg-red-50 dark:bg-red-900/30 text-red-500 opacity-100'
                : 'bg-white/80 dark:bg-black/50 text-gray-500 hover:text-red-500 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0'
            ]"
          >
            <span 
              class="material-symbols-outlined text-lg"
              :class="{ 'material-symbols-filled': isInWishlist(product.id) }"
            >favorite</span>
          </button>
          
          <!-- Add to Cart Overlay -->
          <div class="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <button
              @click.prevent="addToCart(product)"
              class="w-full bg-primary hover:bg-blue-700 text-white font-medium py-2 rounded-lg text-sm shadow-lg"
            >
              Add to Cart
            </button>
          </div>
        </NuxtLink>
        
        <div class="px-1 pb-1">
          <div class="flex justify-between items-start mb-1">
            <NuxtLink :to="`/products/${product.slug}`">
              <h3 class="font-semibold text-[#111318] dark:text-white line-clamp-1 hover:text-primary transition-colors">
                {{ product.name }}
              </h3>
            </NuxtLink>
            <div class="flex items-center gap-1 text-xs font-bold text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 px-1.5 py-0.5 rounded shrink-0">
              {{ product.rating }} 
              <span class="material-symbols-outlined text-[10px] material-symbols-filled">star</span>
            </div>
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">{{ product.category }}</p>
          <div class="flex items-center gap-2">
            <span class="text-lg font-bold text-[#111318] dark:text-white">${{ product.price.toFixed(2) }}</span>
            <span v-if="product.originalPrice" class="text-sm text-gray-400 line-through">
              ${{ product.originalPrice.toFixed(2) }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useProductsStore, type Product } from '~/stores/products'
import { useCartStore } from '~/stores/cart'
import { useWishlistStore } from '~/stores/wishlist'
import { useUIStore } from '~/stores/ui'

const productsStore = useProductsStore()
const cartStore = useCartStore()
const wishlistStore = useWishlistStore()
const uiStore = useUIStore()

const bestSellers = computed(() => productsStore.bestSellers.slice(0, 4))

function isInWishlist(productId: string): boolean {
  return wishlistStore.isInWishlist(productId)
}

function toggleWishlist(product: Product) {
  wishlistStore.toggleWishlist(product.id)
  if (wishlistStore.isInWishlist(product.id)) {
    uiStore.showSuccess('Added to wishlist', product.name)
  } else {
    uiStore.showInfo('Removed from wishlist')
  }
}

function addToCart(product: Product) {
  cartStore.addToCart(product.id)
  uiStore.showSuccess('Added to cart', product.name)
}
</script>
