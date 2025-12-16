<template>
  <div class="relative">
    <!-- Header with Dark Gradient -->
    <header class="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
      <div class="mx-auto px-4 container py-3">
        <div class="flex items-center justify-between gap-4 md:gap-6">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center space-x-3 group cursor-pointer shrink-0">
            <div class="relative">
              <div class="absolute inset-0 bg-primary rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div class="relative bg-gradient-to-br from-primary to-blue-600 p-2 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span class="material-symbols-outlined text-white text-2xl">shopping_bag</span>
              </div>
            </div>
            <div class="hidden sm:block">
              <h1 class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-white transition-all duration-300">
                ShopEase
              </h1>
              <p class="text-xs text-blue-300/70">Your shopping destination</p>
            </div>
          </NuxtLink>

          <!-- Search Bar -->
          <div class="flex-1 max-w-2xl hidden md:block">
            <div class="relative group">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search for products, brands and more..."
                class="w-full h-11 pl-11 pr-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:bg-white/15 focus:border-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all"
                @keyup.enter="handleSearch"
              />
              <span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xl">search</span>
            </div>
          </div>

          <!-- Nav Links & Actions -->
          <nav class="flex items-center gap-1 md:gap-2">
            <!-- Desktop Nav Links -->
            <NuxtLink 
              v-for="item in menusItems" 
              :key="item.name"
              :to="item.link" 
              class="hidden lg:flex px-4 py-2 font-medium rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 relative group"
            >
              <span class="relative z-10">{{ item.name }}</span>
              <span class="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/10 to-blue-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </NuxtLink>
            
            <!-- Theme Toggle -->
            <button
              @click="toggleTheme"
              class="flex items-center justify-center w-10 h-10 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all"
              :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            >
              <span 
                class="material-symbols-outlined text-xl transition-transform"
                :class="isDark ? '' : 'rotate-180'"
              >
                {{ isDark ? 'dark_mode' : 'light_mode' }}
              </span>
            </button>
            
            <!-- Wishlist Button -->
            <NuxtLink 
              to="/shopping/wishlist"
              class="relative flex items-center justify-center w-10 h-10 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all"
            >
              <span class="material-symbols-outlined text-xl">favorite</span>
              <span 
                v-if="wishlistCount > 0"
                class="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-red-500 text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1 shadow-lg ring-2 ring-slate-900"
              >
                {{ wishlistCount > 9 ? '9+' : wishlistCount }}
              </span>
            </NuxtLink>
            
            <!-- Cart Button -->
            <NuxtLink 
              to="/shopping/cart"
              class="relative flex items-center justify-center w-10 h-10 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all"
            >
              <span class="material-symbols-outlined text-xl">shopping_cart</span>
              <span 
                v-if="cartCount > 0"
                class="absolute -top-1 -right-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1 shadow-lg ring-2 ring-slate-900"
              >
                {{ cartCount > 9 ? '9+' : cartCount }}
              </span>
            </NuxtLink>
            
            <!-- User Button / Auth -->
            <template v-if="isAuthenticated">
              <UDropdownMenu  :items="userMenuItems" :popper="{ placement: 'bottom-end' }">
                <button class="flex items-center gap-2 px-2 py-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all">
                  <div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white text-sm font-bold ring-2 ring-white/20">
                    {{ initials }}
                  </div>
                  <span class="material-symbols-outlined text-lg hidden sm:block">expand_more</span>
                </button>
              </UDropdownMenu >
            </template>
            <template v-else>
              <NuxtLink to="/auth/sign-in">
                <button class="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 font-medium transition-all">
                  Sign In
                </button>
              </NuxtLink>
              <NuxtLink to="/auth/sign-up">
                <button class="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/30 transition-all">
                  Sign Up
                </button>
              </NuxtLink>
              <NuxtLink to="/auth/sign-in" class="sm:hidden">
                <button class="flex items-center justify-center w-10 h-10 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all">
                  <span class="material-symbols-outlined text-xl">person</span>
                </button>
              </NuxtLink>
            </template>
          </nav>
        </div>
        
        <!-- Mobile Search (shown below header on small screens) -->
        <div class="md:hidden mt-3">
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search products..."
              class="w-full h-10 pl-10 pr-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:bg-white/15 focus:border-blue-400/50 focus:outline-none transition-all text-sm"
              @keyup.enter="handleSearch"
            />
            <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">search</span>
          </div>
        </div>
      </div>
    </header>

    <!-- Subtle glow effect at bottom of header -->
    <div class="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useCartStore } from '~/stores/cart'
import { useWishlistStore } from '~/stores/wishlist'
import { useUserStore } from '~/stores/user'
import { useProductsStore } from '~/stores/products'
import { useTheme } from '~/composables/useTheme'

const cartStore = useCartStore()
const wishlistStore = useWishlistStore()
const userStore = useUserStore()
const productsStore = useProductsStore()
const { isDark, toggleTheme } = useTheme()
const router = useRouter()

const searchQuery = ref('')

const cartCount = computed(() => cartStore.itemCount)
const wishlistCount = computed(() => wishlistStore.itemCount)
const isAuthenticated = computed(() => userStore.isAuthenticated)
const initials = computed(() => userStore.initials)

const menusItems = [
  { name: 'Home', link: '/' },
  { name: 'Shop', link: '/products' },
  { name: 'About', link: '/about' },
  { name: 'Contact', link: '/contact' },
]

const userMenuItems = computed(() => [
  [
    {
      label: userStore.fullName,
      slot: 'account',
      disabled: true,
    },
  ],
  [
    {
      label: 'My Account',
      icon: 'i-heroicons-user',
      click: () => router.push('/account'),
    },
    {
      label: 'My Orders',
      icon: 'i-heroicons-shopping-bag',
      click: () => router.push('/account'),
    },
    {
      label: 'Wishlist',
      icon: 'i-heroicons-heart',
      click: () => router.push('/shopping/wishlist'),
    },
  ],
  [
    {
      label: 'Sign Out',
      icon: 'i-heroicons-arrow-right-on-rectangle',
      click: () => {
        userStore.logout()
        router.push('/')
      },
    },
  ],
])

function handleSearch() {
  if (searchQuery.value.trim()) {
    productsStore.setSearchQuery(searchQuery.value)
    router.push('/products')
  }
}
</script>
