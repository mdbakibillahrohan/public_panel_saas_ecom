<template>
  <main class="flex-grow w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Breadcrumbs -->
    <AppBreadcrumbs :items="breadcrumbs" class="mb-8" />
    
    <div class="flex flex-col lg:flex-row gap-8">
      <!-- SideNavBar -->
      <aside class="w-full lg:w-72 flex-shrink-0">
        <div class="bg-white dark:bg-[#1a202c] rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
          <!-- User Profile Summary -->
          <div class="flex items-center gap-4 mb-8">
            <div class="relative size-14 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xl font-bold text-gray-500 dark:text-gray-300">
              {{ initials }}
            </div>
            <div>
              <h3 class="font-bold text-[#111318] dark:text-white">{{ userStore.fullName }}</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">Member</p>
            </div>
          </div>
          
          <!-- Navigation Links -->
          <nav class="space-y-1">
            <button 
              v-for="tab in tabs" 
              :key="tab.id"
              @click="activeTab = tab.id"
              class="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors text-left"
              :class="activeTab === tab.id 
                ? 'bg-primary/10 text-primary' 
                : 'text-[#636f88] dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#111318] dark:hover:text-white'"
            >
              <span class="material-symbols-outlined" :class="{ 'fill': activeTab === tab.id }">{{ tab.icon }}</span>
              {{ tab.label }}
            </button>
            
            <div class="pt-4 mt-4 border-t border-gray-100 dark:border-gray-700">
              <button 
                @click="logout"
                class="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors font-medium text-left"
              >
                <span class="material-symbols-outlined">logout</span>
                Sign Out
              </button>
            </div>
          </nav>
        </div>
      </aside>

      <!-- Main Content -->
      <div class="flex-1 space-y-6">
        <!-- Profile Tab -->
        <div v-if="activeTab === 'profile'" class="space-y-6">
          <div class="mb-6">
            <h1 class="text-3xl font-bold tracking-tight text-[#111318] dark:text-white mb-2">My Profile</h1>
            <p class="text-gray-500 dark:text-gray-400">Manage your personal information and account security settings.</p>
          </div>

          <div class="bg-white dark:bg-[#1a202c] rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
              <h2 class="text-lg font-bold text-[#111318] dark:text-white">Personal Information</h2>
              <button class="text-sm font-medium text-primary hover:text-blue-700 transition-colors">Edit</button>
            </div>
            <div class="p-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-sm font-medium text-[#111318] dark:text-gray-300">Full Name</label>
                  <input class="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-[#111318] dark:text-white" type="text" :value="userStore?.currentUser?.name" readonly>
                </div>
                <div class="space-y-2">
                  <label class="text-sm font-medium text-[#111318] dark:text-gray-300">Email Address</label>
                  <input class="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-[#111318] dark:text-white" type="email" :value="userStore.currentUser?.email" readonly>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Orders Tab -->
        <div v-if="activeTab === 'orders'" class="space-y-6">
          <div class="mb-6">
            <h1 class="text-3xl font-bold tracking-tight text-[#111318] dark:text-white mb-2">My Orders</h1>
            <p class="text-gray-500 dark:text-gray-400">View and track your order history.</p>
          </div>

          <div v-if="ordersStore.orders.length === 0" class="text-center py-12 bg-white dark:bg-[#1a202c] rounded-xl border border-gray-100 dark:border-gray-700">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
              <span class="material-symbols-outlined text-3xl text-gray-400">shopping_bag</span>
            </div>
            <h3 class="text-lg font-medium text-[#111318] dark:text-white mb-2">No orders yet</h3>
            <p class="text-gray-500 dark:text-gray-400 mb-6">Looks like you haven't placed any orders yet.</p>
            <NuxtLink to="/products" class="text-primary font-medium hover:underline">Start Shopping</NuxtLink>
          </div>

          <div v-else class="space-y-6">
            <div 
              v-for="order in ordersStore.orders" 
              :key="order.id"
              class="bg-white dark:bg-[#1a202c] rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex flex-wrap gap-4 justify-between items-center bg-gray-50 dark:bg-gray-800/50">
                <div class="flex flex-wrap gap-x-8 gap-y-2">
                  <div>
                    <span class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-1">Order Placed</span>
                    <span class="text-sm font-medium text-[#111318] dark:text-white">{{ formatDate(order?.createdAt) }}</span>
                  </div>
                  <div>
                    <span class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-1">Total</span>
                    <span class="text-sm font-medium text-[#111318] dark:text-white">${{ order.total.toFixed(2) }}</span>
                  </div>
                  <div>
                    <span class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-1">Order #</span>
                    <span class="text-sm font-medium text-[#111318] dark:text-white">{{ order.id }}</span>
                  </div>
                </div>
                <div class="flex items-center gap-4">
                  <span 
                    class="px-3 py-1 rounded-full text-xs font-bold uppercase"
                    :class="statusClass(order.status)"
                  >
                    {{ order.status }}
                  </span>
                  <button class="text-primary text-sm font-medium hover:underline">View Details</button>
                </div>
              </div>
              <div class="p-6">
                 <div class="space-y-4">
                    <div v-for="item in order.items" :key="item.productId" class="flex items-center gap-4">
                       <div class="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden shrink-0">
                          <img :src="item.product.images[0]" :alt="item.product.name" class="w-full h-full object-cover">
                       </div>
                       <div>
                          <h4 class="font-medium text-[#111318] dark:text-white text-sm line-clamp-1">{{ item.product.name }}</h4>
                          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Qty: {{ item.quantity }}</p>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Addresses Tab -->
        <div v-if="activeTab === 'addresses'" class="space-y-6">
           <div class="mb-6 flex justify-between items-end">
            <div>
               <h1 class="text-3xl font-bold tracking-tight text-[#111318] dark:text-white mb-2">Addresses</h1>
               <p class="text-gray-500 dark:text-gray-400">Manage your shipping and billing addresses.</p>
            </div>
            <button class="text-primary font-medium hover:underline">+ Add New</button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div 
                v-for="addr in userStore.addresses" 
                :key="addr.id"
                class="bg-white dark:bg-[#1a202c] rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 relative"
             >
                <div v-if="addr.isDefault" class="absolute top-4 right-4 text-green-500" title="Default Address">
                   <span class="material-symbols-outlined">check_circle</span>
                </div>
                <div class="flex items-start gap-4 mb-4">
                   <div class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg shrink-0">
                      <span class="material-symbols-outlined text-gray-600 dark:text-gray-300">home</span>
                   </div>
                   <div>
                      <p class="font-bold text-[#111318] dark:text-white">{{ addr.label }}</p>
                      <p class="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                         {{ addr.street }}<br>
                         {{ addr.city }}, {{ addr.state }} {{ addr.zipCode }}<br>
                         {{ addr.country }}
                      </p>
                   </div>
                </div>
                <div class="flex gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                   <button class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Edit</button>
                   <button class="text-sm font-medium text-red-500 hover:text-red-700 transition-colors">Remove</button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '~/stores/user'
import { useOrdersStore } from '~/stores/orders'
import AppBreadcrumbs from '~/components/common/AppBreadcrumbs.vue'

const userStore = useUserStore()
const ordersStore = useOrdersStore()
const router = useRouter()

const activeTab = ref('profile')
const initials = computed(() => userStore.initials)

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'My Account' },
]

const tabs = [
  { id: 'profile', label: 'Profile Information', icon: 'person' },
  { id: 'orders', label: 'My Orders', icon: 'package_2' },
  { id: 'addresses', label: 'Addresses', icon: 'location_on' },
  { id: 'payment', label: 'Payment Methods', icon: 'credit_card' },
  { id: 'wishlist', label: 'Wishlist', icon: 'favorite' },
]

function logout() {
  userStore.logout()
  router.push('/')
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function statusClass(status: string) {
  const classes: Record<string, string> = {
    'Delivered': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    'Shipped': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    'Processing': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    'Pending': 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
    'Cancelled': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  }
  return classes[status] || classes['Pending']
}

// Redirect if not logged in
if (!userStore.isAuthenticated) {
    router.push('/auth/sign-in')
}
</script>
