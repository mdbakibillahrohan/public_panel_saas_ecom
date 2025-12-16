<template>
  <div
    :class="[
      'group bg-white dark:bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 flex',
      variant === 'horizontal' ? 'flex-row' : 'flex-col',
      'border border-gray-200 dark:border-gray-700',
      'hover:shadow-lg hover:border-primary/30 dark:hover:border-primary/30',
    ]"
  >
    <!-- Image Container -->
    <div 
      :class="[
        'relative overflow-hidden bg-gray-100 dark:bg-gray-900',
        variant === 'horizontal' ? 'w-32 shrink-0' : 'aspect-square',
      ]"
    >
      <!-- Badge -->
      <div
        v-if="product.badge"
        :class="[
          'absolute top-3 left-3 z-10 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded',
          badgeClass
        ]"
      >
        {{ badgeText }}
      </div>
      
      <!-- Wishlist Button -->
      <button
        v-if="showWishlist"
        @click.prevent="handleWishlistToggle"
        :class="[
          'absolute top-3 right-3 z-10 p-1.5 rounded-full backdrop-blur-sm transition-all',
          isInWishlist
            ? 'bg-red-50 dark:bg-red-900/30 text-red-500'
            : 'bg-white/80 dark:bg-black/50 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100'
        ]"
      >
        <span 
          class="material-symbols-outlined text-xl"
          :class="{ 'material-symbols-filled': isInWishlist }"
        >
          favorite
        </span>
      </button>
      
      <!-- Product Image -->
      <img
        :src="product.images[0]"
        :alt="product.name"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      
      <!-- Quick View Overlay -->
      <div
        v-if="showQuickView"
        class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
      >
        <button
          @click.prevent="handleQuickView"
          class="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform"
        >
          Quick View
        </button>
      </div>
    </div>
    
    <!-- Content -->
    <div class="p-4 flex flex-col flex-1">
      <!-- Brand -->
      <div class="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
        {{ product.brand }}
      </div>
      
      <!-- Name -->
      <h3 
        :class="[
          'font-bold text-gray-900 dark:text-white leading-tight mb-2 group-hover:text-primary transition-colors',
          variant === 'horizontal' ? 'text-sm line-clamp-1' : 'text-base line-clamp-2'
        ]"
      >
        {{ product.name }}
      </h3>
      
      <!-- Rating -->
      <div class="flex items-center gap-1 mb-3">
        <div class="flex text-yellow-400 text-sm">
          <span 
            v-for="star in 5" 
            :key="star"
            class="material-symbols-outlined text-sm w-4"
            :class="[
              star <= Math.floor(product.rating) ? 'material-symbols-filled' : '',
              star > product.rating ? 'text-gray-300 dark:text-gray-600' : ''
            ]"
          >
            {{ star <= product.rating ? (star === Math.ceil(product.rating) && product.rating % 1 !== 0 ? 'star_half' : 'star') : 'star' }}
          </span>
        </div>
        <span class="text-xs text-gray-400">({{ formatReviewCount(product.reviewCount) }})</span>
      </div>
      
      <!-- Stock Status (for wishlist variant) -->
      <div 
        v-if="variant === 'wishlist'" 
        class="mb-3"
      >
        <p 
          v-if="product.inStock" 
          class="text-green-600 dark:text-green-400 text-sm font-medium flex items-center gap-1"
        >
          <span class="material-symbols-outlined text-[16px]">check_circle</span>
          {{ product.stockCount && product.stockCount < 5 ? `Only ${product.stockCount} left` : 'In Stock' }}
        </p>
        <p 
          v-else 
          class="text-red-600 dark:text-red-400 text-sm font-medium flex items-center gap-1"
        >
          <span class="material-symbols-outlined text-[16px]">cancel</span>
          Out of Stock
        </p>
      </div>
      
      <!-- Price & Actions -->
      <div class="mt-auto flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
        <div class="flex flex-col">
          <span class="text-lg font-bold text-primary">${{ product.price.toFixed(2) }}</span>
          <span 
            v-if="product.originalPrice" 
            class="text-xs text-gray-400 line-through"
          >
            ${{ product.originalPrice.toFixed(2) }}
          </span>
        </div>
        
        <!-- Add to Cart Button -->
        <button
          v-if="variant !== 'wishlist'"
          @click.prevent="handleAddToCart"
          :disabled="!product.inStock"
          class="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-primary hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span class="material-symbols-outlined text-xl">add_shopping_cart</span>
        </button>
        
        <!-- Wishlist Actions -->
        <div v-else class="flex gap-2">
          <button
            @click.prevent="handleAddToCart"
            :disabled="!product.inStock"
            class="flex items-center justify-center rounded-lg h-10 px-4 bg-primary hover:bg-blue-700 text-white text-sm font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add to Cart
          </button>
          <button
            @click.prevent="handleWishlistToggle"
            class="flex items-center justify-center rounded-lg h-10 w-10 bg-red-50 dark:bg-red-900/20 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
            title="Remove"
          >
            <span class="material-symbols-outlined text-[20px]">delete</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Product } from '~/stores/products'
import { useCartStore } from '~/stores/cart'
import { useWishlistStore } from '~/stores/wishlist'
import { useUIStore } from '~/stores/ui'

interface Props {
  product: Product
  variant?: 'grid' | 'horizontal' | 'wishlist'
  showQuickView?: boolean
  showWishlist?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'grid',
  showQuickView: true,
  showWishlist: true,
})

const emit = defineEmits<{
  addToCart: [product: Product]
  quickView: [product: Product]
  wishlistToggle: [product: Product]
}>()

const cartStore = useCartStore()
const wishlistStore = useWishlistStore()
const uiStore = useUIStore()

const isInWishlist = computed(() => wishlistStore.isInWishlist(props.product.id))

const badgeClass = computed(() => {
  const classes: Record<string, string> = {
    bestseller: 'bg-black/80',
    sale: 'bg-red-600',
    new: 'bg-blue-600',
    limited: 'bg-purple-600',
  }
  return props.product.badge ? classes[props.product.badge] : ''
})

const badgeText = computed(() => {
  const texts: Record<string, string> = {
    bestseller: 'Best Seller',
    sale: `Sale -${Math.round(((props.product.originalPrice! - props.product.price) / props.product.originalPrice!) * 100)}%`,
    new: 'New Arrival',
    limited: 'Limited',
  }
  return props.product.badge ? texts[props.product.badge] : ''
})

function formatReviewCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`
  }
  return count.toString()
}

function handleAddToCart() {
  cartStore.addToCart(props.product.id)
  uiStore.showSuccess('Added to cart', `${props.product.name} has been added to your cart.`)
  emit('addToCart', props.product)
}

function handleQuickView() {
  uiStore.openQuickView(props.product)
  emit('quickView', props.product)
}

function handleWishlistToggle() {
  wishlistStore.toggleWishlist(props.product.id)
  if (isInWishlist.value) {
    uiStore.showInfo('Removed from wishlist')
  } else {
    uiStore.showSuccess('Added to wishlist', `${props.product.name} has been saved.`)
  }
  emit('wishlistToggle', props.product)
}
</script>
