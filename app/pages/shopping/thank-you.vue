<template>
    <main class="flex-grow w-full max-w-[1024px] mx-auto px-4 py-8 md:py-12">
        <!-- Success Header -->
        <div class="flex flex-col items-center justify-center text-center mb-10">
            <div
                class="size-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
                <span class="material-symbols-outlined text-5xl"
                    style="font-variation-settings: 'FILL' 1;">check_circle</span>
            </div>
            <h1 class="text-[#111318] dark:text-white text-3xl md:text-4xl font-bold leading-tight mb-2">Order
                Confirmed!</h1>
            <p class="text-[#636f88] dark:text-gray-400 text-lg max-w-lg">Hi Alex, thanks for your purchase. Your order
                <span class="font-semibold text-[#111318] dark:text-white">#890123</span> has been confirmed.</p>
            <div class="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
                <button
                    class="bg-primary hover:bg-blue-700 text-white font-medium rounded-lg h-12 px-8 flex items-center justify-center gap-2 transition-colors">
                    Track Order
                </button>
                <button
                    class="bg-transparent border border-[#dcdfe5] dark:border-gray-700 text-[#111318] dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-lg h-12 px-8 flex items-center justify-center gap-2 transition-colors">
                    Continue Shopping
                </button>
            </div>
        </div>
        <!-- Order Detail Card -->
        <div
            class="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-[#f0f2f4] dark:border-gray-800 overflow-hidden">
            <!-- Order Meta Data -->
            <div
                class="border-b border-[#f0f2f4] dark:border-gray-800 p-6 bg-gray-50/50 dark:bg-gray-800/20 flex flex-wrap gap-x-12 gap-y-4 justify-between items-center">
                <div class="flex flex-col">
                    <span
                        class="text-xs uppercase tracking-wider font-semibold text-[#636f88] dark:text-gray-400 mb-1">Order
                        Number</span>
                    <span class="text-[#111318] dark:text-white font-medium">#890123</span>
                </div>
                <div class="flex flex-col">
                    <span
                        class="text-xs uppercase tracking-wider font-semibold text-[#636f88] dark:text-gray-400 mb-1">Date
                        Placed</span>
                    <span class="text-[#111318] dark:text-white font-medium">Oct 20, 2023</span>
                </div>
                <div class="flex flex-col">
                    <span
                        class="text-xs uppercase tracking-wider font-semibold text-[#636f88] dark:text-gray-400 mb-1">Total
                        Amount</span>
                    <span class="text-[#111318] dark:text-white font-medium">$342.00</span>
                </div>
                <div class="hidden sm:block ml-auto">
                    <button
                        class="flex items-center gap-2 text-primary hover:text-blue-700 text-sm font-medium transition-colors">
                        <span class="material-symbols-outlined text-lg">print</span> Print Receipt
                    </button>
                </div>
            </div>
            <div class="p-6 md:p-8">
                <!-- Stepper Progress -->
                <div class="mb-10">
                    <div class="relative">
                        <!-- Connecting Line -->
                        <div class="absolute left-0 top-3 w-full h-1 bg-[#f0f2f4] dark:bg-gray-700 rounded-full -z-10">
                        </div>
                        <div class="absolute left-0 top-3 h-1 bg-primary rounded-full -z-10 w-[25%]"></div>
                        <div class="flex justify-between w-full">
                            <!-- Step 1 -->
                            <div class="flex flex-col items-center gap-2 group">
                                <div
                                    class="size-6 rounded-full bg-primary ring-4 ring-white dark:ring-surface-dark flex items-center justify-center">
                                    <span
                                        class="material-symbols-outlined text-white text-[14px] font-bold">check</span>
                                </div>
                                <span class="text-xs font-semibold text-primary">Order Placed</span>
                            </div>
                            <!-- Step 2 -->
                            <div class="flex flex-col items-center gap-2">
                                <div
                                    class="size-6 rounded-full bg-white dark:bg-gray-800 border-2 border-primary ring-4 ring-white dark:ring-surface-dark flex items-center justify-center">
                                    <div class="size-2 rounded-full bg-primary"></div>
                                </div>
                                <span class="text-xs font-semibold text-[#111318] dark:text-white">Processing</span>
                            </div>
                            <!-- Step 3 -->
                            <div class="flex flex-col items-center gap-2">
                                <div
                                    class="size-6 rounded-full bg-[#f0f2f4] dark:bg-gray-700 ring-4 ring-white dark:ring-surface-dark">
                                </div>
                                <span class="text-xs font-medium text-[#636f88] dark:text-gray-500">Shipped</span>
                            </div>
                            <!-- Step 4 -->
                            <div class="flex flex-col items-center gap-2">
                                <div
                                    class="size-6 rounded-full bg-[#f0f2f4] dark:bg-gray-700 ring-4 ring-white dark:ring-surface-dark">
                                </div>
                                <span class="text-xs font-medium text-[#636f88] dark:text-gray-500">Delivered</span>
                            </div>
                        </div>
                    </div>
                    <div
                        class="mt-4 p-3 bg-primary/10 rounded-lg flex gap-3 items-center text-sm text-[#111318] dark:text-white">
                        <span class="material-symbols-outlined text-primary">local_shipping</span>
                        <p>Estimated Delivery: <span class="font-semibold">Tuesday, Oct 24th</span></p>
                    </div>
                </div>
                <!-- Product List -->
                <div class="flex flex-col gap-6">
                    <h3
                        class="text-lg font-bold text-[#111318] dark:text-white border-b border-[#f0f2f4] dark:border-gray-800 pb-2">
                        Items in Your Order</h3>
                    <!-- Item 1 -->
                    <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        <div class="bg-[#f6f6f8] dark:bg-gray-800 rounded-lg size-20 shrink-0 bg-center bg-cover border border-[#f0f2f4] dark:border-gray-700"
                            data-alt="Mechanical keyboard on a desk with rgb lighting"
                            style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBpHkxW5CJi0MCl3DbESj2e25Zztochkn4gjaUGedXAi3J5QklON5XqnI4gHqAlswu9AUZtZkkChL8_P_QmYV3mfhx_MZtqSenzGzu_gKv0DtEGtb7bU7nsrS5nmSpeidhPKrBdoBrovglqcURSJZ3vbQVrH1MnG79LdfQYlpihyvb0F8IkRJCrsx7Fq5xvcI9ZUE1A9PXEeF-KHxT4WLnrXr4Yb0oKHJsOsDMoiMx-VtMkjxsD7p4Dqyzkb2bSksYAJhZA93M6kJxj');">
                        </div>
                        <div class="flex-1 min-w-0">
                            <h4 class="text-[#111318] dark:text-white font-medium text-base truncate">Keychron K2
                                Mechanical Keyboard</h4>
                            <p class="text-[#636f88] dark:text-gray-400 text-sm mt-1">RGB Backlight / Brown Switch /
                                Aluminum Frame</p>
                        </div>
                        <div class="flex items-center justify-between w-full sm:w-auto sm:justify-end gap-8">
                            <p class="text-[#636f88] dark:text-gray-400 text-sm">Qty: 1</p>
                            <p class="text-[#111318] dark:text-white font-semibold text-base">$89.00</p>
                        </div>
                    </div>
                    <!-- Item 2 -->
                    <div
                        class="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-4 border-t border-[#f0f2f4] dark:border-gray-800/50">
                        <div class="bg-[#f6f6f8] dark:bg-gray-800 rounded-lg size-20 shrink-0 bg-center bg-cover border border-[#f0f2f4] dark:border-gray-700"
                            data-alt="Wireless noise cancelling headphones"
                            style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBg3hQ09eizXHjpFulrGOEuX15mFFEJq6CK1ebJnVtU8VzHCOrz4PJCzKRgfr2Pl5_LSSIGOzhXkJtA7Cpf-jMPQsJY0EPr-3gj7u63EmuwvRmHorggnx2z_9kBj074dnuBXXgfN4dkHjrNgyKqj9zT6LiDa5Shjr__Cf3KLG8Mgo63eS83V3TbKrwcH5JR5bTiYdI5kpBLPySpxTrW9IltWzBjtanBfl0k0SOHkEQafS5ydOU5hh2-EjbwZEw_6iO3gewVyzEv_dlA');">
                        </div>
                        <div class="flex-1 min-w-0">
                            <h4 class="text-[#111318] dark:text-white font-medium text-base truncate">Sony WH-1000XM5
                                Wireless Headphones</h4>
                            <p class="text-[#636f88] dark:text-gray-400 text-sm mt-1">Silver / Noise Cancelling</p>
                        </div>
                        <div class="flex items-center justify-between w-full sm:w-auto sm:justify-end gap-8">
                            <p class="text-[#636f88] dark:text-gray-400 text-sm">Qty: 1</p>
                            <p class="text-[#111318] dark:text-white font-semibold text-base">$248.00</p>
                        </div>
                    </div>
                    <!-- Cost Summary -->
                    <div class="mt-4 pt-6 border-t border-[#f0f2f4] dark:border-gray-800 flex flex-col items-end gap-3">
                        <div class="w-full max-w-xs flex justify-between text-sm">
                            <span class="text-[#636f88] dark:text-gray-400">Subtotal</span>
                            <span class="text-[#111318] dark:text-white font-medium">$337.00</span>
                        </div>
                        <div class="w-full max-w-xs flex justify-between text-sm">
                            <span class="text-[#636f88] dark:text-gray-400">Shipping</span>
                            <span class="text-[#111318] dark:text-white font-medium">$5.00</span>
                        </div>
                        <div class="w-full max-w-xs flex justify-between text-sm">
                            <span class="text-[#636f88] dark:text-gray-400">Tax</span>
                            <span class="text-[#111318] dark:text-white font-medium">$0.00</span>
                        </div>
                        <div
                            class="w-full max-w-xs flex justify-between text-lg font-bold pt-3 border-t border-[#f0f2f4] dark:border-gray-800 mt-1">
                            <span class="text-[#111318] dark:text-white">Total</span>
                            <span class="text-primary">$342.00</span>
                        </div>
                    </div>
                </div>
                <!-- Addresses -->
                <div
                    class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 pt-8 border-t border-[#f0f2f4] dark:border-gray-800">
                    <div>
                        <h5 class="text-[#111318] dark:text-white font-semibold mb-4 flex items-center gap-2">
                            <span
                                class="material-symbols-outlined text-[#636f88] dark:text-gray-400 text-lg">location_on</span>
                            Shipping Address
                        </h5>
                        <div class="text-sm text-[#636f88] dark:text-gray-400 leading-relaxed pl-7">
                            <p class="text-[#111318] dark:text-white font-medium">Alex Johnson</p>
                            <p>1234 Market Street, Apt 5B</p>
                            <p>San Francisco, CA 94103</p>
                            <p>United States</p>
                            <p class="mt-2 text-[#111318] dark:text-white">+1 (555) 123-4567</p>
                        </div>
                    </div>
                    <div>
                        <h5 class="text-[#111318] dark:text-white font-semibold mb-4 flex items-center gap-2">
                            <span
                                class="material-symbols-outlined text-[#636f88] dark:text-gray-400 text-lg">credit_card</span>
                            Payment Method
                        </h5>
                        <div class="text-sm text-[#636f88] dark:text-gray-400 leading-relaxed pl-7">
                            <div class="flex items-center gap-3 mb-2">
                                <div class="bg-blue-900 text-white text-[10px] font-bold px-2 py-1 rounded">VISA</div>
                                <span class="text-[#111318] dark:text-white">Ending in 4242</span>
                            </div>
                            <p>Expires 12/25</p>
                            <p class="mt-2">Billing address same as shipping</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- You Might Also Like -->
        <div class="mt-16">
            <h3 class="text-xl font-bold text-[#111318] dark:text-white mb-6">You might also like</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <!-- Product Card 1 -->
                <div class="group cursor-pointer">
                    <div class="aspect-[4/3] rounded-lg bg-[#f0f2f4] dark:bg-gray-800 mb-3 overflow-hidden">
                        <div class="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                            data-alt="Modern ergonomic mouse black color"
                            style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDbi69stxg2zIl8pLHzR1Qi9C8HlOKSztR6RroxSDGC6vMpOiFL1JmX-dNkbbKeyKWZxwQmh58UBrGJp9sOEuea-o2ijw9b6jdb7gRB9oUGME13UYChxl8c8KY3OoxNAVZiTMNFTJGecJ68GNSOZaUKj9xnIcEvee-suEiw6DD6BAXmhL3VIko2Rj4ejaU5vbJjXO3IZYv1eHeW3BeofF7ZV-veRtr_XLzmpAM-RgreUSOJzXwzm3cAjuyKJldygBOXyUjZv_H9YwIi');">
                        </div>
                    </div>
                    <h4 class="font-medium text-[#111318] dark:text-white text-sm">Ergo Mouse Pro</h4>
                    <p class="text-[#636f88] dark:text-gray-400 text-sm mt-1">$49.99</p>
                </div>
                <!-- Product Card 2 -->
                <div class="group cursor-pointer">
                    <div class="aspect-[4/3] rounded-lg bg-[#f0f2f4] dark:bg-gray-800 mb-3 overflow-hidden">
                        <div class="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                            data-alt="Minimalist wooden laptop stand"
                            style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAR2EcIPxuBliP6TWC6YHrd5ZVtUJG2j2fX__I3BoCUVKJ4xgEepG5CTHd6jrn21mG9VSiugMItjUlPbhG50xvm1jV5uS6DflanGc3N6ijANjrVPfKJ_TCMnLMnUUGwp8TMLmcDJsnEVOhFQgc6Kjl7I-3OKpJHpFWJ6Xk5SteSt0Bcg1imsmTVQJr-5bIYsm22wyPPr7aKKsf40PSKaC50yfRuYUPIDDnT7wy3Zc3HvaxPAivV0RWrJoixz6M1InXzCtF-i70nB5GV');">
                        </div>
                    </div>
                    <h4 class="font-medium text-[#111318] dark:text-white text-sm">Wooden Laptop Stand</h4>
                    <p class="text-[#636f88] dark:text-gray-400 text-sm mt-1">$35.00</p>
                </div>
                <!-- Product Card 3 -->
                <div class="group cursor-pointer">
                    <div class="aspect-[4/3] rounded-lg bg-[#f0f2f4] dark:bg-gray-800 mb-3 overflow-hidden">
                        <div class="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                            data-alt="USB-C hub with multiple ports"
                            style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMNxNZ2gt2jU9Y5qYkjhSD8-EgVZGh8sD-dTzi0cLrRl_YjL4iQJ066_pIgIfv2cImWrMQWI8YmfKDQKCNoACN1PwRmVXabKKeXXhsu1_x94TfAuBtxvlut0h_fKlH7GfeJAMtvSfxYJILyzmoEUJTUtaCgu8Q0W6D6X4t49XJa897BgS__Jq_bUgk7mwJbLx7gYRo48C-2NwKk8juqUOlkRKwQEudEhxbixzQofAj34wRk8VNDWfaCFwdNEbToxYLhGPNvq2Aq2wg');">
                        </div>
                    </div>
                    <h4 class="font-medium text-[#111318] dark:text-white text-sm">7-in-1 USB-C Hub</h4>
                    <p class="text-[#636f88] dark:text-gray-400 text-sm mt-1">$59.00</p>
                </div>
                <!-- Product Card 4 -->
                <div class="group cursor-pointer">
                    <div class="aspect-[4/3] rounded-lg bg-[#f0f2f4] dark:bg-gray-800 mb-3 overflow-hidden">
                        <div class="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                            data-alt="Large desk pad black leather"
                            style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDUnEYOu0sjHSDTbXHefDYuSihAacHcBdzDsJyUfv1_tRcjerfTYBnij-BXtNHJABLvYFYd030prZ-V-UVS1FGH68c3jKJHqq0eh5-53Uh49aHwGJE2uzmSJfeI7YK4hLqzcAxHv7eof3pAEhPvKiQT9b-pXTok-KjtxGDxjmFo2rVGtCJFvCeRn1ytwZWbfkn-jlgADjohnV5OHBlC2pM8rcNAsDBKehKnq_2mouMYGHdQUWEni3DB8sw9OM4F00mFeaE-UiHel0Ve');">
                        </div>
                    </div>
                    <h4 class="font-medium text-[#111318] dark:text-white text-sm">Leather Desk Pad</h4>
                    <p class="text-[#636f88] dark:text-gray-400 text-sm mt-1">$29.00</p>
                </div>
            </div>
        </div>
    </main>
</template>