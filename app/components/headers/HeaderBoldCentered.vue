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
    <div class="h-24"></div>
    <header
      class="fixed top-0 left-0 right-0 z-50 border-b"
      :style="{
        backgroundColor: bgColor,
        borderColor: borderColor,
      }"
    >
      <div class="mx-auto px-4 container py-4">
        <!-- Top Row: Actions -->
        <div class="flex items-center justify-between mb-3">
          <!-- Left: Search Icon -->
          <button
            @click="toggleSearch"
            class="flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
            :style="{ color: textSecondaryColor }"
          >
            <span class="material-symbols-outlined text-lg">search</span>
            <span class="hidden sm:inline">Search</span>
          </button>

          <!-- Right: Actions -->
          <div class="flex items-center gap-4">
            <button @click="toggleTheme" class="hover:opacity-80 transition-opacity" :style="{ color: textSecondaryColor }">
              <span class="material-symbols-outlined text-lg">
                {{ isDark ? "dark_mode" : "light_mode" }}
              </span>
            </button>

            <NuxtLink to="/shopping/wishlist" class="relative hover:opacity-80 transition-opacity" :style="{ color: textSecondaryColor }">
              <span class="material-symbols-outlined text-lg">favorite</span>
              <span
                v-if="wishlistCount > 0"
                class="absolute -top-1 -right-1 min-w-[14px] h-[14px] flex items-center justify-center text-[9px] font-bold text-white rounded-full px-0.5"
                :style="{ backgroundColor: primaryColor }"
              >
                {{ wishlistCount > 9 ? "9+" : wishlistCount }}
              </span>
            </NuxtLink>

            <NuxtLink to="/shopping/cart" class="relative hover:opacity-80 transition-opacity" :style="{ color: textSecondaryColor }">
              <span class="material-symbols-outlined text-lg">shopping_cart</span>
              <span
                v-if="cartCount > 0"
                class="absolute -top-1 -right-1 min-w-[14px] h-[14px] flex items-center justify-center text-[9px] font-bold text-white rounded-full px-0.5"
                :style="{ backgroundColor: primaryColor }"
              >
                {{ cartCount > 9 ? "9+" : cartCount }}
              </span>
            </NuxtLink>

            <HeaderUserMenu />
          </div>
        </div>

        <!-- Middle Row: Centered Logo -->
        <div class="flex justify-center mb-3">
          <NuxtLink to="/" class="flex flex-col items-center group cursor-pointer">
            <h1 class="text-3xl font-black tracking-tight transition-transform group-hover:scale-105" :style="{ color: primaryColor }">
              {{ storeName }}
            </h1>
            <p class="text-xs font-medium mt-0.5" :style="{ color: textSecondaryColor }">{{ storeTagline }}</p>
          </NuxtLink>
        </div>

        <!-- Bottom Row: Centered Nav -->
        <nav class="flex items-center justify-center gap-6">
          <NuxtLink
            v-for="item in navItems"
            :key="item.id"
            :to="item.url"
            class="text-sm font-semibold uppercase tracking-wider hover:opacity-60 transition-opacity"
            :style="{ color: textColor }"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- Expandable Search -->
        <Transition name="search-expand">
          <div v-if="showSearch" class="mt-4 pt-4 border-t" :style="{ borderColor: borderColor }">
            <div class="relative max-w-xl mx-auto">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search products..."
                class="w-full h-12 pl-12 pr-4 rounded-lg border-2 focus:outline-none transition-all"
                :style="{
                  backgroundColor: surfaceColor,
                  borderColor: primaryColor,
                  color: textColor,
                }"
                @keyup.enter="handleSearch"
              />
              <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-xl" :style="{ color: primaryColor }">
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

const storeName = computed(() => saasConfig.storeInfo.name)
const storeTagline = computed(() => saasConfig.storeInfo.tagline)
const navItems = computed(() => saasConfig.enabledPrimaryNav)

const primaryColor = computed(() => themeStore.colors.primary)
const bgColor = computed(() => themeStore.currentModeColors.background)
const surfaceColor = computed(() => themeStore.currentModeColors.surface)
const textColor = computed(() => themeStore.currentModeColors.textMain)
const textSecondaryColor = computed(() => themeStore.currentModeColors.textSecondary)
const borderColor = computed(() => themeStore.currentModeColors.border)

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
.search-expand-enter-active,
.search-expand-leave-active {
  transition: all 0.3s ease;
}
.search-expand-enter-from,
.search-expand-leave-to {
  opacity: 0;
  max-height: 0;
}
.search-expand-enter-to,
.search-expand-leave-from {
  opacity: 1;
  max-height: 100px;
}
</style>
