<template>
  <main class="flex-1 w-full max-w-[1440px] mx-auto px-4 lg:px-40 py-8">
    <div class="flex flex-col lg:flex-row gap-12">
      <!-- Left Column: Checkout Forms -->
      <div class="flex-1 flex flex-col gap-8">
        <!-- Breadcrumbs / Stepper -->
        <nav class="flex flex-wrap items-center gap-2 text-sm font-medium">
          <NuxtLink to="/shopping/cart" class="text-primary flex items-center gap-1">
            <span class="material-symbols-outlined text-[18px]">check_circle</span>
            Cart
          </NuxtLink>
          <span class="text-gray-400 material-symbols-outlined text-[16px]">chevron_right</span>
          <span class="text-[#111318] dark:text-white">Information</span>
          <span class="text-gray-400 material-symbols-outlined text-[16px]">chevron_right</span>
          <span class="text-gray-500">Shipping</span>
          <span class="text-gray-400 material-symbols-outlined text-[16px]">chevron_right</span>
          <span class="text-gray-500">Payment</span>
        </nav>

        <!-- Step 1: Contact Information -->
        <section class="flex flex-col gap-4">
          <div class="flex justify-between items-baseline">
            <h2 class="text-xl font-bold text-[#111318] dark:text-white">Contact Information</h2>
            <NuxtLink v-if="!userStore.isAuthenticated" to="/auth/sign-in" class="text-primary text-sm font-medium hover:underline">
              Already have an account? Log in
            </NuxtLink>
          </div>
          <div class="flex flex-col gap-4">
            <label class="flex flex-col w-full">
              <span class="text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Email address</span>
              <input
                v-model="email"
                class="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-white dark:bg-surface-dark h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-[#111318] dark:text-white"
                placeholder="you@example.com"
                type="email"
                required
              >
            </label>
            <div class="flex items-center gap-2">
              <input id="newsletter" v-model="newsletter" type="checkbox" class="rounded border-gray-300 text-primary focus:ring-primary">
              <label class="text-sm text-gray-600 dark:text-gray-400 cursor-pointer" for="newsletter">Email me with news and offers</label>
            </div>
          </div>
        </section>

        <hr class="border-border-light dark:border-gray-700">

        <!-- Step 2: Shipping Address -->
        <section class="flex flex-col gap-4">
          <h2 class="text-xl font-bold text-[#111318] dark:text-white">Shipping Address</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label class="flex flex-col">
              <span class="text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">First name</span>
              <input v-model="firstName" class="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-white dark:bg-surface-dark h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-[#111318] dark:text-white" type="text" required>
            </label>
            <label class="flex flex-col">
              <span class="text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Last name</span>
              <input v-model="lastName" class="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-white dark:bg-surface-dark h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-[#111318] dark:text-white" type="text" required>
            </label>
            <label class="flex flex-col md:col-span-2">
              <span class="text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Address</span>
              <input v-model="address" class="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-white dark:bg-surface-dark h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-[#111318] dark:text-white" placeholder="Apartment, suite, etc." type="text" required>
            </label>
            <label class="flex flex-col">
              <span class="text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">City</span>
              <input v-model="city" class="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-white dark:bg-surface-dark h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-[#111318] dark:text-white" type="text" required>
            </label>
            <label class="flex flex-col">
              <span class="text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Postal Code</span>
              <input v-model="postalCode" class="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-white dark:bg-surface-dark h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-[#111318] dark:text-white" type="text" required>
            </label>
            <label class="flex flex-col md:col-span-2">
              <span class="text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Phone</span>
              <div class="relative">
                <input v-model="phone" class="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-white dark:bg-surface-dark h-12 px-4 pl-10 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-[#111318] dark:text-white" type="tel" required>
                <div class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <span class="material-symbols-outlined text-[20px]">call</span>
                </div>
              </div>
            </label>
          </div>
        </section>

        <hr class="border-border-light dark:border-gray-700">

        <!-- Step 3: Shipping Method -->
        <section class="flex flex-col gap-4">
          <h2 class="text-xl font-bold text-[#111318] dark:text-white">Shipping Method</h2>
          <div class="flex flex-col gap-3">
            <label
              class="relative flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-all hover:bg-gray-50 dark:hover:bg-gray-800"
              :class="shippingMethod === 'standard' ? 'border-primary bg-primary/5 dark:bg-primary/10' : 'border-border-light dark:border-gray-700 bg-white dark:bg-surface-dark'"
            >
              <div class="flex items-center gap-3">
                <input v-model="shippingMethod" value="standard" class="text-primary focus:ring-primary w-5 h-5" name="shipping_method" type="radio">
                <div class="flex flex-col">
                  <span class="font-semibold text-sm text-[#111318] dark:text-white">Standard Shipping</span>
                  <span class="text-xs text-gray-500">5-7 Business Days</span>
                </div>
              </div>
              <span class="font-bold text-[#111318] dark:text-white">Free</span>
            </label>
            <label
              class="relative flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-all hover:bg-gray-50 dark:hover:bg-gray-800"
              :class="shippingMethod === 'express' ? 'border-primary bg-primary/5 dark:bg-primary/10' : 'border-border-light dark:border-gray-700 bg-white dark:bg-surface-dark'"
            >
              <div class="flex items-center gap-3">
                <input v-model="shippingMethod" value="express" class="text-primary focus:ring-primary w-5 h-5" name="shipping_method" type="radio">
                <div class="flex flex-col">
                  <span class="font-semibold text-sm text-[#111318] dark:text-white">Express Shipping</span>
                  <span class="text-xs text-gray-500">1-2 Business Days</span>
                </div>
              </div>
              <span class="font-bold text-[#111318] dark:text-white">$15.00</span>
            </label>
          </div>
        </section>

        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
          <NuxtLink to="/shopping/cart" class="flex items-center gap-1 text-sm font-medium text-primary hover:text-blue-700 transition-colors">
            <span class="material-symbols-outlined text-[18px]">arrow_back</span>
            Return to cart
          </NuxtLink>
          <button
            @click="handlePayment"
            class="w-full sm:w-auto px-8 h-14 bg-primary hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
          >
            Complete Order
            <span class="material-symbols-outlined text-[20px]">check</span>
          </button>
        </div>
      </div>

      <!-- Right Column: Order Summary (Sticky) -->
      <div class="w-full lg:w-[380px] shrink-0">
        <div class="sticky top-28 flex flex-col gap-6">
          <!-- Cart Card -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div class="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
              <h3 class="font-bold text-lg text-[#111318] dark:text-white">Order Summary</h3>
              <span class="text-sm text-gray-500">{{ cartStore.itemCount }} Items</span>
            </div>
            
            <!-- Items List -->
            <div class="p-6 flex flex-col gap-6 max-h-[300px] overflow-y-auto">
              <div 
                v-for="item in cartStore.cartItems" 
                :key="`${item.productId}-${item.selectedColor}-${item.selectedSize}`"
                class="flex gap-4"
              >
                <div class="relative size-16 bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden shrink-0 border border-gray-200 dark:border-gray-600">
                  <img :src="item.product.images[0]" :alt="item.product.name" class="w-full h-full object-cover">
                  <span class="absolute top-0 right-0 bg-gray-500/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-bl-md">
                    {{ item.quantity }}
                  </span>
                </div>
                <div class="flex flex-col flex-1 justify-center">
                  <h4 class="font-semibold text-sm leading-tight text-[#111318] dark:text-white line-clamp-1">{{ item.product.name }}</h4>
                  <p class="text-xs text-gray-500 mt-1 capitalize">
                    <span v-if="item.selectedColor">{{ item.selectedColor }}</span>
                    <span v-if="item.selectedColor && item.selectedSize"> / </span>
                    <span v-if="item.selectedSize">{{ item.selectedSize }}</span>
                  </p>
                </div>
                <div class="flex flex-col justify-center items-end">
                  <span class="font-semibold text-sm text-[#111318] dark:text-white">
                    ${{ (item.product.price * item.quantity).toFixed(2) }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Discount Code -->
            <div class="px-6 pb-6 pt-2 border-b border-gray-100 dark:border-gray-700">
              <div class="flex gap-2">
                <input
                  v-model="promoCode"
                  class="form-input flex-1 rounded-lg border-border-light dark:border-gray-600 bg-gray-50 dark:bg-gray-900 h-10 px-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary text-[#111318] dark:text-white"
                  placeholder="Discount code"
                  type="text"
                >
                <button
                  @click="applyPromo"
                  class="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 rounded-lg text-sm font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  Apply
                </button>
              </div>
              <p v-if="cartStore.promoCode" class="text-xs text-green-600 mt-2">
                Code "{{ cartStore.promoCode }}" applied!
              </p>
              <p v-if="promoError" class="text-xs text-red-500 mt-2">{{ promoError }}</p>
            </div>

            <!-- Totals -->
            <div class="p-6 bg-gray-50 dark:bg-gray-900 flex flex-col gap-3">
              <div class="flex justify-between items-center text-sm">
                <span class="text-gray-600 dark:text-gray-400">Subtotal</span>
                <span class="font-semibold text-[#111318] dark:text-white">${{ cartStore.subtotal.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between items-center text-sm">
                <span class="text-gray-600 dark:text-gray-400">Shipping</span>
                <span class="font-semibold text-green-600">{{ shippingCostDisplay }}</span>
              </div>
              <div class="flex justify-between items-center text-sm">
                <span class="text-gray-600 dark:text-gray-400">Taxes</span>
                <span class="font-semibold text-[#111318] dark:text-white">${{ cartStore.tax.toFixed(2) }}</span>
              </div>
              <div v-if="cartStore.promoDiscount > 0" class="flex justify-between items-center text-sm text-green-600">
                 <span class="">Discount</span>
                 <span class="font-semibold">-${{ cartStore.promoDiscount.toFixed(2) }}</span>
              </div>
              
              <div class="h-px bg-gray-200 dark:border-gray-700 my-2"></div>
              
              <div class="flex justify-between items-center">
                <span class="font-bold text-lg text-[#111318] dark:text-white">Total</span>
                <div class="flex items-end gap-1">
                  <span class="text-xs text-gray-500 mb-1">USD</span>
                  <span class="font-bold text-2xl text-primary">${{ totalWithShipping.toFixed(2) }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Trust Signals -->
          <div class="flex justify-center gap-4 text-gray-400 grayscale opacity-60">
            <div class="flex items-center gap-1">
              <span class="material-symbols-outlined text-[18px]">verified_user</span>
              <span class="text-xs font-medium">SSL Secure</span>
            </div>
            <div class="flex items-center gap-1">
              <span class="material-symbols-outlined text-[18px]">lock</span>
              <span class="text-xs font-medium">Encrypted Payment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '~/stores/cart'
import { useUserStore } from '~/stores/user'
import { useOrdersStore } from '~/stores/orders'
import { useUIStore } from '~/stores/ui'

const cartStore = useCartStore()
const userStore = useUserStore()
const ordersStore = useOrdersStore()
const uiStore = useUIStore()
const router = useRouter()

const email = ref('')
const firstName = ref('')
const lastName = ref('')
const address = ref('')
const city = ref('')
const postalCode = ref('')
const phone = ref('')
const newsletter = ref(false)
const shippingMethod = ref('standard')
const promoCode = ref('')
const promoError = ref('')

onMounted(() => {
  if (userStore.isAuthenticated && userStore.currentUser) {
    const user = userStore.currentUser
    email.value = user.email
    firstName.value = user.name.split(' ')[0] || ''
    lastName.value = user.name.split(' ').slice(1).join(' ') || ''
    
    if (userStore.addresses.length > 0) {
      const defaultAddr = userStore.addresses.find(a => a.isDefault) || userStore.addresses[0]
      address.value = defaultAddr.street
      city.value = defaultAddr.city
      postalCode.value = defaultAddr.zipCode
    }
  }
})

function applyPromo() {
  promoError.value = ''
  if (!promoCode.value.trim()) {
    promoError.value = 'Enter a code'
    return
  }
  const success = cartStore.applyPromoCode(promoCode.value)
  if (success) {
    uiStore.showSuccess('Promo Code Applied')
  } else {
    promoError.value = 'Invalid code'
  }
}

const shippingCost = computed(() => shippingMethod.value === 'express' ? 15 : 0)
const shippingCostDisplay = computed(() => shippingCost.value === 0 ? 'Free' : `$${shippingCost.value.toFixed(2)}`)
const totalWithShipping = computed(() => cartStore.total + shippingCost.value - cartStore.shipping) // Adjust for base shipping if needed

function handlePayment() {
  if (!email.value || !firstName.value || !address.value || !city.value) {
    uiStore.showError('Missing Information', 'Please fill in all required fields')
    return
  }

  // Simulate order creation
  const orderId = `ORD-${Date.now()}`
  ordersStore.createOrder({
    id: orderId,
    date: new Date().toISOString(),
    status: 'Pending',
    items: [...cartStore.cartItems],
    total: totalWithShipping.value,
    shippingAddress: {
      street: address.value,
      city: city.value,
      state: 'NY', // Mock
      zipCode: postalCode.value,
      country: 'USA'
    }
  })

  cartStore.clearCart()
  router.push('/shopping/thank-you')
}
</script>