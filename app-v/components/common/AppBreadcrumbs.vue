<template>
  <nav aria-label="Breadcrumb" class="flex mb-6">
    <ol class="inline-flex items-center space-x-1 md:space-x-2">
      <li 
        v-for="(item, index) in items" 
        :key="item.label"
        class="inline-flex items-center"
      >
        <!-- Separator (not for first item) -->
        <span 
          v-if="index > 0" 
          class="material-symbols-outlined text-gray-400 dark:text-gray-600 text-lg mx-1"
        >
          {{ separator === 'chevron' ? 'chevron_right' : 'arrow_forward_ios' }}
        </span>
        
        <!-- Link or current page -->
        <component
          :is="item.href && index !== items.length - 1 ? 'NuxtLink' : 'span'"
          :to="item.href"
          :class="[
            'text-sm font-medium transition-colors',
            index === items.length - 1
              ? 'text-gray-900 dark:text-white'
              : 'text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary'
          ]"
          :aria-current="index === items.length - 1 ? 'page' : undefined"
        >
          <!-- Icon if provided -->
          <span 
            v-if="item.icon && showIcons" 
            class="material-symbols-outlined text-sm mr-1 align-middle"
          >
            {{ item.icon }}
          </span>
          {{ item.label }}
        </component>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
export interface BreadcrumbItem {
  label: string
  href?: string
  icon?: string
}

interface Props {
  items: BreadcrumbItem[]
  separator?: 'chevron' | 'arrow'
  showIcons?: boolean
}

withDefaults(defineProps<Props>(), {
  separator: 'chevron',
  showIcons: false,
})
</script>
