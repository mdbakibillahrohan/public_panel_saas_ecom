<template>
  <section class="py-12 md:py-20">
    <div class="container mx-auto px-4">
      <div class="relative bg-gradient-to-r from-primary to-primary/80 rounded-3xl overflow-hidden">
        <div class="grid lg:grid-cols-2 gap-8 items-center">
          <!-- Content -->
          <div class="p-8 md:p-12 lg:p-16 text-primary-foreground">
            <div class="space-y-6">
              <div class="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                {{ config.badge || 'Limited Time Offer' }}
              </div>
              <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {{ config.title || 'Summer Sale Up to 70% Off' }}
              </h2>
              <p class="text-lg md:text-xl text-primary-foreground/90">
                {{ config.description || 'Discover amazing deals on your favorite products. Limited time only!' }}
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <NuxtLink
                  :to="config.buttonLink || '/products?filter=sale'"
                  class="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-bold hover:bg-white/90 transition-all hover:scale-105 shadow-xl"
                >
                  {{ config.buttonText || 'Shop Sale' }}
                  <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </NuxtLink>
              </div>

              <!-- Countdown Timer -->
              <div class="flex gap-4 pt-4">
                <div v-for="(unit, index) in timeUnits" :key="index" class="text-center">
                  <div class="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[70px]">
                    <div class="text-3xl font-bold">{{ unit.value }}</div>
                    <div class="text-xs uppercase tracking-wide mt-1">{{ unit.label }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Image -->
          <div class="hidden lg:block relative h-full">
            <img
              :src="config.image || '/placeholder.svg?height=600&width=600'"
              alt="Promotional banner"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <!-- Decorative Circles -->
        <div class="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
        <div class="absolute -bottom-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  config?: Record<string, any>
}>()

const config = computed(() => props.config || {})

const days = ref(5)
const hours = ref(12)
const minutes = ref(34)
const seconds = ref(56)

const timeUnits = computed(() => [
  { value: days.value.toString().padStart(2, '0'), label: 'Days' },
  { value: hours.value.toString().padStart(2, '0'), label: 'Hours' },
  { value: minutes.value.toString().padStart(2, '0'), label: 'Minutes' },
  { value: seconds.value.toString().padStart(2, '0'), label: 'Seconds' },
])

let timer: NodeJS.Timeout

onMounted(() => {
  timer = setInterval(() => {
    if (seconds.value > 0) {
      seconds.value--
    } else {
      seconds.value = 59
      if (minutes.value > 0) {
        minutes.value--
      } else {
        minutes.value = 59
        if (hours.value > 0) {
          hours.value--
        } else {
          hours.value = 23
          if (days.value > 0) {
            days.value--
          }
        }
      }
    }
  }, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>
