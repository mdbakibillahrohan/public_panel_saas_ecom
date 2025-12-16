<template>
    <section class="flex flex-col gap-6">
        <div class="flex items-center justify-between">
            <h2 class="text-[#111318] dark:text-white text-2xl font-bold">New Arrivals</h2>
            <div class="flex gap-2">
                <button
                    class="size-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <span class="material-symbols-outlined text-sm">arrow_back</span>
                </button>
                <button
                    class="size-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div
                class="group flex flex-col gap-3 bg-white dark:bg-[#1a202c] p-3 rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300">
                <div class="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                    <div class="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                        data-alt="Modern wireless headphones on gray background"
                        style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAX_MqsfN0UluQg4860Z-3ePS1Ilnm6is6gPOnRXjvYMd-5qb-Mz_MTrt--FbxF2zbIoZBExMZ7c3zyr6RjctM7tYfINYgR072axm73VY54-DNJZYHkh5z9P-Iy815DJpDlg4gVMMNE6Iz0mWuO0qZqLrxavgDQcn1KfFSJIVNtDjXX_ttIughJYvYuQEEMia6GTqJ1eTXjetjk7RJ_NMA4lAOryTzyDojUx-HY9YA7KOE5Owzn7-0Hpauq7hVZuiw1n1dM1fOjm_hW');">
                    </div>
                    <button
                        class="absolute top-3 right-3 size-8 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-sm flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
                        <span class="material-symbols-outlined text-lg">favorite</span>
                    </button>
                    <div
                        class="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <button
                            class="w-full bg-primary hover:bg-blue-700 text-white font-medium py-2 rounded-lg text-sm shadow-lg">Add
                            to Cart</button>
                    </div>
                </div>
                <div class="px-1 pb-1">
                    <div class="flex justify-between items-start mb-1">
                        <h3 class="font-semibold text-[#111318] dark:text-white line-clamp-1">Premium Wireless
                            Headphones</h3>
                        <div
                            class="flex items-center gap-1 text-xs font-bold text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 px-1.5 py-0.5 rounded">
                            4.8 <span class="material-symbols-outlined text-[10px] filled">star</span>
                        </div>
                    </div>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Audio &amp; Sound</p>
                    <div class="flex items-center gap-2">
                        <span class="text-lg font-bold text-[#111318] dark:text-white">$249.00</span>
                        <span class="text-sm text-gray-400 line-through">$299.00</span>
                    </div>
                </div>
            </div>
            <div
                class="group flex flex-col gap-3 bg-white dark:bg-[#1a202c] p-3 rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300">
                <div class="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                    <div class="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                        data-alt="Smart watch with black band on wrist"
                        style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuB71trGhn_mV1ZcxX-yhtHCPytatt4r1Dl4vetZp_yjbUiU6mmFOy9LWEqQ-xoKOGzWCzyiv4wbrIzEGOIIJWTkCvdHQqF7499q7S1xA5dg0UlTEmVsy8wzDq1XAGyXqdP6ame8quYV5539f33FBtw7GSLDPK8Girg10XOapGsI_Po56yhkF9L2zPDhmNb9qkmXmmi0-ucef2kzJ_Et3iZuUSLEGXa8mYKGYRKs17-M8eLAYv-TZ6rsdMmFUu2TSCvA2T-KVgVm8mmD');">
                    </div>
                    <span
                        class="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">HOT</span>
                    <button
                        class="absolute top-3 right-3 size-8 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-sm flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
                        <span class="material-symbols-outlined text-lg">favorite</span>
                    </button>
                    <div
                        class="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <button
                            class="w-full bg-primary hover:bg-blue-700 text-white font-medium py-2 rounded-lg text-sm shadow-lg">Add
                            to Cart</button>
                    </div>
                </div>
                <div class="px-1 pb-1">
                    <div class="flex justify-between items-start mb-1">
                        <h3 class="font-semibold text-[#111318] dark:text-white line-clamp-1">Smart Fitness Watch</h3>
                        <div
                            class="flex items-center gap-1 text-xs font-bold text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 px-1.5 py-0.5 rounded">
                            4.5 <span class="material-symbols-outlined text-[10px] filled">star</span>
                        </div>
                    </div>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Wearables</p>
                    <div class="flex items-center gap-2">
                        <span class="text-lg font-bold text-[#111318] dark:text-white">$89.99</span>
                    </div>
                </div>
            </div>
            <div
                class="group flex flex-col gap-3 bg-white dark:bg-[#1a202c] p-3 rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300">
                <div class="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                    <div class="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                        data-alt="Minimalist white sneakers on light background"
                        style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxOBWTOyRNJZrRdBg6IiqY4MiAiIKhM0RLJi9WsoOWl5oUc8qTGH4BfK0qt49F_mZaRVofK1zpLLwaq4jie08YfOW0qlKgB6FyHoqylnzXAa4Th87SLFTUipft5p5bOqWYVhUQe1JzQS1trJK8vXIk1RvxlubUnZhs2BJ3PffeIbsSh0DsG4-BA9Oahc2gYfwO23_WaREvx003x7PxirhwgNT5WqC3r8OKB2jk43lTIdoEEulMoh6Xh1f7pAQmCCr_hUOECetNbhQA');">
                    </div>
                    <button
                        class="absolute top-3 right-3 size-8 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-sm flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
                        <span class="material-symbols-outlined text-lg">favorite</span>
                    </button>
                    <div
                        class="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <button
                            class="w-full bg-primary hover:bg-blue-700 text-white font-medium py-2 rounded-lg text-sm shadow-lg">Add
                            to Cart</button>
                    </div>
                </div>
                <div class="px-1 pb-1">
                    <div class="flex justify-between items-start mb-1">
                        <h3 class="font-semibold text-[#111318] dark:text-white line-clamp-1">Urban White Sneakers</h3>
                        <div
                            class="flex items-center gap-1 text-xs font-bold text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 px-1.5 py-0.5 rounded">
                            4.9 <span class="material-symbols-outlined text-[10px] filled">star</span>
                        </div>
                    </div>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Footwear</p>
                    <div class="flex items-center gap-2">
                        <span class="text-lg font-bold text-[#111318] dark:text-white">$120.00</span>
                    </div>
                </div>
            </div>
            <div
                class="group flex flex-col gap-3 bg-white dark:bg-[#1a202c] p-3 rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300">
                <div class="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                    <div class="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                        data-alt="Vintage film camera on wooden table"
                        style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCqHNnpnh2oqlZmK7otdotBVY4lvKCvaqYdi4G3_qJO36wukxwLZFDo5ofSA5QtTG7te6wHEnIkzEV7lnkclhN7SArWzqMLXbGLQNHI324C3DZaKSDZbHrh22vXC7Nln0jBXetFqGwl83AiJX69B_tJSg4HJOdZ7FrofOjCyoEAL9TFcIlZNROAMOPu79g1nbcq2Vnb4-f-X3NiIPJC-xD66SJkNSxpVt4dMV8_mZVWmBooGKepVfAbs4nphD3gzFthEpMi6agoChJs');">
                    </div>
                    <span
                        class="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
                    <button
                        class="absolute top-3 right-3 size-8 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-sm flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
                        <span class="material-symbols-outlined text-lg">favorite</span>
                    </button>
                    <div
                        class="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <button
                            class="w-full bg-primary hover:bg-blue-700 text-white font-medium py-2 rounded-lg text-sm shadow-lg">Add
                            to Cart</button>
                    </div>
                </div>
                <div class="px-1 pb-1">
                    <div class="flex justify-between items-start mb-1">
                        <h3 class="font-semibold text-[#111318] dark:text-white line-clamp-1">Classic Film Camera</h3>
                        <div
                            class="flex items-center gap-1 text-xs font-bold text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 px-1.5 py-0.5 rounded">
                            5.0 <span class="material-symbols-outlined text-[10px] filled">star</span>
                        </div>
                    </div>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Photography</p>
                    <div class="flex items-center gap-2">
                        <span class="text-lg font-bold text-[#111318] dark:text-white">$450.00</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>