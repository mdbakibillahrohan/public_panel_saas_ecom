<template>
  <main class="flex-grow w-full max-w-[1024px] mx-auto px-4 py-8 md:py-12">
    <!-- Success Header -->
    <div class="flex flex-col items-center justify-center text-center mb-10">
      <div class="size-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
        <span class="material-symbols-outlined text-5xl material-symbols-filled">check_circle</span>
      </div>
      <h1 class="text-[#111318] dark:text-white text-3xl md:text-4xl font-bold leading-tight mb-2">Order Confirmed!</h1>
      <div v-if="lastOrder">
        <p class="text-[#636f88] dark:text-gray-400 text-lg max-w-lg">
          Hi {{ firstName }}, thanks for your purchase. Your order
          <span class="font-semibold text-[#111318] dark:text-white">#{{ lastOrder.orderNumber }}</span> has been confirmed.
        </p>
      </div>
      <div v-else>
         <p class="text-[#636f88] dark:text-gray-400 text-lg">Thank you for your purchase.</p>
      </div>
      
      <div class="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
        <NuxtLink to="/account" class="bg-primary hover:bg-blue-700 text-white font-medium rounded-lg h-12 px-8 flex items-center justify-center gap-2 transition-colors">
          Track Order
        </NuxtLink>
        <NuxtLink to="/products" class="bg-transparent border border-gray-200 dark:border-gray-700 text-[#111318] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-lg h-12 px-8 flex items-center justify-center gap-2 transition-colors">
          Continue Shopping
        </NuxtLink>
      </div>
    </div>

    <!-- Order Detail Card -->
    <div v-if="lastOrder" class="bg-white dark:bg-[#1a202c] rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
      <!-- Order Meta Data -->
      <div class="border-b border-gray-100 dark:border-gray-700 p-6 bg-gray-50/50 dark:bg-gray-800/20 flex flex-wrap gap-x-12 gap-y-4 justify-between items-center">
        <div class="flex flex-col">
          <span class="text-xs uppercase tracking-wider font-semibold text-[#636f88] dark:text-gray-400 mb-1">Order Number</span>
          <span class="text-[#111318] dark:text-white font-medium">{{ lastOrder.orderNumber }}</span>
        </div>
        <div class="flex flex-col">
          <span class="text-xs uppercase tracking-wider font-semibold text-[#636f88] dark:text-gray-400 mb-1">Date Placed</span>
          <span class="text-[#111318] dark:text-white font-medium">{{ formatDate(lastOrder.createdAt) }}</span>
        </div>
        <div class="flex flex-col">
          <span class="text-xs uppercase tracking-wider font-semibold text-[#636f88] dark:text-gray-400 mb-1">Total Amount</span>
          <span class="text-[#111318] dark:text-white font-medium">${{ lastOrder.total.toFixed(2) }}</span>
        </div>
        <div class="hidden sm:block ml-auto">
          <button class="flex items-center gap-2 text-primary hover:text-blue-700 text-sm font-medium transition-colors">
            <span class="material-symbols-outlined text-lg">print</span> Print Receipt
          </button>
        </div>
      </div>
      
      <div class="p-6 md:p-8">
        <!-- Stepper Progress -->
        <div class="mb-10">
          <div class="relative">
            <!-- Connecting Line -->
            <div class="absolute left-0 top-3 w-full h-1 bg-gray-100 dark:bg-gray-700 rounded-full -z-10"></div>
            <div class="absolute left-0 top-3 h-1 bg-primary rounded-full -z-10 w-[25%] transition-all duration-1000"></div>
            
            <div class="flex justify-between w-full">
              <!-- Step 1 -->
              <div class="flex flex-col items-center gap-2 group">
                <div class="size-6 rounded-full bg-primary ring-4 ring-white dark:ring-[#1a202c] flex items-center justify-center">
                  <span class="material-symbols-outlined text-white text-[14px] font-bold">check</span>
                </div>
                <span class="text-xs font-semibold text-primary">Order Placed</span>
              </div>
              <!-- Step 2 -->
              <div class="flex flex-col items-center gap-2">
                <div class="size-6 rounded-full bg-white dark:bg-gray-800 border-2 border-primary ring-4 ring-white dark:ring-[#1a202c] flex items-center justify-center">
                   <div class="size-2 rounded-full bg-primary animate-pulse"></div>
                </div>
                 <span class="text-xs font-semibold text-[#111318] dark:text-white">Processing</span>
              </div>
              <!-- Step 3 -->
              <div class="flex flex-col items-center gap-2">
                <div class="size-6 rounded-full bg-gray-100 dark:bg-gray-700 ring-4 ring-white dark:ring-[#1a202c]"></div>
                <span class="text-xs font-medium text-[#636f88] dark:text-gray-500">Shipped</span>
              </div>
              <!-- Step 4 -->
              <div class="flex flex-col items-center gap-2">
                <div class="size-6 rounded-full bg-gray-100 dark:bg-gray-700 ring-4 ring-white dark:ring-[#1a202c]"></div>
                <span class="text-xs font-medium text-[#636f88] dark:text-gray-500">Delivered</span>
              </div>
            </div>
          </div>
          
          <div class="mt-4 p-3 bg-primary/10 rounded-lg flex gap-3 items-center text-sm text-[#111318] dark:text-white">
            <span class="material-symbols-outlined text-primary">local_shipping</span>
            <p>Estimated Delivery: <span class="font-semibold">{{ estimatedDelivery }}</span></p>
          </div>
        </div>

        <!-- Product List -->
        <div class="flex flex-col gap-6">
          <h3 class="text-lg font-bold text-[#111318] dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">Items in Your Order</h3>
          
          <div 
            v-for="item in lastOrder.items" 
            :key="item.productId"
            class="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
          >
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg size-20 shrink-0 overflow-hidden border border-gray-100 dark:border-gray-700">
               <img :src="item.image" :alt="item.name" class="w-full h-full object-cover">
            </div>
            <div class="flex-1 min-w-0">
              <h4 class="text-[#111318] dark:text-white font-medium text-base truncate">{{ item.name }}</h4>
              <p class="text-[#636f88] dark:text-gray-400 text-sm mt-1 capitalize">
                 <span v-if="item.selectedColor">{{ item.selectedColor }}</span>
                 <span v-if="item.selectedColor && item.selectedSize"> / </span>
                 <span v-if="item.selectedSize">{{ item.selectedSize }}</span>
              </p>
            </div>
            <div class="flex items-center justify-between w-full sm:w-auto sm:justify-end gap-8">
              <p class="text-[#636f88] dark:text-gray-400 text-sm">Qty: {{ item.quantity }}</p>
              <p class="text-[#111318] dark:text-white font-semibold text-base">${{ (item.price * item.quantity).toFixed(2) }}</p>
            </div>
          </div>

          <!-- Cost Summary -->
          <div class="mt-4 pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-col items-end gap-3">
            <div class="w-full max-w-xs flex justify-between text-sm">
              <span class="text-[#636f88] dark:text-gray-400">Total</span>
              <span class="text-[#111318] dark:text-white font-bold text-lg">${{ lastOrder.total.toFixed(2) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useOrdersStore } from '~/stores/orders'
import { useUserStore } from '~/stores/user'

const ordersStore = useOrdersStore()
const userStore = useUserStore()
const router = useRouter()

// Get the most recent order (likely just created)
// In a real app, we'd pass order ID via route params
const lastOrder = computed(() => {
   if (ordersStore.orders.length > 0) {
      // Assuming the first one is the newest based on unshift in store
      return ordersStore.orders[0] 
   }
   return null
})

const firstName = computed(() => {
   return userStore.user ? userStore.user.firstName : 'Guest'
})

const estimatedDelivery = computed(() => {
   const date = new Date()
   date.setDate(date.getDate() + 5) // 5 days from now
   return date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })
})

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

onMounted(() => {
   if (!lastOrder.value) {
      // If no order found, maybe redirect to home after a brief delay?
      // For now, we'll just let them stay or click continue shopping
   }
})
</script>