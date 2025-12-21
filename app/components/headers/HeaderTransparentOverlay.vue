<template>
  <header class="w-full absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/60 via-black/30 to-transparent">
    <div class="container mx-auto px-4 py-4 md:py-6">
      <div class="flex items-center justify-between gap-4">
        <!-- Logo -->
        <NuxtLink to="/" class="flex-shrink-0">
          <img :src="saasConfig.storeInfo.logo" :alt="saasConfig.storeInfo.name" class="h-8 md:h-10 brightness-0 invert" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-8">
          <NuxtLink
            v-for="item in saasConfig.enabledPrimaryNav"
            :key="item.id"
            :to="item.url"
            class="text-sm font-medium text-white/90 hover:text-white transition-colors"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- Right actions -->
        <div class="flex items-center gap-3 md:gap-4">
          <!-- Search -->
          <button
            @click="toggleSearch"
            class="p-2 hover:bg-white/10 rounded-lg transition-colors text-white"
            aria-label="Search"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 00-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          <!-- Wishlist -->
          <NuxtLink to="/wishlist" class="relative p-2 hover:bg-white/10 rounded-lg transition-colors text-white">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span v-if="wishlistStore.itemCount > 0" class="absolute -top-1 -right-1 bg-white text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {{ wishlistStore.itemCount }}
            </span>
          </NuxtLink>

          <!-- Cart -->
          <NuxtLink to="/cart" class="relative p-2 hover:bg-white/10 rounded-lg transition-colors text-white">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span v-if="cartStore.itemCount > 0" class="absolute -top-1 -right-1 bg-white text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {{ cartStore.itemCount }}
            </span>
          </NuxtLink>

          <!-- Account button - desktop -->
          <NuxtLink to="/account" class="hidden md:flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-white/90 transition-colors text-sm font-medium">
            Account
          </NuxtLink>

          <!-- Mobile menu toggle -->
          <button
            @click="toggleMobileMenu"
            class="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors text-white"
            aria-label="Menu"
          >
            <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Search overlay -->
    <Transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isSearchOpen" class="bg-black/90 backdrop-blur-lg">
        <div class="container mx-auto px-4 py-6">
          <form @submit.prevent="handleSearch" class="relative max-w-2xl mx-auto">
            <input
              ref="searchInput"
              v-model="searchQuery"
              type="search"
              placeholder="Search products..."
              class="w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              class="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </Transition>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0 translate-x-full"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition-all duration-200"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 translate-x-full"
    >
      <div v-if="isMobileMenuOpen" class="lg:hidden fixed inset-0 bg-black/95 backdrop-blur-lg">
        <div class="flex flex-col h-full">
          <div class="flex items-center justify-between p-4 border-b border-white/10">
            <img :src="saasConfig.storeInfo.logo" :alt="saasConfig.storeInfo.name" class="h-8 brightness-0 invert" />
            <button @click="closeMobileMenu" class="p-2 hover:bg-white/10 rounded-lg transition-colors text-white">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav class="flex-1 p-6 flex flex-col gap-2">
            <NuxtLink
              v-for="item in saasConfig.enabledPrimaryNav"
              :key="item.id"
              :to="item.url"
              @click="closeMobileMenu"
              class="text-lg font-medium text-white hover:text-white/80 transition-colors py-3"
            >
              {{ item.label }}
            </NuxtLink>
            <NuxtLink to="/account" @click="closeMobileMenu" class="mt-4 w-full px-4 py-3 bg-white text-black rounded-lg hover:bg-white/90 transition-colors text-center font-medium">
              My Account
            </NuxtLink>
          </nav>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { useSaasConfigStore } from '~/stores/saas-config'
import { useCartStore } from '~/stores/cart'
import { useWishlistStore } from '~/stores/wishlist'

const router = useRouter()
const saasConfig = useSaasConfigStore()
const cartStore = useCartStore()
const wishlistStore = useWishlistStore()

const isSearchOpen = ref(false)
const isMobileMenuOpen = ref(false)
const searchQuery = ref('')
const searchInput = ref<HTMLInputElement | null>(null)

const toggleSearch = async () => {
  isSearchOpen.value = !isSearchOpen.value
  if (isSearchOpen.value) {
    await nextTick()
    searchInput.value?.focus()
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push(`/products?search=${encodeURIComponent(searchQuery.value)}`)
    isSearchOpen.value = false
    searchQuery.value = ''
  }
}
</script>
