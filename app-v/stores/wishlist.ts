import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useProductsStore, type Product } from './products'
import { useCartStore } from './cart'

// Demo wishlist items (product IDs)
const demoWishlistItems = ['1', '3', '8', '9', '10'] // Sony, AirPods, Nike, Timex, Herschel

export const useWishlistStore = defineStore('wishlist', () => {
  // State
  const itemIds = ref<string[]>(demoWishlistItems)

  // Computed
  const productsStore = useProductsStore()

  const items = computed<Product[]>(() => {
    return itemIds.value
      .map(id => productsStore.getProductById(id))
      .filter((product): product is Product => product !== undefined)
  })

  const itemCount = computed(() => itemIds.value.length)

  const isEmpty = computed(() => itemIds.value.length === 0)

  // Actions
  function addToWishlist(productId: string) {
    if (!itemIds.value.includes(productId)) {
      itemIds.value.push(productId)
    }
  }

  function removeFromWishlist(productId: string) {
    const index = itemIds.value.indexOf(productId)
    if (index !== -1) {
      itemIds.value.splice(index, 1)
    }
  }

  function toggleWishlist(productId: string) {
    if (isInWishlist(productId)) {
      removeFromWishlist(productId)
    } else {
      addToWishlist(productId)
    }
  }

  function isInWishlist(productId: string): boolean {
    return itemIds.value.includes(productId)
  }

  function moveToCart(productId: string) {
    const cartStore = useCartStore()
    const product = productsStore.getProductById(productId)
    
    if (product && product.inStock) {
      cartStore.addToCart(productId)
      removeFromWishlist(productId)
      return true
    }
    return false
  }

  function moveAllToCart() {
    const cartStore = useCartStore()
    const movedItems: string[] = []

    itemIds.value.forEach(productId => {
      const product = productsStore.getProductById(productId)
      if (product && product.inStock) {
        cartStore.addToCart(productId)
        movedItems.push(productId)
      }
    })

    // Remove moved items from wishlist
    itemIds.value = itemIds.value.filter(id => !movedItems.includes(id))
    return movedItems.length
  }

  function clearWishlist() {
    itemIds.value = []
  }

  return {
    // State
    itemIds,
    
    // Computed
    items,
    itemCount,
    isEmpty,
    
    // Actions
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isInWishlist,
    moveToCart,
    moveAllToCart,
    clearWishlist,
  }
})
