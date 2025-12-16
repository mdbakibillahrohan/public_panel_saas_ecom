import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Product } from './products'

// Types
export type NotificationType = 'success' | 'error' | 'warning' | 'info'

export interface Notification {
  id: string
  type: NotificationType
  title: string
  message?: string
  duration?: number
  dismissible?: boolean
}

export const useUIStore = defineStore('ui', () => {
  // State - Modal/Drawer states
  const isCartDrawerOpen = ref(false)
  const isSearchModalOpen = ref(false)
  const isMobileMenuOpen = ref(false)
  const isQuickViewOpen = ref(false)
  const isAuthModalOpen = ref(false)
  const authModalMode = ref<'signin' | 'signup'>('signin')
  
  // Quick view product
  const quickViewProduct = ref<Product | null>(null)
  
  // Notifications
  const notifications = ref<Notification[]>([])
  
  // Loading states
  const globalLoading = ref(false)
  const loadingStates = ref<Record<string, boolean>>({})

  // Computed
  const hasNotifications = computed(() => notifications.value.length > 0)

  // Actions - Modals/Drawers
  function openCartDrawer() {
    isCartDrawerOpen.value = true
  }

  function closeCartDrawer() {
    isCartDrawerOpen.value = false
  }

  function toggleCartDrawer() {
    isCartDrawerOpen.value = !isCartDrawerOpen.value
  }

  function openSearchModal() {
    isSearchModalOpen.value = true
  }

  function closeSearchModal() {
    isSearchModalOpen.value = false
  }

  function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  function closeMobileMenu() {
    isMobileMenuOpen.value = false
  }

  function openQuickView(product: Product) {
    quickViewProduct.value = product
    isQuickViewOpen.value = true
  }

  function closeQuickView() {
    isQuickViewOpen.value = false
    quickViewProduct.value = null
  }

  function openAuthModal(mode: 'signin' | 'signup' = 'signin') {
    authModalMode.value = mode
    isAuthModalOpen.value = true
  }

  function closeAuthModal() {
    isAuthModalOpen.value = false
  }

  function switchAuthMode() {
    authModalMode.value = authModalMode.value === 'signin' ? 'signup' : 'signin'
  }

  // Actions - Notifications
  function addNotification(notification: Omit<Notification, 'id'>): string {
    const id = `notif-${Date.now()}`
    const newNotification: Notification = {
      ...notification,
      id,
      duration: notification.duration ?? 5000,
      dismissible: notification.dismissible ?? true,
    }

    notifications.value.push(newNotification)

    // Auto-remove after duration
    if (newNotification.duration && newNotification.duration > 0) {
      setTimeout(() => {
        removeNotification(id)
      }, newNotification.duration)
    }

    return id
  }

  function removeNotification(id: string) {
    const index = notifications.value.findIndex(n => n.id === id)
    if (index !== -1) {
      notifications.value.splice(index, 1)
    }
  }

  function clearNotifications() {
    notifications.value = []
  }

  // Convenience notification methods
  function showSuccess(title: string, message?: string) {
    return addNotification({ type: 'success', title, message })
  }

  function showError(title: string, message?: string) {
    return addNotification({ type: 'error', title, message, duration: 8000 })
  }

  function showWarning(title: string, message?: string) {
    return addNotification({ type: 'warning', title, message })
  }

  function showInfo(title: string, message?: string) {
    return addNotification({ type: 'info', title, message })
  }

  // Actions - Loading
  function setLoading(key: string, value: boolean) {
    loadingStates.value[key] = value
  }

  function isLoading(key: string): boolean {
    return loadingStates.value[key] ?? false
  }

  function setGlobalLoading(value: boolean) {
    globalLoading.value = value
  }

  // Close all overlays
  function closeAllOverlays() {
    isCartDrawerOpen.value = false
    isSearchModalOpen.value = false
    isMobileMenuOpen.value = false
    isQuickViewOpen.value = false
    isAuthModalOpen.value = false
    quickViewProduct.value = null
  }

  return {
    // State
    isCartDrawerOpen,
    isSearchModalOpen,
    isMobileMenuOpen,
    isQuickViewOpen,
    isAuthModalOpen,
    authModalMode,
    quickViewProduct,
    notifications,
    globalLoading,
    loadingStates,
    
    // Computed
    hasNotifications,
    
    // Actions - Modals
    openCartDrawer,
    closeCartDrawer,
    toggleCartDrawer,
    openSearchModal,
    closeSearchModal,
    toggleMobileMenu,
    closeMobileMenu,
    openQuickView,
    closeQuickView,
    openAuthModal,
    closeAuthModal,
    switchAuthMode,
    closeAllOverlays,
    
    // Actions - Notifications
    addNotification,
    removeNotification,
    clearNotifications,
    showSuccess,
    showError,
    showWarning,
    showInfo,
    
    // Actions - Loading
    setLoading,
    isLoading,
    setGlobalLoading,
  }
})
