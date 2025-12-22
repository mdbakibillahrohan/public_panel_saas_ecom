<template>
  <div class="homepage-sections">
    <component
      v-for="section in saasConfig.enabledHomepageSections"
      :key="section.id"
      :is="getSectionComponent(section.type)"
      :config="section.config"
    />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { useSaasConfigStore } from '~/stores/saas-config'
import type { HomepageSectionType } from '~/stores/saas-config'

const saasConfig = useSaasConfigStore()

const sectionComponents = {
  'hero-banner': defineAsyncComponent(() => import('~/components/sections/HeroBannerModern.vue')),
  'categories': defineAsyncComponent(() => import('~/components/sections/FeaturedCategories.vue')),
  'trending-products': defineAsyncComponent(() => import('~/components/sections/TrendingProducts.vue')),
  'promotional-banner': defineAsyncComponent(() => import('~/components/sections/PromotionalBanner.vue')),
  'brands-showcase': defineAsyncComponent(() => import('~/components/sections/BrandShowcase.vue')),
  'testimonials': defineAsyncComponent(() => import('~/components/sections/TestimonialsCarousel.vue')),
  'newsletter-signup': defineAsyncComponent(() => import('~/components/sections/NewsletterSignup.vue')),
  'flash-sales': defineAsyncComponent(() => import('~/components/Home/FlashSales.vue')),
  'new-arrivals': defineAsyncComponent(() => import('~/components/Home/NewArrivals.vue')),
  'best-sellers': defineAsyncComponent(() => import('~/components/Home/BestSellers.vue')),
  'join-club': defineAsyncComponent(() => import('~/components/Home/JoinClub.vue')),
} as const

function getSectionComponent(type: HomepageSectionType) {
  return sectionComponents[type as keyof typeof sectionComponents] || null
}
</script>
