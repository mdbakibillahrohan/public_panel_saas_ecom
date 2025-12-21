<template>
  <footer class="w-full bg-muted">
    <!-- Newsletter section -->
    <div class="border-b border-border">
      <div class="container mx-auto px-4 py-12 md:py-16">
        <div class="max-w-2xl mx-auto text-center space-y-6">
          <div class="space-y-2">
            <h2 class="text-2xl md:text-3xl font-bold">Join Our Community</h2>
            <p class="text-muted-foreground">Get exclusive offers, early access to sales, and style inspiration delivered to your inbox.</p>
          </div>
          <form class="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              class="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              class="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
          <p class="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </div>

    <!-- Links section -->
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <!-- Column 1 -->
        <div v-if="saasConfig.config.footerNav.column1.length">
          <h3 class="font-semibold mb-4 text-sm uppercase tracking-wider">Shop</h3>
          <ul class="space-y-3">
            <li v-for="item in enabledFooterColumn1" :key="item.id">
              <NuxtLink :to="item.url" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 2 -->
        <div v-if="saasConfig.config.footerNav.column2.length">
          <h3 class="font-semibold mb-4 text-sm uppercase tracking-wider">Support</h3>
          <ul class="space-y-3">
            <li v-for="item in enabledFooterColumn2" :key="item.id">
              <NuxtLink :to="item.url" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 3 -->
        <div v-if="saasConfig.config.footerNav.column3.length">
          <h3 class="font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h3>
          <ul class="space-y-3">
            <li v-for="item in enabledFooterColumn3" :key="item.id">
              <NuxtLink :to="item.url" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
          <ul class="space-y-3 text-sm text-muted-foreground">
            <li>
              <a :href="`mailto:${saasConfig.storeInfo.email}`" class="hover:text-foreground transition-colors">
                {{ saasConfig.storeInfo.email }}
              </a>
            </li>
            <li>
              <a :href="`tel:${saasConfig.storeInfo.phone}`" class="hover:text-foreground transition-colors">
                {{ saasConfig.storeInfo.phone }}
              </a>
            </li>
            <li class="pt-4">
              <div class="flex items-center gap-3">
                <a
                  v-if="saasConfig.storeInfo.socialLinks.facebook"
                  :href="saasConfig.storeInfo.socialLinks.facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-2 bg-background hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
                  aria-label="Facebook"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  v-if="saasConfig.storeInfo.socialLinks.instagram"
                  :href="saasConfig.storeInfo.socialLinks.instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-2 bg-background hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
                  aria-label="Instagram"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.849 0-3.204.013-3.583.072-4.948.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  v-if="saasConfig.storeInfo.socialLinks.twitter"
                  :href="saasConfig.storeInfo.socialLinks.twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-2 bg-background hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
                  aria-label="Twitter"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="pt-8 border-t border-border">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <NuxtLink to="/" class="flex-shrink-0">
            <img :src="saasConfig.storeInfo.logo" :alt="saasConfig.storeInfo.name" class="h-8" />
          </NuxtLink>
          <p class="text-sm text-muted-foreground text-center md:text-left">
            &copy; {{ new Date().getFullYear() }} {{ saasConfig.storeInfo.name }}. All rights reserved.
          </p>
          <div class="flex items-center gap-2">
            <img src="/placeholder.svg?height=30&width=50" alt="Visa" class="h-6 opacity-60" />
            <img src="/placeholder.svg?height=30&width=50" alt="Mastercard" class="h-6 opacity-60" />
            <img src="/placeholder.svg?height=30&width=50" alt="PayPal" class="h-6 opacity-60" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSaasConfigStore } from '~/stores/saas-config'

const saasConfig = useSaasConfigStore()

const enabledFooterColumn1 = computed(() =>
  saasConfig.config.footerNav.column1.filter(item => item.enabled).sort((a, b) => a.order - b.order)
)

const enabledFooterColumn2 = computed(() =>
  saasConfig.config.footerNav.column2.filter(item => item.enabled).sort((a, b) => a.order - b.order)
)

const enabledFooterColumn3 = computed(() =>
  saasConfig.config.footerNav.column3.filter(item => item.enabled).sort((a, b) => a.order - b.order)
)
</script>
