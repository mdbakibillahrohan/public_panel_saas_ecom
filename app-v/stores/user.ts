import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// Types
export interface Address {
  id: string
  label: string
  firstName: string
  lastName: string
  street: string
  apartment?: string
  city: string
  state: string
  postalCode: string
  country: string
  phone: string
  isDefault: boolean
}

export interface PaymentMethod {
  id: string
  type: 'visa' | 'mastercard' | 'amex' | 'paypal'
  last4: string
  expiryMonth: number
  expiryYear: number
  isDefault: boolean
}

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  avatar?: string
  phone?: string
  membershipLevel: 'bronze' | 'silver' | 'gold' | 'platinum'
  createdAt: string
}

// Demo data
const demoUser: User = {
  id: 'user-1',
  email: 'jane.doe@example.com',
  firstName: 'Jane',
  lastName: 'Doe',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3e2j_YAQc4stXUnVqzuoAySpSNa-YNT9rzUbXuHoFHGg1-GIUK-63lmWU44NTWxVTI1PsStp8GhtdLF8-YYUaGP9Fq72VHLpV-hzEwOO6buhJnTxcSlA_Jtr73CWS3IWkJsm7CETBJ2PcUmApsQHdNEW2RU759IAiizu51EcAEI12ZYRPkmvYoIImBqMxzBXWRaCCKAFAEXv1NmaVAESKnOVN1ipoCZkOs50N1wYyWbxseGLt7t5MXJTa_e9RbEfhZrFbNEzhieuW',
  phone: '+1 (555) 123-4567',
  membershipLevel: 'gold',
  createdAt: '2023-06-15',
}

const demoAddresses: Address[] = [
  {
    id: 'addr-1',
    label: 'Home',
    firstName: 'Jane',
    lastName: 'Doe',
    street: '123 Market Street',
    apartment: 'Apt 4B',
    city: 'San Francisco',
    state: 'CA',
    postalCode: '94103',
    country: 'United States',
    phone: '+1 (555) 123-4567',
    isDefault: true,
  },
  {
    id: 'addr-2',
    label: 'Work',
    firstName: 'Jane',
    lastName: 'Doe',
    street: '456 Office Plaza',
    apartment: 'Suite 200',
    city: 'San Francisco',
    state: 'CA',
    postalCode: '94105',
    country: 'United States',
    phone: '+1 (555) 987-6543',
    isDefault: false,
  },
]

const demoPaymentMethods: PaymentMethod[] = [
  {
    id: 'card-1',
    type: 'visa',
    last4: '4242',
    expiryMonth: 12,
    expiryYear: 2025,
    isDefault: true,
  },
  {
    id: 'card-2',
    type: 'mastercard',
    last4: '8888',
    expiryMonth: 6,
    expiryYear: 2026,
    isDefault: false,
  },
]

export const useUserStore = defineStore('user', () => {
  // State
  const user = ref<User | null>(demoUser)
  const addresses = ref<Address[]>(demoAddresses)
  const paymentMethods = ref<PaymentMethod[]>(demoPaymentMethods)
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Computed
  const isAuthenticated = computed(() => user.value !== null)

  const fullName = computed(() => {
    if (!user.value) return ''
    return `${user.value.firstName} ${user.value.lastName}`
  })

  const initials = computed(() => {
    if (!user.value) return ''
    return `${user.value.firstName[0]}${user.value.lastName[0]}`.toUpperCase()
  })

  const defaultAddress = computed(() => 
    addresses.value.find(addr => addr.isDefault) || addresses.value[0] || null
  )

  const defaultPayment = computed(() => 
    paymentMethods.value.find(pm => pm.isDefault) || paymentMethods.value[0] || null
  )

  // Actions
  async function login(email: string, _password: string): Promise<boolean> {
    loading.value = true
    error.value = null

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Demo: accept any password for demo user
      if (email === demoUser.email) {
        user.value = demoUser
        return true
      }
      
      // Demo: create new user for any other email
      user.value = {
        ...demoUser,
        id: `user-${Date.now()}`,
        email,
        firstName: email.split('@')[0],
      }
      return true
    } catch (e) {
      error.value = 'Login failed. Please try again.'
      return false
    } finally {
      loading.value = false
    }
  }

  async function register(data: {
    firstName: string
    lastName: string
    email: string
    password: string
  }): Promise<boolean> {
    loading.value = true
    error.value = null

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      user.value = {
        id: `user-${Date.now()}`,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        membershipLevel: 'bronze',
        createdAt: new Date().toISOString(),
      }
      return true
    } catch (e) {
      error.value = 'Registration failed. Please try again.'
      return false
    } finally {
      loading.value = false
    }
  }

  function logout() {
    user.value = null
    addresses.value = []
    paymentMethods.value = []
  }

  async function updateProfile(data: Partial<User>): Promise<boolean> {
    if (!user.value) return false

    loading.value = true
    try {
      await new Promise(resolve => setTimeout(resolve, 500))
      user.value = { ...user.value, ...data }
      return true
    } finally {
      loading.value = false
    }
  }

  function addAddress(address: Omit<Address, 'id'>): string {
    const id = `addr-${Date.now()}`
    
    // If this is the first address or marked as default, update others
    if (address.isDefault || addresses.value.length === 0) {
      addresses.value.forEach(addr => addr.isDefault = false)
    }
    
    addresses.value.push({ ...address, id })
    return id
  }

  function updateAddress(id: string, data: Partial<Address>) {
    const index = addresses.value.findIndex(addr => addr.id === id)
    if (index !== -1) {
      if (data.isDefault) {
        addresses.value.forEach(addr => addr.isDefault = false)
      }
      addresses.value[index] = { ...addresses.value[index], ...data }
    }
  }

  function deleteAddress(id: string) {
    const index = addresses.value.findIndex(addr => addr.id === id)
    if (index !== -1) {
      const wasDefault = addresses.value[index].isDefault
      addresses.value.splice(index, 1)
      
      // Make first address default if we deleted the default
      if (wasDefault && addresses.value.length > 0) {
        addresses.value[0].isDefault = true
      }
    }
  }

  function addPaymentMethod(method: Omit<PaymentMethod, 'id'>): string {
    const id = `card-${Date.now()}`
    
    if (method.isDefault || paymentMethods.value.length === 0) {
      paymentMethods.value.forEach(pm => pm.isDefault = false)
    }
    
    paymentMethods.value.push({ ...method, id })
    return id
  }

  function deletePaymentMethod(id: string) {
    const index = paymentMethods.value.findIndex(pm => pm.id === id)
    if (index !== -1) {
      const wasDefault = paymentMethods.value[index].isDefault
      paymentMethods.value.splice(index, 1)
      
      if (wasDefault && paymentMethods.value.length > 0) {
        paymentMethods.value[0].isDefault = true
      }
    }
  }

  function setDefaultAddress(id: string) {
    addresses.value.forEach(addr => {
      addr.isDefault = addr.id === id
    })
  }

  function setDefaultPayment(id: string) {
    paymentMethods.value.forEach(pm => {
      pm.isDefault = pm.id === id
    })
  }

  return {
    // State
    user,
    addresses,
    paymentMethods,
    loading,
    error,
    
    // Computed
    isAuthenticated,
    fullName,
    initials,
    defaultAddress,
    defaultPayment,
    
    // Actions
    login,
    register,
    logout,
    updateProfile,
    addAddress,
    updateAddress,
    deleteAddress,
    addPaymentMethod,
    deletePaymentMethod,
    setDefaultAddress,
    setDefaultPayment,
  }
})
