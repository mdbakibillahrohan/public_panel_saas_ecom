<template>
  <div v-if="product" class="flex-grow w-full max-w-7xl mx-auto px-4 md:px-10 py-6 md:py-8">
    <!-- Breadcrumbs -->
    <AppBreadcrumbs :items="breadcrumbs" class="mb-6" />

    <!-- Product Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12">
      <!-- Left Column: Gallery -->
      <div class="lg:col-span-7 flex flex-col gap-4">
        <div class="w-full aspect-square md:aspect-[4/3] bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 p-8 flex items-center justify-center group relative">
          <div class="absolute top-4 left-4 z-10 flex flex-col gap-2">
            <span
              v-if="product.badge"
              :class="[
                'text-white text-xs font-bold px-2 py-1 rounded uppercase',
                badgeClass(product.badge)
              ]"
            >
              {{ badgeText(product.badge) }}
            </span>
            <span v-if="discountPercentage > 0" class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -{{ discountPercentage }}%
            </span>
          </div>
          <img
            :src="selectedImage || product.images[0]"
            :alt="product.name"
            class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <button class="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-800/90 p-2 rounded-lg shadow-sm hover:scale-105 transition-transform">
            <span class="material-symbols-outlined text-[24px]">zoom_in</span>
          </button>
        </div>
        
        <!-- Thumbnails -->
        <div class="flex gap-4 overflow-x-auto no-scrollbar py-1">
          <button
            v-for="(image, index) in product.images"
            :key="index"
            @click="selectedImage = image"
            :class="[
              'size-20 md:size-24 shrink-0 rounded-lg border-2 p-1 bg-surface-light dark:bg-surface-dark transition-colors overflow-hidden',
              selectedImage === image 
                ? 'border-primary' 
                : 'border-gray-100 dark:border-gray-700 hover:border-gray-400'
            ]"
          >
            <img :src="image" :alt="`${product.name} view ${index + 1}`" class="w-full h-full object-cover rounded" />
          </button>
        </div>
      </div>

      <!-- Right Column: Product Details -->
      <div class="lg:col-span-5 flex flex-col h-full">
        <div class="sticky top-24 flex flex-col gap-6">
          <!-- Title & Rating -->
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-primary font-medium text-sm tracking-wide uppercase">{{ product.brand }}</span>
              <div class="flex gap-2">
                <button 
                  @click="toggleWishlist"
                  :class="[
                    'transition-colors',
                    isInWishlist ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                  ]"
                >
                  <span 
                    class="material-symbols-outlined"
                    :class="{ 'material-symbols-filled': isInWishlist }"
                  >favorite</span>
                </button>
                <button class="text-gray-400 hover:text-primary transition-colors">
                  <span class="material-symbols-outlined">share</span>
                </button>
              </div>
            </div>
            <h1 class="text-[#111318] dark:text-white text-3xl md:text-3xl font-bold leading-tight mb-3">
              {{ product.name }}
            </h1>
            <div class="flex items-center gap-2">
              <div class="flex text-yellow-400 text-sm">
                <span 
                  v-for="star in 5" 
                  :key="star"
                  class="material-symbols-outlined text-[18px]"
                  :class="[
                    star <= Math.round(product.rating) ? 'material-symbols-filled' : '',
                    star > product.rating ? 'text-gray-300 dark:text-gray-600' : ''
                  ]"
                >star</span>
              </div>
              <a href="#reviews" class="text-primary text-sm font-medium hover:underline">
                {{ product.rating }} ({{ product.reviewCount }} reviews)
              </a>
            </div>
          </div>

          <!-- Price -->
          <div class="p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-gray-800">
            <div class="flex items-end gap-3 mb-2">
              <span class="text-3xl font-bold text-[#111318] dark:text-white">${{ product.price.toFixed(2) }}</span>
              <span v-if="product.originalPrice" class="text-lg text-[#636f88] line-through mb-1">
                ${{ product.originalPrice.toFixed(2) }}
              </span>
            </div>
            <p class="text-sm text-[#636f88] dark:text-gray-400">
              Free 2-day shipping with <span class="font-bold text-primary">Plus</span>
            </p>
          </div>

          <!-- Short Description -->
          <div class="text-[#636f88] dark:text-gray-300 space-y-2">
            <p class="leading-relaxed line-clamp-3">{{ product.description }}</p>
          </div>

          <hr class="border-gray-100 dark:border-gray-800">

          <!-- Variants Selection -->
          <div class="space-y-4">
            <!-- Colors -->
            <div v-if="product.variants?.colors">
              <span class="text-sm font-bold text-[#111318] dark:text-white block mb-3">
                Color: <span class="font-normal text-[#636f88] capitalize">{{ selectedColor }}</span>
              </span>
              <div class="flex items-center gap-3">
                <label 
                  v-for="variant in product.variants.colors" 
                  :key="variant.id"
                  class="cursor-pointer group relative"
                >
                  <input 
                    type="radio" 
                    name="color" 
                    :value="variant.name"
                    v-model="selectedColor"
                    class="peer sr-only"
                  >
                  <div class="size-10 rounded-full border-2 border-transparent peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-primary dark:peer-checked:ring-offset-[#111621] transition-all"
                    :style="{ backgroundColor: variant.value }"
                  ></div>
                </label>
              </div>
            </div>

            <!-- Sizes -->
            <div v-if="product.variants?.sizes">
              <span class="text-sm font-bold text-[#111318] dark:text-white block mb-3">
                Size: <span class="font-normal text-[#636f88] capitalize">{{ selectedSize }}</span>
              </span>
              <div class="flex flex-wrap gap-2">
                <label 
                  v-for="variant in product.variants.sizes" 
                  :key="variant.id"
                  class="cursor-pointer"
                >
                  <input 
                    type="radio" 
                    name="size" 
                    :value="variant.name"
                    v-model="selectedSize"
                    class="peer sr-only"
                  >
                  <span class="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white hover:border-gray-400 dark:hover:border-gray-500 transition-all">
                    {{ variant.name }}
                  </span>
                </label>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex flex-col gap-3 pt-2">
            <div class="flex gap-4">
              <!-- Quantity Selector -->
              <div class="w-32 flex items-center justify-between rounded-lg border border-gray-100 dark:border-gray-700 bg-surface-light dark:bg-surface-dark px-3 py-2">
                <button 
                  @click="quantity > 1 ? quantity-- : null"
                  class="text-[#636f88] hover:text-primary disabled:opacity-50"
                  :disabled="quantity <= 1"
                >
                  <span class="material-symbols-outlined text-[20px]">remove</span>
                </button>
                <span class="font-medium text-gray-900 dark:text-white">{{ quantity }}</span>
                <button 
                  @click="quantity++"
                  class="text-[#636f88] hover:text-primary"
                >
                  <span class="material-symbols-outlined text-[20px]">add</span>
                </button>
              </div>
              
              <!-- Add to Cart -->
              <button
                @click="addToCart"
                :disabled="!product.inStock"
                class="flex-1 bg-primary hover:bg-blue-700 text-white font-bold rounded-lg h-12 flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span class="material-symbols-outlined">shopping_cart</span>
                {{ product.inStock ? 'Add to Cart' : 'Out of Stock' }}
              </button>
            </div>
            <button
              @click="buyNow"
              :disabled="!product.inStock"
              class="w-full border-2 border-primary text-primary hover:bg-primary/5 font-bold rounded-lg h-12 flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Buy Now
            </button>
          </div>

          <!-- Meta Info -->
          <div class="flex flex-col gap-2 text-xs text-[#636f88] dark:text-gray-400 mt-2">
            <div class="flex items-center gap-2">
              <span 
                class="material-symbols-outlined text-[18px]" 
                :class="product.inStock ? 'text-green-500' : 'text-red-500'"
              >
                {{ product.inStock ? 'check_circle' : 'cancel' }}
              </span>
              <span>{{ product.inStock ? 'In Stock, ready to ship' : 'Currently Unavailable' }}</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-[18px]">local_shipping</span>
              <span>Free shipping on orders over $50</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-[18px]">verified_user</span>
              <span>2 Year Warranty included</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Product Reviews (Using reusable component eventually, but updated here for now) -->
    <!-- ... Rest of the page content can remain static or be componentized later ... -->
  </div>
  <div v-else class="flex justify-center items-center py-20">
    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useProductsStore } from '~/stores/products'
import { useCartStore } from '~/stores/cart'
import { useWishlistStore } from '~/stores/wishlist'
import { useUIStore } from '~/stores/ui'
import AppBreadcrumbs from '~/components/common/AppBreadcrumbs.vue'

const route = useRoute()
const productsStore = useProductsStore()
const cartStore = useCartStore()
const wishlistStore = useWishlistStore()
const uiStore = useUIStore()

const product = computed(() => productsStore.getProductBySlug(route.params.slug as string))
const selectedImage = ref<string | null>(null)
const quantity = ref(1)
const selectedColor = ref<string | undefined>(undefined)
const selectedSize = ref<string | undefined>(undefined)

// Initialize options when product loads
watch(product, (newProduct) => {
  if (newProduct) {
    selectedImage.value = newProduct.images[0] || null
    if (newProduct.variants?.colors?.[0]) selectedColor.value = newProduct.variants.colors[0].name
    if (newProduct.variants?.sizes?.[0]) selectedSize.value = newProduct.variants.sizes[0].name
  }
}, { immediate: true })

const breadcrumbs = computed(() => {
  if (!product.value) return []
  return [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: product.value.category },
    { label: product.value.name }
  ]
})

const discountPercentage = computed(() => {
  if (product.value?.originalPrice) {
    return Math.round(((product.value.originalPrice - product.value.price) / product.value.originalPrice) * 100)
  }
  return 0
})

const isInWishlist = computed(() => product.value ? wishlistStore.isInWishlist(product.value.id) : false)

function toggleWishlist() {
  if (product.value) {
    wishlistStore.toggleWishlist(product.value.id)
    if (isInWishlist.value) {
      uiStore.showSuccess('Added to wishlist', product.value.name)
    } else {
      uiStore.showInfo('Removed from wishlist')
    }
  }
}

function addToCart() {
  if (product.value) {
    cartStore.addToCart(product.value.id, quantity.value, {
      color: selectedColor.value,
      size: selectedSize.value
    })
    uiStore.showSuccess('Added to cart', `${quantity.value}x ${product.value.name}`)
  }
}

function buyNow() {
  addToCart()
  const router = useRouter()
  router.push('/shopping/cart')
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
  return badge === 'bestseller' ? 'Best Seller' : badge
}
</script>