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
    <div class="h-16"></div>
    <header
      class="fixed top-0 left-0 right-0 z-50 border-b"
      :style="{
        backgroundColor: bgColor,
        borderColor: borderColor,
      }"
    >
      <div class="mx-auto px-4 container">
        <div class="flex items-center justify-between h-16">
          <!-- Logo - Left -->
          <NuxtLink to="/" class="flex items-center gap-2 group cursor-pointer">
            <span class="material-symbols-outlined text-2xl transition-transform group-hover:scale-110" :style="{ color: primaryColor }">
              storefront
            </span>
            <span class="text-xl font-bold" :style="{ color: textColor }">{{ storeName }}</span>
          </NuxtLink>

          <!-- Center Nav -->
          <nav class="hidden md:flex items-center gap-8">
            <NuxtLink
              v-for="item in navItems"
              :key="item.id"
              :to="item.url"
              class="text-sm font-medium transition-colors relative group"
              :style="{ color: textSecondaryColor }"
            >
              {{ item.label }}
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                :style="{ backgroundColor: primaryColor }"
              ></span>
            </NuxtLink>
          </nav>

          <!-- Right Actions -->
          <div class="flex items-center gap-2">
            <!-- Search Icon -->
            <button
              @click="toggleSearch"
              class="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              :style="{ color: textSecondaryColor }"
            >
              <span class="material-symbols-outlined text-xl">search</span>
            </button>

            <!-- Theme Toggle -->
            <button
              @click="toggleTheme"
              class="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              :style="{ color: textSecondaryColor }"
            >
              <span class="material-symbols-outlined text-xl">
                {{ isDark ? "dark_mode" : "light_mode" }}
              </span>
            </button>

            <!-- Wishlist -->
            <NuxtLink
              to="/shopping/wishlist"
              class="relative flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              :style="{ color: textSecondaryColor }"
            >
              <span class="material-symbols-outlined text-xl">favorite</span>
              <span
                v-if="wishlistCount > 0"
                class="absolute -top-0.5 -right-0.5 min-w-[16px] h-[16px] flex items-center justify-center text-[10px] font-bold text-white rounded-full px-1"
                :style="{ backgroundColor: primaryColor }"
              >
                {{ wishlistCount > 9 ? "9+" : wishlistCount }}
              </span>
            </NuxtLink>

            <!-- Cart -->
            <NuxtLink
              to="/shopping/cart"
              class="relative flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              :style="{ color: textSecondaryColor }"
            >
              <span class="material-symbols-outlined text-xl">shopping_cart</span>
              <span
                v-if="cartCount > 0"
                class="absolute -top-0.5 -right-0.5 min-w-[16px] h-[16px] flex items-center justify-center text-[10px] font-bold text-white rounded-full px-1"
                :style="{ backgroundColor: primaryColor }"
              >
                {{ cartCount > 9 ? "9+" : cartCount }}
              </span>
            </NuxtLink>

            <!-- User Menu -->
            <HeaderUserMenu />
          </div>
        </div>

        <!-- Search Bar (Expandable) -->
        <Transition name="search-slide">
          <div v-if="showSearch" class="pb-4">
            <div class="relative max-w-2xl mx-auto">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search products..."
                class="w-full h-11 pl-11 pr-4 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                :style="{
                  backgroundColor: surfaceColor,
                  borderColor: borderColor,
                  color: textColor,
                }"
                @keyup.enter="handleSearch"
              />
              <span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-xl" :style="{ color: textSecondaryColor }">
                search
              </span>
            </div>
          </div>
        </Transition>
      </div>
    </header>
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
const showSearch = ref(false)

// SaaS config
const storeName = computed(() => saasConfig.storeInfo.name)
const navItems = computed(() => saasConfig.enabledPrimaryNav)

// Theme colors
const primaryColor = computed(() => themeStore.colors.primary)
const bgColor = computed(() => themeStore.currentModeColors.background)
const surfaceColor = computed(() => themeStore.currentModeColors.surface)
const textColor = computed(() => themeStore.currentModeColors.textMain)
const textSecondaryColor = computed(() => themeStore.currentModeColors.textSecondary)
const borderColor = computed(() => themeStore.currentModeColors.border)

// Counts
const cartCount = computed(() => cartStore.itemCount)
const wishlistCount = computed(() => wishlistStore.itemCount)

function toggleSearch() {
  showSearch.value = !showSearch.value
}

function handleSearch() {
  if (searchQuery.value.trim()) {
    productsStore.setSearchQuery(searchQuery.value)
    router.push("/products")
    showSearch.value = false
  }
}
</script>

<style scoped>
.search-slide-enter-active,
.search-slide-leave-active {
  transition: all 0.3s ease;
}
.search-slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.search-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
