<template>
  <div :class="['min-h-screen', isDark ? 'dark' : '']">
    <AppHeader />
    <main class="min-h-[calc(100vh-200px)]">
      <slot />
    </main>
    <AppFooter />
    
    <!-- Toast Notifications -->
    <div class="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
      <TransitionGroup name="notification">
        <div
          v-for="notification in notifications"
          :key="notification.id"
          :class="[
            'pointer-events-auto flex items-start gap-3 p-4 rounded-lg shadow-lg max-w-sm',
            'border backdrop-blur-sm',
            notificationClasses(notification.type)
          ]"
        >
          <span 
            :class="[
              'material-symbols-outlined text-xl shrink-0',
              iconClasses(notification.type)
            ]"
          >
            {{ notificationIcon(notification.type) }}
          </span>
          <div class="flex-1 min-w-0">
            <p class="font-medium text-sm text-gray-900 dark:text-white">
              {{ notification.title }}
            </p>
            <p 
              v-if="notification.message" 
              class="text-sm text-gray-600 dark:text-gray-400 mt-0.5"
            >
              {{ notification.message }}
            </p>
          </div>
          <button
            v-if="notification.dismissible"
            @click="uiStore.removeNotification(notification.id)"
            class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 shrink-0"
          >
            <span class="material-symbols-outlined text-lg">close</span>
          </button>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useTheme } from '~/composables/useTheme'
import { useUIStore, type NotificationType } from '~/stores/ui'
import { useThemeStore } from '~/stores/theme'

const { isDark } = useTheme()
const uiStore = useUIStore()
const themeStore = useThemeStore()

const notifications = computed(() => uiStore.notifications)

// Initialize theme from storage on mount
onMounted(() => {
  themeStore.initFromStorage()
})

function notificationClasses(type: NotificationType): string {
  const classes = {
    success: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
    error: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
    warning: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
    info: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
  }
  return classes[type]
}

function iconClasses(type: NotificationType): string {
  const classes = {
    success: 'text-green-600 dark:text-green-400',
    error: 'text-red-600 dark:text-red-400',
    warning: 'text-yellow-600 dark:text-yellow-400',
    info: 'text-blue-600 dark:text-blue-400',
  }
  return classes[type]
}

function notificationIcon(type: NotificationType): string {
  const icons = {
    success: 'check_circle',
    error: 'error',
    warning: 'warning',
    info: 'info',
  }
  return icons[type]
}
</script>

<style>
.notification-enter-active,
.notification-leave-active {
  transition: all 0.3s ease;
}
.notification-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.notification-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
