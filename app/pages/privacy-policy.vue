<template>
    <div class="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-10 py-8">
        <!-- Breadcrumbs -->
        <div class="flex flex-wrap gap-2 pb-6 text-sm">
            <a class="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" href="#">Home</a>
            <span class="text-slate-400">/</span>
            <a class="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" href="#">Legal</a>
            <span class="text-slate-400">/</span>
            <span class="text-slate-900 dark:text-slate-100 font-medium">Privacy Policy</span>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <!-- Sidebar: Table of Contents (Sticky) -->
            <aside class="hidden lg:block lg:col-span-3 sticky top-24">
                <div
                    class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 pl-3">On
                        this page</h3>
                    <nav class="flex flex-col space-y-1">
                        <a class="block px-3 py-2 text-sm font-medium text-primary bg-primary/10 rounded-lg"
                            href="#introduction">Introduction</a>
                        <a class="block px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                            href="#info-collect">Information We Collect</a>
                        <a class="block px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                            href="#how-use">How We Use Information</a>
                        <a class="block px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                            href="#cookies">Cookies &amp; Tracking</a>
                        <a class="block px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                            href="#security">Data Security</a>
                        <a class="block px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                            href="#rights">Your Rights</a>
                        <a class="block px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                            href="#contact">Contact Us</a>
                    </nav>
                    <div class="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                        <button
                            class="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                            <span class="material-symbols-outlined text-[20px]">picture_as_pdf</span>
                            Download as PDF
                        </button>
                    </div>
                </div>
            </aside>
            <!-- Main Document Content -->
            <main class="lg:col-span-9">
                <div
                    class="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                    <!-- Header Section -->
                    <div class="p-8 md:p-12 border-b border-gray-100 dark:border-gray-800">
                        <h1 class="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
                            Privacy Policy</h1>
                        <p class="text-slate-500 dark:text-slate-400 text-lg">We are committed to protecting your
                            personal data and your right to privacy.</p>
                        <!-- Metadata Grid -->
                        <div
                            class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 bg-background-light dark:bg-gray-800 rounded-lg p-4">
                            <div class="flex flex-col gap-1">
                                <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Last
                                    Updated</span>
                                <span class="text-sm font-medium text-slate-900 dark:text-white">October 24, 2023</span>
                            </div>
                            <div class="flex flex-col gap-1">
                                <span
                                    class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Effective
                                    Date</span>
                                <span class="text-sm font-medium text-slate-900 dark:text-white">October 24, 2023</span>
                            </div>
                            <div class="flex flex-col gap-1">
                                <span
                                    class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Version</span>
                                <span class="text-sm font-medium text-slate-900 dark:text-white">2.4</span>
                            </div>
                            <div class="flex flex-col gap-1">
                                <span
                                    class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Status</span>
                                <div class="flex items-center gap-2">
                                    <span class="size-2 rounded-full bg-green-500"></span>
                                    <span class="text-sm font-medium text-slate-900 dark:text-white">Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Content Body -->
                    <div class="p-8 md:p-12 space-y-12">
                        <!-- Introduction -->
                        <section class="scroll-mt-28" id="introduction">
                            <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-base md:text-lg">
                                At <strong>General Store</strong> ("we", "us", or "our"), we are committed to protecting
                                your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
                                your information when you visit our website including any other media form, media
                                channel, mobile website, or mobile application related or connected thereto. Please read
                                this privacy policy carefully. If you do not agree with the terms of this privacy
                                policy, please do not access the site.
                            </p>
                        </section>
                        <!-- Information We Collect -->
                        <section class="scroll-mt-28" id="info-collect">
                            <div class="flex items-center gap-3 mb-4">
                                <span class="p-2 bg-primary/10 rounded-lg text-primary">
                                    <span class="material-symbols-outlined">dataset</span>
                                </span>
                                <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Information We Collect
                                </h2>
                            </div>
                            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                                We may collect information about you in a variety of ways. The information we may
                                collect on the Site includes:
                            </p>
                            <div class="grid md:grid-cols-2 gap-6 mt-6">
                                <div
                                    class="p-5 rounded-lg border border-gray-100 dark:border-gray-800 bg-background-light dark:bg-gray-800/50">
                                    <h3 class="font-bold text-slate-900 dark:text-white mb-2">Personal Data</h3>
                                    <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                        Personally identifiable information, such as your name, shipping address, email
                                        address, and telephone number, and demographic information, such as your age,
                                        gender, hometown, and interests, that you voluntarily give to us when you
                                        register with the Site or when you choose to participate in various activities
                                        related to the Site.
                                    </p>
                                </div>
                                <div
                                    class="p-5 rounded-lg border border-gray-100 dark:border-gray-800 bg-background-light dark:bg-gray-800/50">
                                    <h3 class="font-bold text-slate-900 dark:text-white mb-2">Derivative Data</h3>
                                    <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                        Information our servers automatically collect when you access the Site, such as
                                        your IP address, your browser type, your operating system, your access times,
                                        and the pages you have viewed directly before and after accessing the Site.
                                    </p>
                                </div>
                            </div>
                        </section>
                        <!-- How We Use Your Information -->
                        <section class="scroll-mt-28" id="how-use">
                            <div class="flex items-center gap-3 mb-4">
                                <span class="p-2 bg-primary/10 rounded-lg text-primary">
                                    <span class="material-symbols-outlined">psychology</span>
                                </span>
                                <h2 class="text-2xl font-bold text-slate-900 dark:text-white">How We Use Your
                                    Information</h2>
                            </div>
                            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                                Having accurate information about you permits us to provide you with a smooth,
                                efficient, and customized experience. Specifically, we may use information collected
                                about you via the Site to:
                            </p>
                            <ul class="space-y-3 pl-2">
                                <li class="flex gap-3 text-slate-700 dark:text-slate-300">
                                    <span class="material-symbols-outlined text-green-500 shrink-0">check_circle</span>
                                    <span>Create and manage your account.</span>
                                </li>
                                <li class="flex gap-3 text-slate-700 dark:text-slate-300">
                                    <span class="material-symbols-outlined text-green-500 shrink-0">check_circle</span>
                                    <span>Process your orders and deliver the products you have purchased.</span>
                                </li>
                                <li class="flex gap-3 text-slate-700 dark:text-slate-300">
                                    <span class="material-symbols-outlined text-green-500 shrink-0">check_circle</span>
                                    <span>Email you regarding your account or order status.</span>
                                </li>
                                <li class="flex gap-3 text-slate-700 dark:text-slate-300">
                                    <span class="material-symbols-outlined text-green-500 shrink-0">check_circle</span>
                                    <span>Prevent fraudulent transactions, monitor against theft, and protect against
                                        criminal activity.</span>
                                </li>
                            </ul>
                        </section>
                        <!-- Cookies -->
                        <section class="scroll-mt-28" id="cookies">
                            <div class="flex items-center gap-3 mb-4">
                                <span class="p-2 bg-primary/10 rounded-lg text-primary">
                                    <span class="material-symbols-outlined">cookie</span>
                                </span>
                                <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Cookies and Web Beacons
                                </h2>
                            </div>
                            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
                                We may use cookies, web beacons, tracking pixels, and other tracking technologies on the
                                Site to help customize the Site and improve your experience. When you access the Site,
                                your personal information is not collected through the use of tracking technology. Most
                                browsers are set to accept cookies by default. You can remove or reject cookies, but be
                                aware that such action could affect the availability and functionality of the Site.
                            </p>
                        </section>
                        <!-- Security -->
                        <section class="scroll-mt-28" id="security">
                            <div class="flex items-center gap-3 mb-4">
                                <span class="p-2 bg-primary/10 rounded-lg text-primary">
                                    <span class="material-symbols-outlined">security</span>
                                </span>
                                <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Data Security</h2>
                            </div>
                            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                                We use administrative, technical, and physical security measures to help protect your
                                personal information. While we have taken reasonable steps to secure the personal
                                information you provide to us, please be aware that despite our efforts, no security
                                measures are perfect or impenetrable, and no method of data transmission can be
                                guaranteed against any interception or other type of misuse.
                            </p>
                        </section>
                        <!-- Your Rights -->
                        <section class="scroll-mt-28" id="rights">
                            <div class="flex items-center gap-3 mb-4">
                                <span class="p-2 bg-primary/10 rounded-lg text-primary">
                                    <span class="material-symbols-outlined">gavel</span>
                                </span>
                                <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Your Rights</h2>
                            </div>
                            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                                Depending on your location, you may have the following rights regarding your personal
                                data:
                            </p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="flex items-start gap-3">
                                    <div class="mt-1 size-2 rounded-full bg-primary shrink-0"></div>
                                    <p class="text-slate-700 dark:text-slate-300 text-sm"><strong>Right to
                                            Access:</strong> You have the right to request copies of your personal data.
                                    </p>
                                </div>
                                <div class="flex items-start gap-3">
                                    <div class="mt-1 size-2 rounded-full bg-primary shrink-0"></div>
                                    <p class="text-slate-700 dark:text-slate-300 text-sm"><strong>Right to
                                            Rectification:</strong> You can request that we correct any information you
                                        believe is inaccurate.</p>
                                </div>
                                <div class="flex items-start gap-3">
                                    <div class="mt-1 size-2 rounded-full bg-primary shrink-0"></div>
                                    <p class="text-slate-700 dark:text-slate-300 text-sm"><strong>Right to
                                            Erasure:</strong> You can request that we erase your personal data, under
                                        certain conditions.</p>
                                </div>
                                <div class="flex items-start gap-3">
                                    <div class="mt-1 size-2 rounded-full bg-primary shrink-0"></div>
                                    <p class="text-slate-700 dark:text-slate-300 text-sm"><strong>Right to Restrict
                                            Processing:</strong> You have the right to request that we restrict the
                                        processing of your personal data.</p>
                                </div>
                            </div>
                        </section>
                        <!-- Contact -->
                        <section class="scroll-mt-28" id="contact">
                            <div
                                class="bg-background-light dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                                <div
                                    class="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                                    <div class="flex-1">
                                        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">Have
                                            questions about your data?</h2>
                                        <p class="text-slate-600 dark:text-slate-400">If you have questions or comments
                                            about this Privacy Policy, please contact our Data Protection Officer.</p>
                                    </div>
                                    <div class="flex flex-col gap-3 w-full md:w-auto">
                                        <a class="flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full md:w-auto"
                                            href="mailto:privacy@generalstore.com">
                                            <span class="material-symbols-outlined">mail</span>
                                            privacy@generalstore.com
                                        </a>
                                        <div
                                            class="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                                            <span class="material-symbols-outlined text-[18px]">location_on</span>
                                            123 Store Street, Commerce City, 90210
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
