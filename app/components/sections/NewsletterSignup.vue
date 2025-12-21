<template>
  <section class="py-12 md:py-20 bg-primary text-primary-foreground">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center space-y-8">
        <div class="space-y-4">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold">
            {{ config.title || 'Join Our Newsletter' }}
          </h2>
          <p class="text-lg md:text-xl text-primary-foreground/90">
            {{ config.description || 'Get exclusive offers, new arrival updates, and special discounts delivered to your inbox' }}
          </p>
        </div>

        <!-- Newsletter Form -->
        <form @submit.prevent="handleSubmit" class="max-w-2xl mx-auto">
          <div class="flex flex-col sm:flex-row gap-3">
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email address"
              required
              class="flex-1 px-6 py-4 rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              class="px-8 py-4 bg-background text-primary font-bold rounded-lg hover:bg-accent transition-all hover:scale-105 shadow-xl whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </div>
          <p class="text-sm text-primary-foreground/70 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from us.
          </p>
        </form>

        <!-- Benefits -->
        <div class="grid md:grid-cols-3 gap-6 pt-8">
          <div v-for="benefit in benefits" :key="benefit.id" class="flex flex-col items-center gap-3">
            <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="benefit.icon" />
              </svg>
            </div>
            <div class="text-center">
              <h3 class="font-semibold mb-1">{{ benefit.title }}</h3>
              <p class="text-sm text-primary-foreground/80">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  config?: Record<string, any>
}>()

const config = computed(() => props.config || {})
const email = ref('')

const benefits = [
  {
    id: 1,
    title: 'Exclusive Offers',
    description: 'Get first access to sales and promotions',
    icon: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7',
  },
  {
    id: 2,
    title: 'New Arrivals',
    description: 'Be first to know about new products',
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
  },
  {
    id: 3,
    title: 'Style Tips',
    description: 'Get curated looks and fashion advice',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
]

function handleSubmit() {
  console.log('[v0] Newsletter signup:', email.value)
  // TODO: Implement newsletter signup
  email.value = ''
}
</script>
