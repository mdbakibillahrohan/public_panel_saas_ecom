<template>
    <section
        class="w-full relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#195de6] to-[#6366f1] shadow-xl animate-fade-in">
        <div class="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl"></div>
        <div
            class="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 py-8 md:px-12 gap-6 text-white">
            <div class="flex flex-col gap-2 text-center md:text-left">
                <div class="flex items-center justify-center md:justify-start gap-2 mb-1">
                    <span
                        class="bg-white/20 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm border border-white/20 uppercase tracking-wide">Limited
                        Offer</span>
                    <div class="flex items-center gap-1 text-yellow-300">
                        <span class="material-symbols-outlined text-sm filled">star</span>
                        <span class="text-xs font-bold">Top Rated Sale</span>
                    </div>
                </div>
                <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">
                    Flash Sale Madness!
                </h2>
                <p class="text-blue-100 text-base md:text-lg font-medium max-w-lg">
                    Grab your favorites before they're gone. Enjoy <span class="font-bold text-yellow-300">extra 20%
                        OFF</span> on all clearance items.
                </p>
            </div>
            <div class="flex items-center gap-4">
                <div class="hidden md:flex gap-2 text-center mr-4">
                    <div class="bg-white/10 backdrop-blur rounded p-2 min-w-[50px] border border-white/10">
                        <div class="font-bold text-lg leading-none">05</div>
                        <div class="text-[10px] text-blue-200 uppercase">Hrs</div>
                    </div>
                    <div class="bg-white/10 backdrop-blur rounded p-2 min-w-[50px] border border-white/10">
                        <div class="font-bold text-lg leading-none">42</div>
                        <div class="text-[10px] text-blue-200 uppercase">Min</div>
                    </div>
                    <div class="bg-white/10 backdrop-blur rounded p-2 min-w-[50px] border border-white/10">
                        <div class="font-bold text-lg leading-none">18</div>
                        <div class="text-[10px] text-blue-200 uppercase">Sec</div>
                    </div>
                </div>
                <NuxtLink to="/products"
                    class="bg-white text-[#195de6] hover:bg-gray-50 font-bold py-3 px-8 rounded-xl shadow-lg transition-transform hover:scale-105 active:scale-95 whitespace-nowrap">
                    Shop Sale
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// Component logic here
</script>

<style scoped>
/* Additional custom styles if needed */
</style>