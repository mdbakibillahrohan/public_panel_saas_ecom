<template>
    <main class="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 py-8 lg:py-12">
        <div class="flex flex-col lg:flex-row gap-10">
            <!-- Sticky Sidebar -->
            <aside class="hidden lg:block w-64 shrink-0 relative">
                <div class="sticky top-24 space-y-8">
                    <div
                        class="bg-surface-light dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div class="mb-4">
                            <h3 class="text-slate-900 dark:text-white font-bold text-lg">On this page</h3>
                        </div>
                        <nav class="flex flex-col space-y-1">
                            <a class="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary font-medium text-sm transition-colors"
                                href="#overview">
                                <span class="material-symbols-outlined text-[18px]">info</span>
                                Overview
                            </a>
                            <a class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary dark:hover:text-primary font-medium text-sm transition-colors"
                                href="#shipping">
                                <span class="material-symbols-outlined text-[18px]">local_shipping</span>
                                Shipping Info
                            </a>
                            <a class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary dark:hover:text-primary font-medium text-sm transition-colors"
                                href="#returns">
                                <span class="material-symbols-outlined text-[18px]">undo</span>
                                Returns Process
                            </a>
                            <a class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary dark:hover:text-primary font-medium text-sm transition-colors"
                                href="#refunds">
                                <span class="material-symbols-outlined text-[18px]">currency_exchange</span>
                                Refunds
                            </a>
                        </nav>
                    </div>
                    <div class="bg-primary rounded-xl p-6 text-white text-center">
                        <span class="material-symbols-outlined text-[32px] mb-3">support_agent</span>
                        <h4 class="font-bold text-lg mb-2">Need help?</h4>
                        <p class="text-sm opacity-90 mb-4">Our support team is available 24/7 to assist with your order.
                        </p>
                        <button
                            class="w-full bg-white text-primary font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-opacity text-sm">Contact
                            Support</button>
                    </div>
                </div>
            </aside>
            <!-- Main Content -->
            <div class="flex-1 max-w-[960px]">
                <!-- Page Heading -->
                <div class="mb-8" id="overview">
                    <h1 class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                        Shipping &amp; Returns</h1>
                    <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                        We want you to be completely happy with your purchase. Here is everything you need to know about
                        how we get your items to you and what to do if you need to send them back.
                    </p>
                </div>
                <!-- Stats Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    <div
                        class="bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-lg p-5 flex flex-col items-start gap-3 shadow-sm hover:border-primary/50 transition-colors group">
                        <div
                            class="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <span class="material-symbols-outlined">local_shipping</span>
                        </div>
                        <div>
                            <h3 class="font-bold text-slate-900 dark:text-white">Free Shipping</h3>
                            <p class="text-sm text-slate-500 dark:text-slate-400">On orders over $50</p>
                        </div>
                    </div>
                    <div
                        class="bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-lg p-5 flex flex-col items-start gap-3 shadow-sm hover:border-primary/50 transition-colors group">
                        <div
                            class="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <span class="material-symbols-outlined">schedule</span>
                        </div>
                        <div>
                            <h3 class="font-bold text-slate-900 dark:text-white">24h Dispatch</h3>
                            <p class="text-sm text-slate-500 dark:text-slate-400">Orders ship next day</p>
                        </div>
                    </div>
                    <div
                        class="bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-lg p-5 flex flex-col items-start gap-3 shadow-sm hover:border-primary/50 transition-colors group">
                        <div
                            class="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <span class="material-symbols-outlined">calendar_month</span>
                        </div>
                        <div>
                            <h3 class="font-bold text-slate-900 dark:text-white">30-Day Returns</h3>
                            <p class="text-sm text-slate-500 dark:text-slate-400">No questions asked</p>
                        </div>
                    </div>
                    <div
                        class="bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-lg p-5 flex flex-col items-start gap-3 shadow-sm hover:border-primary/50 transition-colors group">
                        <div
                            class="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <span class="material-symbols-outlined">verified_user</span>
                        </div>
                        <div>
                            <h3 class="font-bold text-slate-900 dark:text-white">Secure Refunds</h3>
                            <p class="text-sm text-slate-500 dark:text-slate-400">Fast processing</p>
                        </div>
                    </div>
                </div>
                <!-- Shipping Section -->
                <section class="mb-16 scroll-mt-28" id="shipping">
                    <div class="flex items-center gap-3 mb-6">
                        <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Shipping Information</h2>
                        <div class="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
                    </div>
                    <div
                        class="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm mb-6">
                        <div class="p-6 md:p-8">
                            <h3 class="text-lg font-bold mb-4 flex items-center gap-2">
                                <span class="material-symbols-outlined text-primary">flight_takeoff</span>
                                Domestic Shipping Rates
                            </h3>
                            <div class="overflow-x-auto">
                                <table class="w-full text-left text-sm">
                                    <thead
                                        class="bg-slate-50 dark:bg-slate-800/50 uppercase text-xs font-semibold text-slate-500 dark:text-slate-400">
                                        <tr>
                                            <th class="px-4 py-3 rounded-l-lg">Method</th>
                                            <th class="px-4 py-3">Delivery Time</th>
                                            <th class="px-4 py-3 rounded-r-lg text-right">Cost</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                                        <tr>
                                            <td class="px-4 py-4 font-medium text-slate-900 dark:text-white">Standard
                                                Shipping</td>
                                            <td class="px-4 py-4 text-slate-600 dark:text-slate-400">3-5 Business Days
                                            </td>
                                            <td class="px-4 py-4 text-right font-medium text-slate-900 dark:text-white">
                                                $5.99 (Free over $50)</td>
                                        </tr>
                                        <tr>
                                            <td class="px-4 py-4 font-medium text-slate-900 dark:text-white">Express
                                                Shipping</td>
                                            <td class="px-4 py-4 text-slate-600 dark:text-slate-400">1-2 Business Days
                                            </td>
                                            <td class="px-4 py-4 text-right font-medium text-slate-900 dark:text-white">
                                                $14.99</td>
                                        </tr>
                                        <tr>
                                            <td class="px-4 py-4 font-medium text-slate-900 dark:text-white">Overnight
                                            </td>
                                            <td class="px-4 py-4 text-slate-600 dark:text-slate-400">Next Business Day
                                            </td>
                                            <td class="px-4 py-4 text-right font-medium text-slate-900 dark:text-white">
                                                $24.99</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
                        <p class="mb-4">
                            <strong>Order Processing:</strong> All orders placed before 2:00 PM EST are processed and
                            dispatched the same day. Orders placed after this time or on weekends/holidays will be
                            shipped the following business day.
                        </p>
                        <p>
                            <strong>International Shipping:</strong> We currently ship to over 50 countries.
                            International shipping rates are calculated at checkout based on destination and package
                            weight. Please note that customs duties and taxes are not included in the shipping price and
                            are the responsibility of the customer.
                        </p>
                    </div>
                </section>
                <!-- Returns Section -->
                <section class="mb-16 scroll-mt-28" id="returns">
                    <div class="flex items-center gap-3 mb-6">
                        <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Returns Process</h2>
                        <div class="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
                    </div>
                    <div class="bg-primary/5 dark:bg-primary/10 rounded-xl p-6 md:p-8 mb-8 border border-primary/10">
                        <h3 class="text-lg font-bold mb-6 text-center text-slate-900 dark:text-white">How it works</h3>
                        <div class="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
                            <!-- Connector Line -->
                            <div
                                class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-700 -z-10 -translate-y-1/2">
                            </div>
                            <!-- Step 1 -->
                            <div
                                class="flex flex-col items-center text-center bg-surface-light dark:bg-surface-dark md:bg-transparent md:dark:bg-transparent p-4 md:p-0 rounded-lg w-full md:w-auto">
                                <div
                                    class="size-12 rounded-full bg-surface-light dark:bg-surface-dark border-2 border-primary text-primary flex items-center justify-center mb-3 shadow-sm z-10">
                                    <span class="material-symbols-outlined">assignment</span>
                                </div>
                                <h4 class="font-bold text-sm mb-1 text-slate-900 dark:text-white">1. Request</h4>
                                <p class="text-xs text-slate-500 dark:text-slate-400">Start return online</p>
                            </div>
                            <!-- Step 2 -->
                            <div
                                class="flex flex-col items-center text-center bg-surface-light dark:bg-surface-dark md:bg-transparent md:dark:bg-transparent p-4 md:p-0 rounded-lg w-full md:w-auto">
                                <div
                                    class="size-12 rounded-full bg-surface-light dark:bg-surface-dark border-2 border-primary text-primary flex items-center justify-center mb-3 shadow-sm z-10">
                                    <span class="material-symbols-outlined">print</span>
                                </div>
                                <h4 class="font-bold text-sm mb-1 text-slate-900 dark:text-white">2. Label</h4>
                                <p class="text-xs text-slate-500 dark:text-slate-400">Print prepaid label</p>
                            </div>
                            <!-- Step 3 -->
                            <div
                                class="flex flex-col items-center text-center bg-surface-light dark:bg-surface-dark md:bg-transparent md:dark:bg-transparent p-4 md:p-0 rounded-lg w-full md:w-auto">
                                <div
                                    class="size-12 rounded-full bg-surface-light dark:bg-surface-dark border-2 border-primary text-primary flex items-center justify-center mb-3 shadow-sm z-10">
                                    <span class="material-symbols-outlined">package</span>
                                </div>
                                <h4 class="font-bold text-sm mb-1 text-slate-900 dark:text-white">3. Ship</h4>
                                <p class="text-xs text-slate-500 dark:text-slate-400">Drop off package</p>
                            </div>
                            <!-- Step 4 -->
                            <div
                                class="flex flex-col items-center text-center bg-surface-light dark:bg-surface-dark md:bg-transparent md:dark:bg-transparent p-4 md:p-0 rounded-lg w-full md:w-auto">
                                <div
                                    class="size-12 rounded-full bg-surface-light dark:bg-surface-dark border-2 border-primary text-primary flex items-center justify-center mb-3 shadow-sm z-10">
                                    <span class="material-symbols-outlined">credit_card</span>
                                </div>
                                <h4 class="font-bold text-sm mb-1 text-slate-900 dark:text-white">4. Refund</h4>
                                <p class="text-xs text-slate-500 dark:text-slate-400">Money back in 3-5 days</p>
                            </div>
                        </div>
                        <div class="mt-8 text-center">
                            <button
                                class="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-flex items-center gap-2">
                                Start a Return
                                <span class="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <!-- Accordion 1 -->
                        <details
                            class="group bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-lg open:ring-2 open:ring-primary/10 transition-all">
                            <summary
                                class="flex items-center justify-between p-4 cursor-pointer font-bold text-slate-900 dark:text-white select-none">
                                <span>Return Eligibility Checklist</span>
                                <span
                                    class="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <div
                                class="px-4 pb-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                                <ul class="list-disc pl-5 space-y-1">
                                    <li>Items must be returned within 30 days of the delivery date.</li>
                                    <li>Items must be unworn, unwashed, and in their original condition.</li>
                                    <li>All tags must be attached and original packaging included.</li>
                                    <li>Proof of purchase (order number) is required.</li>
                                </ul>
                            </div>
                        </details>
                        <!-- Accordion 2 -->
                        <details
                            class="group bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-lg open:ring-2 open:ring-primary/10 transition-all">
                            <summary
                                class="flex items-center justify-between p-4 cursor-pointer font-bold text-slate-900 dark:text-white select-none">
                                <span>Non-Returnable Items</span>
                                <span
                                    class="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <div
                                class="px-4 pb-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                                <p class="mb-2">For health and hygiene reasons, the following items cannot be returned:
                                </p>
                                <ul class="list-disc pl-5 space-y-1">
                                    <li>Underwear and swimwear (if hygiene seal is broken)</li>
                                    <li>Earrings</li>
                                    <li>Personal care products</li>
                                    <li>Gift cards</li>
                                </ul>
                            </div>
                        </details>
                        <!-- Accordion 3 -->
                        <details
                            class="group bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-lg open:ring-2 open:ring-primary/10 transition-all">
                            <summary
                                class="flex items-center justify-between p-4 cursor-pointer font-bold text-slate-900 dark:text-white select-none">
                                <span>Exchanges</span>
                                <span
                                    class="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <div
                                class="px-4 pb-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                                <p>We do not offer direct exchanges. If you need a different size or color, please
                                    return your item for a refund and place a new order for the desired item. This
                                    ensures you get your new item faster!</p>
                            </div>
                        </details>
                    </div>
                </section>
                <!-- Refunds Section -->
                <section class="mb-12 scroll-mt-28" id="refunds">
                    <div class="flex items-center gap-3 mb-6">
                        <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Refunds</h2>
                        <div class="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
                    </div>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div
                            class="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                            <div class="text-primary mb-3">
                                <span class="material-symbols-outlined text-[28px]">timelapse</span>
                            </div>
                            <h3 class="font-bold text-lg mb-2 text-slate-900 dark:text-white">Processing Time</h3>
                            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Once we receive your return, please allow <strong>3-5 business days</strong> for us to
                                inspect and process it. You will receive an email confirmation once your refund has been
                                issued.
                            </p>
                        </div>
                        <div
                            class="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                            <div class="text-primary mb-3">
                                <span class="material-symbols-outlined text-[28px]">credit_score</span>
                            </div>
                            <h3 class="font-bold text-lg mb-2 text-slate-900 dark:text-white">Payment Method</h3>
                            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Refunds will be automatically applied to your original method of payment. Depending on
                                your bank or credit card company, it may take an additional <strong>5-10 business
                                    days</strong> for the funds to appear in your account.
                            </p>
                        </div>
                    </div>
                </section>
                <!-- Footer FAQ CTA -->
                <div
                    class="bg-slate-900 dark:bg-slate-800 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                    <div
                        class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-transparent pointer-events-none">
                    </div>
                    <div class="relative z-10">
                        <h2 class="text-3xl font-bold text-white mb-4">Still have questions?</h2>
                        <p class="text-slate-300 mb-8 max-w-lg mx-auto">
                            Can't find the answer you're looking for? Please check our full FAQ page or chat with our
                            friendly team.
                        </p>
                        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button
                                class="w-full sm:w-auto bg-white text-slate-900 font-bold py-3 px-6 rounded-lg hover:bg-slate-100 transition-colors">
                                Visit Help Center
                            </button>
                            <button
                                class="w-full sm:w-auto border border-slate-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-700 transition-colors">
                                Chat with Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>