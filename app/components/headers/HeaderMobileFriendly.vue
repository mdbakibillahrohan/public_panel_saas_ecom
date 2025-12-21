<template>
  <header class="sticky top-0 z-50 bg-background border-b border-border/40">
    <!-- Top Announcement Bar -->
    <div v-if="showAnnouncement" class="bg-primary text-primary-foreground py-2 px-4 text-center text-sm">
      <p class="font-medium">{{ announcementText }}</p>
    </div>

    <!-- Main Header -->
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="lg:hidden p-2 hover:bg-accent rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            v-if="!mobileMenuOpen"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            v-else
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2 md:gap-3">
          <img :src="saasConfig.storeInfo.logo" :alt="saasConfig.storeInfo.name" class="h-8 md:h-10 w-auto" />
          <span class="text-xl md:text-2xl font-bold">{{ saasConfig.storeInfo.name }}</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-8">
          <template v-for="item in saasConfig.enabledPrimaryNav" :key="item.id">
            <!-- Navigation Item with Mega Menu -->
            <div
              v-if="item.children && item.children.length > 0"
              class="relative group"
              @mouseenter="activeMegaMenu = item.id"
              @mouseleave="activeMegaMenu = null"
            >
              <NuxtLink
                :to="item.url"
                class="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors py-2"
              >
                {{ item.label }}
                <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </NuxtLink>

              <!-- Mega Menu Dropdown -->
              <div
                v-show="activeMegaMenu === item.id"
                class="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-screen max-w-5xl"
              >
                <div class="bg-background border border-border shadow-xl rounded-lg p-8">
                  <div class="grid grid-cols-4 gap-8">
                    <div v-for="child in item.children" :key="child.id" class="space-y-4">
                      <h3 class="font-semibold text-sm uppercase tracking-wide text-primary">
                        {{ child.label }}
                      </h3>
                      <ul class="space-y-2">
                        <li v-for="subChild in child.children" :key="subChild.id">
                          <NuxtLink
                            :to="subChild.url"
                            class="text-sm text-muted-foreground hover:text-foreground transition-colors block py-1"
                          >
                            {{ subChild.label }}
                          </NuxtLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Regular Navigation Item -->
            <NuxtLink
              v-else
              :to="item.url"
              class="text-sm font-medium hover:text-primary transition-colors"
            >
              {{ item.label }}
            </NuxtLink>
          </template>
        </nav>

        <!-- Header Actions -->
        <div class="flex items-center gap-2 md:gap-4">
          <!-- Search Button -->
          <button
            @click="searchOpen = !searchOpen"
            class="p-2 hover:bg-accent rounded-lg transition-colors"
            aria-label="Search"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          <!-- Wishlist -->
          <NuxtLink
            to="/wishlist"
            class="hidden md:flex p-2 hover:bg-accent rounded-lg transition-colors relative"
            aria-label="Wishlist"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span v-if="wishlistStore.items.length > 0" class="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {{ wishlistStore.items.length }}
            </span>
          </NuxtLink>

          <!-- Cart -->
          <NuxtLink
            to="/cart"
            class="p-2 hover:bg-accent rounded-lg transition-colors relative"
            aria-label="Shopping cart"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span v-if="cartStore.itemCount > 0" class="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {{ cartStore.itemCount }}
            </span>
          </NuxtLink>
        </div>
      </div>

      <!-- Search Bar -->
      <Transition name="slide-down">
        <div v-if="searchOpen" class="pb-4">
          <div class="relative">
            <input
              type="search"
              placeholder="Search products..."
              class="w-full px-4 py-3 pl-12 bg-accent border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <svg class="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </Transition>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition name="fade">
      <div
        v-if="mobileMenuOpen"
        class="fixed inset-0 bg-black/50 z-40 lg:hidden"
        @click="mobileMenuOpen = false"
      />
    </Transition>

    <!-- Mobile Menu Sidebar -->
    <Transition name="slide-left">
      <div
        v-if="mobileMenuOpen"
        class="fixed top-0 left-0 bottom-0 w-80 bg-background z-50 overflow-y-auto lg:hidden shadow-2xl"
      >
        <div class="p-6">
          <!-- Close Button -->
          <button
            @click="mobileMenuOpen = false"
            class="absolute top-4 right-4 p-2 hover:bg-accent rounded-lg"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Mobile Navigation -->
          <nav class="mt-8 space-y-2">
            <template v-for="item in saasConfig.enabledPrimaryNav" :key="item.id">
              <!-- With Children -->
              <div v-if="item.children && item.children.length > 0" class="space-y-2">
                <button
                  @click="toggleMobileSubmenu(item.id)"
                  class="flex items-center justify-between w-full px-4 py-3 text-left hover:bg-accent rounded-lg transition-colors"
                >
                  <span class="font-medium">{{ item.label }}</span>
                  <svg
                    class="w-5 h-5 transition-transform"
                    :class="{ 'rotate-180': activeMobileSubmenu === item.id }"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <!-- Submenu -->
                <Transition name="slide-down">
                  <div v-if="activeMobileSubmenu === item.id" class="pl-4 space-y-2">
                    <div v-for="child in item.children" :key="child.id" class="space-y-2">
                      <div class="px-4 py-2 text-sm font-semibold text-primary uppercase tracking-wide">
                        {{ child.label }}
                      </div>
                      <NuxtLink
                        v-for="subChild in child.children"
                        :key="subChild.id"
                        :to="subChild.url"
                        class="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                        @click="mobileMenuOpen = false"
                      >
                        {{ subChild.label }}
                      </NuxtLink>
                    </div>
                  </div>
                </Transition>
              </div>

              <!-- Without Children -->
              <NuxtLink
                v-else
                :to="item.url"
                class="block px-4 py-3 hover:bg-accent rounded-lg transition-colors font-medium"
                @click="mobileMenuOpen = false"
              >
                {{ item.label }}
              </NuxtLink>
            </template>
          </nav>

          <!-- Mobile Actions -->
          <div class="mt-8 pt-6 border-t border-border space-y-3">
            <NuxtLink
              to="/wishlist"
              class="flex items-center gap-3 px-4 py-3 hover:bg-accent rounded-lg transition-colors"
              @click="mobileMenuOpen = false"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span class="font-medium">Wishlist</span>
              <span v-if="wishlistStore.items.length > 0" class="ml-auto bg-primary text-primary-foreground text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                {{ wishlistStore.items.length }}
              </span>
            </NuxtLink>

            <NuxtLink
              to="/account"
              class="flex items-center gap-3 px-4 py-3 hover:bg-accent rounded-lg transition-colors"
              @click="mobileMenuOpen = false"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span class="font-medium">My Account</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSaasConfigStore } from '~/stores/saas-config'
import { useCartStore } from '~/stores/cart'
import { useWishlistStore } from '~/stores/wishlist'

const saasConfig = useSaasConfigStore()
const cartStore = useCartStore()
const wishlistStore = useWishlistStore()

const mobileMenuOpen = ref(false)
const searchOpen = ref(false)
const activeMegaMenu = ref<string | null>(null)
const activeMobileSubmenu = ref<string | null>(null)

const showAnnouncement = ref(true)
const announcementText = ref('Free shipping on orders over $50 | Shop Now!')

function toggleMobileSubmenu(id: string) {
  activeMobileSubmenu.value = activeMobileSubmenu.value === id ? null : id
}
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
  overflow: hidden;
}

.slide-down-enter-from,
.slide-down-leave-to {
  max-height: 0;
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.3s ease;
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
