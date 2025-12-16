<template>
    <div class="flex flex-col">
        <main class="grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <!-- Left Column: Cart Items -->
                <div class="lg:col-span-8 flex flex-col gap-6">
                    <!-- Heading -->
                    <div class="flex flex-col gap-2 border-b border-gray-200 dark:border-gray-700 pb-6">
                        <h1 class="text-3xl sm:text-4xl font-black text-[#111318] dark:text-white tracking-tight">
                            Shopping
                            Cart</h1>
                        <p class="text-[#636f88] dark:text-gray-400 text-base">You have 2 items in your cart</p>
                    </div>
                    <!-- Cart Table/List -->
                    <div
                        class="bg-white dark:bg-[#1a202c] rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                        <div
                            class="hidden sm:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 text-sm font-medium text-gray-500 dark:text-gray-400">
                            <div class="col-span-6">Product</div>
                            <div class="col-span-2 text-center">Price</div>
                            <div class="col-span-2 text-center">Quantity</div>
                            <div class="col-span-2 text-right">Total</div>
                        </div>
                        <div class="divide-y divide-gray-100 dark:divide-gray-700">
                            <!-- Item 1 -->
                            <div class="p-6 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center group">
                                <div class="sm:col-span-6 flex gap-4">
                                    <div
                                        class="relative shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 dark:border-gray-700">
                                        <img alt="Silver over-ear headphones on white background"
                                            class="w-full h-full object-cover"
                                            data-alt="Silver over-ear headphones on white background"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj3dvnZNgTTCNoOY4BlEvVuikTqpuH_AWcNnU_jtKiSEk3_1gEgLFPavzJ6dY8V-nnaD_fP78yAi-sAVk-CfJHfqeDmxVU4HoyONpEFaHT4N065JRsxOeKeKR7zdvz0SDvaCXm3mDSfQyf3pSUJ8pUSY6srUFrnIWnRkzjMNQQL4qUNieUYGiuij4EcgD6eHMLqrcaxwrK_aDST7gruhDxQrEPcHPsLu2rAtd7CeZXt2xS05sLgmU7yT-6sYH5bjgGUmBrsFASkh8m">
                                    </div>
                                    <div class="flex flex-col justify-center gap-1">
                                        <h3 class="font-bold text-[#111318] dark:text-white text-base leading-tight">
                                            Noise-Canceling Headphones</h3>
                                        <p class="text-sm text-[#636f88] dark:text-gray-400">Color: Silver</p>
                                        <button
                                            class="text-sm font-medium text-red-500 hover:text-red-700 text-left mt-2 flex items-center gap-1 w-fit transition-colors">
                                            <span class="material-symbols-outlined text-[16px]">delete</span> Remove
                                        </button>
                                    </div>
                                </div>
                                <div class="sm:col-span-2 text-center">
                                    <span class="sm:hidden text-xs text-gray-500 mr-2">Price:</span>
                                    <span class="font-medium text-[#111318] dark:text-white">$299.00</span>
                                </div>
                                <div class="sm:col-span-2 flex justify-center">
                                    <div
                                        class="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg h-9 bg-white dark:bg-gray-800">
                                        <button
                                            class="px-2.5 h-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-l-lg transition-colors">
                                            <span class="material-symbols-outlined text-[16px]">remove</span>
                                        </button>
                                        <input
                                            class="w-10 text-center border-0 p-0 text-sm font-medium text-[#111318] dark:text-white bg-transparent focus:ring-0"
                                            type="text" value="1">
                                        <button
                                            class="px-2.5 h-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-r-lg transition-colors">
                                            <span class="material-symbols-outlined text-[16px]">add</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="sm:col-span-2 text-right">
                                    <span class="sm:hidden text-xs text-gray-500 mr-2">Total:</span>
                                    <span class="font-bold text-[#111318] dark:text-white text-lg">$299.00</span>
                                </div>
                            </div>
                            <!-- Item 2 -->
                            <div class="p-6 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center group">
                                <div class="sm:col-span-6 flex gap-4">
                                    <div
                                        class="relative shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 dark:border-gray-700">
                                        <img alt="Modern black ergonomic office chair"
                                            class="w-full h-full object-cover"
                                            data-alt="Modern black ergonomic office chair"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRoLaQ6Nk-wCDAAlR-7zdPUtvGCdbxICGxH_RaizBDfXv_aML8xnb2NgUHQN4_jqc7G13_tMR-LG5YdgOSiLbdV1yuQhNAF7PiQ_lV8wNdO_sfWG27rLQyKiZ-vYWqFV5jOK_YMbgU_Yi2C5twO00cZnmndfR6i4n8NuKjXdazeJluxp4UiL-j8AP3x71popwPWw3n7h_f2CSEGQ338rSVdhC7PpHPd8pG19YnsoZh48zx5wp-nF1yF2MtI_gC516N-jVsRI0HQZo2">
                                    </div>
                                    <div class="flex flex-col justify-center gap-1">
                                        <h3 class="font-bold text-[#111318] dark:text-white text-base leading-tight">
                                            Ergonomic Office Chair</h3>
                                        <p class="text-sm text-[#636f88] dark:text-gray-400">Color: Black Mesh</p>
                                        <button
                                            class="text-sm font-medium text-red-500 hover:text-red-700 text-left mt-2 flex items-center gap-1 w-fit transition-colors">
                                            <span class="material-symbols-outlined text-[16px]">delete</span> Remove
                                        </button>
                                    </div>
                                </div>
                                <div class="sm:col-span-2 text-center">
                                    <span class="sm:hidden text-xs text-gray-500 mr-2">Price:</span>
                                    <span class="font-medium text-[#111318] dark:text-white">$150.00</span>
                                </div>
                                <div class="sm:col-span-2 flex justify-center">
                                    <div
                                        class="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg h-9 bg-white dark:bg-gray-800">
                                        <button
                                            class="px-2.5 h-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-l-lg transition-colors">
                                            <span class="material-symbols-outlined text-[16px]">remove</span>
                                        </button>
                                        <input
                                            class="w-10 text-center border-0 p-0 text-sm font-medium text-[#111318] dark:text-white bg-transparent focus:ring-0"
                                            type="text" value="2">
                                        <button
                                            class="px-2.5 h-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-r-lg transition-colors">
                                            <span class="material-symbols-outlined text-[16px]">add</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="sm:col-span-2 text-right">
                                    <span class="sm:hidden text-xs text-gray-500 mr-2">Total:</span>
                                    <span class="font-bold text-[#111318] dark:text-white text-lg">$300.00</span>
                                </div>
                            </div>
                        </div>
                        <div
                            class="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
                            <a class="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                                href="#">
                                <span class="material-symbols-outlined text-[18px]">arrow_back</span>
                                Continue Shopping
                            </a>
                        </div>
                    </div>
                </div>
                <!-- Right Column: Order Summary -->
                <div class="lg:col-span-4 sticky top-28">
                    <div
                        class="bg-white dark:bg-[#1a202c] rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 flex flex-col gap-6">
                        <h2 class="text-xl font-bold text-[#111318] dark:text-white">Order Summary</h2>
                        <!-- Cost Breakdown -->
                        <div class="flex flex-col gap-3 pb-6 border-b border-gray-100 dark:border-gray-700">
                            <div class="flex justify-between items-center text-sm">
                                <span class="text-[#636f88] dark:text-gray-400">Subtotal</span>
                                <span class="font-medium text-[#111318] dark:text-white">$599.00</span>
                            </div>
                            <div class="flex justify-between items-center text-sm">
                                <span class="text-[#636f88] dark:text-gray-400">Shipping estimate</span>
                                <span class="font-medium text-[#111318] dark:text-white">$15.00</span>
                            </div>
                            <div class="flex justify-between items-center text-sm">
                                <span class="text-[#636f88] dark:text-gray-400">Tax estimate</span>
                                <span class="font-medium text-[#111318] dark:text-white">$47.92</span>
                            </div>
                        </div>
                        <!-- Total -->
                        <div class="flex justify-between items-end">
                            <span class="text-base font-semibold text-[#111318] dark:text-white">Order Total</span>
                            <span class="text-2xl font-bold text-[#111318] dark:text-white">$661.92</span>
                        </div>
                        <!-- Discount Code -->
                        <div class="flex flex-col gap-2">
                            <label class="text-sm font-medium text-[#111318] dark:text-white" for="promo">Discount
                                Code</label>
                            <div class="flex gap-2">
                                <input
                                    class="block w-full rounded-lg border-0 py-2 text-[#111318] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-gray-600"
                                    id="promo" placeholder="Enter code" type="text">
                                <button
                                    class="bg-gray-100 dark:bg-gray-700 text-[#111318] dark:text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">Apply</button>
                            </div>
                        </div>
                        <!-- Checkout Button -->
                        <button
                            class="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3.5 px-4 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group">
                            Proceed to Checkout
                            <span
                                class="material-symbols-outlined group-hover:translate-x-1 transition-transform text-[20px]">arrow_forward</span>
                        </button>
                        <!-- Trust Badges -->
                        <div class="flex justify-center gap-4 text-gray-400 dark:text-gray-500 pt-2">
                            <span class="material-symbols-outlined" title="Secure Payment">lock</span>
                            <span class="material-symbols-outlined" title="Credit Card">credit_card</span>
                            <span class="material-symbols-outlined" title="Support">support_agent</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>

</template>

<style scoped>

</style>