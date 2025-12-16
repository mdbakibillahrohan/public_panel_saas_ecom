import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// Types
export interface Review {
  id: string
  productId: string
  userId: string
  userName: string
  userAvatar?: string
  rating: number
  title: string
  content: string
  helpful: number
  verified: boolean
  createdAt: string
  images?: string[]
}

// Demo reviews per product
const demoReviews: Review[] = [
  // Sony WH-1000XM4 reviews
  {
    id: 'rev-1',
    productId: '1',
    userId: 'user-101',
    userName: 'John Doe',
    rating: 5,
    title: 'Best purchase of the year',
    content: "Absolutely amazing sound quality. The noise cancelling is scary good - I literally can't hear my kids screaming when I have these on. The battery life is also impressive.",
    helpful: 24,
    verified: true,
    createdAt: '2024-03-01T10:30:00Z',
  },
  {
    id: 'rev-2',
    productId: '1',
    userId: 'user-102',
    userName: 'Alice Smith',
    rating: 4,
    title: 'Great but pricey',
    content: 'The headphones are great, but I wish they were a bit cheaper. The build quality feels premium though. Multi-device connection can be a bit finicky sometimes.',
    helpful: 12,
    verified: true,
    createdAt: '2024-02-15T14:20:00Z',
  },
  {
    id: 'rev-3',
    productId: '1',
    userId: 'user-103',
    userName: 'Mike Johnson',
    rating: 5,
    title: 'Perfect for travel',
    content: 'Used these on a 14-hour flight and they were a lifesaver. Noise cancellation blocked out all the engine noise. Incredibly comfortable too.',
    helpful: 18,
    verified: true,
    createdAt: '2024-02-01T09:15:00Z',
  },
  // AirPods Pro reviews
  {
    id: 'rev-4',
    productId: '3',
    userId: 'user-104',
    userName: 'Sarah Williams',
    rating: 5,
    title: 'Seamless Apple ecosystem',
    content: 'If you have an iPhone, these are a no-brainer. The integration is flawless, and the spatial audio is mind-blowing.',
    helpful: 32,
    verified: true,
    createdAt: '2024-03-05T16:45:00Z',
  },
  {
    id: 'rev-5',
    productId: '3',
    userId: 'user-105',
    userName: 'David Chen',
    rating: 4,
    title: 'Great earbuds, battery could be better',
    content: 'Sound quality and ANC are excellent. Only wish the case lasted longer. Perfect for workouts.',
    helpful: 8,
    verified: true,
    createdAt: '2024-02-20T11:30:00Z',
  },
  // Ergonomic Chair reviews
  {
    id: 'rev-6',
    productId: '7',
    userId: 'user-106',
    userName: 'Emily Brown',
    rating: 5,
    title: 'My back thanks me',
    content: 'After years of back pain from cheap office chairs, this one has been a game changer. Worth every penny.',
    helpful: 45,
    verified: true,
    createdAt: '2024-03-10T08:00:00Z',
  },
  {
    id: 'rev-7',
    productId: '7',
    userId: 'user-107',
    userName: 'Robert Taylor',
    rating: 4,
    title: 'Assembly was tricky',
    content: 'The chair itself is fantastic once assembled. Just be prepared to spend 45 minutes putting it together.',
    helpful: 15,
    verified: true,
    createdAt: '2024-02-28T13:00:00Z',
  },
  // Nike shoes reviews
  {
    id: 'rev-8',
    productId: '8',
    userId: 'user-108',
    userName: 'Lisa Anderson',
    rating: 5,
    title: 'Best running shoes ever',
    content: 'Super lightweight and responsive. Perfect for my daily 5k runs. The cushioning is incredible.',
    helpful: 22,
    verified: true,
    createdAt: '2024-03-12T07:30:00Z',
  },
  // Herschel Backpack reviews
  {
    id: 'rev-9',
    productId: '10',
    userId: 'user-109',
    userName: 'James Wilson',
    rating: 5,
    title: 'Stylish and practical',
    content: 'Perfect for work and weekend trips. Fits my 15" laptop perfectly. The quality is outstanding.',
    helpful: 28,
    verified: true,
    createdAt: '2024-02-25T15:00:00Z',
  },
  {
    id: 'rev-10',
    productId: '10',
    userId: 'user-110',
    userName: 'Amanda Martinez',
    rating: 5,
    title: 'Daily commute essential',
    content: 'Been using this for 6 months and it still looks brand new. Lots of compartments for organization.',
    helpful: 19,
    verified: true,
    createdAt: '2024-03-08T12:45:00Z',
  },
]

export const useReviewsStore = defineStore('reviews', () => {
  // State
  const reviews = ref<Review[]>(demoReviews)
  const loading = ref(false)

  // Computed
  const reviewsByProduct = computed(() => {
    const grouped: Record<string, Review[]> = {}
    reviews.value.forEach(review => {
      if (!grouped[review.productId]) {
        grouped[review.productId] = []
      }
      grouped[review.productId].push(review)
    })
    return grouped
  })

  // Actions
  function getReviewsByProduct(productId: string, sortBy: 'newest' | 'helpful' | 'rating' = 'newest'): Review[] {
    const productReviews = reviews.value.filter(r => r.productId === productId)
    
    switch (sortBy) {
      case 'helpful':
        return productReviews.sort((a, b) => b.helpful - a.helpful)
      case 'rating':
        return productReviews.sort((a, b) => b.rating - a.rating)
      case 'newest':
      default:
        return productReviews.sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
    }
  }

  function getReviewStats(productId: string): {
    average: number
    total: number
    distribution: Record<number, number>
  } {
    const productReviews = reviews.value.filter(r => r.productId === productId)
    const total = productReviews.length
    
    if (total === 0) {
      return { average: 0, total: 0, distribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 } }
    }

    const sum = productReviews.reduce((acc, r) => acc + r.rating, 0)
    const distribution: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
    
    productReviews.forEach(r => {
      distribution[r.rating]++
    })

    return {
      average: Math.round((sum / total) * 10) / 10,
      total,
      distribution,
    }
  }

  async function addReview(review: Omit<Review, 'id' | 'helpful' | 'createdAt'>): Promise<Review> {
    loading.value = true

    try {
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const newReview: Review = {
        ...review,
        id: `rev-${Date.now()}`,
        helpful: 0,
        createdAt: new Date().toISOString(),
      }

      reviews.value.unshift(newReview)
      return newReview
    } finally {
      loading.value = false
    }
  }

  function markHelpful(reviewId: string) {
    const review = reviews.value.find(r => r.id === reviewId)
    if (review) {
      review.helpful++
    }
  }

  function reportReview(reviewId: string) {
    // In a real app, this would call an API
    console.log(`Review ${reviewId} reported`)
  }

  return {
    // State
    reviews,
    loading,
    
    // Computed
    reviewsByProduct,
    
    // Actions
    getReviewsByProduct,
    getReviewStats,
    addReview,
    markHelpful,
    reportReview,
  }
})
