<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <!-- Logo & Title -->
      <div class="text-center">
        <NuxtLink to="/" class="inline-flex items-center gap-3 group">
          <div class="bg-primary p-2 rounded-xl shadow-lg group-hover:scale-105 transition-transform">
            <Icon name="heroicons:shopping-bag-20-solid" class="h-8 w-8 text-white" />
          </div>
          <span class="text-2xl font-bold text-gray-900 dark:text-white">ShopEase</span>
        </NuxtLink>
        <h2 class="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
          Create your account
        </h2>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Join thousands of happy shoppers today
        </p>
      </div>

      <!-- Form Card -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8">
        <form @submit.prevent="handleSubmit" class="space-y-5">
          <!-- Name Fields -->
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="firstName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                First name
              </label>
              <UInput
                id="firstName"
                v-model="form.firstName"
                placeholder="John"
                size="lg"
                required
                :disabled="loading"
              />
            </div>
            <div>
              <label for="lastName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Last name
              </label>
              <UInput
                id="lastName"
                v-model="form.lastName"
                placeholder="Doe"
                size="lg"
                required
                :disabled="loading"
              />
            </div>
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email address
            </label>
            <UInput
              id="email"
              v-model="form.email"
              type="email"
              placeholder="you@example.com"
              icon="i-heroicons-envelope"
              size="lg"
              required
              :disabled="loading"
            />
          </div>

          <!-- Password -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Password
            </label>
            <UInput
              id="password"
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="At least 8 characters"
              icon="i-heroicons-lock-closed"
              size="lg"
              required
              :disabled="loading"
              :ui="{ trailing: { padding: { lg: 'pe-12' } } }"
            >
              <template #trailing>
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <span class="material-symbols-outlined text-xl">
                    {{ showPassword ? 'visibility_off' : 'visibility' }}
                  </span>
                </button>
              </template>
            </UInput>
            <!-- Password Strength -->
            <div class="mt-2 flex gap-1">
              <div 
                v-for="i in 4" 
                :key="i"
                :class="[
                  'h-1 flex-1 rounded-full transition-colors',
                  i <= passwordStrength ? strengthColors[passwordStrength - 1] : 'bg-gray-200 dark:bg-gray-700'
                ]"
              />
            </div>
            <p 
              v-if="form.password" 
              :class="['text-xs mt-1', strengthTextColors[passwordStrength - 1]]"
            >
              {{ strengthTexts[passwordStrength - 1] || 'Enter a password' }}
            </p>
          </div>

          <!-- Confirm Password -->
          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Confirm password
            </label>
            <UInput
              id="confirmPassword"
              v-model="form.confirmPassword"
              type="password"
              placeholder="Repeat your password"
              icon="i-heroicons-lock-closed"
              size="lg"
              required
              :disabled="loading"
            />
            <p 
              v-if="form.confirmPassword && form.password !== form.confirmPassword" 
              class="text-xs text-red-500 mt-1"
            >
              Passwords do not match
            </p>
          </div>

          <!-- Terms -->
          <div class="flex items-start">
            <input
              id="terms"
              v-model="form.acceptTerms"
              type="checkbox"
              class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded mt-0.5"
              required
            />
            <label for="terms" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
              I agree to the 
              <NuxtLink to="/terms-condition" class="text-primary hover:underline">Terms of Service</NuxtLink>
              and 
              <NuxtLink to="/privacy-policy" class="text-primary hover:underline">Privacy Policy</NuxtLink>
            </label>
          </div>

          <!-- Error Message -->
          <div v-if="error" class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
            <p class="text-sm text-red-600 dark:text-red-400">{{ error }}</p>
          </div>

          <!-- Submit Button -->
          <UButton
            type="submit"
            color="primary"
            size="lg"
            block
            :loading="loading"
            :disabled="!isFormValid"
          >
            <span class="material-symbols-outlined text-xl mr-2">person_add</span>
            Create account
          </UButton>
        </form>

        <!-- Divider -->
        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-200 dark:border-gray-700"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-4 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                Or sign up with
              </span>
            </div>
          </div>
        </div>

        <!-- Social Login -->
        <div class="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            class="flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Google</span>
          </button>
          <button
            type="button"
            class="flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <svg class="w-5 h-5 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
            </svg>
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Apple</span>
          </button>
        </div>
      </div>

      <!-- Sign In Link -->
      <p class="text-center text-sm text-gray-600 dark:text-gray-400">
        Already have an account?
        <NuxtLink 
          to="/auth/sign-in" 
          class="font-medium text-primary hover:text-blue-700"
        >
          Sign in instead
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useUserStore } from '~/stores/user'
import { useUIStore } from '~/stores/ui'

// SEO
definePageMeta({
  layout: false,
})

useSeoMeta({
  title: 'Sign Up - ShopEase',
  description: 'Create your ShopEase account and start shopping',
})

const userStore = useUserStore()
const uiStore = useUIStore()
const router = useRouter()

const loading = ref(false)
const error = ref<string | null>(null)
const showPassword = ref(false)

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false,
})

const strengthColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500']
const strengthTextColors = ['text-red-500', 'text-orange-500', 'text-yellow-500', 'text-green-500']
const strengthTexts = ['Weak', 'Fair', 'Good', 'Strong']

const passwordStrength = computed(() => {
  const password = form.password
  if (!password) return 0
  
  let strength = 0
  if (password.length >= 8) strength++
  if (/[A-Z]/.test(password)) strength++
  if (/[0-9]/.test(password)) strength++
  if (/[^A-Za-z0-9]/.test(password)) strength++
  
  return strength
})

const isFormValid = computed(() => {
  return (
    form.firstName &&
    form.lastName &&
    form.email &&
    form.password.length >= 8 &&
    form.password === form.confirmPassword &&
    form.acceptTerms
  )
})

async function handleSubmit() {
  if (!isFormValid.value) return

  loading.value = true
  error.value = null

  try {
    const success = await userStore.register({
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      password: form.password,
    })
    
    if (success) {
      uiStore.showSuccess('Account created!', 'Welcome to ShopEase!')
      router.push('/')
    } else {
      error.value = 'Registration failed. Please try again.'
    }
  } catch (e) {
    error.value = 'An error occurred. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>
