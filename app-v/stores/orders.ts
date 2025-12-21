import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Product } from './products'

// Types
export type OrderStatus = 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled'

export interface OrderItem {
  productId: string
  name: string
  image: string
  price: number
  quantity: number
  selectedColor?: string
  selectedSize?: string
}

export interface OrderAddress {
  firstName: string
  lastName: string
  street: string
  apartment?: string
  city: string
  state: string
  postalCode: string
  country: string
  phone: string
}

export interface Order {
  id: string
  orderNumber: string
  status: OrderStatus
  items: OrderItem[]
  shippingAddress: OrderAddress
  billingAddress: OrderAddress
  paymentMethod: {
    type: 'visa' | 'mastercard' | 'amex' | 'paypal'
    last4: string
  }
  subtotal: number
  shipping: number
  tax: number
  discount: number
  total: number
  estimatedDelivery?: string
  trackingNumber?: string
  createdAt: string
  updatedAt: string
}

// Demo Orders
const demoOrders: Order[] = [
  {
    id: 'order-1',
    orderNumber: '#890123',
    status: 'processing',
    items: [
      {
        productId: '12',
        name: 'Keychron K2 Mechanical Keyboard',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpHkxW5CJi0MCl3DbESj2e25Zztochkn4gjaUGedXAi3J5QklON5XqnI4gHqAlswu9AUZtZkkChL8_P_QmYV3mfhx_MZtqSenzGzu_gKv0DtEGtb7bU7nsrS5nmSpeidhPKrBdoBrovglqcURSJZ3vbQVrH1MnG79LdfQYlpihyvb0F8IkRJCrsx7Fq5xvcI9ZUE1A9PXEeF-KHxT4WLnrXr4Yb0oKHJsOsDMoiMx-VtMkjxsD7p4Dqyzkb2bSksYAJhZA93M6kJxj',
        price: 89.00,
        quantity: 1,
      },
      {
        productId: '1',
        name: 'Sony WH-1000XM5 Wireless Headphones',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBg3hQ09eizXHjpFulrGOEuX15mFFEJq6CK1ebJnVtU8VzHCOrz4PJCzKRgfr2Pl5_LSSIGOzhXkJtA7Cpf-jMPQsJY0EPr-3gj7u63EmuwvRmHorggnx2z_9kBj074dnuBXXgfN4dkHjrNgyKqj9zT6LiDa5Shjr__Cf3KLG8Mgo63eS83V3TbKrwcH5JR5bTiYdI5kpBLPySpxTrW9IltWzBjtanBfl0k0SOHkEQafS5ydOU5hh2-EjbwZEw_6iO3gewVyzEv_dlA',
        price: 248.00,
        quantity: 1,
        selectedColor: 'silver',
      },
    ],
    shippingAddress: {
      firstName: 'Jane',
      lastName: 'Doe',
      street: '123 Market Street',
      apartment: 'Apt 4B',
      city: 'San Francisco',
      state: 'CA',
      postalCode: '94103',
      country: 'United States',
      phone: '+1 (555) 123-4567',
    },
    billingAddress: {
      firstName: 'Jane',
      lastName: 'Doe',
      street: '123 Market Street',
      apartment: 'Apt 4B',
      city: 'San Francisco',
      state: 'CA',
      postalCode: '94103',
      country: 'United States',
      phone: '+1 (555) 123-4567',
    },
    paymentMethod: {
      type: 'visa',
      last4: '4242',
    },
    subtotal: 337.00,
    shipping: 5.00,
    tax: 0.00,
    discount: 0,
    total: 342.00,
    estimatedDelivery: '2024-03-24',
    createdAt: '2024-03-20T10:30:00Z',
    updatedAt: '2024-03-20T14:00:00Z',
  },
  {
    id: 'order-2',
    orderNumber: '#889456',
    status: 'delivered',
    items: [
      {
        productId: '10',
        name: 'Herschel Supply Co. Little America Backpack',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdtd6vFN62s1SfCx7O620fuwLHfFKXBQhEZcQWMqxmlyCVVB-P8-8VPTV7gHcq70ITQUZXD-VHRAvfuYkaBxZ4z9uJc-yjE58HRkEi1AT_Kc1tt9KvYQ1-IuACXkwqu1KNOjc2GLMnmg1kCjZq-IccSyuEQiPA8JJRPd3H2rJ6_Zy4rUUUxFOvs4_fG0MBrHGmrRJkBtjGcMLdo6gDxfscEd7Ji9cuU-1a9ITmbitnu97qrhvvYEMN7USWBG0ePc0DBe61eGIWtiW7',
        price: 109.99,
        quantity: 1,
      },
    ],
    shippingAddress: {
      firstName: 'Jane',
      lastName: 'Doe',
      street: '123 Market Street',
      apartment: 'Apt 4B',
      city: 'San Francisco',
      state: 'CA',
      postalCode: '94103',
      country: 'United States',
      phone: '+1 (555) 123-4567',
    },
    billingAddress: {
      firstName: 'Jane',
      lastName: 'Doe',
      street: '123 Market Street',
      apartment: 'Apt 4B',
      city: 'San Francisco',
      state: 'CA',
      postalCode: '94103',
      country: 'United States',
      phone: '+1 (555) 123-4567',
    },
    paymentMethod: {
      type: 'visa',
      last4: '4242',
    },
    subtotal: 109.99,
    shipping: 0,
    tax: 8.80,
    discount: 0,
    total: 118.79,
    trackingNumber: '1Z999AA10123456784',
    createdAt: '2024-03-01T09:00:00Z',
    updatedAt: '2024-03-05T16:30:00Z',
  },
  {
    id: 'order-3',
    orderNumber: '#887123',
    status: 'shipped',
    items: [
      {
        productId: '3',
        name: 'AirPods Pro (2nd Generation)',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-pILzXmMczqAokDGxJyilGIvDVg64yU9QrH33BkAChpcpmDKAycbBXDtpESn1sWYCkU2ec9BZSFzhCqO8i1o037LZH5esb_1fEFA6pGPEPtHnCbJE_vOJ8tXb3ud5hGhFsFvraTMDeMN4eOpxpNhukUc9dft0ues3ZFDY2Bb1catzRHZbWhO-xDsD95y9BP0j3mon6gmRhiMIt6ZdPZbcJNtQponwzzDhNhLfWp_Hd6WNct3KXvgHNJr2MLQOy2egol5ENtcYwbz_',
        price: 249.00,
        quantity: 2,
      },
    ],
    shippingAddress: {
      firstName: 'Jane',
      lastName: 'Doe',
      street: '456 Office Plaza',
      apartment: 'Suite 200',
      city: 'San Francisco',
      state: 'CA',
      postalCode: '94105',
      country: 'United States',
      phone: '+1 (555) 987-6543',
    },
    billingAddress: {
      firstName: 'Jane',
      lastName: 'Doe',
      street: '123 Market Street',
      apartment: 'Apt 4B',
      city: 'San Francisco',
      state: 'CA',
      postalCode: '94103',
      country: 'United States',
      phone: '+1 (555) 123-4567',
    },
    paymentMethod: {
      type: 'mastercard',
      last4: '8888',
    },
    subtotal: 498.00,
    shipping: 0,
    tax: 39.84,
    discount: 20,
    total: 517.84,
    trackingNumber: '1Z999BB10123456799',
    estimatedDelivery: '2024-03-22',
    createdAt: '2024-03-15T11:45:00Z',
    updatedAt: '2024-03-18T08:00:00Z',
  },
]

export const useOrdersStore = defineStore('orders', () => {
  // State
  const orders = ref<Order[]>(demoOrders)
  const currentOrder = ref<Order | null>(null)
  const loading = ref(false)

  // Computed
  const recentOrders = computed(() => 
    [...orders.value]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 5)
  )

  const pendingOrders = computed(() => 
    orders.value.filter(o => ['pending', 'confirmed', 'processing', 'shipped'].includes(o.status))
  )

  const completedOrders = computed(() =>
    orders.value.filter(o => o.status === 'delivered')
  )

  // Actions
  function getOrderById(orderId: string): Order | undefined {
    return orders.value.find(o => o.id === orderId)
  }

  function getOrderByNumber(orderNumber: string): Order | undefined {
    return orders.value.find(o => o.orderNumber === orderNumber)
  }

  async function placeOrder(orderData: {
    items: OrderItem[]
    shippingAddress: OrderAddress
    billingAddress: OrderAddress
    paymentMethod: { type: 'visa' | 'mastercard' | 'amex' | 'paypal'; last4: string }
    subtotal: number
    shipping: number
    tax: number
    discount?: number
  }): Promise<Order> {
    loading.value = true

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))

      const order: Order = {
        id: `order-${Date.now()}`,
        orderNumber: `#${Math.floor(100000 + Math.random() * 900000)}`,
        status: 'confirmed',
        ...orderData,
        discount: orderData.discount || 0,
        total: orderData.subtotal + orderData.shipping + orderData.tax - (orderData.discount || 0),
        estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }

      orders.value.unshift(order)
      currentOrder.value = order

      return order
    } finally {
      loading.value = false
    }
  }

  function setCurrentOrder(order: Order | null) {
    currentOrder.value = order
  }

  function clearCurrentOrder() {
    currentOrder.value = null
  }

  async function cancelOrder(orderId: string): Promise<boolean> {
    loading.value = true

    try {
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const order = orders.value.find(o => o.id === orderId)
      if (order && ['pending', 'confirmed'].includes(order.status)) {
        order.status = 'cancelled'
        order.updatedAt = new Date().toISOString()
        return true
      }
      return false
    } finally {
      loading.value = false
    }
  }

  function getStatusLabel(status: OrderStatus): string {
    const labels: Record<OrderStatus, string> = {
      pending: 'Pending',
      confirmed: 'Confirmed',
      processing: 'Processing',
      shipped: 'Shipped',
      delivered: 'Delivered',
      cancelled: 'Cancelled',
    }
    return labels[status]
  }

  function getStatusStep(status: OrderStatus): number {
    const steps: Record<OrderStatus, number> = {
      pending: 0,
      confirmed: 1,
      processing: 2,
      shipped: 3,
      delivered: 4,
      cancelled: -1,
    }
    return steps[status]
  }

  return {
    // State
    orders,
    currentOrder,
    loading,
    
    // Computed
    recentOrders,
    pendingOrders,
    completedOrders,
    
    // Actions
    getOrderById,
    getOrderByNumber,
    placeOrder,
    setCurrentOrder,
    clearCurrentOrder,
    cancelOrder,
    getStatusLabel,
    getStatusStep,
  }
})
