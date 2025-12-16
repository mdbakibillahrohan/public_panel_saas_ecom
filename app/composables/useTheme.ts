import { computed } from 'vue'
import { useThemeStore } from '~/stores/theme'

export function useTheme() {
  const store = useThemeStore()

  // Easy access to common values
  const isDark = computed(() => store.isDark)
  const colors = computed(() => store.allColors)
  const primary = computed(() => store.colors.primary)
  
  // Current mode colors shortcuts
  const bg = computed(() => store.currentModeColors.background)
  const bgAlt = computed(() => store.currentModeColors.backgroundAlt)
  const surface = computed(() => store.currentModeColors.surface)
  const card = computed(() => store.currentModeColors.card)
  const textMain = computed(() => store.currentModeColors.textMain)
  const textSecondary = computed(() => store.currentModeColors.textSecondary)
  const border = computed(() => store.currentModeColors.border)

  // Toggle function
  function toggleTheme() {
    store.toggleColorMode()
  }

  // Inline style helper for dynamic theming
  function themeStyle(lightStyle: Record<string, string>, darkStyle: Record<string, string>) {
    return computed(() => store.isDark ? darkStyle : lightStyle)
  }

  return {
    // Store access
    store,
    
    // Computed helpers
    isDark,
    colors,
    primary,
    bg,
    bgAlt,
    surface,
    card,
    textMain,
    textSecondary,
    border,
    
    // Actions
    toggleTheme,
    themeStyle,
  }
}
