<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <!-- Breadcrumbs -->
    <AppBreadcrumbs :items="breadcrumbs" class="mb-6" />
    
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">All Products</h1>
        <p class="text-gray-500 dark:text-gray-400">
          Showing {{ productsStore.filteredProducts.length }} products
          <span v-if="productsStore.searchQuery"> for "{{ productsStore.searchQuery }}"</span>
        </p>
      </div>
      
      <!-- Sort & View Options -->
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2">
          <span class="text-sm text-gray-500 dark:text-gray-400">Sort by:</span>
          <select 
            v-model="sortBy"
            class="h-10 px-3 pr-8 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="popular">Most Popular</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>
    </div>

    <div class="flex gap-8">
      <!-- Filters Sidebar -->
      <aside class="hidden lg:block w-64 shrink-0 space-y-8">
        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
          <div class="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700 mb-4">
            <h3 class="font-bold text-gray-900 dark:text-white">Filters</h3>
            <button 
              @click="clearFilters" 
              class="text-sm text-primary font-medium hover:underline"
            >
              Clear All
            </button>
          </div>
          
          <!-- Categories -->
          <div class="mb-6">
            <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Category</h4>
            <div class="space-y-2">
              <label 
                v-for="category in productsStore.allCategories" 
                :key="category"
                class="flex items-center gap-2 cursor-pointer"
              >
                <input 
                  type="radio" 
                  :value="category" 
                  v-model="selectedCategory"
                  class="w-4 h-4 text-primary focus:ring-primary"
                />
                <span class="text-sm text-gray-600 dark:text-gray-400">{{ category }}</span>
              </label>
            </div>
          </div>
          
          <!-- Brands -->
          <div class="mb-6">
            <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Brands</h4>
            <div class="space-y-2 max-h-48 overflow-y-auto">
              <label 
                v-for="brand in productsStore.allBrands" 
                :key="brand"
                class="flex items-center gap-2 cursor-pointer"
              >
                <input 
                  type="checkbox" 
                  :value="brand" 
                  v-model="selectedBrands"
                  class="w-4 h-4 text-primary focus:ring-primary rounded"
                />
                <span class="text-sm text-gray-600 dark:text-gray-400">{{ brand }}</span>
              </label>
            </div>
          </div>
          
          <!-- Price Range -->
          <div class="mb-6">
            <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Price Range</h4>
            <div class="flex items-center gap-2">
              <input 
                type="number" 
                v-model.number="priceMin"
                placeholder="Min"
                class="w-full h-10 px-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-sm"
              />
              <span class="text-gray-400">-</span>
              <input 
                type="number" 
                v-model.number="priceMax"
                placeholder="Max"
                class="w-full h-10 px-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-sm"
              />
            </div>
          </div>
          
          <!-- Rating -->
          <div>
            <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Rating</h4>
            <div class="space-y-2">
              <label 
                v-for="rating in [4, 3, 2, 1]" 
                :key="rating"
                class="flex items-center gap-2 cursor-pointer"
              >
                <input 
                  type="radio" 
                  :value="rating" 
                  v-model="minRating"
                  class="w-4 h-4 text-primary focus:ring-primary"
                />
                <div class="flex items-center gap-1">
                  <div v-for="star in 5" :key="star">
                  <span 
                    class="material-symbols-outlined text-sm"
                    :class="[
                      star <= rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600',
                      { 'material-symbols-filled': star <= rating }
                    ]"
                  >star</span>
                </div>
                <span class="text-sm text-gray-500 dark:text-gray-400 ml-1">& Up</span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </aside>

      <!-- Products Grid -->
      <div class="flex-1">
        <div v-if="productsStore.filteredProducts.length === 0" class="text-center py-16">
          <div class="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
            <span class="material-symbols-outlined text-5xl text-gray-400">search_off</span>
          </div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">No products found</h2>
          <p class="text-gray-500 dark:text-gray-400 mb-6">Try adjusting your filters or search terms.</p>
          <button 
            @click="clearFilters"
            class="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Clear Filters
          </button>
        </div>
        
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          <div
            v-for="product in productsStore.filteredProducts"
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
              
              <!-- Badge -->
              <span
                v-if="product.badge"
                :class="[
                  'absolute top-3 left-3 text-white text-xs font-bold px-2 py-1 rounded uppercase',
                  badgeClass(product.badge)
                ]"
              >
                {{ badgeText(product.badge) }}
              </span>
              
              <!-- Wishlist Button -->
              <button
                @click.prevent="toggleWishlist(product)"
                :class="[
                  'absolute top-3 right-3 w-9 h-9 rounded-full backdrop-blur-sm flex items-center justify-center transition-all',
                  isInWishlist(product.id)
                    ? 'bg-red-50 dark:bg-red-900/30 text-red-500'
                    : 'bg-white/80 dark:bg-black/50 text-gray-500 hover:text-red-500 opacity-0 group-hover:opacity-100'
                ]"
              >
                <span 
                  class="material-symbols-outlined text-xl"
                  :class="{ 'material-symbols-filled': isInWishlist(product.id) }"
                >favorite</span>
              </button>
              
              <!-- Quick Add -->
              <div class="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all">
                <button
                  @click.prevent="addToCart(product)"
                  class="w-full bg-primary hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg text-sm shadow-lg"
                >
                  Add to Cart
                </button>
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
              <div class="flex items-center gap-2 mb-2">
                <div class="flex text-yellow-400">
                  <span 
                    v-for="star in 5" 
                    :key="star"
                    class="material-symbols-outlined text-xs"
                    :class="[
                      star <= Math.round(product.rating) ? 'material-symbols-filled' : '',
                      star > product.rating ? 'text-gray-300 dark:text-gray-600' : ''
                    ]"
                  >star</span>
                </div>
                <span class="text-xs text-gray-500 dark:text-gray-400">({{ product.reviewCount }})</span>
              </div>
              
              <!-- Price -->
              <div class="flex items-center gap-2">
                <span class="text-lg font-bold text-primary">${{ product.price.toFixed(2) }}</span>
                <span v-if="product.originalPrice" class="text-sm text-gray-400 line-through">
                  ${{ product.originalPrice.toFixed(2) }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useProductsStore, type Product } from '~/stores/products'
import { useCartStore } from '~/stores/cart'
import { useWishlistStore } from '~/stores/wishlist'
import { useUIStore } from '~/stores/ui'
import AppBreadcrumbs from '~/components/common/AppBreadcrumbs.vue'

useSeoMeta({
  title: 'All Products - ShopEase',
  description: 'Browse our complete collection of products',
})

const productsStore = useProductsStore()
const cartStore = useCartStore()
const wishlistStore = useWishlistStore()
const uiStore = useUIStore()

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Products' },
]

// Filter state
const sortBy = ref<'popular' | 'price-low' | 'price-high' | 'newest' | 'rating'>('popular')
const selectedCategory = ref<string | null>(null)
const selectedBrands = ref<string[]>([])
const priceMin = ref<number | undefined>()
const priceMax = ref<number | undefined>()
const minRating = ref<number | undefined>()

// Watch filters and update store
watch([sortBy, selectedCategory, selectedBrands, priceMin, priceMax, minRating], () => {
  productsStore.setFilters({
    sortBy: sortBy.value,
    category: selectedCategory.value || undefined,
    brands: selectedBrands.value.length > 0 ? selectedBrands.value : undefined,
    priceMin: priceMin.value,
    priceMax: priceMax.value,
    rating: minRating.value,
  })
}, { deep: true })

function clearFilters() {
  sortBy.value = 'popular'
  selectedCategory.value = null
  selectedBrands.value = []
  priceMin.value = undefined
  priceMax.value = undefined
  minRating.value = undefined
  productsStore.clearFilters()
}

function isInWishlist(productId: string): boolean {
  return wishlistStore.isInWishlist(productId)
}



const toggleWishlist = (product: Product) => {
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

function badgeClass(badge: string): string {
  const classes: Record<string, string> = {
    bestseller: 'bg-black/80',
    sale: 'bg-red-500',
    new: 'bg-green-500',
    limited: 'bg-purple-500',
  }
  return classes[badge] || 'bg-gray-500'
}

function badgeText(badge: string): string {
  const texts: Record<string, string> = {
    bestseller: 'Best Seller',
    sale: 'Sale',
    new: 'New',
    limited: 'Limited',
  }
  return texts[badge] || badge
}

onMounted(() => {
  productsStore.fetchProducts()
})
</script>