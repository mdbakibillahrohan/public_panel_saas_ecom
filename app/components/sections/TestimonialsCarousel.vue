<template>
  <section class="py-12 md:py-20">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {{ config.title || 'What Our Customers Say' }}
        </h2>
        <p class="text-muted-foreground text-lg">
          {{ config.description || 'Real stories from real customers' }}
        </p>
      </div>

      <div class="relative max-w-6xl mx-auto">
        <!-- Testimonials -->
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="bg-background border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <!-- Stars -->
            <div class="flex gap-1 mb-4">
              <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>

            <!-- Quote -->
            <p class="text-muted-foreground mb-6 leading-relaxed">
              "{{ testimonial.quote }}"
            </p>

            <!-- Author -->
            <div class="flex items-center gap-4">
              <img
                :src="testimonial.avatar"
                :alt="testimonial.name"
                class="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div class="font-semibold">{{ testimonial.name }}</div>
                <div class="text-sm text-muted-foreground">{{ testimonial.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  config?: Record<string, any>
}>()

const config = computed(() => props.config || {})

const testimonials = [
  {
    id: 1,
    quote: 'Amazing quality and fast shipping! The products exceeded my expectations. Will definitely shop here again.',
    name: 'Sarah Johnson',
    role: 'Verified Customer',
    avatar: '/placeholder.svg?height=100&width=100',
  },
  {
    id: 2,
    quote: 'Best online shopping experience Ive had. Great customer service and the website is so easy to use.',
    name: 'Michael Chen',
    role: 'Verified Customer',
    avatar: '/placeholder.svg?height=100&width=100',
  },
  {
    id: 3,
    quote: 'Love the variety of products and the quality is top-notch. The prices are very reasonable too!',
    name: 'Emma Davis',
    role: 'Verified Customer',
    avatar: '/placeholder.svg?height=100&width=100',
  },
]
</script>
