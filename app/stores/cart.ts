import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useProductsStore, type Product } from './products'

// Types
export interface CartItem {
  productId: string
  quantity: number
  selectedColor?: string
  selectedSize?: string
  addedAt: string
}

export interface CartItemWithProduct extends CartItem {
  product: Product
}

// Demo cart items
const demoCartItems: CartItem[] = [
  {
    productId: '1', // Sony WH-1000XM4
    quantity: 1,
    selectedColor: 'black',
    addedAt: '2024-03-15T10:30:00Z',
  },
  {
    productId: '7', // Ergonomic Office Chair
    quantity: 2,
    addedAt: '2024-03-14T14:20:00Z',
  },
]

export const useCartStore = defineStore('cart', () => {
  // State
  const items = ref<CartItem[]>(demoCartItems)
  const promoCode = ref<string | null>(null)
  const promoDiscount = ref<number>(0)

  // Computed
  const productsStore = useProductsStore()

  const cartItems = computed<CartItemWithProduct[]>(() => {
    return items.value
      .map(item => {
        const product = productsStore.getProductById(item.productId)
        if (!product) return null
        return { ...item, product }
      })
      .filter((item): item is CartItemWithProduct => item !== null)
  })

  const itemCount = computed(() => 
    items.value.reduce((sum, item) => sum + item.quantity, 0)
  )

  const subtotal = computed(() => 
    cartItems.value.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
  )

  const savings = computed(() => 
    cartItems.value.reduce((sum, item) => {
      if (item.product.originalPrice) {
        return sum + ((item.product.originalPrice - item.product.price) * item.quantity)
      }
      return sum
    }, 0)
  )

  const shipping = computed(() => {
    if (subtotal.value >= 50) return 0 // Free shipping over $50
    return 15.00
  })

  const tax = computed(() => subtotal.value * 0.08) // 8% tax

  const total = computed(() => 
    subtotal.value + shipping.value + tax.value - promoDiscount.value
  )

  const isEmpty = computed(() => items.value.length === 0)

  // Actions
  function addToCart(
    productId: string, 
    quantity = 1, 
    options?: { color?: string; size?: string }
  ) {
    const existingItem = items.value.find(
      item => item.productId === productId && 
              item.selectedColor === options?.color &&
              item.selectedSize === options?.size
    )

    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      items.value.push({
        productId,
        quantity,
        selectedColor: options?.color,
        selectedSize: options?.size,
        addedAt: new Date().toISOString(),
      })
    }
  }

  function removeFromCart(productId: string, options?: { color?: string; size?: string }) {
    const index = items.value.findIndex(
      item => item.productId === productId &&
              item.selectedColor === options?.color &&
              item.selectedSize === options?.size
    )
    if (index !== -1) {
      items.value.splice(index, 1)
    }
  }

  function updateQuantity(
    productId: string, 
    quantity: number,
    options?: { color?: string; size?: string }
  ) {
    const item = items.value.find(
      item => item.productId === productId &&
              item.selectedColor === options?.color &&
              item.selectedSize === options?.size
    )
    if (item) {
      if (quantity <= 0) {
        removeFromCart(productId, options)
      } else {
        item.quantity = quantity
      }
    }
  }

  function clearCart() {
    items.value = []
    promoCode.value = null
    promoDiscount.value = 0
  }

  function applyPromoCode(code: string): boolean {
    // Demo promo codes
    const promoCodes: Record<string, number> = {
      'SAVE10': 10,
      'SAVE20': 20,
      'FREESHIP': shipping.value,
    }

    if (promoCodes[code.toUpperCase()]) {
      promoCode.value = code.toUpperCase()
      promoDiscount.value = promoCodes[code.toUpperCase()] ||0
      return true
    }
    return false
  }

  function removePromoCode() {
    promoCode.value = null
    promoDiscount.value = 0
  }

  function isInCart(productId: string): boolean {
    return items.value.some(item => item.productId === productId)
  }

  function getItemQuantity(productId: string): number {
    return items.value
      .filter(item => item.productId === productId)
      .reduce((sum, item) => sum + item.quantity, 0)
  }

  return {
    // State
    items,
    promoCode,
    promoDiscount,
    
    // Computed
    cartItems,
    itemCount,
    subtotal,
    savings,
    shipping,
    tax,
    total,
    isEmpty,
    
    // Actions
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    applyPromoCode,
    removePromoCode,
    isInCart,
    getItemQuantity,
  }
})
