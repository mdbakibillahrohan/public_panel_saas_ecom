import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// Types
export interface Category {
  id: string
  slug: string
  name: string
  description?: string
  icon?: string
  image?: string
  parentId?: string
  productCount: number
  children?: Category[]
}

// Demo Categories
const demoCategories: Category[] = [
  {
    id: 'cat-1',
    slug: 'electronics',
    name: 'Electronics',
    description: 'Latest gadgets and tech',
    icon: 'devices',
    productCount: 156,
    children: [
      {
        id: 'cat-1-1',
        slug: 'audio-headphones',
        name: 'Audio & Headphones',
        parentId: 'cat-1',
        productCount: 45,
        icon: 'headphones',
      },
      {
        id: 'cat-1-2',
        slug: 'computers',
        name: 'Computers & Laptops',
        parentId: 'cat-1',
        productCount: 38,
        icon: 'computer',
      },
      {
        id: 'cat-1-3',
        slug: 'smartphones',
        name: 'Smartphones',
        parentId: 'cat-1',
        productCount: 52,
        icon: 'smartphone',
      },
      {
        id: 'cat-1-4',
        slug: 'gaming',
        name: 'Gaming',
        parentId: 'cat-1',
        productCount: 21,
        icon: 'sports_esports',
      },
    ],
  },
  {
    id: 'cat-2',
    slug: 'fashion',
    name: 'Fashion',
    description: 'Clothing and accessories',
    icon: 'checkroom',
    productCount: 234,
    children: [
      {
        id: 'cat-2-1',
        slug: 'mens-clothing',
        name: "Men's Clothing",
        parentId: 'cat-2',
        productCount: 78,
        icon: 'man',
      },
      {
        id: 'cat-2-2',
        slug: 'womens-clothing',
        name: "Women's Clothing",
        parentId: 'cat-2',
        productCount: 95,
        icon: 'woman',
      },
      {
        id: 'cat-2-3',
        slug: 'footwear',
        name: 'Footwear',
        parentId: 'cat-2',
        productCount: 61,
        icon: 'steps',
      },
    ],
  },
  {
    id: 'cat-3',
    slug: 'accessories',
    name: 'Accessories',
    description: 'Watches, bags, and more',
    icon: 'watch',
    productCount: 189,
    children: [
      {
        id: 'cat-3-1',
        slug: 'watches',
        name: 'Watches',
        parentId: 'cat-3',
        productCount: 42,
        icon: 'watch',
      },
      {
        id: 'cat-3-2',
        slug: 'bags',
        name: 'Bags & Backpacks',
        parentId: 'cat-3',
        productCount: 56,
        icon: 'backpack',
      },
      {
        id: 'cat-3-3',
        slug: 'jewelry',
        name: 'Jewelry',
        parentId: 'cat-3',
        productCount: 91,
        icon: 'diamond',
      },
    ],
  },
  {
    id: 'cat-4',
    slug: 'home-living',
    name: 'Home & Living',
    description: 'Furniture and decor',
    icon: 'home',
    productCount: 145,
    children: [
      {
        id: 'cat-4-1',
        slug: 'office-furniture',
        name: 'Office & Furniture',
        parentId: 'cat-4',
        productCount: 34,
        icon: 'chair',
      },
      {
        id: 'cat-4-2',
        slug: 'kitchen',
        name: 'Kitchen',
        parentId: 'cat-4',
        productCount: 67,
        icon: 'kitchen',
      },
      {
        id: 'cat-4-3',
        slug: 'decor',
        name: 'Decor',
        parentId: 'cat-4',
        productCount: 44,
        icon: 'potted_plant',
      },
    ],
  },
  {
    id: 'cat-5',
    slug: 'photography',
    name: 'Photography',
    description: 'Cameras and equipment',
    icon: 'photo_camera',
    productCount: 78,
  },
  {
    id: 'cat-6',
    slug: 'travel',
    name: 'Travel',
    description: 'Luggage and travel gear',
    icon: 'luggage',
    productCount: 56,
  },
]

export const useCategoriesStore = defineStore('categories', () => {
  // State
  const categories = ref<Category[]>(demoCategories)
  const loading = ref(false)

  // Computed
  const topLevelCategories = computed(() => 
    categories.value.filter(c => !c.parentId)
  )

  const allCategoriesFlat = computed(() => {
    const flat: Category[] = []
    
    function flatten(cats: Category[]) {
      cats.forEach(cat => {
        flat.push(cat)
        if (cat.children) {
          flatten(cat.children)
        }
      })
    }
    
    flatten(categories.value)
    return flat
  })

  // Actions
  function getCategoryBySlug(slug: string): Category | undefined {
    return allCategoriesFlat.value.find(c => c.slug === slug)
  }

  function getCategoryById(id: string): Category | undefined {
    return allCategoriesFlat.value.find(c => c.id === id)
  }

  function getChildCategories(parentId: string): Category[] {
    const parent = getCategoryById(parentId)
    return parent?.children || []
  }

  function getBreadcrumbs(categorySlug: string): Category[] {
    const breadcrumbs: Category[] = []
    let current = getCategoryBySlug(categorySlug)
    
    while (current) {
      breadcrumbs.unshift(current)
      if (current.parentId) {
        current = getCategoryById(current.parentId)
      } else {
        break
      }
    }
    
    return breadcrumbs
  }

  function getParentCategory(categoryId: string): Category | undefined {
    const category = getCategoryById(categoryId)
    if (category?.parentId) {
      return getCategoryById(category.parentId)
    }
    return undefined
  }

  return {
    // State
    categories,
    loading,
    
    // Computed
    topLevelCategories,
    allCategoriesFlat,
    
    // Actions
    getCategoryBySlug,
    getCategoryById,
    getChildCategories,
    getBreadcrumbs,
    getParentCategory,
  }
})
