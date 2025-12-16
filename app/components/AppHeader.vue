<template>
  <div class="relative">
    <!-- Header -->
    <header class="">
      <div class="mx-auto px-4 container py-2">
        <div class="flex items-center justify-between gap-6">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center space-x-3 group cursor-pointer">
            <div class="relative">
              <div class="absolute inset-0  rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div class="relative bg-linear-to-br p-2 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon name="heroicons:shopping-bag-20-solid" class="h-7 w-7 text-white" />
              </div>
            </div>
            <div>
              <h1 class="text-2xl font-bold bg-linear-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-white transition-all duration-300">
                ShopEase
              </h1>
              <p class="text-xs text-blue-300/70">Your shopping destination</p>
            </div>
          </NuxtLink>

          <!-- Search Bar -->
          <div class="flex-1 max-w-2xl">
            <div class="relative group">
              <UInput
                size="xl"
                placeholder="Search for products, brands and more..."
                icon="i-heroicons-magnifying-glass"
                class="w-full"
                :ui="{
                  base: 'transition-all duration-300'
                  
                }"
              />
              <div class="absolute inset-0 rounded-full bg-linear-to-r from-blue-500/20 to-purple-500/20 -z-10 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <!-- Nav Links -->
          <nav class="flex items-center gap-2">
            <NuxtLink 
              v-for="item in menusItems" 
              :key="item.name"
              href="#" 
              class="px-4 py-2 font-medium rounded-lg hover:bg-white/10 transition-all duration-200 relative group"
            >
              <span class="relative z-10">{{ item.name }}</span>
              <span class="absolute inset-0 bg-linear-to-r from-blue-500/0 via-blue-400/10 to-blue-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </NuxtLink>
            
            
            <!-- Cart Button -->
            <UButton 
              icon="i-heroicons-shopping-cart" 
              variant="ghost" 
              size="lg"
              class="relative   hover:bg-white/10 transition-all duration-200"
              
            >
              <span class="absolute -top-1 -right-1 bg-linear-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg ring-2 ring-slate-900">
                3
              </span>
            </UButton>
            
            <!-- User Button -->
            <UButton 
              icon="i-heroicons-user" 
              variant="ghost" 
              size="lg"
              class=" hover:bg-white/10 transition-all duration-200"
              
            />
          </nav>
        </div>
      </div>
    </header>

    <!-- Subtle glow effect at bottom of header -->
    <div class="h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent"></div>
  </div>
</template>

<script setup lang="ts">


const menusItems = [
  { name: 'Home', link: '/' },
  { name: 'Shop', link: '/shop' },
  { name: 'About Us', link: '/about' },
  { name: 'Contact', link: '/contact' },
];
</script>

<style scoped>
/* Additional custom animations if needed */
</style>
