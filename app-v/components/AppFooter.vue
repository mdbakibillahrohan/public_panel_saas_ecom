<template>
    <footer
        class="bg-white dark:bg-[#1a202c] border-t border-gray-200 dark:border-gray-800 pt-12 pb-8 px-4 sm:px-10 mt-10">
        <div class="w-full max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="col-span-1 md:col-span-1 flex flex-col gap-4">
                <div class="flex items-center gap-2 text-[#111318] dark:text-white">
                    <div class="size-6 flex items-center justify-center text-primary">
                        <span class="material-symbols-outlined text-2xl">storefront</span>
                    </div>
                    <h2 class="text-[#111318] dark:text-white text-lg font-bold">ShopEase</h2>
                </div>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                    Your one-stop destination for all things lifestyle. Quality products, fast delivery, and exceptional
                    support.
                </p>
                <div class="flex gap-4 mt-2">
                    <a class="text-gray-400 hover:text-primary transition-colors" href="#"><span
                            class="material-symbols-outlined">public</span></a>
                    <a class="text-gray-400 hover:text-primary transition-colors" href="#"><span
                            class="material-symbols-outlined">chat_bubble</span></a>
                    <a class="text-gray-400 hover:text-primary transition-colors" href="#"><span
                            class="material-symbols-outlined">mail</span></a>
                </div>
            </div>
            <div>
                <h3 class="font-bold text-[#111318] dark:text-white mb-4">Shop</h3>
                <ul class="flex flex-col gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <li><a class="hover:text-primary transition-colors" href="#">New Arrivals</a></li>
                    <li><a class="hover:text-primary transition-colors" href="#">Best Sellers</a></li>
                    <li><a class="hover:text-primary transition-colors" href="#">Deals &amp; Coupons</a></li>
                    <li><a class="hover:text-primary transition-colors" href="#">Gift Cards</a></li>
                </ul>
            </div>
            <div>
                <h3 class="font-bold text-[#111318] dark:text-white mb-4">Support</h3>
                <ul class="flex flex-col gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <li><a class="hover:text-primary transition-colors" href="#">Help Center</a></li>
                    <li><a class="hover:text-primary transition-colors" href="#">Order Status</a></li>
                    <li><a class="hover:text-primary transition-colors" href="#">Returns &amp; Exchanges</a></li>
                    <li><a class="hover:text-primary transition-colors" href="#">Contact Us</a></li>
                </ul>
            </div>
            <div>
                <h3 class="font-bold text-[#111318] dark:text-white mb-4">Legal</h3>
                <ul class="flex flex-col gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <li><a class="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                    <li><a class="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
                    <li><a class="hover:text-primary transition-colors" href="#">Cookie Policy</a></li>
                </ul>
            </div>
        </div>
        <div
            class="w-full max-w-[1280px] mx-auto mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
            <p>© 2024 ShopEase Inc. All rights reserved.</p>
            <div class="flex gap-4">
                <span class="hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer">English (US)</span>
                <span class="hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer">USD</span>
            </div>
        </div>
    </footer>
</template>