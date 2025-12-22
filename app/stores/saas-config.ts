import { defineStore } from "pinia"
import { ref, computed } from "vue"

// ============================================
// TYPE DEFINITIONS FOR SAAS CONFIGURATION
// ============================================

// Header template options
export type HeaderTemplate =
  | "modern-gradient" // Current header with gradient
  | "minimal-clean" // Simple minimal header
  | "classic-elegant" // Traditional elegant header
  | "bold-centered" // Centered logo with bold styling
  | "transparent-overlay" // Transparent header for hero overlays

// Footer template options
export type FooterTemplate =
  | "standard-four-column" // Current 4-column layout
  | "minimal-centered" // Simple centered footer
  | "newsletter-focused" // Footer with large newsletter signup
  | "mega-footer" // Large detailed footer with many sections
  | "compact-single-row" // Minimal single row footer

// Homepage section types
export type HomepageSectionType =
  | "hero-banner"
  | "flash-sales"
  | "categories"
  | "new-arrivals"
  | "best-sellers"
  | "join-club"
  | "featured-products"
  | "testimonials"
  | "brands-showcase"
  | "instagram-feed"
  | "blog-preview"
  | "video-banner"
  | "promotional-banner"
  | "trending-products"
  | "newsletter-signup"
  | "custom-content"

// Homepage section configuration
export interface HomepageSection {
  id: string
  type: HomepageSectionType
  enabled: boolean
  order: number
  config: Record<string, any> // Section-specific configuration
}

// Product card layout options
export type ProductCardLayout =
  | "standard-card" // Standard card with image, title, price
  | "hover-overlay" // Overlay appears on hover
  | "compact-list" // Compact list view
  | "detailed-card" // More details shown upfront
  | "minimal-modern" // Very minimal design

// Product page layout options
export type ProductPageLayout =
  | "sidebar-left" // Image gallery on left, details on right
  | "sidebar-right" // Details on left, images on right
  | "centered-full" // Centered layout with full width
  | "tabs-detailed" // Tab-based detailed view
  | "sticky-sidebar" // Sticky purchase sidebar

// Typography settings
export interface TypographyConfig {
  headingFont: string
  bodyFont: string
  headingWeight: number
  bodyWeight: number
  headingScale: number // multiplier for heading sizes
  bodySize: number // base body font size in px
  lineHeight: number // base line height
}

// Button style settings
export interface ButtonConfig {
  style: "rounded" | "sharp" | "pill" | "soft-rounded"
  size: "sm" | "md" | "lg"
  variant: "solid" | "outline" | "ghost" | "gradient"
  shadow: "none" | "sm" | "md" | "lg" | "xl"
}

// Spacing configuration
export interface SpacingConfig {
  sectionGap: number // Gap between sections (in rem)
  containerPadding: number // Container padding (in rem)
  cardGap: number // Gap between cards (in rem)
  componentSpacing: number // Internal component spacing (in rem)
}

// Animation settings
export interface AnimationConfig {
  enabled: boolean
  speed: "slow" | "normal" | "fast"
  hoverEffects: boolean
  pageTransitions: boolean
}

// Store information
export interface StoreInfo {
  name: string
  tagline: string
  logo: string
  favicon: string
  description: string
  email: string
  phone: string
  address: string
  socialLinks: {
    facebook?: string
    instagram?: string
    twitter?: string
    youtube?: string
    pinterest?: string
    tiktok?: string
  }
}

// Navigation menu item
export interface NavMenuItem {
  id: string
  label: string
  url: string
  enabled: boolean
  order: number
  children?: NavMenuItem[]
}

// Complete SaaS Configuration
export interface SaasConfig {
  // Store basics
  storeInfo: StoreInfo

  // Layout templates
  headerTemplate: HeaderTemplate
  footerTemplate: FooterTemplate
  productCardLayout: ProductCardLayout
  productPageLayout: ProductPageLayout

  // Homepage sections
  homepageSections: HomepageSection[]

  // Navigation
  primaryNav: NavMenuItem[]
  footerNav: {
    column1: NavMenuItem[]
    column2: NavMenuItem[]
    column3: NavMenuItem[]
    column4: NavMenuItem[]
  }

  // Styling
  typography: TypographyConfig
  buttons: ButtonConfig
  spacing: SpacingConfig
  animations: AnimationConfig

  // SEO
  seo: {
    metaTitle: string
    metaDescription: string
    keywords: string[]
    ogImage: string
  }
}

// ============================================
// DEFAULT CONFIGURATION
// ============================================

const defaultConfig: SaasConfig = {
  storeInfo: {
    name: "ShopEase",
    tagline: "Your shopping destination",
    logo: "/placeholder-logo.svg",
    favicon: "/icon.svg",
    description: "Your one-stop destination for all things lifestyle",
    email: "support@shopease.com",
    phone: "+1 (555) 123-4567",
    address: "123 Commerce Street, NY 10001",
    socialLinks: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
  },

  headerTemplate: "minimal-clean",
  footerTemplate: "standard-four-column",
  productCardLayout: "standard-card",
  productPageLayout: "sidebar-left",

  homepageSections: [
    // { id: "flash-sales", type: "flash-sales", enabled: true, order: 1, config: {} },
    { id: "hero-banner", type: "hero-banner", enabled: true, order: 2, config: {} },
    { id: "categories", type: "categories", enabled: true, order: 3, config: {} },
    { id: "new-arrivals", type: "new-arrivals", enabled: true, order: 4, config: {} },
    { id: "featured-products", type: "featured-products", enabled: true, order: 5, config: {} },
    { id: "trending-products", type: "trending-products", enabled: true, order: 6, config: {} },
    { id: "brands-showcase", type: "brands-showcase", enabled: true, order: 7, config: {} },
    { id: "testimonials", type: "testimonials", enabled: true, order: 8, config: {} },
    { id: "join-club", type: "join-club", enabled: true, order: 9, config: {} },
    { id: "best-sellers", type: "best-sellers", enabled: true, order: 10, config: {} },
  ],

  primaryNav: [
    { id: "home", label: "Home", url: "/", enabled: true, order: 1 },
    { id: "shop", label: "Shop", url: "/products", enabled: true, order: 2 },
    { id: "about", label: "About", url: "/about", enabled: true, order: 3 },
    { id: "contact", label: "Contact", url: "/contact", enabled: true, order: 4 },
  ],

  footerNav: {
    column1: [
      { id: "new-arrivals", label: "New Arrivals", url: "/products?filter=new", enabled: true, order: 1 },
      { id: "best-sellers", label: "Best Sellers", url: "/products?filter=bestsellers", enabled: true, order: 2 },
      { id: "deals", label: "Deals & Coupons", url: "/products?filter=deals", enabled: true, order: 3 },
      { id: "gift-cards", label: "Gift Cards", url: "/gift-cards", enabled: true, order: 4 },
    ],
    column2: [
      { id: "help", label: "Help Center", url: "/help", enabled: true, order: 1 },
      { id: "orders", label: "Order Status", url: "/account", enabled: true, order: 2 },
      { id: "returns", label: "Returns & Exchanges", url: "/shipping-return-policy", enabled: true, order: 3 },
      { id: "contact", label: "Contact Us", url: "/contact", enabled: true, order: 4 },
    ],
    column3: [
      { id: "privacy", label: "Privacy Policy", url: "/privacy-policy", enabled: true, order: 1 },
      { id: "terms", label: "Terms of Service", url: "/terms-condition", enabled: true, order: 2 },
      { id: "cookies", label: "Cookie Policy", url: "/privacy-policy#cookies", enabled: true, order: 3 },
    ],
    column4: [],
  },

  typography: {
    headingFont: "Inter, sans-serif",
    bodyFont: "Inter, sans-serif",
    headingWeight: 700,
    bodyWeight: 400,
    headingScale: 1,
    bodySize: 16,
    lineHeight: 1.6,
  },

  buttons: {
    style: "rounded",
    size: "md",
    variant: "solid",
    shadow: "sm",
  },

  spacing: {
    sectionGap: 4,
    containerPadding: 1,
    cardGap: 1.5,
    componentSpacing: 1,
  },

  animations: {
    enabled: true,
    speed: "normal",
    hoverEffects: true,
    pageTransitions: true,
  },

  seo: {
    metaTitle: "ShopEase - Your Shopping Destination",
    metaDescription: "Discover quality products with fast delivery",
    keywords: ["ecommerce", "shopping", "online store"],
    ogImage: "/og-image.jpg",
  },
}

// ============================================
// PINIA STORE
// ============================================

export const useSaasConfigStore = defineStore("saas-config", () => {
  // State
  const config = ref<SaasConfig>(JSON.parse(JSON.stringify(defaultConfig)))
  const isLoading = ref(false)
  const lastSyncedAt = ref<Date | null>(null)

  // Computed - Easy access to specific config sections
  const storeInfo = computed(() => config.value.storeInfo)
  const headerTemplate = computed(() => config.value.headerTemplate)
  const footerTemplate = computed(() => config.value.footerTemplate)
  const productCardLayout = computed(() => config.value.productCardLayout)
  const productPageLayout = computed(() => config.value.productPageLayout)

  const enabledHomepageSections = computed(() =>
    config.value.homepageSections.filter((section) => section.enabled).sort((a, b) => a.order - b.order),
  )

  const enabledPrimaryNav = computed(() =>
    config.value.primaryNav.filter((item) => item.enabled).sort((a, b) => a.order - b.order),
  )

  const typography = computed(() => config.value.typography)
  const buttons = computed(() => config.value.buttons)
  const spacing = computed(() => config.value.spacing)
  const animations = computed(() => config.value.animations)

  // Actions - Update specific parts of config
  function setStoreInfo(info: Partial<StoreInfo>) {
    config.value.storeInfo = { ...config.value.storeInfo, ...info }
  }

  function setHeaderTemplate(template: HeaderTemplate) {
    config.value.headerTemplate = template
  }

  function setFooterTemplate(template: FooterTemplate) {
    config.value.footerTemplate = template
  }

  function setProductCardLayout(layout: ProductCardLayout) {
    config.value.productCardLayout = layout
  }

  function setProductPageLayout(layout: ProductPageLayout) {
    config.value.productPageLayout = layout
  }

  function updateHomepageSection(sectionId: string, updates: Partial<HomepageSection>) {
    const index = config.value.homepageSections.findIndex((s) => s.id === sectionId)
    if (index !== -1) {
      config.value.homepageSections[index] = {
        ...config.value.homepageSections[index],
        ...updates,
      } as HomepageSection
    }
  }

  function addHomepageSection(section: HomepageSection) {
    config.value.homepageSections.push(section)
  }

  function removeHomepageSection(sectionId: string) {
    config.value.homepageSections = config.value.homepageSections.filter((s) => s.id !== sectionId)
  }

  function reorderHomepageSections(sectionIds: string[]) {
    sectionIds.forEach((id, index) => {
      const section = config.value.homepageSections.find((s) => s.id === id)
      if (section) {
        section.order = index + 1
      }
    })
  }

  function updatePrimaryNav(items: NavMenuItem[]) {
    config.value.primaryNav = items
  }

  function updateFooterNav(column: keyof SaasConfig["footerNav"], items: NavMenuItem[]) {
    config.value.footerNav[column] = items
  }

  function setTypography(typography: Partial<TypographyConfig>) {
    config.value.typography = { ...config.value.typography, ...typography }
  }

  function setButtons(buttons: Partial<ButtonConfig>) {
    config.value.buttons = { ...config.value.buttons, ...buttons }
  }

  function setSpacing(spacing: Partial<SpacingConfig>) {
    config.value.spacing = { ...config.value.spacing, ...spacing }
  }

  function setAnimations(animations: Partial<AnimationConfig>) {
    config.value.animations = { ...config.value.animations, ...animations }
  }

  function setSEO(seo: Partial<SaasConfig["seo"]>) {
    config.value.seo = { ...config.value.seo, ...seo }
  }

  // Complete config replacement (when loading from backend)
  function setCompleteConfig(newConfig: Partial<SaasConfig>) {
    config.value = { ...config.value, ...newConfig }
    lastSyncedAt.value = new Date()
  }

  // Simulate loading from backend (you'll replace this with actual API call)
  async function loadConfigFromBackend() {
    isLoading.value = true
    try {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/saas-config');
      // const data = await response.json();
      // setCompleteConfig(data);

      // For now, just simulate delay
      await new Promise((resolve) => setTimeout(resolve, 500))
      console.log("[v0] SaaS config loaded from backend")
    } catch (error) {
      console.error("[v0] Failed to load SaaS config:", error)
    } finally {
      isLoading.value = false
    }
  }

  // Save config to backend (you'll implement this)
  async function saveConfigToBackend() {
    try {
      // TODO: Replace with actual API call
      // await fetch('/api/saas-config', {
      //   method: 'POST',
      //   body: JSON.stringify(config.value),
      // });

      console.log("[v0] SaaS config saved to backend:", config.value)
      lastSyncedAt.value = new Date()
    } catch (error) {
      console.error("[v0] Failed to save SaaS config:", error)
    }
  }

  // Reset to defaults
  function resetToDefaults() {
    config.value = JSON.parse(JSON.stringify(defaultConfig))
  }

  return {
    // State
    config,
    isLoading,
    lastSyncedAt,

    // Computed
    storeInfo,
    headerTemplate,
    footerTemplate,
    productCardLayout,
    productPageLayout,
    enabledHomepageSections,
    enabledPrimaryNav,
    typography,
    buttons,
    spacing,
    animations,

    // Actions
    setStoreInfo,
    setHeaderTemplate,
    setFooterTemplate,
    setProductCardLayout,
    setProductPageLayout,
    updateHomepageSection,
    addHomepageSection,
    removeHomepageSection,
    reorderHomepageSections,
    updatePrimaryNav,
    updateFooterNav,
    setTypography,
    setButtons,
    setSpacing,
    setAnimations,
    setSEO,
    setCompleteConfig,
    loadConfigFromBackend,
    saveConfigToBackend,
    resetToDefaults,
  }
})
