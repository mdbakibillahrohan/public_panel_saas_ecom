import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// Types
export interface ProductVariant {
  id: string
  name: string
  value: string
  priceModifier?: number
  inStock: boolean
}

export interface Product {
  id: string
  slug: string
  name: string
  brand: string
  description: string
  shortDescription: string
  price: number
  originalPrice?: number
  images: string[]
  category: string
  categorySlug: string
  rating: number
  reviewCount: number
  badge?: 'bestseller' | 'sale' | 'new' | 'limited'
  inStock: boolean
  stockCount?: number
  variants?: {
    colors?: ProductVariant[]
    sizes?: ProductVariant[]
  }
  features?: string[]
  specs?: Record<string, string>
  isFeatured?: boolean
  isNewArrival?: boolean
  isBestSeller?: boolean
  createdAt: string
}

export interface ProductFilters {
  category?: string
  brands?: string[]
  priceMin?: number
  priceMax?: number
  rating?: number
  inStock?: boolean
  sortBy?: 'popular' | 'price-low' | 'price-high' | 'newest' | 'rating'
}

// Demo Products Data
const demoProducts: Product[] = [
  {
    id: '1',
    slug: 'sony-wh-1000xm4',
    name: 'Sony WH-1000XM4 Wireless Noise Cancelling Headphones',
    brand: 'Sony',
    description: 'Industry-leading noise cancellation technology features additional microphones that assist in isolating sound while talking on the phone, resulting in improved phone call quality and the reduction of even more high and mid frequency sounds.',
    shortDescription: 'Industry-leading noise cancellation with 30-hour battery life.',
    price: 298.00,
    originalPrice: 348.00,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCi2uEdQ0iM74BumPq-8ctPLKq7we7_3I5fB0n4GDqYN7M2y9R0NR37ojm8UxpTAasKCdftLIf4venovHt3WhSByVafcKWeKpcg2BlRFe7xmxcwV7d_9UTqYVJi7Q41_M39Tqvf8XaAdU9edLSTiL_y5ooZBUUnMUfnzqpdKOqEPBsXwRBKwSchcLHsxEatqWFIK0R4ESri6IGtS3Uzy32SaoyUUyq1f_P0o9yFK02FtAq8V7LtGqxqAMGBXXJ_O5egLmxL9tVBAdL9',
    ],
    category: 'Audio & Headphones',
    categorySlug: 'audio-headphones',
    rating: 4.8,
    reviewCount: 2140,
    badge: 'bestseller',
    inStock: true,
    stockCount: 50,
    variants: {
      colors: [
        { id: 'black', name: 'Black', value: '#000000', inStock: true },
        { id: 'silver', name: 'Silver', value: '#C0C0C0', inStock: true },
        { id: 'blue', name: 'Midnight Blue', value: '#191970', inStock: false },
      ],
    },
    features: [
      '30-hour battery life with quick charging',
      'Touch Sensor controls to pause/play/skip tracks',
      'Speak-to-chat technology',
      'Wearing detection auto-pause',
    ],
    specs: {
      'Weight': '254g',
      'Headphone Type': 'Closed, dynamic',
      'Driver Unit': '40mm, dome type (CCAW Voice coil)',
      'Frequency Response': '4Hz-40,000Hz',
    },
    isFeatured: true,
    isBestSeller: true,
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    slug: 'beats-studio3-wireless',
    name: 'Beats Studio3 Wireless Over-Ear Headphones',
    brand: 'Beats',
    description: 'High-performance wireless noise cancelling headphones with Apple W1 chip.',
    shortDescription: 'Premium wireless headphones with Pure ANC.',
    price: 169.95,
    originalPrice: 199.95,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDxX4Cx6ZSRcFE7IhDvPTU_Hh42La8cw_Jf8-V6WGIFzcWoGOLBtJGJWbmmaQJS8JVT4ANPuj-icOLbPBb1YM-S8anSk0GDZ6qMq3xUHQQG9B7SYGcjV7rwMLixAkTXgkvP0h57qmdYBpKsK_h6Mg1uVz8F--x71VdyEvb4bkXLJkoYisXZ9zWNk-6-M3LCZWIIRHMGAUUCNzNVjUwLXkxjXs6U9sPGLl10uK2fAzFOK5tWOzOIcuGzk9-KtwN7Vi8kYSzIbs2CcpxF',
    ],
    category: 'Audio & Headphones',
    categorySlug: 'audio-headphones',
    rating: 4.0,
    reviewCount: 856,
    badge: 'sale',
    inStock: true,
    isFeatured: true,
    createdAt: '2024-02-10',
  },
  {
    id: '3',
    slug: 'airpods-pro-2nd-gen',
    name: 'AirPods Pro (2nd Generation)',
    brand: 'Apple',
    description: 'Active Noise Cancellation reduces unwanted background noise.',
    shortDescription: 'Premium wireless earbuds with spatial audio.',
    price: 249.00,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC-pILzXmMczqAokDGxJyilGIvDVg64yU9QrH33BkAChpcpmDKAycbBXDtpESn1sWYCkU2ec9BZSFzhCqO8i1o037LZH5esb_1fEFA6pGPEPtHnCbJE_vOJ8tXb3ud5hGhFsFvraTMDeMN4eOpxpNhukUc9dft0ues3ZFDY2Bb1catzRHZbWhO-xDsD95y9BP0j3mon6gmRhiMIt6ZdPZbcJNtQponwzzDhNhLfWp_Hd6WNct3KXvgHNJr2MLQOy2egol5ENtcYwbz_',
    ],
    category: 'Audio & Headphones',
    categorySlug: 'audio-headphones',
    rating: 4.6,
    reviewCount: 4032,
    inStock: true,
    isNewArrival: true,
    isFeatured: true,
    createdAt: '2024-03-01',
  },
  {
    id: '4',
    slug: 'sennheiser-momentum-tw3',
    name: 'Sennheiser Momentum True Wireless 3',
    brand: 'Sennheiser',
    description: 'Premium true wireless earbuds with exceptional sound quality.',
    shortDescription: 'Audiophile-grade wireless earbuds.',
    price: 199.95,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCau2H7RytevbocHQe-prcATooqNIzX4DzfsP8Zo3kStXLvV-ns05RUoHhnZiRk-yVj43khwD0nIfzSJCHAyxdAkhDVtdqwPowCrYtztDcCSk0rjWBdKuZ9DrmplWG9hXMT2gSmQqlPz2w7bBVQcZqV8gf65wzImxjEQRD6XBWKg-QJg9M9d75L8FM1Tyh9UEFlYrKBQe_R61IsTxyTMB1vz8a-wv9Z5zvC9ij_18Lb33PCnzMV_-_cB2V2G0mH4niFC9r2HQJTnyo5',
    ],
    category: 'Audio & Headphones',
    categorySlug: 'audio-headphones',
    rating: 4.0,
    reviewCount: 412,
    inStock: true,
    createdAt: '2024-01-20',
  },
  {
    id: '5',
    slug: 'jbl-live-660nc',
    name: 'JBL Live 660NC Wireless Over-Ear Headphones',
    brand: 'JBL',
    description: 'Wireless over-ear noise cancelling headphones with JBL Signature Sound.',
    shortDescription: 'JBL Signature Sound with ANC.',
    price: 149.95,
    originalPrice: 199.95,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDwi3uyLNU1SMMIDQKl868XS4m3sxy4IuQOQM07CdesJ9CIvBDrvEzTD7uijFe7GT9tp2eDpfLqqWwz0ozMsuMK1HYDSJf77GjNAVgRjDX6M1kcn1YjnIDTlBvhegoFYZnLpxNI72mdYvcYyoPCWm56Gli7i5N33YNItFvp655ymkAo2oEOzuVH9a6p_TTZSOEv3tpGLWKgVEs8aMkqnNE5KyQiGCx49WvEXz5j-FnV32_xGi_BqZ2Prg4flmqlRnK0x7MYF5oIlKEL',
    ],
    category: 'Audio & Headphones',
    categorySlug: 'audio-headphones',
    rating: 3.5,
    reviewCount: 1250,
    badge: 'sale',
    inStock: true,
    createdAt: '2024-02-15',
  },
  {
    id: '6',
    slug: 'urbanears-plattan-2',
    name: 'Urbanears Plattan 2 Bluetooth Headphones',
    brand: 'Urbanears',
    description: 'Stylish Bluetooth headphones with 30+ hours of wireless playtime.',
    shortDescription: 'Colorful wireless headphones.',
    price: 69.00,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCYCU7JIpnnSI7tUNh50SPGHDJ9wbCmbD4Wc5qh0A5NsPxM8O2P0dMjMqzptWCH-8DAgJvo4YZRTsVHnEYAkW3_uYLFJa4p_v9Le6KzZfjLLoxsz2rYvjrgHcHwDTG4EtkZOagOFq-7Dumlidroyhcayv3sOH69P9Ic7-TfDABMx20yJkeD_yrNCnWT5--N9EVkPpnY9VWgPMue7XHQuBWiZVbW6-zDQd5qoSzAz_OUTMWjFPap4pJmjIXMZqLTWadNS4fSy-PHgGc3',
    ],
    category: 'Audio & Headphones',
    categorySlug: 'audio-headphones',
    rating: 4.0,
    reviewCount: 98,
    badge: 'new',
    inStock: true,
    isNewArrival: true,
    createdAt: '2024-03-10',
  },
  {
    id: '7',
    slug: 'ergonomic-office-chair',
    name: 'Ergonomic Office Chair - Premium Mesh',
    brand: 'ComfortMax',
    description: 'High-quality ergonomic office chair with lumbar support and breathable mesh.',
    shortDescription: 'Premium ergonomic desk chair.',
    price: 299.00,
    originalPrice: 399.00,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCRoLaQ6Nk-wCDAAlR-7zdPUtvGCdbxICGxH_RaizBDfXv_aML8xnb2NgUHQN4_jqc7G13_tMR-LG5YdgOSiLbdV1yuQhNAF7PiQ_lV8wNdO_sfWG27rLQyKiZ-vYWqFV5jOK_YMbgU_Yi2C5twO00cZnmndfR6i4n8NuKjXdazeJluxp4UiL-j8AP3x71popwPWw3n7h_f2CSEGQ338rSVdhC7PpHPd8pG19YnsoZh48zx5wp-nF1yF2MtI_gC516N-jVsRI0HQZo2',
    ],
    category: 'Office & Furniture',
    categorySlug: 'office-furniture',
    rating: 4.7,
    reviewCount: 523,
    badge: 'sale',
    inStock: true,
    isBestSeller: true,
    createdAt: '2024-01-05',
  },
  {
    id: '8',
    slug: 'nike-air-zoom-pegasus-39',
    name: 'Nike Air Zoom Pegasus 39 Running Shoes',
    brand: 'Nike',
    description: 'Responsive cushioning for everyday running.',
    shortDescription: 'Premium running shoes.',
    price: 120.00,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC9nuHlEWTdVZ3ca6mbnHw-UW4meddgLiyAwm1q5ZxioXkeENlCYG3ieVdeYIU8tzoHFBkESIg16Hf13Btr7lFA7zK_2y7Z8nh1UzlnUj8ZYT6lQnyf9SVuHxFRTEhcRiUXyOlPFhqxjrLY0irx8iUW74B0r_mNr9BkoFgtajFyBthY2Y0VTvMWUqzevYdFAvaZbv10m8bNKOMOTbxXUt7b1F6Fn8TR0dnmX2LwuK3yYxvYB16cPnRQaOzs-bLF4J9TTQTa_D-mn1lJ',
    ],
    category: 'Footwear',
    categorySlug: 'footwear',
    rating: 4.5,
    reviewCount: 856,
    inStock: true,
    stockCount: 3,
    isNewArrival: true,
    createdAt: '2024-03-05',
  },
  {
    id: '9',
    slug: 'timex-weekender-smartwatch',
    name: 'Timex Weekender 40mm Smart Watch',
    brand: 'Timex',
    description: 'Classic analog style with smart features.',
    shortDescription: 'Classic smartwatch design.',
    price: 45.00,
    originalPrice: 60.00,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBzh7z_UXEVNKgDypUUiqPheRhV45lvOPE_Z_VE1ga1v_kVQcOwz07awTejqOEICfkIs9l8nPv3hLjApZwuZaGM_1HLpCFBmhtt7aD7U8R_TxFVHEp5gPWW9I92bJKsu43nkCF01KQe4Ih3BT0bnRTuNPL6M9_fTyEbTa_n8vVlbg1tm-dbA3hFbZVLiNGyTPSPV-ehJpJ8t2Qjzgr5WrmYiYiioI7YBHn9mDwxGK5rxf5w56xjmUtxZpfl2oq2o-tfn1zFqHxHMv9i',
    ],
    category: 'Accessories',
    categorySlug: 'accessories',
    rating: 4.2,
    reviewCount: 124,
    badge: 'sale',
    inStock: true,
    createdAt: '2024-02-20',
  },
  {
    id: '10',
    slug: 'herschel-little-america-backpack',
    name: 'Herschel Supply Co. Little America Backpack',
    brand: 'Herschel',
    description: 'Classic mountaineering style with modern functionality.',
    shortDescription: 'Premium travel backpack.',
    price: 109.99,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCdtd6vFN62s1SfCx7O620fuwLHfFKXBQhEZcQWMqxmlyCVVB-P8-8VPTV7gHcq70ITQUZXD-VHRAvfuYkaBxZ4z9uJc-yjE58HRkEi1AT_Kc1tt9KvYQ1-IuACXkwqu1KNOjc2GLMnmg1kCjZq-IccSyuEQiPA8JJRPd3H2rJ6_Zy4rUUUxFOvs4_fG0MBrHGmrRJkBtjGcMLdo6gDxfscEd7Ji9cuU-1a9ITmbitnu97qrhvvYEMN7USWBG0ePc0DBe61eGIWtiW7',
    ],
    category: 'Travel',
    categorySlug: 'travel',
    rating: 4.9,
    reviewCount: 3200,
    inStock: true,
    isBestSeller: true,
    createdAt: '2024-01-10',
  },
  {
    id: '11',
    slug: 'fujifilm-x-t5-camera',
    name: 'Fujifilm X-T5 Mirrorless Camera Body',
    brand: 'Fujifilm',
    description: 'High-performance mirrorless camera with 40.2MP sensor.',
    shortDescription: 'Professional mirrorless camera.',
    price: 1699.00,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAQgkq1Wpj_LYmWopDrvtwkiJZcxN_2zlNoJxtgLNLf0vKdlgqWKf4QFum8kt5DW53rx-ypzal9TsHmmRGeK7E3xoWbLttKD8ZofYTg-BpKtpAjV3jtjnegFgI8WuPAptuhKLl_ZkJ-8iX0EMG3wSOVKQnnMA6BHbINipWBl6x10-vwnZ30p5Dh1AKQ878YwEczy0fDnutNq58P16gugQveK7bYOtG4pKD7T4B2PoGXgghRROj8UtXudOic3J2GBJj6TEZoNTdxfByT',
    ],
    category: 'Photography',
    categorySlug: 'photography',
    rating: 5.0,
    reviewCount: 42,
    inStock: true,
    isNewArrival: true,
    createdAt: '2024-03-15',
  },
  {
    id: '12',
    slug: 'keychron-k2-keyboard',
    name: 'Keychron K2 Mechanical Keyboard',
    brand: 'Keychron',
    description: 'Compact wireless mechanical keyboard with RGB backlight.',
    shortDescription: 'Premium mechanical keyboard.',
    price: 89.00,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBpHkxW5CJi0MCl3DbESj2e25Zztochkn4gjaUGedXAi3J5QklON5XqnI4gHqAlswu9AUZtZkkChL8_P_QmYV3mfhx_MZtqSenzGzu_gKv0DtEGtb7bU7nsrS5nmSpeidhPKrBdoBrovglqcURSJZ3vbQVrH1MnG79LdfQYlpihyvb0F8IkRJCrsx7Fq5xvcI9ZUE1A9PXEeF-KHxT4WLnrXr4Yb0oKHJsOsDMoiMx-VtMkjxsD7p4Dqyzkb2bSksYAJhZA93M6kJxj',
    ],
    category: 'Electronics',
    categorySlug: 'electronics',
    rating: 4.8,
    reviewCount: 1890,
    inStock: true,
    isBestSeller: true,
    createdAt: '2024-02-01',
  },
  {
    id: '13',
    slug: 'minimalist-wristwatch',
    name: 'Minimalist Leather Wristwatch',
    brand: 'Nordic',
    description: 'Clean, minimalist design with genuine leather strap.',
    shortDescription: 'Elegant minimalist watch.',
    price: 120.00,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBpzPevIYckO2cSPYiykLP6rLMUH0N06XBSJslgEWMX_VUxjf-jcDr5Kz9x0njZ-pTVzqOuI2NRH5DdeqEBYnmDd9Fefv6y_Bw-XGKP3zJxcleQqQ6tHou5JoF8hvas_FS4SYgvP2a2MJ7LIqG3XsXnsAqt4VLRgF9lizGQkb9QmibRA0whQkWzIHVymFtIfZq_riv8QBKguJyrjb_1Ec3Qkr0OEYF2EAXTSEOQ5xEqe2utmS5I_hmS-JqOW6FEAev6ePcze06J4FZa',
    ],
    category: 'Accessories',
    categorySlug: 'accessories',
    rating: 4.4,
    reviewCount: 287,
    inStock: true,
    createdAt: '2024-01-25',
  },
  {
    id: '14',
    slug: 'hifi-headphones-white',
    name: 'Hi-Fi Wireless Headphones',
    brand: 'AudioMax',
    description: 'High-fidelity wireless headphones with premium drivers.',
    shortDescription: 'Premium Hi-Fi audio experience.',
    price: 250.00,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDpPZl8TvCopSCkpkESLrvRcPM_3pTNqjKtRlR33t-EmnggeIctu_rOXtubFp9oT9whKgHx6NCyA5dneXpYE8pniqT4EmrEZWDqn_c5Yt5F6jhIgVgcZdDoeJ9zHeO8Ab9kKDEL_Xeo32SqAeSzTWoWmU9rjuuu-FqHF6-kbHkUl80LDaBlCsMV0Dp0uErFhsNm2sDV3eh5MKtVRiEclZI42MO72uhq2AVUcciATpwxbwEzdj_nqSh_rrlCD3fPVYsR3BzCxWgazFqT',
    ],
    category: 'Audio & Headphones',
    categorySlug: 'audio-headphones',
    rating: 4.6,
    reviewCount: 445,
    inStock: true,
    isNewArrival: true,
    createdAt: '2024-03-08',
  },
  {
    id: '15',
    slug: 'ergo-mouse-pro',
    name: 'Ergo Mouse Pro',
    brand: 'TechGear',
    description: 'Ergonomic wireless mouse for comfortable all-day use.',
    shortDescription: 'Premium ergonomic mouse.',
    price: 49.99,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDbi69stxg2zIl8pLHzR1Qi9C8HlOKSztR6RroxSDGC6vMpOiFL1JmX-dNkbbKeyKWZxwQmh58UBrGJp9sOEuea-o2ijw9b6jdb7gRB9oUGME13UYChxl8c8KY3OoxNAVZiTMNFTJGecJ68GNSOZaUKj9xnIcEvee-suEiw6DD6BAXmhL3VIko2Rj4ejaU5vbJjXO3IZYv1eHeW3BeofF7ZV-veRtr_XLzmpAM-RgreUSOJzXwzm3cAjuyKJldygBOXyUjZv_H9YwIi',
    ],
    category: 'Electronics',
    categorySlug: 'electronics',
    rating: 4.3,
    reviewCount: 892,
    inStock: true,
    createdAt: '2024-02-12',
  },
]

export const useProductsStore = defineStore('products', () => {
  // State
  const products = ref<Product[]>(demoProducts)
  const filters = ref<ProductFilters>({
    sortBy: 'popular',
  })
  const loading = ref(false)
  const searchQuery = ref('')

  // Computed
  const featuredProducts = computed(() => 
    products.value.filter(p => p.isFeatured)
  )

  const newArrivals = computed(() => 
    products.value.filter(p => p.isNewArrival)
  )

  const bestSellers = computed(() => 
    products.value.filter(p => p.isBestSeller)
  )

  const filteredProducts = computed(() => {
    let result = [...products.value]

    // Category filter
    if (filters.value.category) {
      result = result.filter(p => p.categorySlug === filters.value.category)
    }

    // Brand filter
    if (filters.value.brands?.length) {
      result = result.filter(p => filters.value.brands!.includes(p.brand))
    }

    // Price filter
    if (filters.value.priceMin !== undefined) {
      result = result.filter(p => p.price >= filters.value.priceMin!)
    }
    if (filters.value.priceMax !== undefined) {
      result = result.filter(p => p.price <= filters.value.priceMax!)
    }

    // Rating filter
    if (filters.value.rating) {
      result = result.filter(p => p.rating >= filters.value.rating!)
    }

    // In stock filter
    if (filters.value.inStock) {
      result = result.filter(p => p.inStock)
    }

    // Search
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      )
    }

    // Sorting
    switch (filters.value.sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'popular':
      default:
        result.sort((a, b) => b.reviewCount - a.reviewCount)
    }

    return result
  })

  const allBrands = computed(() => {
    const brands = new Set(products.value.map(p => p.brand))
    return Array.from(brands).sort()
  })

  const allCategories = computed(() => {
    const categories = new Set(products.value.map(p => p.category))
    return Array.from(categories).sort()
  })

  // Actions
  function getProductBySlug(slug: string): Product | undefined {
    return products.value.find(p => p.slug === slug)
  }

  function getProductById(id: string): Product | undefined {
    return products.value.find(p => p.id === id)
  }

  function getProductsByCategory(categorySlug: string): Product[] {
    return products.value.filter(p => p.categorySlug === categorySlug)
  }

  function getRelatedProducts(productId: string, limit = 4): Product[] {
    const product = getProductById(productId)
    if (!product) return []
    
    return products.value
      .filter(p => p.id !== productId && p.categorySlug === product.categorySlug)
      .slice(0, limit)
  }

  function setFilters(newFilters: Partial<ProductFilters>) {
    filters.value = { ...filters.value, ...newFilters }
  }

  function clearFilters() {
    filters.value = { sortBy: 'popular' }
    searchQuery.value = ''
  }

  function setSearchQuery(query: string) {
    searchQuery.value = query
  }

  // Simulated API fetch
  async function fetchProducts(): Promise<void> {
    loading.value = true
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    // In the future, replace with actual API call
    loading.value = false
  }

  return {
    // State
    products,
    filters,
    loading,
    searchQuery,
    
    // Computed
    featuredProducts,
    newArrivals,
    bestSellers,
    filteredProducts,
    allBrands,
    allCategories,
    
    // Actions
    getProductBySlug,
    getProductById,
    getProductsByCategory,
    getRelatedProducts,
    setFilters,
    clearFilters,
    setSearchQuery,
    fetchProducts,
  }
})
