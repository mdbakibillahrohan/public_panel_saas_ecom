<template>
  <section class="flex flex-col gap-6">
    <div class="flex items-center justify-between">
      <h2 class="text-[#111318] dark:text-white text-2xl font-bold">Shop by Category</h2>
      <a class="text-primary font-medium hover:underline text-sm flex items-center gap-1" href="#">View All <span
          class="material-symbols-outlined text-sm">arrow_forward</span></a>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <a class="group flex flex-col items-center gap-3 p-4 rounded-xl bg-white dark:bg-[#1a202c] hover:shadow-md transition-all border border-transparent hover:border-gray-100 dark:hover:border-gray-700"
        href="#">
        <div
          class="w-20 h-20 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
          <span class="material-symbols-outlined !text-4xl">devices</span>
        </div>
        <span class="font-medium text-sm text-center">Electronics</span>
      </a>
      <a class="group flex flex-col items-center gap-3 p-4 rounded-xl bg-white dark:bg-[#1a202c] hover:shadow-md transition-all border border-transparent hover:border-gray-100 dark:hover:border-gray-700"
        href="#">
        <div
          class="w-20 h-20 rounded-full bg-pink-50 dark:bg-pink-900/20 flex items-center justify-center text-pink-500 group-hover:scale-110 transition-transform">
          <span class="material-symbols-outlined !text-4xl">styler</span>
        </div>
        <span class="font-medium text-sm text-center">Fashion</span>
      </a>
      <a class="group flex flex-col items-center gap-3 p-4 rounded-xl bg-white dark:bg-[#1a202c] hover:shadow-md transition-all border border-transparent hover:border-gray-100 dark:hover:border-gray-700"
        href="#">
        <div
          class="w-20 h-20 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
          <span class="material-symbols-outlined !text-4xl">chair</span>
        </div>
        <span class="font-medium text-sm text-center">Home</span>
      </a>
      <a class="group flex flex-col items-center gap-3 p-4 rounded-xl bg-white dark:bg-[#1a202c] hover:shadow-md transition-all border border-transparent hover:border-gray-100 dark:hover:border-gray-700"
        href="#">
        <div
          class="w-20 h-20 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
          <span class="material-symbols-outlined !text-4xl">face</span>
        </div>
        <span class="font-medium text-sm text-center">Beauty</span>
      </a>
      <a class="group flex flex-col items-center gap-3 p-4 rounded-xl bg-white dark:bg-[#1a202c] hover:shadow-md transition-all border border-transparent hover:border-gray-100 dark:hover:border-gray-700"
        href="#">
        <div
          class="w-20 h-20 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform">
          <span class="material-symbols-outlined !text-4xl">toys</span>
        </div>
        <span class="font-medium text-sm text-center">Toys</span>
      </a>
      <a class="group flex flex-col items-center gap-3 p-4 rounded-xl bg-white dark:bg-[#1a202c] hover:shadow-md transition-all border border-transparent hover:border-gray-100 dark:hover:border-gray-700"
        href="#">
        <div
          class="w-20 h-20 rounded-full bg-yellow-50 dark:bg-yellow-900/20 flex items-center justify-center text-yellow-500 group-hover:scale-110 transition-transform">
          <span class="material-symbols-outlined !text-4xl">fitness_center</span>
        </div>
        <span class="font-medium text-sm text-center">Sports</span>
      </a>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style></style>
