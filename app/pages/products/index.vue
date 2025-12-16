<template>
    <main class="flex-1 max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
        <!-- Breadcrumbs -->
        <nav aria-label="Breadcrumb" class="flex mb-6">
            <ol class="inline-flex items-center space-x-1 md:space-x-2">
                <li class="inline-flex items-center">
                    <a class="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary"
                        href="#">Home</a>
                </li>
                <li>
                    <div class="flex items-center">
                        <span
                            class="material-symbols-outlined text-text-secondary-light dark:text-gray-600 text-lg mx-1">chevron_right</span>
                        <a class="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary"
                            href="#">Electronics</a>
                    </div>
                </li>
                <li aria-current="page">
                    <div class="flex items-center">
                        <span
                            class="material-symbols-outlined text-text-secondary-light dark:text-gray-600 text-lg mx-1">chevron_right</span>
                        <span class="text-sm font-medium text-text-main-light dark:text-white">Audio &amp;
                            Headphones</span>
                    </div>
                </li>
            </ol>
        </nav>
        <div class="flex flex-col lg:flex-row gap-8">
            <!-- Sidebar Filters -->
            <aside class="w-full lg:w-64 shrink-0 space-y-8 hidden lg:block">
                <!-- Filter Header -->
                <div class="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-800">
                    <h3 class="font-bold text-lg text-text-main-light dark:text-white">Filters</h3>
                    <button class="text-sm text-primary font-medium hover:underline">Clear All</button>
                </div>
                <!-- Categories -->
                <div class="space-y-4">
                    <h4
                        class="font-semibold text-text-main-light dark:text-white flex justify-between items-center group cursor-pointer">
                        Category
                        <span
                            class="material-symbols-outlined text-gray-400 group-hover:text-primary text-sm">expand_less</span>
                    </h4>
                    <div class="space-y-2">
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input
                                class="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary bg-white dark:bg-card-dark dark:border-gray-700"
                                type="checkbox">
                            <span
                                class="text-sm text-text-secondary-light dark:text-text-secondary-dark group-hover:text-primary transition-colors">Over-Ear
                                Headphones</span>
                            <span class="text-xs text-gray-400 ml-auto">(120)</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input
                                class="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary bg-white dark:bg-card-dark dark:border-gray-700"
                                type="checkbox">
                            <span
                                class="text-sm text-text-secondary-light dark:text-text-secondary-dark group-hover:text-primary transition-colors">Earbuds</span>
                            <span class="text-xs text-gray-400 ml-auto">(85)</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input
                                class="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary bg-white dark:bg-card-dark dark:border-gray-700"
                                type="checkbox">
                            <span
                                class="text-sm text-text-secondary-light dark:text-text-secondary-dark group-hover:text-primary transition-colors">Noise
                                Cancelling</span>
                            <span class="text-xs text-gray-400 ml-auto">(42)</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input
                                class="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary bg-white dark:bg-card-dark dark:border-gray-700"
                                type="checkbox">
                            <span
                                class="text-sm text-text-secondary-light dark:text-text-secondary-dark group-hover:text-primary transition-colors">Gaming
                                Headsets</span>
                            <span class="text-xs text-gray-400 ml-auto">(30)</span>
                        </label>
                    </div>
                </div>
                <!-- Price Range -->
                <div class="space-y-4">
                    <h4 class="font-semibold text-text-main-light dark:text-white flex justify-between items-center">
                        Price Range
                        <span class="material-symbols-outlined text-gray-400 text-sm">expand_less</span>
                    </h4>
                    <div class="flex items-center gap-2">
                        <div class="relative flex-1">
                            <span class="absolute left-3 top-2.5 text-gray-400 text-sm">$</span>
                            <input
                                class="w-full pl-6 pr-2 py-2 text-sm border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-card-dark focus:ring-primary focus:border-primary"
                                placeholder="Min" type="number">
                        </div>
                        <span class="text-gray-400">-</span>
                        <div class="relative flex-1">
                            <span class="absolute left-3 top-2.5 text-gray-400 text-sm">$</span>
                            <input
                                class="w-full pl-6 pr-2 py-2 text-sm border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-card-dark focus:ring-primary focus:border-primary"
                                placeholder="Max" type="number">
                        </div>
                    </div>
                    <!-- Range Slider Simulation -->
                    <div class="relative pt-1">
                        <div class="overflow-hidden h-1.5 text-xs flex rounded bg-gray-200 dark:bg-gray-700">
                            <div class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-transparent"
                                style="width: 30%"></div>
                            <div class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
                                style="width: 40%"></div>
                            <div class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-transparent"
                                style="width: 30%"></div>
                        </div>
                        <div class="absolute top-0 w-3 h-3 bg-white border-2 border-primary rounded-full shadow cursor-pointer mt-0.5"
                            style="left: 30%;"></div>
                        <div class="absolute top-0 w-3 h-3 bg-white border-2 border-primary rounded-full shadow cursor-pointer mt-0.5"
                            style="left: 70%;"></div>
                    </div>
                </div>
                <!-- Brands -->
                <div class="space-y-4">
                    <h4 class="font-semibold text-text-main-light dark:text-white flex justify-between items-center">
                        Brands
                        <span class="material-symbols-outlined text-gray-400 text-sm">expand_less</span>
                    </h4>
                    <div class="relative">
                        <input
                            class="w-full pl-8 pr-3 py-1.5 text-sm border-gray-200 dark:border-gray-700 rounded-lg bg-background-light dark:bg-background-dark focus:ring-primary focus:border-primary"
                            placeholder="Search brands..." type="text">
                        <span
                            class="material-symbols-outlined text-gray-400 absolute left-2.5 top-2 text-base">search</span>
                    </div>
                    <div class="space-y-2 max-h-40 overflow-y-auto custom-scrollbar pr-2">
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input 
                                class="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary bg-white dark:bg-card-dark dark:border-gray-700"
                                type="checkbox">
                            <span
                                class="text-sm text-text-secondary-light dark:text-text-secondary-dark group-hover:text-primary">Sony</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input
                                class="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary bg-white dark:bg-card-dark dark:border-gray-700"
                                type="checkbox">
                            <span
                                class="text-sm text-text-secondary-light dark:text-text-secondary-dark group-hover:text-primary">Bose</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input
                                class="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary bg-white dark:bg-card-dark dark:border-gray-700"
                                type="checkbox">
                            <span
                                class="text-sm text-text-secondary-light dark:text-text-secondary-dark group-hover:text-primary">Sennheiser</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input
                                class="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary bg-white dark:bg-card-dark dark:border-gray-700"
                                type="checkbox">
                            <span
                                class="text-sm text-text-secondary-light dark:text-text-secondary-dark group-hover:text-primary">Apple</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer group">
                            <input
                                class="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary bg-white dark:bg-card-dark dark:border-gray-700"
                                type="checkbox">
                            <span
                                class="text-sm text-text-secondary-light dark:text-text-secondary-dark group-hover:text-primary">JBL</span>
                        </label>
                    </div>
                </div>
                <!-- Rating -->
                <div class="space-y-3">
                    <h4 class="font-semibold text-text-main-light dark:text-white flex justify-between items-center">
                        Rating
                        <span class="material-symbols-outlined text-gray-400 text-sm">expand_less</span>
                    </h4>
                    <div class="space-y-2">
                        <label class="flex items-center gap-2 cursor-pointer group">
                            <input
                                class="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary bg-white dark:bg-card-dark dark:border-gray-700"
                                type="checkbox">
                            <div class="flex text-yellow-400">
                                <span class="material-symbols-outlined text-lg fill-current">star</span>
                                <span class="material-symbols-outlined text-lg fill-current">star</span>
                                <span class="material-symbols-outlined text-lg fill-current">star</span>
                                <span class="material-symbols-outlined text-lg fill-current">star</span>
                                <span class="material-symbols-outlined text-lg fill-current">star</span>
                            </div>
                            <span class="text-sm text-text-secondary-light dark:text-text-secondary-dark">&amp;
                                Up</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer group">
                            <input
                                class="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary bg-white dark:bg-card-dark dark:border-gray-700"
                                type="checkbox">
                            <div class="flex text-yellow-400">
                                <span class="material-symbols-outlined text-lg fill-current">star</span>
                                <span class="material-symbols-outlined text-lg fill-current">star</span>
                                <span class="material-symbols-outlined text-lg fill-current">star</span>
                                <span class="material-symbols-outlined text-lg fill-current">star</span>
                                <span
                                    class="material-symbols-outlined text-gray-300 dark:text-gray-600 text-lg">star</span>
                            </div>
                            <span class="text-sm text-text-secondary-light dark:text-text-secondary-dark">&amp;
                                Up</span>
                        </label>
                    </div>
                </div>
            </aside>
            <!-- Product Grid Area -->
            <div class="flex-1 flex flex-col min-w-0">
                <!-- Header & Toolbar -->
                <div class="mb-6">
                    <h1 class="text-3xl font-bold text-text-main-light dark:text-white mb-2">Wireless Headphones</h1>
                    <p class="text-text-secondary-light dark:text-text-secondary-dark text-sm mb-6">Experience freedom
                        with our top-rated wireless audio devices.</p>
                    <div
                        class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-white dark:bg-card-dark rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                        <div class="text-sm text-text-secondary-light dark:text-text-secondary-dark font-medium">
                            Showing <span class="text-text-main-light dark:text-white font-bold">1-12</span> of <span
                                class="text-text-main-light dark:text-white font-bold">128</span> results
                        </div>
                        <div class="flex items-center gap-3 overflow-x-auto pb-1 sm:pb-0">
                            <div class="flex items-center gap-2 shrink-0">
                                <span class="text-sm text-text-secondary-light dark:text-gray-400">Sort by:</span>
                                <select
                                    class="form-select text-sm py-1.5 pl-3 pr-8 border-none bg-background-light dark:bg-background-dark rounded-lg text-text-main-light dark:text-white focus:ring-2 focus:ring-primary cursor-pointer font-medium">
                                    <option>Most Popular</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Newest Arrivals</option>
                                </select>
                            </div>
                            <div class="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-1 hidden sm:block"></div>
                            <!-- View Toggle Buttons -->
                            <div class="flex bg-background-light dark:bg-background-dark rounded-lg p-1 shrink-0">
                                <button class="p-1 rounded bg-white dark:bg-card-dark text-primary shadow-sm">
                                    <span class="material-symbols-outlined text-xl">grid_view</span>
                                </button>
                                <button
                                    class="p-1 rounded text-text-secondary-light dark:text-gray-500 hover:text-text-main-light dark:hover:text-white transition-colors">
                                    <span class="material-symbols-outlined text-xl">view_list</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- Mobile Filter Toggle -->
                    <button
                        class="lg:hidden mt-4 w-full flex items-center justify-center gap-2 py-2.5 bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-800 rounded-lg text-sm font-medium text-text-main-light dark:text-white shadow-sm">
                        <span class="material-symbols-outlined">filter_list</span>
                        Show Filters
                    </button>
                </div>
                <!-- Active Filters Chips (Optional visual enhancement) -->
                <div class="flex flex-wrap gap-2 mb-6">
                    <div
                        class="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
                        Brand: Sony
                        <button class="hover:text-primary/70"><span
                                class="material-symbols-outlined text-base align-middle">close</span></button>
                    </div>
                    <div
                        class="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
                        Price: $100 - $300
                        <button class="hover:text-primary/70"><span
                                class="material-symbols-outlined text-base align-middle">close</span></button>
                    </div>
                    <button
                        class="text-sm text-text-secondary-light hover:text-primary underline decoration-dotted underline-offset-2">Clear
                        all</button>
                </div>
                <!-- Products Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    <!-- Product Card 1 -->
                    <div
                        class="group bg-white dark:bg-card-dark rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col relative">
                        <!-- Badge -->
                        <div
                            class="absolute top-3 left-3 z-10 bg-black/80 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                            Best Seller
                        </div>
                        <!-- Favorite Button -->
                        <button
                            class="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-white/80 dark:bg-black/50 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 backdrop-blur-sm">
                            <span class="material-symbols-outlined text-xl">favorite</span>
                        </button>
                        <div class="aspect-square bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
                            <img alt="Silver over-ear wireless headphones on a clean background"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                data-alt="Silver over-ear wireless headphones on a clean background"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi2uEdQ0iM74BumPq-8ctPLKq7we7_3I5fB0n4GDqYN7M2y9R0NR37ojm8UxpTAasKCdftLIf4venovHt3WhSByVafcKWeKpcg2BlRFe7xmxcwV7d_9UTqYVJi7Q41_M39Tqvf8XaAdU9edLSTiL_y5ooZBUUnMUfnzqpdKOqEPBsXwRBKwSchcLHsxEatqWFIK0R4ESri6IGtS3Uzy32SaoyUUyq1f_P0o9yFK02FtAq8V7LtGqxqAMGBXXJ_O5egLmxL9tVBAdL9">
                            <!-- Quick View Overlay -->
                            <div
                                class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button
                                    class="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">Quick
                                    View</button>
                            </div>
                        </div>
                        <div class="p-4 flex flex-col flex-1">
                            <div class="text-xs font-medium text-gray-500 mb-1">Sony</div>
                            <h3
                                class="text-base font-bold text-text-main-light dark:text-white leading-tight mb-2 group-hover:text-primary transition-colors">
                                WH-1000XM4 Noise Canceling Headphones</h3>
                            <div class="flex items-center gap-1 mb-3">
                                <div class="flex text-yellow-400 text-sm">
                                    <span class="material-symbols-outlined fill-current text-sm w-4">star</span>
                                    <span class="material-symbols-outlined fill-current text-sm w-4">star</span>
                                    <span class="material-symbols-outlined fill-current text-sm w-4">star</span>
                                    <span class="material-symbols-outlined fill-current text-sm w-4">star</span>
                                    <span class="material-symbols-outlined fill-current text-sm w-4">star_half</span>
                                </div>
                                <span class="text-xs text-gray-400">(2,140)</span>
                            </div>
                            <div
                                class="mt-auto flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
                                <div class="flex flex-col">
                                    <span class="text-lg font-bold text-primary">$298.00</span>
                                    <span class="text-xs text-gray-400 line-through">$348.00</span>
                                </div>
                                <button
                                    class="w-10 h-10 flex items-center justify-center rounded-lg bg-background-light dark:bg-gray-700 text-text-main-light dark:text-white hover:bg-primary hover:text-white transition-colors">
                                    <span class="material-symbols-outlined text-xl">add_shopping_cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- Product Card 2 -->
                    <div
                        class="group bg-white dark:bg-card-dark rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col relative">
                        <div
                            class="absolute top-3 left-3 z-10 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                            Sale -20%
                        </div>
                        <button
                            class="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-white/80 dark:bg-black/50 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 backdrop-blur-sm">
                            <span class="material-symbols-outlined text-xl">favorite</span>
                        </button>
                        <div class="aspect-square bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
                            <img alt="Black wireless over-ear headphones floating"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                data-alt="Black wireless over-ear headphones floating"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxX4Cx6ZSRcFE7IhDvPTU_Hh42La8cw_Jf8-V6WGIFzcWoGOLBtJGJWbmmaQJS8JVT4ANPuj-icOLbPBb1YM-S8anSk0GDZ6qMq3xUHQQG9B7SYGcjV7rwMLixAkTXgkvP0h57qmdYBpKsK_h6Mg1uVz8F--x71VdyEvb4bkXLJkoYisXZ9zWNk-6-M3LCZWIIRHMGAUUCNzNVjUwLXkxjXs6U9sPGLl10uK2fAzFOK5tWOzOIcuGzk9-KtwN7Vi8kYSzIbs2CcpxF">
                            <div
                                class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button
                                    class="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">Quick
                                    View</button>
                            </div>
                        </div>
                        <div class="p-4 flex flex-col flex-1">
                            <div class="text-xs font-medium text-gray-500 mb-1">Beats</div>
                            <h3
                                class="text-base font-bold text-text-main-light dark:text-white leading-tight mb-2 group-hover:text-primary transition-colors">
                                Beats Studio3 Wireless</h3>
                            <div class="flex items-center gap-1 mb-3">
                                <div class="flex text-yellow-400 text-sm">
                                    <span class="material-symbols-outlined fill-current text-sm w-4">star</span>
                                    <span class="material-symbols-outlined fill-current text-sm w-4">star</span>
                                    <span class="material-symbols-outlined fill-current text-sm w-4">star</span>
                                    <span class="material-symbols-outlined fill-current text-sm w-4">star</span>
                                    <span class="material-symbols-outlined text-gray-300 text-sm w-4">star</span>
                                </div>
                                <span class="text-xs text-gray-400">(856)</span>
                            </div>
                            <div
                                class="mt-auto flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
                                <div class="flex flex-col">
                                    <span class="text-lg font-bold text-primary">$169.95</span>
                                    <span class="text-xs text-gray-400 line-through">$199.95</span>
                                </div>
                                <button
                                    class="w-10 h-10 flex items-center justify-center rounded-lg bg-background-light dark:bg-gray-700 text-text-main-light dark:text-white hover:bg-primary hover:text-white transition-colors">
                                    <span class="material-symbols-outlined text-xl">add_shopping_cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- Product Card 3 -->
                    <div
                        class="group bg-white dark:bg-card-dark rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col relative">
                        <button
                            class="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-white/80 dark:bg-black/50 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 backdrop-blur-sm">
                            <span class="material-symbols-outlined text-xl">favorite</span>
                        </button>
                        <div class="aspect-square bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
                            <img alt="Modern sleek white earbuds case with earphones"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                data-alt="Modern sleek white earbuds case with earphones"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-pILzXmMczqAokDGxJyilGIvDVg64yU9QrH33BkAChpcpmDKAycbBXDtpESn1sWYCkU2ec9BZSFzhCqO8i1o037LZH5esb_1fEFA6pGPEPtHnCbJE_vOJ8tXb3ud5hGhFsFvraTMDeMN4eOpxpNhukUc9dft0ues3ZFDY2Bb1catzRHZbWhO-xDsD95y9BP0j3mon6gmRhiMIt6ZdPZbcJNtQponwzzDhNhLfWp_Hd6WNct3KXvgHNJr2MLQOy2egol5ENtcYwbz_">
                            <div
                                class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button
                                    class="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">Quick
                                    View</button>
                            </div>
                        </div>
                        <div class="p-4 flex flex-col flex-1">
                            <div class="text-xs font-medium text-gray-500 mb-1">Apple</div>
                            <h3
                                class="text-base font-bold text-text-main-light dark:text-white leading-tight mb-2 group-hover:text-primary transition-colors">
                                AirPods Pro (2nd Generation)</h3>
                            <div class="flex items-center gap-1 mb-3">
                                <div class="flex text-yellow-400 text-sm">
                                    <span class="material-symbols-outlined fill-current text-sm w-4">star</span>
                                    <span class="material-symbols-outlined fill-current text-sm w-4">star</span>
                                    <span class="material-symbols-outlined fill-current text-sm w-4">star</span>
                                    <span class="material-symbols-outlined fill-current text-sm w-4">star</span>
                                    <span class="material-symbols-outlined fill-current text-sm w-4">star_half</span>
                                </div>
                                <span class="text-xs text-gray-400">(4,032)</span>
                            </div>
                            <div
                                class="mt-auto flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
                                <div class="flex flex-col">
                                    <span class="text-lg font-bold text-primary">$249.00</span>
                                </div>
                                <button
                                    class="w-10 h-10 flex items-center justify-center rounded-lg bg-background-light dark:bg-gray-700 text-text-main-light dark:text-white hover:bg-primary hover:text-white transition-colors">
                                    <span class="material-symbols-outlined text-xl">add_shopping_cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- Product Card 4 -->
                    <div
                        class="group bg-white dark:bg-card-dark rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col relative">
                        <button
                            class="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-white/80 dark:bg-black/50 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 backdrop-blur-sm">
                            <span class="material-symbols-outlined text-xl">favorite</span>
                        </button>
                        <div class="aspect-square bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
                            <img alt="Pair of sleek black truly wireless earbuds"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                data-alt="Pair of sleek black truly wireless earbuds"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCau2H7RytevbocHQe-prcATooqNIzX4DzfsP8Zo3kStXLvV-ns05RUoHhnZiRk-yVj43khwD0nIfzSJCHAyxdAkhDVtdqwPowCrYtztDcCSk0rjWBdKuZ9DrmplWG9hXMT2gSmQqlPz2w7bBVQcZqV8gf65wzImxjEQRD6XBWKg-QJg9M9d75L8FM1Tyh9UEFlYrKBQe_R61IsTxyTMB1vz8a-wv9Z5zvC9ij_18Lb33PCnzMV_-_cB2V2G0mH4niFC9r2HQJTnyo5">
                            <div
                                class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button
                                    class="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">Quick
                                    View</button>
                            </div>
                        </div>
                        <div class="p-4 flex flex-col flex-1">
                            <div class="text-xs font-medium text-gray-500 mb-1">Sennheiser</div>
                            <h3
                                class="text-base font-bold text-text-main-light dark:text-white leading-tight mb-2 group-hover:text-primary transition-colors">
                                Momentum True Wireless 3</h3>
                            <div class="flex items-center gap-1 mb-3">
                                <div class="flex text-yellow-400 text-sm">
                                    <span class="material-symbols-outlined fill-current text-sm w-4">star</span>
                                    <span class="material-symbols-outlined fill-current text-sm w-4">star</span>
                                    <span class="material-symbols-outlined fill-current text-sm w-4">star</span>
                                    <span class="material-symbols-outlined fill-current text-sm w-4">star</span>
                                    <span class="material-symbols-outlined text-gray-300 text-sm w-4">star</span>
                                </div>
                                <span class="text-xs text-gray-400">(412)</span>
                            </div>
                            <div
                                class="mt-auto flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
                                <div class="flex flex-col">
                                    <span class="text-lg font-bold text-primary">$199.95</span>
                                </div>
                                <button
                                    class="w-10 h-10 flex items-center justify-center rounded-lg bg-background-light dark:bg-gray-700 text-text-main-light dark:text-white hover:bg-primary hover:text-white transition-colors">
                                    <span class="material-symbols-outlined text-xl">add_shopping_cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- Product Card 5 -->
                    <div
                        class="group bg-white dark:bg-card-dark rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col relative">
                        <button
                            class="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-white/80 dark:bg-black/50 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 backdrop-blur-sm">
                            <span class="material-symbols-outlined text-xl">favorite</span>
                        </button>
                        <div class="aspect-square bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
                            <img alt="White wireless headphones on a yellow background"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                data-alt="White wireless headphones on a yellow background"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwi3uyLNU1SMMIDQKl868XS4m3sxy4IuQOQM07CdesJ9CIvBDrvEzTD7uijFe7GT9tp2eDpfLqqWwz0ozMsuMK1HYDSJf77GjNAVgRjDX6M1kcn1YjnIDTlBvhegoFYZnLpxNI72mdYvcYyoPCWm56Gli7i5N33YNItFvp655ymkAo2oEOzuVH9a6p_TTZSOEv3tpGLWKgVEs8aMkqnNE5KyQiGCx49WvEXz5j-FnV32_xGi_BqZ2Prg4flmqlRnK0x7MYF5oIlKEL">
                            <div
                                class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button
                                    class="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">Quick
                                    View</button>
                            </div>
                        </div>
                        <div class="p-4 flex flex-col flex-1">
                            <div class="text-xs font-medium text-gray-500 mb-1">JBL</div>
                            <h3
                                class="text-base font-bold text-text-main-light dark:text-white leading-tight mb-2 group-hover:text-primary transition-colors">
                                Live 660NC Wireless Over-Ear</h3>
                            <div class="flex items-center gap-1 mb-3">
                                <div class="flex text-yellow-400 text-sm">
                                    <span class="material-symbols-outlined fill-current text-sm w-4">star</span>
                                    <span class="material-symbols-outlined fill-current text-sm w-4">star</span>
                                    <span class="material-symbols-outlined fill-current text-sm w-4">star</span>
                                    <span class="material-symbols-outlined fill-current text-sm w-4">star_half</span>
                                    <span class="material-symbols-outlined text-gray-300 text-sm w-4">star</span>
                                </div>
                                <span class="text-xs text-gray-400">(1,250)</span>
                            </div>
                            <div
                                class="mt-auto flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
                                <div class="flex flex-col">
                                    <span class="text-lg font-bold text-primary">$149.95</span>
                                    <span class="text-xs text-gray-400 line-through">$199.95</span>
                                </div>
                                <button
                                    class="w-10 h-10 flex items-center justify-center rounded-lg bg-background-light dark:bg-gray-700 text-text-main-light dark:text-white hover:bg-primary hover:text-white transition-colors">
                                    <span class="material-symbols-outlined text-xl">add_shopping_cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- Product Card 6 -->
                    <div
                        class="group bg-white dark:bg-card-dark rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col relative">
                        <div
                            class="absolute top-3 left-3 z-10 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                            New Arrival
                        </div>
                        <button
                            class="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-white/80 dark:bg-black/50 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 backdrop-blur-sm">
                            <span class="material-symbols-outlined text-xl">favorite</span>
                        </button>
                        <div class="aspect-square bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
                            <img alt="Pink and white fashionable headphones"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                data-alt="Pink and white fashionable headphones"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYCU7JIpnnSI7tUNh50SPGHDJ9wbCmbD4Wc5qh0A5NsPxM8O2P0dMjMqzptWCH-8DAgJvo4YZRTsVHnEYAkW3_uYLFJa4p_v9Le6KzZfjLLoxsz2rYvjrgHcHwDTG4EtkZOagOFq-7Dumlidroyhcayv3sOH69P9Ic7-TfDABMx20yJkeD_yrNCnWT5--N9EVkPpnY9VWgPMue7XHQuBWiZVbW6-zDQd5qoSzAz_OUTMWjFPap4pJmjIXMZqLTWadNS4fSy-PHgGc3">
                            <div
                                class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button
                                    class="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">Quick
                                    View</button>
                            </div>
                        </div>
                        <div class="p-4 flex flex-col flex-1">
                            <div class="text-xs font-medium text-gray-500 mb-1">Urbanears</div>
                            <h3
                                class="text-base font-bold text-text-main-light dark:text-white leading-tight mb-2 group-hover:text-primary transition-colors">
                                Plattan 2 Bluetooth</h3>
                            <div class="flex items-center gap-1 mb-3">
                                <div class="flex text-yellow-400 text-sm">
                                    <span class="material-symbols-outlined fill-current text-sm w-4">star</span>
                                    <span class="material-symbols-outlined fill-current text-sm w-4">star</span>
                                    <span class="material-symbols-outlined fill-current text-sm w-4">star</span>
                                    <span class="material-symbols-outlined fill-current text-sm w-4">star</span>
                                    <span class="material-symbols-outlined text-gray-300 text-sm w-4">star</span>
                                </div>
                                <span class="text-xs text-gray-400">(98)</span>
                            </div>
                            <div
                                class="mt-auto flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
                                <div class="flex flex-col">
                                    <span class="text-lg font-bold text-primary">$69.00</span>
                                </div>
                                <button
                                    class="w-10 h-10 flex items-center justify-center rounded-lg bg-background-light dark:bg-gray-700 text-text-main-light dark:text-white hover:bg-primary hover:text-white transition-colors">
                                    <span class="material-symbols-outlined text-xl">add_shopping_cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Pagination -->
                <div
                    class="mt-12 flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 dark:border-gray-800 pt-6">
                    <p class="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-4 sm:mb-0">
                        Showing <span class="font-medium text-text-main-light dark:text-white">1</span> to <span
                            class="font-medium text-text-main-light dark:text-white">6</span> of <span
                            class="font-medium text-text-main-light dark:text-white">128</span> results
                    </p>
                    <nav aria-label="Pagination" class="inline-flex items-center gap-1 rounded-md">
                        <button
                            class="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-card-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-light dark:hover:bg-gray-800 disabled:opacity-50">
                            <span class="material-symbols-outlined text-lg">chevron_left</span>
                        </button>
                        <button
                            class="w-9 h-9 flex items-center justify-center rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90">1</button>
                        <button
                            class="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-card-dark text-text-main-light dark:text-white text-sm font-medium hover:bg-background-light dark:hover:bg-gray-800">2</button>
                        <button
                            class="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-card-dark text-text-main-light dark:text-white text-sm font-medium hover:bg-background-light dark:hover:bg-gray-800">3</button>
                        <span class="px-2 text-text-secondary-light">...</span>
                        <button
                            class="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-card-dark text-text-main-light dark:text-white text-sm font-medium hover:bg-background-light dark:hover:bg-gray-800">10</button>
                        <button
                            class="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-card-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-light dark:hover:bg-gray-800">
                            <span class="material-symbols-outlined text-lg">chevron_right</span>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    </main>
</template>