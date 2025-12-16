<template>
    <div class="flex-grow w-full max-w-7xl mx-auto px-4 md:px-10 py-6 md:py-8">
        <!-- Breadcrumbs -->
        <div class="flex flex-wrap gap-2 mb-6 text-sm">
            <a class="text-[#636f88] hover:text-primary transition-colors" href="#">Home</a>
            <span class="text-[#636f88] select-none">/</span>
            <a class="text-[#636f88] hover:text-primary transition-colors" href="#">Electronics</a>
            <span class="text-[#636f88] select-none">/</span>
            <a class="text-[#636f88] hover:text-primary transition-colors" href="#">Audio</a>
            <span class="text-[#636f88] select-none">/</span>
            <span class="text-[#111318] dark:text-white font-medium">Headphones</span>
        </div>
        <!-- Product Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12">
            <!-- Left Column: Gallery -->
            <div class="lg:col-span-7 flex flex-col gap-4">
                <div
                    class="w-full aspect-square md:aspect-[4/3] bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden border border-[#f0f2f4] dark:border-gray-800 p-8 flex items-center justify-center group relative">
                    <div class="absolute top-4 left-4 z-10 flex flex-col gap-2">
                        <span class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">-12%</span>
                        <span class="bg-primary text-white text-xs font-bold px-2 py-1 rounded">Best Seller</span>
                    </div>
                    <div class="w-full h-full bg-contain bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                        data-alt="Black over-ear wireless headphones isolated on a plain background"
                        style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuBJXEC49aFYUqyMaIxBb6GJsyfgy0iUzy1BXgsSxBTgbTKgYvv7uOxGzn0Q4Dt0X_kLcmMdmkTG2lLNP0S3Cg_FoetTriOvYCsIyKhi5dOtQbLImorQBSl3ob1I56ohw95KaznPCw82lJ5qVA9X6tqPSwzP1q78iS95VBqnJDn18jcupKPDIwc6REaZUG5cNOu9DFpJrYCmiFwJQZdeEVqfF6UeZnNocD_ttw39z-ic4iyZbQ4miu2i5B5ttsdG5AhvVaDRbtrzWnyk&quot;);">
                    </div>
                    <button
                        class="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-800/90 p-2 rounded-lg shadow-sm hover:scale-105 transition-transform">
                        <span class="material-symbols-outlined text-[24px]">zoom_in</span>
                    </button>
                </div>
                <div class="flex gap-4 overflow-x-auto no-scrollbar py-1">
                    <button
                        class="size-20 md:size-24 shrink-0 rounded-lg border-2 border-primary p-1 bg-surface-light dark:bg-surface-dark">
                        <div class="w-full h-full rounded bg-cover bg-center"
                            data-alt="Thumbnail of black headphones front view"
                            style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuDK3Hw3uYiX--_TJLkQ9417EOQxbCVruM0kwY1CGKYKR_MAU_GD9rfuR_C4oEGRouFsYQoezorwvcyvsUrgCCZsicSBBtxK2PeocyqUBDmh3KG2eHmkumWp2rsvqZUr8KA6ZSHX6BJq6XASMi-M8FXiE-DKZD-N8S72Dj5wSl4uNXDsklCUVRZ0KJclLPE93mH70ysnbxGf-PzutHsLUQ4a4SQGKbELNnB1SiaaOZs2ptxoBGzKq3dXm6BMctqjGgR7nWV7UZY51SO-&quot;);">
                        </div>
                    </button>
                    <button
                        class="size-20 md:size-24 shrink-0 rounded-lg border border-[#f0f2f4] dark:border-gray-700 hover:border-gray-400 p-1 bg-surface-light dark:bg-surface-dark transition-colors">
                        <div class="w-full h-full rounded bg-cover bg-center"
                            data-alt="Thumbnail of headphones side view"
                            style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuBqGB0iVIIPHRC1P1g4_x7DI99XLN-HR619ZFUldRBZSaHiRJSIcfgNFtL94DSM2oVP6u4meqAPCLMyWnZyPq041HOWwIBKL0aOcWTPaYY_3R2r1FOuVrbNh-CQlxnY0M2ufGXPdePW7vvWV3ODh5lfAA8Ily4gry_5HeqVDYSnO4x0koJ3kX3LBX75TB0F92M9_wnI1-8r9SwXZdkL49ZYVM8VwklKuuv2EnH9VTTHrol6L2L-xmegJTTQalkEeVw7x5i_sBGpEpF5&quot;);">
                        </div>
                    </button>
                    <button
                        class="size-20 md:size-24 shrink-0 rounded-lg border border-[#f0f2f4] dark:border-gray-700 hover:border-gray-400 p-1 bg-surface-light dark:bg-surface-dark transition-colors">
                        <div class="w-full h-full rounded bg-cover bg-center"
                            data-alt="Thumbnail of headphones in lifestyle setting"
                            style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuD8GVEIvwH1TpE6-BlMCXvCoI-1-K-4a-V0PeLbvuBZGvmfEjjyUG6Az6q1OQ2HICLZoS0pyJ_yBeUlLzhWUPsBvLmBitk9u1YOdNZid1-GoKE68cSiaJxrKoOev826O8pqePRzTHqS9Lixv-3B2MhBaQxB4kewzWXFjVvKT_2I8MT0JdAcCG0beG5_Ufuld4_5zzuMynRLRff5uIeRt9hhPBW17dKP2fM9Zy5svMpQ2yqutXvLbt6HorpBGvqQT2-aMz7KQKzVSaSn&quot;);">
                        </div>
                    </button>
                    <button
                        class="size-20 md:size-24 shrink-0 rounded-lg border border-[#f0f2f4] dark:border-gray-700 hover:border-gray-400 p-1 bg-surface-light dark:bg-surface-dark transition-colors">
                        <div class="w-full h-full rounded bg-cover bg-center" data-alt="Thumbnail of headphones folded"
                            style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuBlsN9ZEQ4gZh9shuEdOO08_tJKMnwyEiP1mXsBHz6wLFGokWSEDhn34VaCLr78N3Q4NV2efA-xdwgW3C7gQYtR9Gzwl7aeIWR21OA82HSeHWqbYJXwd-yETd_9yDFjkEVvGCX8MScxIqidQ26w_uNqjnCUfWNCxUuxtV3QwsBiN4s4xsgauHBhhwmWkIgCFS2J_rq4zm3nhXzpHASQGsw955NRCZFTFUEL1R_OhMuUoMeFS9hmfd9H6Mzlwx4inHWxxwsaH3YOx4Ld&quot;);">
                        </div>
                    </button>
                </div>
            </div>
            <!-- Right Column: Product Details -->
            <div class="lg:col-span-5 flex flex-col h-full">
                <div class="sticky top-24 flex flex-col gap-6">
                    <!-- Title & Rating -->
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-primary font-medium text-sm tracking-wide uppercase">Sony</span>
                            <div class="flex gap-2">
                                <button class="text-gray-400 hover:text-red-500 transition-colors"><span
                                        class="material-symbols-outlined">favorite</span></button>
                                <button class="text-gray-400 hover:text-primary transition-colors"><span
                                        class="material-symbols-outlined">share</span></button>
                            </div>
                        </div>
                        <h1 class="text-[#111318] dark:text-white text-3xl md:text-4xl font-bold leading-tight mb-3">
                            Sony WH-1000XM4 Wireless Noise Cancelling Headphones</h1>
                        <div class="flex items-center gap-2">
                            <div class="flex text-yellow-400 text-sm">
                                <span class="material-symbols-outlined text-[18px] fill-current">star</span>
                                <span class="material-symbols-outlined text-[18px] fill-current">star</span>
                                <span class="material-symbols-outlined text-[18px] fill-current">star</span>
                                <span class="material-symbols-outlined text-[18px] fill-current">star</span>
                                <span class="material-symbols-outlined text-[18px] fill-current">star_half</span>
                            </div>
                            <a class="text-primary text-sm font-medium hover:underline" href="#reviews">4.8 (1,240
                                reviews)</a>
                        </div>
                    </div>
                    <!-- Price -->
                    <div
                        class="p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-[#f0f2f4] dark:border-gray-800">
                        <div class="flex items-end gap-3 mb-2">
                            <span class="text-3xl font-bold text-[#111318] dark:text-white">$348.00</span>
                            <span class="text-lg text-[#636f88] line-through mb-1">$399.00</span>
                        </div>
                        <p class="text-sm text-[#636f88]">Free 2-day shipping with <span
                                class="font-bold text-primary">Plus</span></p>
                    </div>
                    <!-- Description Short -->
                    <div class="text-[#636f88] dark:text-gray-300 space-y-2">
                        <p class="leading-relaxed">Industry-leading noise cancellation technology features additional
                            microphones that assist in isolating sound while talking on the phone, resulting in improved
                            phone call quality and the reduction of even more high and mid frequency sounds.</p>
                        <ul class="list-disc list-inside text-sm space-y-1 mt-2">
                            <li>30-hour battery life with quick charging</li>
                            <li>Touch Sensor controls to pause/play/skip tracks</li>
                            <li>Speak-to-chat technology</li>
                        </ul>
                    </div>
                    <hr class="border-[#f0f2f4] dark:border-gray-800">
                    <!-- Variants -->
                    <div class="space-y-4">
                        <div>
                            <span class="text-sm font-bold text-[#111318] dark:text-white block mb-3">Color: <span
                                    class="font-normal text-[#636f88]">Black</span></span>
                            <div class="flex items-center gap-3">
                                <label class="cursor-pointer">
                                    <input  class="peer sr-only" name="color" type="radio">
                                    <div
                                        class="size-10 rounded-full bg-black border-2 border-transparent peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-primary dark:peer-checked:ring-offset-[#111621]">
                                    </div>
                                </label>
                                <label class="cursor-pointer">
                                    <input class="peer sr-only" name="color" type="radio">
                                    <div
                                        class="size-10 rounded-full bg-gray-300 border-2 border-transparent peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-primary dark:peer-checked:ring-offset-[#111621]">
                                    </div>
                                </label>
                                <label class="cursor-pointer">
                                    <input class="peer sr-only" name="color" type="radio">
                                    <div
                                        class="size-10 rounded-full bg-blue-900 border-2 border-transparent peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-primary dark:peer-checked:ring-offset-[#111621]">
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <!-- Actions -->
                    <div class="flex flex-col gap-3 pt-2">
                        <div class="flex gap-4">
                            <div
                                class="w-32 flex items-center justify-between rounded-lg border border-[#f0f2f4] dark:border-gray-700 bg-surface-light dark:bg-surface-dark px-3 py-2">
                                <button class="text-[#636f88] hover:text-primary"><span
                                        class="material-symbols-outlined text-[20px]">remove</span></button>
                                <span class="font-medium">1</span>
                                <button class="text-[#636f88] hover:text-primary"><span
                                        class="material-symbols-outlined text-[20px]">add</span></button>
                            </div>
                            <button
                                class="flex-1 bg-primary hover:bg-blue-700 text-white font-bold rounded-lg h-12 flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all">
                                <span class="material-symbols-outlined">shopping_cart</span>
                                Add to Cart
                            </button>
                        </div>
                        <button
                            class="w-full border-2 border-primary text-primary hover:bg-primary/5 font-bold rounded-lg h-12 flex items-center justify-center transition-colors">
                            Buy Now
                        </button>
                    </div>
                    <!-- Meta Info -->
                    <div class="flex flex-col gap-2 text-xs text-[#636f88] dark:text-gray-400 mt-2">
                        <div class="flex items-center gap-2">
                            <span class="material-symbols-outlined text-[18px] text-green-500">check_circle</span>
                            <span>In Stock, ready to ship</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="material-symbols-outlined text-[18px]">local_shipping</span>
                            <span>Free shipping on orders over $50</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="material-symbols-outlined text-[18px]">verified_user</span>
                            <span>2 Year Warranty included</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Details Tabs Section -->
        <section class="mb-16">
            <div class="border-b border-[#f0f2f4] dark:border-gray-800 mb-8">
                <div class="flex gap-8 overflow-x-auto no-scrollbar">
                    <button class="pb-4 border-b-2 border-primary text-primary font-bold whitespace-nowrap px-2">Product
                        Description</button>
                    <button
                        class="pb-4 border-b-2 border-transparent text-[#636f88] hover:text-[#111318] dark:hover:text-white font-medium whitespace-nowrap px-2 transition-colors">Specifications</button>
                    <button
                        class="pb-4 border-b-2 border-transparent text-[#636f88] hover:text-[#111318] dark:hover:text-white font-medium whitespace-nowrap px-2 transition-colors">Shipping
                        &amp; Returns</button>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 text-[#111318] dark:text-gray-200">
                <div class="space-y-6">
                    <h3 class="text-xl font-bold">Premium Sound. Zero Distractions.</h3>
                    <p class="leading-relaxed text-[#636f88] dark:text-gray-400">
                        Dive into your own world with the WH-1000XM4 headphones. They feature our best noise canceling
                        technology to date, preventing high and mid-frequency sounds from disrupting your listening
                        experience. Whether you're on a long flight or relaxing in a café, the WH-1000XM4 headphones
                        deliver our advanced noise cancelling performance, keeping out even more high and mid frequency
                        sounds.
                    </p>
                    <div class="grid grid-cols-2 gap-4">
                        <div
                            class="bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-[#f0f2f4] dark:border-gray-800">
                            <span
                                class="material-symbols-outlined text-primary text-3xl mb-2">battery_charging_full</span>
                            <h4 class="font-bold mb-1">30 Hr Battery</h4>
                            <p class="text-sm text-[#636f88]">All day power with quick charging.</p>
                        </div>
                        <div
                            class="bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-[#f0f2f4] dark:border-gray-800">
                            <span class="material-symbols-outlined text-primary text-3xl mb-2">graphic_eq</span>
                            <h4 class="font-bold mb-1">LDAC Audio</h4>
                            <p class="text-sm text-[#636f88]">High-resolution audio content.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="text-xl font-bold mb-6">Technical Specs</h3>
                    <div class="rounded-lg border border-[#f0f2f4] dark:border-gray-800 overflow-hidden">
                        <table class="w-full text-sm text-left">
                            <tbody class="divide-y divide-[#f0f2f4] dark:divide-gray-800">
                                <tr class="bg-surface-light dark:bg-surface-dark">
                                    <td class="px-4 py-3 font-medium text-[#636f88]">Weight</td>
                                    <td class="px-4 py-3">254g</td>
                                </tr>
                                <tr class="bg-white dark:bg-[#151b28]">
                                    <td class="px-4 py-3 font-medium text-[#636f88]">Headphone Type</td>
                                    <td class="px-4 py-3">Closed, dynamic</td>
                                </tr>
                                <tr class="bg-surface-light dark:bg-surface-dark">
                                    <td class="px-4 py-3 font-medium text-[#636f88]">Driver Unit</td>
                                    <td class="px-4 py-3">40mm, dome type (CCAW Voice coil)</td>
                                </tr>
                                <tr class="bg-white dark:bg-[#151b28]">
                                    <td class="px-4 py-3 font-medium text-[#636f88]">Frequency Response</td>
                                    <td class="px-4 py-3">4Hz-40,000Hz</td>
                                </tr>
                                <tr class="bg-surface-light dark:bg-surface-dark">
                                    <td class="px-4 py-3 font-medium text-[#636f88]">Cord Length</td>
                                    <td class="px-4 py-3">Headphone cable (approx. 1.2m, OFC strands, gold-plated stereo
                                        mini plug)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
        <!-- Reviews Summary -->
        <section class="mb-16 scroll-mt-24" id="reviews">
            <h3 class="text-2xl font-bold mb-8">Customer Reviews</h3>
            <div class="flex flex-col md:flex-row gap-8 md:gap-16">
                <!-- Summary Card -->
                <div
                    class="w-full md:w-1/3 bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-[#f0f2f4] dark:border-gray-800 h-fit">
                    <div class="text-center mb-6">
                        <div class="text-5xl font-bold text-[#111318] dark:text-white mb-2">4.8</div>
                        <div class="flex justify-center text-yellow-400 mb-2">
                            <span class="material-symbols-outlined fill-current">star</span>
                            <span class="material-symbols-outlined fill-current">star</span>
                            <span class="material-symbols-outlined fill-current">star</span>
                            <span class="material-symbols-outlined fill-current">star</span>
                            <span class="material-symbols-outlined fill-current">star_half</span>
                        </div>
                        <div class="text-sm text-[#636f88]">Based on 1,240 reviews</div>
                    </div>
                    <div class="space-y-2">
                        <div class="flex items-center gap-3 text-sm">
                            <span class="w-8 text-right font-medium">5</span>
                            <div class="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div class="h-full bg-yellow-400 w-[85%]"></div>
                            </div>
                            <span class="w-8 text-[#636f88]">85%</span>
                        </div>
                        <div class="flex items-center gap-3 text-sm">
                            <span class="w-8 text-right font-medium">4</span>
                            <div class="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div class="h-full bg-yellow-400 w-[10%]"></div>
                            </div>
                            <span class="w-8 text-[#636f88]">10%</span>
                        </div>
                        <div class="flex items-center gap-3 text-sm">
                            <span class="w-8 text-right font-medium">3</span>
                            <div class="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div class="h-full bg-yellow-400 w-[3%]"></div>
                            </div>
                            <span class="w-8 text-[#636f88]">3%</span>
                        </div>
                        <div class="flex items-center gap-3 text-sm">
                            <span class="w-8 text-right font-medium">2</span>
                            <div class="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div class="h-full bg-yellow-400 w-[1%]"></div>
                            </div>
                            <span class="w-8 text-[#636f88]">1%</span>
                        </div>
                        <div class="flex items-center gap-3 text-sm">
                            <span class="w-8 text-right font-medium">1</span>
                            <div class="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div class="h-full bg-yellow-400 w-[1%]"></div>
                            </div>
                            <span class="w-8 text-[#636f88]">1%</span>
                        </div>
                    </div>
                    <button
                        class="w-full mt-6 bg-transparent border border-[#636f88] text-[#111318] dark:text-white dark:border-gray-500 font-medium py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">Write
                        a Review</button>
                </div>
                <!-- Review List -->
                <div class="flex-1 space-y-6">
                    <!-- Review 1 -->
                    <div class="pb-6 border-b border-[#f0f2f4] dark:border-gray-800">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center gap-3">
                                <div
                                    class="size-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center font-bold text-gray-500">
                                    JD</div>
                                <div>
                                    <h4 class="font-bold text-sm">John Doe</h4>
                                    <div class="flex text-yellow-400 text-xs">
                                        <span class="material-symbols-outlined text-[16px] fill-current">star</span>
                                        <span class="material-symbols-outlined text-[16px] fill-current">star</span>
                                        <span class="material-symbols-outlined text-[16px] fill-current">star</span>
                                        <span class="material-symbols-outlined text-[16px] fill-current">star</span>
                                        <span class="material-symbols-outlined text-[16px] fill-current">star</span>
                                    </div>
                                </div>
                            </div>
                            <span class="text-xs text-[#636f88]">2 weeks ago</span>
                        </div>
                        <h5 class="font-bold text-base mb-2">Best purchase of the year</h5>
                        <p class="text-sm text-[#636f88] leading-relaxed dark:text-gray-400">Absolutely amazing sound
                            quality. The noise cancelling is scary good - I literally can't hear my kids screaming when
                            I have these on. The battery life is also impressive.</p>
                    </div>
                    <!-- Review 2 -->
                    <div class="pb-6 border-b border-[#f0f2f4] dark:border-gray-800">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center gap-3">
                                <div
                                    class="size-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center font-bold text-gray-500">
                                    AS</div>
                                <div>
                                    <h4 class="font-bold text-sm">Alice Smith</h4>
                                    <div class="flex text-yellow-400 text-xs">
                                        <span class="material-symbols-outlined text-[16px] fill-current">star</span>
                                        <span class="material-symbols-outlined text-[16px] fill-current">star</span>
                                        <span class="material-symbols-outlined text-[16px] fill-current">star</span>
                                        <span class="material-symbols-outlined text-[16px] fill-current">star</span>
                                        <span
                                            class="material-symbols-outlined text-[16px] fill-current text-gray-300">star</span>
                                    </div>
                                </div>
                            </div>
                            <span class="text-xs text-[#636f88]">1 month ago</span>
                        </div>
                        <h5 class="font-bold text-base mb-2">Great but pricey</h5>
                        <p class="text-sm text-[#636f88] leading-relaxed dark:text-gray-400">The headphones are great,
                            but I wish they were a bit cheaper. The build quality feels premium though. Multi-device
                            connection can be a bit finicky sometimes.</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- Related Products -->
        <section>
            <div class="flex items-center justify-between mb-6">
                <h3 class="text-2xl font-bold">You might also like</h3>
                <div class="flex gap-2">
                    <button
                        class="size-8 flex items-center justify-center rounded-full border border-[#f0f2f4] hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800">
                        <span class="material-symbols-outlined text-[20px]">chevron_left</span>
                    </button>
                    <button
                        class="size-8 flex items-center justify-center rounded-full border border-[#f0f2f4] hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800">
                        <span class="material-symbols-outlined text-[20px]">chevron_right</span>
                    </button>
                </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <!-- Related Item 1 -->
                <div
                    class="group flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl border border-[#f0f2f4] dark:border-gray-800 overflow-hidden hover:shadow-lg transition-shadow">
                    <div class="relative w-full aspect-square bg-white dark:bg-gray-800 p-4">
                        <div class="absolute top-2 right-2">
                            <button class="text-gray-300 hover:text-red-500 transition-colors"><span
                                    class="material-symbols-outlined">favorite</span></button>
                        </div>
                        <div class="w-full h-full bg-contain bg-center bg-no-repeat"
                            data-alt="White headphones on a yellow background"
                            style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuBY9ExyBfghKVSqTCpGGmHbvvgVijxotq6XDc3DNFwNxVXMrIv5ElGdjZJvE7fUPr2yJmHGcJHQZXi7hhe_kY11-ZxYWYu0RbV0S3IhoBTYq3Eu8QS3ueiIJNN1YQs2j9jr0V_x1PFFnz07QhcNzORrmPviyJLvjLFnSU1APRFquHM83A2znZWGSXvyjrYAjXdpKOaftXCk30PXgwjU1JV3TZmGHleFRse5aJllh1eP5o0QSHR22L3zCDERXrs04gOlMI6tAYrX8S8X&quot;);">
                        </div>
                    </div>
                    <div class="p-4 flex flex-col flex-1">
                        <h4 class="font-bold text-sm mb-1 line-clamp-2">Sony WH-CH710N Wireless Noise Cancelling</h4>
                        <div class="flex items-center gap-1 mb-2">
                            <span class="material-symbols-outlined text-[14px] text-yellow-400 fill-current">star</span>
                            <span class="text-xs text-[#636f88]">4.5</span>
                        </div>
                        <div class="mt-auto flex items-center justify-between">
                            <span class="font-bold text-lg">$148.00</span>
                            <button
                                class="size-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
                                <span class="material-symbols-outlined text-[18px]">add</span>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Related Item 2 -->
                <div
                    class="group flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl border border-[#f0f2f4] dark:border-gray-800 overflow-hidden hover:shadow-lg transition-shadow">
                    <div class="relative w-full aspect-square bg-white dark:bg-gray-800 p-4">
                        <div class="absolute top-2 right-2">
                            <button class="text-gray-300 hover:text-red-500 transition-colors"><span
                                    class="material-symbols-outlined">favorite</span></button>
                        </div>
                        <div class="w-full h-full bg-contain bg-center bg-no-repeat"
                            data-alt="White wireless earbuds in charging case"
                            style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuA7vt_iEiCKA8OBLjJldQOhA_szHyeFR865GvFufkIVWtHgxJ97qB57spiNUAFn6KdvrTRFOrovulWqP1_UHj4PHESBG0_AFDQQloqtcK3C_N0LEAtkSsX7q_NPlSIXUla9TytSxQbdS50DxjIPvzRV2MluOxEGuUJL0VxJTAhvOekA9Z63dQQUEUB_rvp8EXGpyxVt9lVFjWFDgzfTgwgxids5jJ9U51cvUVkocZJ7rzzi3bvh_bnj9UDyGckZ-jWVqZA6Vt1g6o8u&quot;);">
                        </div>
                    </div>
                    <div class="p-4 flex flex-col flex-1">
                        <h4 class="font-bold text-sm mb-1 line-clamp-2">Sony WF-1000XM3 True Wireless Earbuds</h4>
                        <div class="flex items-center gap-1 mb-2">
                            <span class="material-symbols-outlined text-[14px] text-yellow-400 fill-current">star</span>
                            <span class="text-xs text-[#636f88]">4.6</span>
                        </div>
                        <div class="mt-auto flex items-center justify-between">
                            <span class="font-bold text-lg">$178.00</span>
                            <button
                                class="size-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
                                <span class="material-symbols-outlined text-[18px]">add</span>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Related Item 3 -->
                <div
                    class="group flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl border border-[#f0f2f4] dark:border-gray-800 overflow-hidden hover:shadow-lg transition-shadow">
                    <div class="relative w-full aspect-square bg-white dark:bg-gray-800 p-4">
                        <div class="absolute top-2 right-2">
                            <button class="text-gray-300 hover:text-red-500 transition-colors"><span
                                    class="material-symbols-outlined">favorite</span></button>
                        </div>
                        <div class="w-full h-full bg-contain bg-center bg-no-repeat"
                            data-alt="Woman holding black wireless headphones"
                            style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuDxaSkNuwCp92XHOiDaau3wl5pCa90XNU6roN518FmBmysu8pG3kMPFlazBAp26YSg9yx25odOd9BxYdPC7xjnwGF4lQ5Bp-e-t_lEbvsXv_mmCbii4QyAhaLoMcc_9NVvDTEcEQAi2I1Af0p4gYtpDVqCQeNr4D_vUqpkMPGyBbIcYWmyxi-7qI6FfXGSSvx0IeGF8E7RvXp0CIuSGedJrTlvdG6fwF0bp87EpBveuR8YQc_GI7mTYzLdWutlBwKfiyb4mzgW8R1zU&quot;);">
                        </div>
                    </div>
                    <div class="p-4 flex flex-col flex-1">
                        <h4 class="font-bold text-sm mb-1 line-clamp-2">Bose QuietComfort 35 II Wireless Bluetooth</h4>
                        <div class="flex items-center gap-1 mb-2">
                            <span class="material-symbols-outlined text-[14px] text-yellow-400 fill-current">star</span>
                            <span class="text-xs text-[#636f88]">4.9</span>
                        </div>
                        <div class="mt-auto flex items-center justify-between">
                            <span class="font-bold text-lg">$299.00</span>
                            <button
                                class="size-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
                                <span class="material-symbols-outlined text-[18px]">add</span>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Related Item 4 -->
                <div
                    class="group flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl border border-[#f0f2f4] dark:border-gray-800 overflow-hidden hover:shadow-lg transition-shadow">
                    <div class="relative w-full aspect-square bg-white dark:bg-gray-800 p-4">
                        <div class="absolute top-2 right-2">
                            <button class="text-gray-300 hover:text-red-500 transition-colors"><span
                                    class="material-symbols-outlined">favorite</span></button>
                        </div>
                        <div class="w-full h-full bg-contain bg-center bg-no-repeat"
                            data-alt="Pair of small white bluetooth earbuds"
                            style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuA2ReAOQOGtAau8Q-OcXWpqp0WQIzGvqrUSpXhr0eueTZJltHJz3stdqa0lJJ3Y6tJZuhdtgUMzn-8VsuZH_L9Crc0Y49TGAK7jL8VhnIY6mzJryXM6BvSzaa4buycXFvgzGuH0lU9HSYVWVUM6AWxo7WbB0dgU6bEdYWbWa_rl-XoSHxPvaRoLa-WQTgv2mp_h02-GjIy6bRSfuGYfYsLjWVOEZPfrIWx5GM5mhhQ1oQAQ1UJYpattWnYM-omaYKg2k5OHON1HpIho&quot;);">
                        </div>
                    </div>
                    <div class="p-4 flex flex-col flex-1">
                        <h4 class="font-bold text-sm mb-1 line-clamp-2">Apple AirPods Pro with MagSafe Case</h4>
                        <div class="flex items-center gap-1 mb-2">
                            <span class="material-symbols-outlined text-[14px] text-yellow-400 fill-current">star</span>
                            <span class="text-xs text-[#636f88]">4.8</span>
                        </div>
                        <div class="mt-auto flex items-center justify-between">
                            <span class="font-bold text-lg">$249.00</span>
                            <button
                                class="size-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
                                <span class="material-symbols-outlined text-[18px]">add</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>