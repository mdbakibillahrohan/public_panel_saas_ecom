<template>
  <footer class="w-full bg-background border-t border-border">
    <!-- Main content -->
    <div class="container mx-auto px-4 py-12 md:py-16">
      <div class="max-w-3xl mx-auto text-center space-y-8">
        <!-- Logo & Tagline -->
        <div class="space-y-3">
          <NuxtLink to="/" class="inline-block">
            <img :src="saasConfig.storeInfo.logo" :alt="saasConfig.storeInfo.name" class="h-10 md:h-12 mx-auto" />
          </NuxtLink>
          <p class="text-muted text-sm md:text-base">{{ saasConfig.storeInfo.tagline }}</p>
        </div>

        <!-- Navigation links -->
        <nav class="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          <NuxtLink
            v-for="item in saasConfig.enabledPrimaryNav"
            :key="item.id"
            :to="item.url"
            class="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- Social links -->
        <div class="flex items-center justify-center gap-4">
          <a
            v-if="saasConfig.storeInfo.socialLinks.facebook"
            :href="saasConfig.storeInfo.socialLinks.facebook"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 text-muted hover:text-foreground hover:bg-muted rounded-lg transition-colors"
            aria-label="Facebook"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            v-if="saasConfig.storeInfo.socialLinks.instagram"
            :href="saasConfig.storeInfo.socialLinks.instagram"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 text-muted hover:text-foreground hover:bg-muted rounded-lg transition-colors"
            aria-label="Instagram"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.949 0-3.259.014-3.668.072-4.948.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            v-if="saasConfig.storeInfo.socialLinks.twitter"
            :href="saasConfig.storeInfo.socialLinks.twitter"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 text-muted hover:text-foreground hover:bg-muted rounded-lg transition-colors"
            aria-label="Twitter"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          <a
            v-if="saasConfig.storeInfo.socialLinks.youtube"
            :href="saasConfig.storeInfo.socialLinks.youtube"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 text-muted hover:text-foreground hover:bg-muted rounded-lg transition-colors"
            aria-label="YouTube"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>

        <!-- Newsletter -->
        <div class="max-w-md mx-auto">
          <h3 class="text-sm font-semibold mb-3">Stay Updated</h3>
          <form class="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              class="flex-1 px-4 py-2.5 bg-muted border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              class="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-border">
      <div class="container mx-auto px-4 py-6">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
          <p>&copy; {{ new Date().getFullYear() }} {{ saasConfig.storeInfo.name }}. All rights reserved.</p>
          <div class="flex items-center gap-6">
            <NuxtLink to="/privacy-policy" class="hover:text-foreground transition-colors">Privacy</NuxtLink>
            <NuxtLink to="/terms-condition" class="hover:text-foreground transition-colors">Terms</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useSaasConfigStore } from '~/stores/saas-config'

const saasConfig = useSaasConfigStore()
</script>
