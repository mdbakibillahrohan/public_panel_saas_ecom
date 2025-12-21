<template>
  <component :is="currentHeaderComponent" />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { useSaasConfigStore } from '~/stores/saas-config'

const saasConfig = useSaasConfigStore()

// Map of header template names to component paths
const headerComponents = {
  'modern-gradient': defineAsyncComponent(() => import('~/components/headers/HeaderModernGradient.vue')),
  'minimal-clean': defineAsyncComponent(() => import('~/components/headers/HeaderMinimalClean.vue')),
  'classic-elegant': defineAsyncComponent(() => import('~/components/headers/HeaderClassicElegant.vue')),
  'bold-centered': defineAsyncComponent(() => import('~/components/headers/HeaderBoldCentered.vue')),
  'transparent-overlay': defineAsyncComponent(() => import('~/components/headers/HeaderTransparentOverlay.vue')),
}

// Dynamically select the current header component based on store config
const currentHeaderComponent = computed(() => {
  const template = saasConfig.headerTemplate
  return headerComponents[template] || headerComponents['modern-gradient']
})
</script>
