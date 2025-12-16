<template>
    <div class="layout-container flex flex-col bg-white dark:bg-surface-dark">
        <div class="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
            <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div class="@container">
                    <div class="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row-reverse items-center">
                        <div class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl shadow-sm @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-1/2"
                            data-alt="Customer support team member smiling while wearing a headset"
                            style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuCZmmsWkxoFWR4q3I24_lj643rnwX8gLEofYXnhayyrqN4sqcexyB7CVFWIOzeiSisfYv2j7HFnMG-TlHhYvjxnZ2dLwiPX1mmr9YiqJ9169SarAYzJcg2H47zD9z9wGYRmgGacxlA_MZXykbqL74E5_-c3gwmTrWDCzP2GBFPSQ_ZMUhZHq6LC0QDlRAyFxwbK3Q1ksgDAp5vuWjFtP92jf7tco4p9wo_k7oR4LcegZCBleI76cu5oGQqbVIZbQ0oktAYkavupgWQN&quot;);">
                        </div>
                        <div
                            class="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center @[864px]:w-1/2">
                            <div class="flex flex-col gap-4 text-left">
                                <h1
                                    class="text-[#111318] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                                    We're here to help
                                </h1>
                                <h2 class="text-[#636f88] dark:text-gray-300 text-lg font-normal leading-relaxed">
                                    Have a question about your order or our products? Fill out the form below or reach
                                    us directly. Our team is ready to assist you.
                                </h2>
                            </div>
                            <div class="flex gap-4">
                                <button
                                    class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
                                    <span class="truncate">Start Chat</span>
                                </button>
                                <a class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#f0f2f4] dark:bg-gray-800 text-[#111318] dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                    href="#faq">
                                    <span class="truncate">Read FAQ</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <div class="layout-container flex flex-col">
        <div class="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
            <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div class="flex flex-col gap-10 px-4 py-10 @container">
                    <div class="flex flex-col gap-4">
                        <h2 class="text-[#111318] dark:text-white tracking-light text-[32px] font-bold leading-tight">
                            Ways to Reach Us
                        </h2>
                        <p class="text-[#636f88] dark:text-gray-400 text-base font-normal leading-normal max-w-[720px]">
                            Choose the method that works best for you. We look forward to hearing from you.</p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-0">
                        <!-- Phone -->
                        <div
                            class="flex flex-1 gap-4 rounded-xl border border-[#dcdfe5] dark:border-gray-700 bg-white dark:bg-surface-dark p-6 flex-col hover:shadow-md transition-shadow">
                            <div
                                class="text-primary size-10 flex items-center justify-center bg-primary/10 rounded-full">
                                <span class="material-symbols-outlined">call</span>
                            </div>
                            <div class="flex flex-col gap-2">
                                <h3 class="text-[#111318] dark:text-white text-lg font-bold leading-tight">Phone Support
                                </h3>
                                <p class="text-[#636f88] dark:text-gray-400 text-sm font-normal leading-normal">+1 (555)
                                    123-4567</p>
                                <p class="text-[#636f88] dark:text-gray-500 text-xs font-normal">Mon-Fri, 9am - 5pm EST
                                </p>
                            </div>
                        </div>
                        <!-- Email -->
                        <div
                            class="flex flex-1 gap-4 rounded-xl border border-[#dcdfe5] dark:border-gray-700 bg-white dark:bg-surface-dark p-6 flex-col hover:shadow-md transition-shadow">
                            <div
                                class="text-primary size-10 flex items-center justify-center bg-primary/10 rounded-full">
                                <span class="material-symbols-outlined">mail</span>
                            </div>
                            <div class="flex flex-col gap-2">
                                <h3 class="text-[#111318] dark:text-white text-lg font-bold leading-tight">Email Us</h3>
                                <p class="text-[#636f88] dark:text-gray-400 text-sm font-normal leading-normal">
                                    support@generalstore.com</p>
                                <p class="text-[#636f88] dark:text-gray-500 text-xs font-normal">Replies within 24 hours
                                </p>
                            </div>
                        </div>
                        <!-- Visit -->
                        <div
                            class="flex flex-1 gap-4 rounded-xl border border-[#dcdfe5] dark:border-gray-700 bg-white dark:bg-surface-dark p-6 flex-col hover:shadow-md transition-shadow">
                            <div
                                class="text-primary size-10 flex items-center justify-center bg-primary/10 rounded-full">
                                <span class="material-symbols-outlined">location_on</span>
                            </div>
                            <div class="flex flex-col gap-2">
                                <h3 class="text-[#111318] dark:text-white text-lg font-bold leading-tight">Visit Us</h3>
                                <p class="text-[#636f88] dark:text-gray-400 text-sm font-normal leading-normal">123
                                    Commerce Way</p>
                                <p class="text-[#636f88] dark:text-gray-500 text-xs font-normal">Retail City, ST 12345
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="layout-container flex flex-col mb-20">
        <div class="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
            <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div class="flex flex-col lg:flex-row gap-8 px-4">
                    <!-- Inquiry Form -->
                    <div
                        class="flex-1 flex flex-col gap-6 bg-white dark:bg-surface-dark p-8 rounded-xl border border-[#dcdfe5] dark:border-gray-700 shadow-sm">
                        <div class="flex flex-col gap-2">
                            <h2 class="text-[#111318] dark:text-white text-2xl font-bold leading-tight">Send us a
                                message</h2>
                            <p class="text-[#636f88] dark:text-gray-400 text-sm">Fill out the form below and we'll get
                                back to you as soon as possible.</p>
                        </div>
                        <form class="flex flex-col gap-4">
                            <!-- Name Field -->
                            <div class="flex flex-col gap-1.5">
                                <label class="text-[#111318] dark:text-gray-200 text-sm font-medium" for="name">Full
                                    Name</label>
                                <input
                                    class="w-full rounded-lg bg-[#f0f2f4] dark:bg-gray-800 border-none text-[#111318] dark:text-white placeholder:text-[#636f88] dark:placeholder:text-gray-500 h-12 px-4 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-gray-900 transition-all"
                                    id="name" placeholder="Jane Doe" type="text">
                            </div>
                            <!-- Email Field -->
                            <div class="flex flex-col gap-1.5">
                                <label class="text-[#111318] dark:text-gray-200 text-sm font-medium" for="email">Email
                                    Address</label>
                                <input
                                    class="w-full rounded-lg bg-[#f0f2f4] dark:bg-gray-800 border-none text-[#111318] dark:text-white placeholder:text-[#636f88] dark:placeholder:text-gray-500 h-12 px-4 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-gray-900 transition-all"
                                    id="email" placeholder="jane@example.com" type="email">
                            </div>
                            <!-- Subject Dropdown -->
                            <div class="flex flex-col gap-1.5">
                                <label class="text-[#111318] dark:text-gray-200 text-sm font-medium" for="subject">What
                                    can we help you with?</label>
                                <div class="relative">
                                    <select
                                        class="w-full rounded-lg bg-[#f0f2f4] dark:bg-gray-800 border-none text-[#111318] dark:text-white h-12 px-4 pr-10 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-gray-900 appearance-none transition-all cursor-pointer"
                                        id="subject">
                                        <option>Order Status</option>
                                        <option>Returns &amp; Exchanges</option>
                                        <option>Product Information</option>
                                        <option>Other</option>
                                    </select>
                                    <div
                                        class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-[#636f88] dark:text-gray-400">
                                        <span class="material-symbols-outlined">expand_more</span>
                                    </div>
                                </div>
                            </div>
                            <!-- Message Field -->
                            <div class="flex flex-col gap-1.5">
                                <label class="text-[#111318] dark:text-gray-200 text-sm font-medium"
                                    for="message">Message</label>
                                <textarea
                                    class="w-full rounded-lg bg-[#f0f2f4] dark:bg-gray-800 border-none text-[#111318] dark:text-white placeholder:text-[#636f88] dark:placeholder:text-gray-500 p-4 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-gray-900 resize-none transition-all"
                                    id="message" placeholder="How can we help?" rows="4"></textarea>
                            </div>
                            <!-- Submit Button -->
                            <button
                                class="mt-2 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
                                type="button">
                                Send Message
                            </button>
                        </form>
                    </div>
                    <!-- Map & Social Sidebar -->
                    <div class="flex-1 flex flex-col gap-6">
                        <!-- Map Card -->
                        <div
                            class="rounded-xl overflow-hidden border border-[#dcdfe5] dark:border-gray-700 bg-white dark:bg-surface-dark shadow-sm h-min">
                            <div class="w-full h-[300px] bg-center bg-no-repeat bg-cover relative"
                                data-alt="Map showing the location of the general store in a city grid"
                                data-location="Retail City, USA"
                                style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuDdNGAIv3gZygMl6rtmm0C4JkEJyxXiRpORmJz-UU755juYbKwd7SIfvgCKv7eKJwLMefzjmM9a-bZQybSrhhwYzfvI6ItVyID2PoAszHe6hITXPBzYIJIkcdJ6kOlxTwfhM82WpzhRhqIlpNLNwrJcVfQ7BTBuFu6Hy-cLceTB4qGgZJKiEPIb2RmIjV0KSqx849wOG9IZ0kjbD-a_6xvFuwZxiX8L9ON8zxYZtUjtBMOr6mFxLe946c8h-n9u3oFHdkrIhoV1JCAC&quot;);">
                                <div
                                    class="absolute inset-0 bg-black/10 flex items-center justify-center group cursor-pointer">
                                    <div
                                        class="bg-white text-primary p-3 rounded-full shadow-lg transform transition-transform group-hover:scale-110">
                                        <span class="material-symbols-outlined">location_on</span>
                                    </div>
                                </div>
                            </div>
                            <div class="p-6">
                                <h3 class="text-[#111318] dark:text-white text-lg font-bold mb-2">Our Store</h3>
                                <p class="text-[#636f88] dark:text-gray-400 text-sm leading-relaxed mb-4">
                                    Come visit our flagship store in the heart of Retail City. We have free parking
                                    available for all customers.
                                </p>
                                <button class="text-primary text-sm font-bold hover:underline flex items-center gap-1">
                                    Get Directions <span
                                        class="material-symbols-outlined text-[16px]">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                        <!-- Social Media -->
                        <div
                            class="rounded-xl border border-[#dcdfe5] dark:border-gray-700 bg-white dark:bg-surface-dark p-6 shadow-sm">
                            <h3 class="text-[#111318] dark:text-white text-lg font-bold mb-4">Connect With Us</h3>
                            <div class="flex gap-4">
                                <a class="size-10 rounded-full bg-[#f0f2f4] dark:bg-gray-800 flex items-center justify-center text-[#111318] dark:text-white hover:bg-primary hover:text-white transition-colors"
                                    href="#">
                                    <span class="material-symbols-outlined text-[20px]">public</span>
                                    <!-- Generic Web/Globe -->
                                </a>
                                <a class="size-10 rounded-full bg-[#f0f2f4] dark:bg-gray-800 flex items-center justify-center text-[#111318] dark:text-white hover:bg-primary hover:text-white transition-colors"
                                    href="#">
                                    <span class="material-symbols-outlined text-[20px]">group</span>
                                    <!-- Generic Community -->
                                </a>
                                <a class="size-10 rounded-full bg-[#f0f2f4] dark:bg-gray-800 flex items-center justify-center text-[#111318] dark:text-white hover:bg-primary hover:text-white transition-colors"
                                    href="#">
                                    <span class="material-symbols-outlined text-[20px]">share</span>
                                    <!-- Generic Share -->
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="layout-container flex flex-col border-t border-[#f0f2f4] dark:border-gray-800 bg-white dark:bg-surface-dark"
        id="faq">
        <div class="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-12">
            <div class="layout-content-container flex flex-col max-w-[960px] flex-1 text-center">
                <h2 class="text-[#111318] dark:text-white text-2xl font-bold mb-4">Common Questions</h2>
                <p class="text-[#636f88] dark:text-gray-400 text-base mb-8">Can't find what you're looking for? Check
                    our frequently asked questions.</p>
                <div class="flex justify-center">
                    <button class="flex items-center gap-2 text-primary font-bold hover:underline">
                        Visit Help Center <span class="material-symbols-outlined text-[18px]">open_in_new</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>