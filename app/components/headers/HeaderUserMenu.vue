<script setup lang="ts">
import { useRouter } from "next/navigation"
import { useUserStore } from "~/stores/user"
import { useThemeStore } from "~/stores/theme"

const userStore = useUserStore()
const themeStore = useThemeStore()
const router = useRouter()

const isAuthenticated = computed(() => userStore.isAuthenticated)
const initials = computed(() => userStore.initials)
const primaryColor = computed(() => themeStore.colors.primary)
const primaryHover = computed(() => themeStore.colors.primaryHover)

const userMenuItems = computed(() => [
  [
    {
      label: userStore.fullName,
      slot: "account",
      disabled: true,
    },
  ],
  [
    {
      label: "My Account",
      icon: "i-heroicons-user",
      click: () => router.push("/account"),
    },
    {
      label: "My Orders",
      icon: "i-heroicons-shopping-bag",
      click: () => router.push("/account"),
    },
    {
      label: "Wishlist",
      icon: "i-heroicons-heart",
      click: () => router.push("/shopping/wishlist"),
    },
  ],
  [
    {
      label: "Sign Out",
      icon: "i-heroicons-arrow-right-on-rectangle",
      click: () => {
        userStore.logout()
        router.push("/")
      },
    },
  ],
])
</script>