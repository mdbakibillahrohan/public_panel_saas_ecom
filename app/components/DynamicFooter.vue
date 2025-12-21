<template>
  <component :is="currentFooterComponent" />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { useSaasConfigStore } from '~/stores/saas-config'

const saasConfig = useSaasConfigStore()

// Map of footer template names to component paths
const footerComponents = {
  'standard-four-column': defineAsyncComponent(() => import('~/components/AppFooter.vue')),
  'minimal-centered': defineAsyncComponent(() => import('~/components/footers/FooterMinimalCentered.vue')),
  'newsletter-focused': defineAsyncComponent(() => import('~/components/footers/FooterNewsletterFocused.vue')),
  'compact-single-row': defineAsyncComponent(() => import('~/components/footers/FooterCompactSingleRow.vue')),
  'mega-footer': defineAsyncComponent(() => import('~/components/AppFooter.vue')), // Use existing as placeholder
}

// Dynamically select the current footer component based on store config
const currentFooterComponent = computed(() => {
  const template = saasConfig.footerTemplate
  return footerComponents[template] || footerComponents['standard-four-column']
})
</script>
