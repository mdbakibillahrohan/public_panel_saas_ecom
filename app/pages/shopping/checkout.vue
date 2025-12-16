<template>
    <main class="flex-1 w-full max-w-[1440px] mx-auto px-4 lg:px-40 py-8">
        <div class="flex flex-col lg:flex-row gap-12">
            <!-- Left Column: Checkout Forms -->
            <div class="flex-1 flex flex-col gap-8">
                <!-- Breadcrumbs / Stepper -->
                <nav class="flex flex-wrap items-center gap-2 text-sm font-medium">
                    <span class="text-primary flex items-center gap-1">
                        <span class="material-symbols-outlined text-[18px]">check_circle</span>
                        Cart
                    </span>
                    <span class="text-gray-400 material-symbols-outlined text-[16px]">chevron_right</span>
                    <span class="text-[#111318] dark:text-white">Information</span>
                    <span class="text-gray-400 material-symbols-outlined text-[16px]">chevron_right</span>
                    <span class="text-gray-500">Shipping</span>
                    <span class="text-gray-400 material-symbols-outlined text-[16px]">chevron_right</span>
                    <span class="text-gray-500">Payment</span>
                </nav>
                <!-- Step 1: Contact Information -->
                <section class="flex flex-col gap-4">
                    <div class="flex justify-between items-baseline">
                        <h2 class="text-xl font-bold">Contact Information</h2>
                        <a class="text-primary text-sm font-medium hover:underline" href="#">Already have an account?
                            Log in</a>
                    </div>
                    <div class="flex flex-col gap-4">
                        <label class="flex flex-col w-full">
                            <span class="text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Email
                                address</span>
                            <input
                                class="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-white dark:bg-surface-dark h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                placeholder="you@example.com" type="email">
                        </label>
                        <div class="flex items-center gap-2">
                            <input  class="rounded border-gray-300 text-primary focus:ring-primary"
                                id="newsletter" type="checkbox">
                            <label class="text-sm text-gray-600 dark:text-gray-400" for="newsletter">Email me with news
                                and offers</label>
                        </div>
                    </div>
                </section>
                <hr class="border-border-light dark:border-border-dark">
                <!-- Step 2: Shipping Address -->
                <section class="flex flex-col gap-4">
                    <h2 class="text-xl font-bold">Shipping Address</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <label class="flex flex-col">
                            <span class="text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">First name</span>
                            <input
                                class="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-white dark:bg-surface-dark h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                type="text">
                        </label>
                        <label class="flex flex-col">
                            <span class="text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Last name</span>
                            <input
                                class="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-white dark:bg-surface-dark h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                type="text">
                        </label>
                        <label class="flex flex-col md:col-span-2">
                            <span class="text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Address</span>
                            <input
                                class="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-white dark:bg-surface-dark h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                placeholder="Apartment, suite, etc." type="text">
                        </label>
                        <label class="flex flex-col">
                            <span class="text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">City</span>
                            <input
                                class="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-white dark:bg-surface-dark h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                type="text">
                        </label>
                        <label class="flex flex-col">
                            <span class="text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Postal Code</span>
                            <input
                                class="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-white dark:bg-surface-dark h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                type="text">
                        </label>
                        <label class="flex flex-col md:col-span-2">
                            <span class="text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Phone</span>
                            <div class="relative">
                                <input
                                    class="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-white dark:bg-surface-dark h-12 px-4 pl-10 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    type="tel">
                                <div class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <span class="material-symbols-outlined text-[20px]">call</span>
                                </div>
                                <span
                                    class="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 cursor-help"
                                    title="Used for shipping updates">?</span>
                            </div>
                        </label>
                    </div>
                </section>
                <hr class="border-border-light dark:border-border-dark">
                <!-- Step 3: Shipping Method -->
                <section class="flex flex-col gap-4">
                    <h2 class="text-xl font-bold">Shipping Method</h2>
                    <div class="flex flex-col gap-3">
                        <label
                            class="relative flex items-center justify-between p-4 border border-primary bg-primary/5 rounded-lg cursor-pointer transition-all hover:bg-primary/10">
                            <div class="flex items-center gap-3">
                                <input class="text-primary focus:ring-primary w-5 h-5" name="shipping_method"
                                    type="radio">
                                <div class="flex flex-col">
                                    <span class="font-semibold text-sm">Standard Shipping</span>
                                    <span class="text-xs text-gray-500">5-7 Business Days</span>
                                </div>
                            </div>
                            <span class="font-bold">Free</span>
                        </label>
                        <label
                            class="relative flex items-center justify-between p-4 border border-border-light dark:border-border-dark rounded-lg cursor-pointer transition-all hover:border-gray-400 bg-white dark:bg-surface-dark">
                            <div class="flex items-center gap-3">
                                <input class="text-primary focus:ring-primary w-5 h-5" name="shipping_method"
                                    type="radio">
                                <div class="flex flex-col">
                                    <span class="font-semibold text-sm">Express Shipping</span>
                                    <span class="text-xs text-gray-500">1-2 Business Days</span>
                                </div>
                            </div>
                            <span class="font-bold">$15.00</span>
                        </label>
                    </div>
                </section>
                <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                    <a class="flex items-center gap-1 text-sm font-medium text-primary hover:text-blue-700 transition-colors"
                        href="#">
                        <span class="material-symbols-outlined text-[18px]">arrow_back</span>
                        Return to cart
                    </a>
                    <button
                        class="w-full sm:w-auto px-8 h-14 bg-primary hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2">
                        Continue to Payment
                        <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
                    </button>
                </div>
            </div>
            <!-- Right Column: Order Summary (Sticky) -->
            <div class="w-full lg:w-[380px] shrink-0">
                <div class="sticky top-28 flex flex-col gap-6">
                    <!-- Cart Card -->
                    <div
                        class="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark overflow-hidden">
                        <div
                            class="p-6 border-b border-border-light dark:border-border-dark flex justify-between items-center">
                            <h3 class="font-bold text-lg">Order Summary</h3>
                            <span class="text-sm text-gray-500">2 Items</span>
                        </div>
                        <!-- Items List -->
                        <div class="p-6 flex flex-col gap-6 max-h-[300px] overflow-y-auto">
                            <!-- Item 1 -->
                            <div class="flex gap-4">
                                <div
                                    class="relative size-16 bg-gray-100 rounded-md overflow-hidden shrink-0 border border-gray-200">
                                    <img alt="White minimalist watch on a wrist" class="w-full h-full object-cover"
                                        data-alt="Minimalist white wristwatch"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpzPevIYckO2cSPYiykLP6rLMUH0N06XBSJslgEWMX_VUxjf-jcDr5Kz9x0njZ-pTVzqOuI2NRH5DdeqEBYnmDd9Fefv6y_Bw-XGKP3zJxcleQqQ6tHou5JoF8hvas_FS4SYgvP2a2MJ7LIqG3XsXnsAqt4VLRgF9lizGQkb9QmibRA0whQkWzIHVymFtIfZq_riv8QBKguJyrjb_1Ec3Qkr0OEYF2EAXTSEOQ5xEqe2utmS5I_hmS-JqOW6FEAev6ePcze06J4FZa">
                                    <span
                                        class="absolute top-0 right-0 bg-gray-500/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-bl-md">1</span>
                                </div>
                                <div class="flex flex-col flex-1 justify-center">
                                    <h4 class="font-semibold text-sm leading-tight">Minimalist Wristwatch</h4>
                                    <p class="text-xs text-gray-500 mt-1">Strap: Leather</p>
                                </div>
                                <div class="flex flex-col justify-center items-end">
                                    <span class="font-semibold text-sm">$120.00</span>
                                </div>
                            </div>
                            <!-- Item 2 -->
                            <div class="flex gap-4">
                                <div
                                    class="relative size-16 bg-gray-100 rounded-md overflow-hidden shrink-0 border border-gray-200">
                                    <img alt="Modern white over-ear headphones" class="w-full h-full object-cover"
                                        data-alt="White headphones product shot"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpPZl8TvCopSCkpkESLrvRcPM_3pTNqjKtRlR33t-EmnggeIctu_rOXtubFp9oT9whKgHx6NCyA5dneXpYE8pniqT4EmrEZWDqn_c5Yt5F6jhIgVgcZdDoeJ9zHeO8Ab9kKDEL_Xeo32SqAeSzTWoWmU9rjuuu-FqHF6-kbHkUl80LDaBlCsMV0Dp0uErFhsNm2sDV3eh5MKtVRiEclZI42MO72uhq2AVUcciATpwxbwEzdj_nqSh_rrlCD3fPVYsR3BzCxWgazFqT">
                                    <span
                                        class="absolute top-0 right-0 bg-gray-500/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-bl-md">1</span>
                                </div>
                                <div class="flex flex-col flex-1 justify-center">
                                    <h4 class="font-semibold text-sm leading-tight">H-Fi Headphones</h4>
                                    <p class="text-xs text-gray-500 mt-1">Color: Silver</p>
                                </div>
                                <div class="flex flex-col justify-center items-end">
                                    <span class="font-semibold text-sm">$250.00</span>
                                </div>
                            </div>
                        </div>
                        <!-- Discount Code -->
                        <div class="px-6 pb-6 pt-2 border-b border-border-light dark:border-border-dark">
                            <div class="flex gap-2">
                                <input
                                    class="form-input flex-1 rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-10 px-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                    placeholder="Discount code" type="text">
                                <button
                                    class="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 rounded-lg text-sm font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">Apply</button>
                            </div>
                        </div>
                        <!-- Totals -->
                        <div class="p-6 bg-background-light/50 dark:bg-background-dark/30 flex flex-col gap-3">
                            <div class="flex justify-between items-center text-sm">
                                <span class="text-gray-600 dark:text-gray-400">Subtotal</span>
                                <span class="font-semibold">$370.00</span>
                            </div>
                            <div class="flex justify-between items-center text-sm">
                                <span class="text-gray-600 dark:text-gray-400">Shipping</span>
                                <span class="font-semibold text-green-600">Free</span>
                            </div>
                            <div class="flex justify-between items-center text-sm">
                                <span class="text-gray-600 dark:text-gray-400">Taxes</span>
                                <span class="font-semibold">$29.60</span>
                            </div>
                            <div class="h-px bg-border-light dark:border-border-dark my-2"></div>
                            <div class="flex justify-between items-center">
                                <span class="font-bold text-lg">Total</span>
                                <div class="flex items-end gap-1">
                                    <span class="text-xs text-gray-500 mb-1">USD</span>
                                    <span class="font-bold text-2xl text-primary">$399.60</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Trust Signals -->
                    <div class="flex justify-center gap-4 text-gray-400 grayscale opacity-60">
                        <div class="flex items-center gap-1">
                            <span class="material-symbols-outlined text-[18px]">verified_user</span>
                            <span class="text-xs font-medium">SSL Secure</span>
                        </div>
                        <div class="flex items-center gap-1">
                            <span class="material-symbols-outlined text-[18px]">lock</span>
                            <span class="text-xs font-medium">Encrypted Payment</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>