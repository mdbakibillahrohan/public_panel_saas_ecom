<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <!-- Breadcrumbs -->
    <AppBreadcrumbs :items="breadcrumbs" class="mb-6" />
    
    <!-- Page Title -->
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">
      Shopping Cart
      <span class="text-lg font-normal text-gray-500 dark:text-gray-400">({{ cartStore.itemCount }} items)</span>
    </h1>

    <!-- Empty Cart -->
    <div v-if="cartStore.isEmpty" class="text-center py-16">
      <div class="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
        <span class="material-symbols-outlined text-5xl text-gray-400">shopping_cart</span>
      </div>
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Your cart is empty</h2>
      <p class="text-gray-500 dark:text-gray-400 mb-6">Looks like you haven't added anything to your cart yet.</p>
      <NuxtLink to="/products">
        <button class="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
          Start Shopping
        </button>
      </NuxtLink>
    </div>

    <!-- Cart with Items -->
    <div v-else class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <!-- Left Column: Cart Items -->
      <div class="lg:col-span-8 flex flex-col gap-6">
        <div class="bg-white dark:bg-[#1a202c] rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <!-- Table Header -->
          <div class="hidden sm:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 text-sm font-medium text-gray-500 dark:text-gray-400">
            <div class="col-span-6">Product</div>
            <div class="col-span-2 text-center">Price</div>
            <div class="col-span-2 text-center">Quantity</div>
            <div class="col-span-2 text-right">Total</div>
          </div>
          
          <!-- Cart Items -->
          <div class="divide-y divide-gray-100 dark:divide-gray-700">
            <div 
              v-for="item in cartStore.cartItems" 
              :key="`${item.productId}-${item.selectedColor}-${item.selectedSize}`"
              class="p-6 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center group"
            >
              <!-- Product Info -->
              <div class="sm:col-span-6 flex gap-4">
                <NuxtLink :to="`/products/${item.product.slug}`" class="shrink-0">
                  <img 
                    :src="item.product.images[0]" 
                    :alt="item.product.name"
                    class="w-20 h-20 object-cover rounded-lg bg-gray-100 dark:bg-gray-800"
                  />
                </NuxtLink>
                <div class="flex flex-col">
                  <NuxtLink :to="`/products/${item.product.slug}`">
                    <h3 class="font-semibold text-gray-900 dark:text-white hover:text-primary transition-colors line-clamp-2">
                      {{ item.product.name }}
                    </h3>
                  </NuxtLink>
                  <p class="text-sm text-gray-500 dark:text-gray-400">{{ item.product.brand }}</p>
                  <p v-if="item.selectedColor" class="text-sm text-gray-500 dark:text-gray-400">
                    Color: <span class="capitalize">{{ item.selectedColor }}</span>
                  </p>
                  <button 
                    @click="removeItem(item)"
                    class="text-sm font-medium text-red-500 hover:text-red-700 text-left mt-2 flex items-center gap-1 w-fit transition-colors"
                  >
                    <span class="material-symbols-outlined text-[16px]">delete</span> Remove
                  </button>
                </div>
              </div>
              
              <!-- Price -->
              <div class="sm:col-span-2 text-center">
                <span class="sm:hidden text-xs text-gray-500 mr-2">Price:</span>
                <span class="font-medium text-gray-900 dark:text-white">${{ item.product.price.toFixed(2) }}</span>
              </div>
              
              <!-- Quantity -->
              <div class="sm:col-span-2 flex justify-center">
                <div class="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg">
                  <button 
                    @click="updateQuantity(item, item.quantity - 1)"
                    class="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-l-lg transition-colors"
                  >
                    <span class="material-symbols-outlined text-lg">remove</span>
                  </button>
                  <span class="w-10 text-center font-medium text-gray-900 dark:text-white">{{ item.quantity }}</span>
                  <button 
                    @click="updateQuantity(item, item.quantity + 1)"
                    class="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-r-lg transition-colors"
                  >
                    <span class="material-symbols-outlined text-lg">add</span>
                  </button>
                </div>
              </div>
              
              <!-- Total -->
              <div class="sm:col-span-2 text-right">
                <span class="sm:hidden text-xs text-gray-500 mr-2">Total:</span>
                <span class="font-bold text-gray-900 dark:text-white text-lg">
                  ${{ (item.product.price * item.quantity).toFixed(2) }}
                </span>
              </div>
            </div>
          </div>
          
          <!-- Continue Shopping -->
          <div class="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
            <NuxtLink to="/products" class="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              <span class="material-symbols-outlined text-[18px]">arrow_back</span>
              Continue Shopping
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Right Column: Order Summary -->
      <div class="lg:col-span-4 sticky top-28">
        <div class="bg-white dark:bg-[#1a202c] rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 flex flex-col gap-6">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">Order Summary</h2>
          
          <!-- Promo Code -->
          <div>
            <div class="flex gap-2">
              <input 
                v-model="promoCode"
                type="text" 
                placeholder="Enter promo code"
                class="flex-1 h-11 px-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button 
                @click="applyPromo"
                class="px-4 h-11 bg-gray-900 dark:bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
              >
                Apply
              </button>
            </div>
            <p v-if="cartStore.promoCode" class="text-sm text-green-600 dark:text-green-400 mt-2 flex items-center gap-1">
              <span class="material-symbols-outlined text-sm">check_circle</span>
              Code "{{ cartStore.promoCode }}" applied!
            </p>
            <p v-if="promoError" class="text-sm text-red-500 mt-2">{{ promoError }}</p>
          </div>
          
          <!-- Totals -->
          <div class="space-y-3 pt-4 border-t border-gray-100 dark:border-gray-700">
            <div class="flex justify-between text-sm">
              <span class="text-gray-500 dark:text-gray-400">Subtotal</span>
              <span class="font-medium text-gray-900 dark:text-white">${{ cartStore.subtotal.toFixed(2) }}</span>
            </div>
            <div v-if="cartStore.savings > 0" class="flex justify-between text-sm">
              <span class="text-green-600 dark:text-green-400">You save</span>
              <span class="font-medium text-green-600 dark:text-green-400">-${{ cartStore.savings.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-500 dark:text-gray-400">Shipping</span>
              <span class="font-medium text-gray-900 dark:text-white">
                {{ cartStore.shipping === 0 ? 'FREE' : `$${cartStore.shipping.toFixed(2)}` }}
              </span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-500 dark:text-gray-400">Tax (8%)</span>
              <span class="font-medium text-gray-900 dark:text-white">${{ cartStore.tax.toFixed(2) }}</span>
            </div>
            <div v-if="cartStore.promoDiscount > 0" class="flex justify-between text-sm">
              <span class="text-green-600 dark:text-green-400">Promo Discount</span>
              <span class="font-medium text-green-600 dark:text-green-400">-${{ cartStore.promoDiscount.toFixed(2) }}</span>
            </div>
          </div>
          
          <!-- Total -->
          <div class="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-600">
            <span class="text-lg font-bold text-gray-900 dark:text-white">Total</span>
            <span class="text-2xl font-bold text-primary">${{ cartStore.total.toFixed(2) }}</span>
          </div>
          
          <!-- Checkout Button -->
          <NuxtLink to="/shopping/checkout">
            <button class="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3.5 px-4 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group">
              Proceed to Checkout
              <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform text-[20px]">arrow_forward</span>
            </button>
          </NuxtLink>
          
          <!-- Trust Badges -->
          <div class="flex items-center justify-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
            <div class="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
              <span class="material-symbols-outlined text-sm text-green-500">verified_user</span>
              Secure Checkout
            </div>
            <div class="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
              <span class="material-symbols-outlined text-sm text-green-500">local_shipping</span>
              Free Shipping $50+
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore, type CartItemWithProduct } from '~/stores/cart'
import { useUIStore } from '~/stores/ui'
import AppBreadcrumbs from '~/components/common/AppBreadcrumbs.vue'

useSeoMeta({
  title: 'Shopping Cart - ShopEase',
  description: 'Review your cart and proceed to checkout',
})

const cartStore = useCartStore()
const uiStore = useUIStore()

const promoCode = ref('')
const promoError = ref('')

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Shopping Cart' },
]

function removeItem(item: CartItemWithProduct) {
  cartStore.removeFromCart(item.productId, {
    color: item.selectedColor,
    size: item.selectedSize,
  })
  uiStore.showInfo('Item removed from cart')
}

function updateQuantity(item: CartItemWithProduct, newQuantity: number) {
  cartStore.updateQuantity(item.productId, newQuantity, {
    color: item.selectedColor,
    size: item.selectedSize,
  })
}

function applyPromo() {
  promoError.value = ''
  if (!promoCode.value.trim()) {
    promoError.value = 'Please enter a promo code'
    return
  }
  
  const success = cartStore.applyPromoCode(promoCode.value)
  if (success) {
    uiStore.showSuccess('Promo code applied!', `You saved $${cartStore.promoDiscount.toFixed(2)}`)
    promoCode.value = ''
  } else {
    promoError.value = 'Invalid promo code. Try SAVE10 or SAVE20'
  }
}
</script>