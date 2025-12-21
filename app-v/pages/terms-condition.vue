<template>
    <main class="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div class="flex flex-col lg:flex-row gap-10">
            <!-- Sticky Sidebar Navigation -->
            <aside class="w-full lg:w-72 flex-shrink-0 hidden lg:block">
                <div class="sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar pr-4">
                    <div
                        class="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-6">
                        <div class="mb-6">
                            <h3
                                class="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                                Contents</h3>
                            <div class="h-1 w-8 bg-primary rounded-full"></div>
                        </div>
                        <nav class="flex flex-col gap-1">
                            <a class="flex items-center justify-between px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-medium text-sm transition-all group"
                                href="#introduction">
                                <span>1. Introduction</span>
                                <span
                                    class="material-symbols-outlined text-lg opacity-100 group-hover:translate-x-1 transition-transform">chevron_right</span>
                            </a>
                            <a class="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-background-light dark:hover:bg-background-dark hover:text-slate-900 dark:hover:text-white font-medium text-sm transition-all group"
                                href="#account">
                                <span>2. Account Registration</span>
                            </a>
                            <a class="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-background-light dark:hover:bg-background-dark hover:text-slate-900 dark:hover:text-white font-medium text-sm transition-all group"
                                href="#orders">
                                <span>3. Orders &amp; Payments</span>
                            </a>
                            <a class="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-background-light dark:hover:bg-background-dark hover:text-slate-900 dark:hover:text-white font-medium text-sm transition-all group"
                                href="#shipping">
                                <span>4. Shipping &amp; Returns</span>
                            </a>
                            <a class="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-background-light dark:hover:bg-background-dark hover:text-slate-900 dark:hover:text-white font-medium text-sm transition-all group"
                                href="#intellectual">
                                <span>5. Intellectual Property</span>
                            </a>
                            <a class="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-background-light dark:hover:bg-background-dark hover:text-slate-900 dark:hover:text-white font-medium text-sm transition-all group"
                                href="#prohibited">
                                <span>6. Prohibited Activities</span>
                            </a>
                            <a class="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-background-light dark:hover:bg-background-dark hover:text-slate-900 dark:hover:text-white font-medium text-sm transition-all group"
                                href="#disclaimers">
                                <span>7. Disclaimers &amp; Liability</span>
                            </a>
                            <a class="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-background-light dark:hover:bg-background-dark hover:text-slate-900 dark:hover:text-white font-medium text-sm transition-all group"
                                href="#contact">
                                <span>8. Contact Information</span>
                            </a>
                        </nav>
                        <div class="mt-8 pt-6 border-t border-border-light dark:border-border-dark">
                            <p class="text-xs text-slate-500 mb-3">Need help with these terms?</p>
                            <button
                                class="w-full flex items-center justify-center gap-2 bg-slate-100 dark:bg-background-dark hover:bg-slate-200 dark:hover:bg-[#2a3441] text-slate-900 dark:text-white text-sm font-semibold py-2.5 rounded-lg transition-colors">
                                <span class="material-symbols-outlined text-[18px]">support_agent</span>
                                Contact Support
                            </button>
                        </div>
                    </div>
                </div>
            </aside>
            <!-- Main Document Content -->
            <article class="flex-1 min-w-0">
                <!-- Page Header -->
                <div class="mb-8">
                    <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                        <div>
                            <h1
                                class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
                                Terms &amp; Conditions</h1>
                            <p class="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                                Please read these terms and conditions carefully before using Our Service. By accessing
                                or using the Service you agree to be bound by these Terms.
                            </p>
                        </div>
                        <div class="flex-shrink-0">
                            <button
                                class="flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm transition-all active:scale-95">
                                <span class="material-symbols-outlined text-[20px]">download</span>
                                <span>Download PDF</span>
                            </button>
                        </div>
                    </div>
                    <div
                        class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 bg-white dark:bg-surface-dark w-fit px-4 py-2 rounded-full border border-border-light dark:border-border-dark shadow-sm">
                        <span class="material-symbols-outlined text-[18px]">schedule</span>
                        Last updated: October 26, 2023
                    </div>
                </div>
                <!-- Content Cards -->
                <div class="flex flex-col gap-6">
                    <!-- Section 1 -->
                    <section
                        class="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-6 sm:p-8 lg:p-10 scroll-mt-24"
                        id="introduction">
                        <div class="flex items-center gap-3 mb-4">
                            <span
                                class="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">1</span>
                            <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Introduction</h2>
                        </div>
                        <div
                            class="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed">
                            <p class="mb-4">
                                Welcome to ShopGeneral ("we," "our," or "us"). These Terms and Conditions govern your
                                use of our website located at shopgeneral.com (the "Service"). By accessing or using our
                                Service, you agree to comply with and be bound by these Terms. If you do not agree to
                                these Terms, please do not use our Service.
                            </p>
                            <p>
                                We reserve the right to modify these Terms at any time. We will provide notice of
                                significant changes by updating the date at the top of this page. Your continued use of
                                the Service after any such changes constitutes your acceptance of the new Terms.
                            </p>
                        </div>
                    </section>
                    <!-- Section 2 -->
                    <section
                        class="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-6 sm:p-8 lg:p-10 scroll-mt-24"
                        id="account">
                        <div class="flex items-center gap-3 mb-4">
                            <span
                                class="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">2</span>
                            <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Account Registration</h2>
                        </div>
                        <div
                            class="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed">
                            <p class="mb-4">To access certain features of our Service, you may be required to register
                                for an account. You agree to provide accurate, current, and complete information during
                                the registration process and to update such information to keep it accurate, current,
                                and complete.</p>
                            <ul class="list-disc pl-5 space-y-2 mb-4">
                                <li>You are responsible for safeguarding your password and for all activities that occur
                                    under your account.</li>
                                <li>You agree to notify us immediately of any unauthorized use of your account.</li>
                                <li>We reserve the right to suspend or terminate your account if any information
                                    provided proves to be inaccurate, not current, or incomplete.</li>
                            </ul>
                        </div>
                    </section>
                    <!-- Section 3 -->
                    <section
                        class="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-6 sm:p-8 lg:p-10 scroll-mt-24"
                        id="orders">
                        <div class="flex items-center gap-3 mb-4">
                            <span
                                class="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">3</span>
                            <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Orders &amp; Payments</h2>
                        </div>
                        <div
                            class="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed">
                            <p class="mb-4">
                                All orders placed through the Service are subject to our acceptance. We may refuse or
                                cancel any order for any reason, including but not limited to product availability,
                                errors in the description or price of the product, or error in your order.
                            </p>
                            <p class="mb-4 font-semibold text-slate-900 dark:text-white">Payment Terms:</p>
                            <div class="grid md:grid-cols-2 gap-4 mb-4">
                                <div
                                    class="p-4 rounded-lg bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark">
                                    <h4 class="font-bold text-slate-900 dark:text-white mb-2">Pricing</h4>
                                    <p class="text-sm">Prices for our products are subject to change without notice. We
                                        shall not be liable to you or to any third-party for any modification, price
                                        change, suspension or discontinuance of the Service.</p>
                                </div>
                                <div
                                    class="p-4 rounded-lg bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark">
                                    <h4 class="font-bold text-slate-900 dark:text-white mb-2">Billing</h4>
                                    <p class="text-sm">You agree to provide current, complete, and accurate purchase and
                                        account information for all purchases made at our store.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Section 4 -->
                    <section
                        class="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-6 sm:p-8 lg:p-10 scroll-mt-24"
                        id="shipping">
                        <div class="flex items-center gap-3 mb-4">
                            <span
                                class="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">4</span>
                            <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Shipping &amp; Returns</h2>
                        </div>
                        <div
                            class="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed">
                            <p class="mb-4">
                                We will ship products according to the shipping method selected by you during checkout.
                                Estimated delivery times are provided for convenience only and are not guaranteed.
                            </p>
                            <div class="p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-primary rounded-r-lg mb-4">
                                <p class="text-sm text-blue-800 dark:text-blue-100 italic">
                                    "Unless otherwise stated, you have 30 days from the date of receipt to return any
                                    item for a full refund, provided the item is in its original condition."
                                </p>
                            </div>
                            <p>For detailed information, please refer to our full <a
                                    class="text-primary hover:underline font-medium" href="#">Return Policy</a> page.
                            </p>
                        </div>
                    </section>
                    <!-- Section 5 -->
                    <section
                        class="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-6 sm:p-8 lg:p-10 scroll-mt-24"
                        id="intellectual">
                        <div class="flex items-center gap-3 mb-4">
                            <span
                                class="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">5</span>
                            <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Intellectual Property</h2>
                        </div>
                        <div
                            class="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed">
                            <p class="mb-4">
                                The Service and its original content, features, and functionality are and will remain
                                the exclusive property of ShopGeneral and its licensors. The Service is protected by
                                copyright, trademark, and other laws of both the United States and foreign countries.
                                Our trademarks and trade dress may not be used in connection with any product or service
                                without the prior written consent of ShopGeneral.
                            </p>
                        </div>
                    </section>
                    <!-- Section 6 -->
                    <section
                        class="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-6 sm:p-8 lg:p-10 scroll-mt-24"
                        id="prohibited">
                        <div class="flex items-center gap-3 mb-4">
                            <span
                                class="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">6</span>
                            <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Prohibited Activities</h2>
                        </div>
                        <div
                            class="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed">
                            <p class="mb-4">You may use the Service only for lawful purposes and in accordance with
                                these Terms. You agree not to use the Service:</p>
                            <ul class="list-disc pl-5 space-y-2">
                                <li>In any way that violates any applicable federal, state, local, or international law
                                    or regulation.</li>
                                <li>To exploit, harm, or attempt to exploit or harm minors in any way by exposing them
                                    to inappropriate content or otherwise.</li>
                                <li>To transmit, or procure the sending of, any advertising or promotional material,
                                    including any "junk mail", "chain letter," "spam," or any other similar
                                    solicitation.</li>
                                <li>To impersonate or attempt to impersonate the Company, a Company employee, another
                                    user, or any other person or entity.</li>
                            </ul>
                        </div>
                    </section>
                    <!-- Section 7 -->
                    <section
                        class="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-6 sm:p-8 lg:p-10 scroll-mt-24"
                        id="disclaimers">
                        <div class="flex items-center gap-3 mb-4">
                            <span
                                class="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">7</span>
                            <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Disclaimers &amp; Liability
                            </h2>
                        </div>
                        <div
                            class="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed">
                            <p class="mb-4">
                                YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK. THE SERVICE IS PROVIDED ON AN "AS IS" AND
                                "AS AVAILABLE" BASIS. THE SERVICE IS PROVIDED WITHOUT WARRANTIES OF ANY KIND, WHETHER
                                EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF
                                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT OR COURSE OF
                                PERFORMANCE.
                            </p>
                            <p>
                                IN NO EVENT SHALL SHOPGENERAL, NOR ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS,
                                SUPPLIERS, OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL
                                OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL,
                                OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO
                                ACCESS OR USE THE SERVICE.
                            </p>
                        </div>
                    </section>
                    <!-- Section 8 -->
                    <section
                        class="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-6 sm:p-8 lg:p-10 scroll-mt-24"
                        id="contact">
                        <div class="flex items-center gap-3 mb-4">
                            <span
                                class="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">8</span>
                            <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Contact Information</h2>
                        </div>
                        <div
                            class="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed">
                            <p class="mb-6">
                                If you have any questions about these Terms, please contact us:
                            </p>
                            <div class="grid sm:grid-cols-2 gap-4">
                                <a class="flex items-center p-4 rounded-lg bg-background-light dark:bg-background-dark hover:bg-slate-200 dark:hover:bg-[#2a3441] transition-colors group"
                                    href="mailto:legal@shopgeneral.com">
                                    <div
                                        class="size-10 rounded-full bg-white dark:bg-surface-dark flex items-center justify-center mr-4 shadow-sm group-hover:scale-110 transition-transform">
                                        <span class="material-symbols-outlined text-primary">mail</span>
                                    </div>
                                    <div>
                                        <p class="text-sm text-slate-500 dark:text-slate-400">Email Us</p>
                                        <p class="font-medium text-slate-900 dark:text-white">legal@shopgeneral.com</p>
                                    </div>
                                </a>
                                <div
                                    class="flex items-center p-4 rounded-lg bg-background-light dark:bg-background-dark">
                                    <div
                                        class="size-10 rounded-full bg-white dark:bg-surface-dark flex items-center justify-center mr-4 shadow-sm">
                                        <span class="material-symbols-outlined text-primary">location_on</span>
                                    </div>
                                    <div>
                                        <p class="text-sm text-slate-500 dark:text-slate-400">Mailing Address</p>
                                        <p class="font-medium text-slate-900 dark:text-white">123 Commerce Way, NY 10001
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </article>
        </div>
    </main>
</template>