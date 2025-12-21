import { defineStore } from "pinia"
import { ref, computed, watch } from "vue"

// Types
export interface ThemeColors {
  primary: string
  primaryHover: string
  primaryLight: string
  secondary: string
  accent: string
  success: string
  warning: string
  error: string
  info: string
}

export interface ModeColors {
  background: string
  backgroundAlt: string
  surface: string
  surfaceHover: string
  card: string
  textMain: string
  textSecondary: string
  textMuted: string
  border: string
  borderLight: string
}

export type ColorMode = "light" | "dark"

// Default colors (can be replaced by server-driven colors later)
const defaultColors: ThemeColors = {
  primary: "#3B82F6",
  primaryHover: "#2563EB",
  primaryLight: "#DBEAFE",
  secondary: "#6366F1",
  accent: "#F59E0B",
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#3B82F6",
}

const lightModeColors: ModeColors = {
  background: "#FFFFFF",
  backgroundAlt: "#F9FAFB",
  surface: "#F3F4F6",
  surfaceHover: "#E5E7EB",
  card: "#FFFFFF",
  textMain: "#111318",
  textSecondary: "#636F88",
  textMuted: "#9CA3AF",
  border: "#E5E7EB",
  borderLight: "#F0F2F4",
}

const darkModeColors: ModeColors = {
  background: "#111621",
  backgroundAlt: "#1A202C",
  surface: "#1F2937",
  surfaceHover: "#374151",
  card: "#1A202C",
  textMain: "#FFFFFF",
  textSecondary: "#9CA3AF",
  textMuted: "#6B7280",
  border: "#374151",
  borderLight: "#1F2937",
}

export const useThemeStore = defineStore("theme", () => {
  // State
  const colorMode = ref<ColorMode>("light")
  const colors = ref<ThemeColors>({ ...defaultColors })
  const lightColors = ref<ModeColors>({ ...lightModeColors })
  const darkColors = ref<ModeColors>({ ...darkModeColors })

  // Computed
  const isDark = computed(() => colorMode.value === "dark")

  const currentModeColors = computed<ModeColors>(() => {
    return isDark.value ? darkColors.value : lightColors.value
  })

  // All colors combined for easy access
  const allColors = computed(() => ({
    ...colors.value,
    ...currentModeColors.value,
  }))

  // Actions
  function toggleColorMode() {
    colorMode.value = colorMode.value === "light" ? "dark" : "light"
  }

  function setColorMode(mode: ColorMode) {
    colorMode.value = mode
  }

  function setColors(newColors: Partial<ThemeColors>) {
    colors.value = { ...colors.value, ...newColors }
  }

  function setModeColors(mode: ColorMode, newColors: Partial<ModeColors>) {
    if (mode === "light") {
      lightColors.value = { ...lightColors.value, ...newColors }
    } else {
      darkColors.value = { ...darkColors.value, ...newColors }
    }
  }

  // Initialize from localStorage
  function initFromStorage() {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme-color-mode")
      if (stored === "dark" || stored === "light") {
        colorMode.value = stored
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        colorMode.value = "dark"
      }
    }
  }

  // Watch for changes and update localStorage + document class
  watch(
    colorMode,
    (newMode) => {
      if (typeof window !== "undefined") {
        localStorage.setItem("theme-color-mode", newMode)
        if (newMode === "dark") {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }
      }
    },
    { immediate: true },
  )

  return {
    // State
    colorMode,
    colors,
    lightColors,
    darkColors,

    // Computed
    isDark,
    currentModeColors,
    allColors,

    // Actions
    toggleColorMode,
    setColorMode,
    setColors,
    setModeColors,
    initFromStorage,
  }
})
