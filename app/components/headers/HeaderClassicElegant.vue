<template>
  <header class="w-full bg-background border-b border-border">
    <!-- Top bar with contact info - hidden on mobile -->
    <div class="hidden md:block border-b border-border">
      <div class="container mx-auto px-4 py-2">
        <div class="flex items-center justify-between text-sm">
          <div class="flex items-center gap-6 text-muted">
            <a :href="`mailto:${saasConfig.storeInfo.email}`" class="flex items-center gap-1.5 hover:text-foreground transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>{{ saasConfig.storeInfo.email }}</span>
            </a>
            <a :href="`tel:${saasConfig.storeInfo.phone}`" class="flex items-center gap-1.5 hover:text-foreground transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{{ saasConfig.storeInfo.phone }}</span>
            </a>
          </div>
          <div class="flex items-center gap-4">
            <NuxtLink to="/help" class="hover:text-foreground transition-colors">Help</NuxtLink>
            <NuxtLink to="/shipping-return-policy" class="hover:text-foreground transition-colors">Shipping</NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Main header -->
    <div class="container mx-auto px-4 py-4 md:py-6">
      <div class="flex items-center justify-between gap-4">
        <!-- Logo -->
        <NuxtLink to="/" class="flex-shrink-0">
          <img :src="saasConfig.storeInfo.logo" :alt="saasConfig.storeInfo.name" class="h-8 md:h-10" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-8">
          <NuxtLink
            v-for="item in saasConfig.enabledPrimaryNav"
            :key="item.id"
            :to="item.url"
            class="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wider"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- Right actions -->
        <div class="flex items-center gap-3 md:gap-4">
          <!-- Search -->
          <button
            @click="toggleSearch"
            class="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Search"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          <!-- User Menu -->
          <HeadersHeaderUserMenu />

          <!-- Wishlist -->
          <NuxtLink to="/wishlist" class="relative p-2 hover:bg-muted rounded-lg transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span v-if="wishlistStore.itemCount > 0" class="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {{ wishlistStore.itemCount }}
            </span>
          </NuxtLink>

          <!-- Cart -->
          <NuxtLink to="/cart" class="relative p-2 hover:bg-muted rounded-lg transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span v-if="cartStore.itemCount > 0" class="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {{ cartStore.itemCount }}
            </span>
          </NuxtLink>

          <!-- Mobile menu toggle -->
          <button
            @click="toggleMobileMenu"
            class="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Menu"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
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
      <div v-if="isSearchOpen" class="border-t border-border bg-background">
        <div class="container mx-auto px-4 py-6">
          <form @submit.prevent="handleSearch" class="relative max-w-2xl mx-auto">
            <input
              ref="searchInput"
              v-model="searchQuery"
              type="search"
              placeholder="Search products..."
              class="w-full px-4 py-3 pr-12 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              class="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
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
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-screen"
      leave-active-class="transition-all duration-200"
      leave-from-class="opacity-100 max-h-screen"
      leave-to-class="opacity-0 max-h-0"
    >
      <div v-if="isMobileMenuOpen" class="lg:hidden border-t border-border bg-background overflow-hidden">
        <nav class="container mx-auto px-4 py-6 flex flex-col gap-4">
          <NuxtLink
            v-for="item in saasConfig.enabledPrimaryNav"
            :key="item.id"
            :to="item.url"
            @click="closeMobileMenu"
            class="text-base font-medium text-foreground hover:text-primary transition-colors py-2"
          >
            {{ item.label }}
          </NuxtLink>
          <div class="pt-4 border-t border-border flex flex-col gap-3 text-sm text-muted">
            <NuxtLink to="/help" @click="closeMobileMenu" class="hover:text-foreground transition-colors">Help Center</NuxtLink>
            <NuxtLink to="/shipping-return-policy" @click="closeMobileMenu" class="hover:text-foreground transition-colors">Shipping & Returns</NuxtLink>
          </div>
        </nav>
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
