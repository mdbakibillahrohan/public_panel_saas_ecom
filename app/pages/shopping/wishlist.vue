<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <!-- Breadcrumbs -->
    <AppBreadcrumbs :items="breadcrumbs" class="mb-6" />
    
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">My Wishlist</h1>
        <p class="text-gray-500 dark:text-gray-400 mt-1">{{ wishlistStore.itemCount }} items saved for later</p>
      </div>
      <div class="flex gap-3">
        <button
          v-if="!wishlistStore.isEmpty"
          @click="moveAllToCart"
          class="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
        >
          <span class="material-symbols-outlined text-lg">add_shopping_cart</span>
          Add All to Cart
        </button>
      </div>
    </div>

    <!-- Empty Wishlist -->
    <div v-if="wishlistStore.isEmpty" class="text-center py-16">
      <div class="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
        <span class="material-symbols-outlined text-5xl text-gray-400">favorite</span>
      </div>
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Your wishlist is empty</h2>
      <p class="text-gray-500 dark:text-gray-400 mb-6">Save items you love by clicking the heart icon.</p>
      <NuxtLink to="/products">
        <button class="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
          Explore Products
        </button>
      </NuxtLink>
    </div>

    <!-- Wishlist Items -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div
        v-for="product in wishlistStore.items"
        :key="product.id"
        class="group bg-white dark:bg-[#1a202c] rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all"
      >
        <!-- Image -->
        <NuxtLink :to="`/products/${product.slug}`" class="block relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800">
          <img 
            :src="product.images[0]" 
            :alt="product.name"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          <!-- Remove Button -->
          <button
            @click.prevent="removeFromWishlist(product)"
            class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
          >
            <span class="material-symbols-outlined text-xl" style="font-variation-settings: 'FILL' 1">favorite</span>
          </button>
          
          <!-- Stock Status Badge -->
          <div class="absolute bottom-3 left-3">
            <span 
              v-if="product.inStock"
              class="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded"
            >
              {{ product.stockCount && product.stockCount < 5 ? `Only ${product.stockCount} left` : 'In Stock' }}
            </span>
            <span v-else class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              Out of Stock
            </span>
          </div>
        </NuxtLink>
        
        <!-- Content -->
        <div class="p-4">
          <p class="text-xs text-gray-500 dark:text-gray-400 mb-1">{{ product.brand }}</p>
          <NuxtLink :to="`/products/${product.slug}`">
            <h3 class="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 hover:text-primary transition-colors">
              {{ product.name }}
            </h3>
          </NuxtLink>
          
          <!-- Rating -->
          <div class="flex items-center gap-2 mb-3">
            <div class="flex text-yellow-400">
              <span 
                v-for="star in 5" 
                :key="star"
                class="material-symbols-outlined text-sm"
                :class="[
                  star <= Math.round(product.rating) ? 'material-symbols-filled' : '',
                  star > product.rating ? 'text-gray-300 dark:text-gray-600' : ''
                ]"
              >star</span>
            </div>
            <span class="text-xs text-gray-500 dark:text-gray-400">({{ product.reviewCount }})</span>
          </div>
          
          <!-- Price -->
          <div class="flex items-center gap-2 mb-4">
            <span class="text-xl font-bold text-primary">${{ product.price.toFixed(2) }}</span>
            <span v-if="product.originalPrice" class="text-sm text-gray-400 line-through">
              ${{ product.originalPrice.toFixed(2) }}
            </span>
          </div>
          
          <!-- Add to Cart Button -->
          <button
            @click="addToCart(product)"
            :disabled="!product.inStock"
            class="w-full py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            :class="product.inStock 
              ? 'bg-primary hover:bg-blue-700 text-white' 
              : 'bg-gray-100 dark:bg-gray-800 text-gray-500'"
          >
            <span class="material-symbols-outlined text-lg">add_shopping_cart</span>
            {{ product.inStock ? 'Add to Cart' : 'Out of Stock' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWishlistStore } from '~/stores/wishlist'
import { useCartStore } from '~/stores/cart'
import { useUIStore } from '~/stores/ui'
import type { Product } from '~/stores/products'
import AppBreadcrumbs from '~/components/common/AppBreadcrumbs.vue'

useSeoMeta({
  title: 'My Wishlist - ShopEase',
  description: 'View and manage your saved items',
})

const wishlistStore = useWishlistStore()
const cartStore = useCartStore()
const uiStore = useUIStore()

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'My Wishlist' },
]

function removeFromWishlist(product: Product) {
  wishlistStore.removeFromWishlist(product.id)
  uiStore.showInfo('Removed from wishlist')
}

function addToCart(product: Product) {
  if (!product.inStock) return
  cartStore.addToCart(product.id)
  wishlistStore.removeFromWishlist(product.id)
  uiStore.showSuccess('Added to cart', product.name)
}

function moveAllToCart() {
  const count = wishlistStore.moveAllToCart()
  if (count > 0) {
    uiStore.showSuccess(`${count} items added to cart`)
  } else {
    uiStore.showWarning('No items in stock to add')
  }
}
</script>
