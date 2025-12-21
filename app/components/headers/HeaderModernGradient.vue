import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
<template>
  <div class="relative">
    <!-- Header with Dark Gradient -->
    <div class="h-20"></div>
    <header
      class="fixed top-0 left-0 right-0 z-50"
      :style="{ background: `linear-gradient(to right, ${headerGradientStart}, ${headerGradientMiddle}, ${headerGradientEnd})` }"
    >
      <div class="mx-auto px-4 container py-3">
        <div class="flex items-center justify-between gap-4 md:gap-6">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center space-x-3 group cursor-pointer shrink-0">
            <div class="relative">
              <div
                class="absolute inset-0 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity"
                :style="{ backgroundColor: primaryColor }"
              ></div>
              <div
                class="relative p-2 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300"
                :style="{ background: `linear-gradient(to bottom right, ${primaryColor}, ${primaryHover})` }"
              >
                <span class="material-symbols-outlined text-white text-2xl">shopping_bag</span>
              </div>
            </div>
            <div class="hidden sm:block">
              <h1
                class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-white transition-all duration-300"
              >
                {{ storeName }}
              </h1>
              <p class="text-xs text-blue-300/70">{{ storeTagline }}</p>
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
              <span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
                search
              </span>
            </div>
          </div>

          <!-- Nav Links & Actions -->
          <nav class="flex items-center gap-1 md:gap-2">
            <!-- Desktop Nav Links -->
            <NuxtLink
              v-for="item in navItems"
              :key="item.id"
              :to="item.url"
              class="hidden lg:flex px-4 py-2 font-medium rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 relative group"
            >
              <span class="relative z-10">{{ item.label }}</span>
              <span
                class="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/10 to-blue-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              ></span>
            </NuxtLink>

            <!-- Theme Toggle -->
            <button
              @click="toggleTheme"
              class="flex items-center justify-center w-10 h-10 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all"
              :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            >
              <span class="material-symbols-outlined text-xl transition-transform" :class="isDark ? '' : 'rotate-180'">
                {{ isDark ? "dark_mode" : "light_mode" }}
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
                {{ wishlistCount > 9 ? "9+" : wishlistCount }}
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
                {{ cartCount > 9 ? "9+" : cartCount }}
              </span>
            </NuxtLink>

            <!-- User Button / Auth -->
            <HeaderUserMenu />
          </nav>
        </div>

        <!-- Mobile Search -->
        <div class="md:hidden mt-3">
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search products..."
              class="w-full h-10 pl-10 pr-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:bg-white/15 focus:border-blue-400/50 focus:outline-none transition-all text-sm"
              @keyup.enter="handleSearch"
            />
            <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
              search
            </span>
          </div>
        </div>
      </div>
    </header>

    <!-- Subtle glow effect -->
    <div class="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import { useCartStore } from "~/stores/cart"
import { useWishlistStore } from "~/stores/wishlist"
import { useProductsStore } from "~/stores/products"
import { useSaasConfigStore } from "~/stores/saas-config"
import { useThemeStore } from "~/stores/theme"
import { useTheme } from "~/composables/useTheme"

const cartStore = useCartStore()
const wishlistStore = useWishlistStore()
const productsStore = useProductsStore()
const saasConfig = useSaasConfigStore()
const themeStore = useThemeStore()
const { isDark, toggleTheme } = useTheme()
const router = useRouter()

const searchQuery = ref("")

// SaaS config
const storeName = computed(() => saasConfig.storeInfo.name)
const storeTagline = computed(() => saasConfig.storeInfo.tagline)
const navItems = computed(() => saasConfig.enabledPrimaryNav)

// Theme colors
const primaryColor = computed(() => themeStore.colors.primary)
const primaryHover = computed(() => themeStore.colors.primaryHover)

// Gradient colors for header
const headerGradientStart = computed(() => (isDark.value ? "#0f172a" : "#1e293b"))
const headerGradientMiddle = computed(() => (isDark.value ? "#1e293b" : "#334155"))
const headerGradientEnd = computed(() => (isDark.value ? "#0f172a" : "#1e293b"))

// Cart and wishlist counts
const cartCount = computed(() => cartStore.itemCount)
const wishlistCount = computed(() => wishlistStore.itemCount)

function handleSearch() {
  if (searchQuery.value.trim()) {
    productsStore.setSearchQuery(searchQuery.value)
    router.push("/products")
  }
}
</script>
