<template>
    <section
        class="rounded-2xl overflow-hidden bg-primary/5 dark:bg-primary/10 border border-primary/10 p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="flex flex-col gap-4 text-center md:text-left">
            <h3 class="text-2xl md:text-3xl font-bold text-[#111318] dark:text-white">Join the <span
                    class="text-primary">ShopEase Club</span></h3>
            <p class="text-gray-600 dark:text-gray-300 max-w-md">Get exclusive access to members-only deals, early
                access to new drops, and free shipping on all orders.</p>
        </div>
        <div class="flex flex-col sm:flex-row w-full md:w-auto gap-3">
            <input
                class="px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-[#1a202c] dark:text-white focus:outline-none focus:border-primary w-full md:w-80"
                placeholder="Enter your email" type="email">
            <button
                class="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg whitespace-nowrap transition-colors">Subscribe</button>
        </div>
    </section>
</template>