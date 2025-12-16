<template>
    <main class="flex-grow w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <!-- Breadcrumbs -->
        <div class="flex items-center gap-2 text-sm mb-8 text-gray-500 dark:text-gray-400">
            <a class="hover:text-primary transition-colors" href="#">Home</a>
            <span class="material-symbols-outlined text-[16px]">chevron_right</span>
            <span class="text-[#111318] dark:text-white font-medium">My Account</span>
        </div>
        <div class="flex flex-col lg:flex-row gap-8">
            <!-- SideNavBar -->
            <aside class="w-full lg:w-72 flex-shrink-0">
                <div
                    class="bg-white dark:bg-[#1a202c] rounded-xl shadow-sm border border-[#f0f2f4] dark:border-gray-800 p-6">
                    <!-- User Profile Summary -->
                    <div class="flex items-center gap-4 mb-8">
                        <div class="relative size-14 rounded-full overflow-hidden bg-gray-200">
                            <img alt="User profile avatar image" class="w-full h-full object-cover"
                                data-alt="User profile avatar image"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3e2j_YAQc4stXUnVqzuoAySpSNa-YNT9rzUbXuHoFHGg1-GIUK-63lmWU44NTWxVTI1PsStp8GhtdLF8-YYUaGP9Fq72VHLpV-hzEwOO6buhJnTxcSlA_Jtr73CWS3IWkJsm7CETBJ2PcUmApsQHdNEW2RU759IAiizu51EcAEI12ZYRPkmvYoIImBqMxzBXWRaCCKAFAEXv1NmaVAESKnOVN1ipoCZkOs50N1wYyWbxseGLt7t5MXJTa_e9RbEfhZrFbNEzhieuW">
                        </div>
                        <div>
                            <h3 class="font-bold text-[#111318] dark:text-white">Jane Doe</h3>
                            <p class="text-sm text-gray-500 dark:text-gray-400">Gold Member</p>
                        </div>
                    </div>
                    <!-- Navigation Links -->
                    <nav class="space-y-1">
                        <a class="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-medium transition-colors"
                            href="#">
                            <span class="material-symbols-outlined fill">person</span>
                            Profile Information
                        </a>
                        <a class="flex items-center gap-3 px-4 py-3 rounded-lg text-[#636f88] dark:text-gray-400 hover:bg-background-light dark:hover:bg-gray-800 hover:text-[#111318] dark:hover:text-white transition-colors font-medium"
                            href="#">
                            <span class="material-symbols-outlined">package_2</span>
                            My Orders
                        </a>
                        <a class="flex items-center gap-3 px-4 py-3 rounded-lg text-[#636f88] dark:text-gray-400 hover:bg-background-light dark:hover:bg-gray-800 hover:text-[#111318] dark:hover:text-white transition-colors font-medium"
                            href="#">
                            <span class="material-symbols-outlined">location_on</span>
                            Addresses
                        </a>
                        <a class="flex items-center gap-3 px-4 py-3 rounded-lg text-[#636f88] dark:text-gray-400 hover:bg-background-light dark:hover:bg-gray-800 hover:text-[#111318] dark:hover:text-white transition-colors font-medium"
                            href="#">
                            <span class="material-symbols-outlined">credit_card</span>
                            Payment Methods
                        </a>
                        <a class="flex items-center gap-3 px-4 py-3 rounded-lg text-[#636f88] dark:text-gray-400 hover:bg-background-light dark:hover:bg-gray-800 hover:text-[#111318] dark:hover:text-white transition-colors font-medium"
                            href="#">
                            <span class="material-symbols-outlined">favorite</span>
                            Wishlist
                        </a>
                        <div class="pt-4 mt-4 border-t border-[#f0f2f4] dark:border-gray-800">
                            <a class="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors font-medium"
                                href="#">
                                <span class="material-symbols-outlined">logout</span>
                                Sign Out
                            </a>
                        </div>
                    </nav>
                </div>
            </aside>
            <!-- Main Content -->
            <div class="flex-1 space-y-6">
                <!-- Page Heading -->
                <div class="mb-6">
                    <h1 class="text-3xl font-bold tracking-tight text-[#111318] dark:text-white mb-2">My Profile</h1>
                    <p class="text-gray-500 dark:text-gray-400">Manage your personal information and account security
                        settings.</p>
                </div>
                <!-- Personal Information Card -->
                <div
                    class="bg-white dark:bg-[#1a202c] rounded-xl shadow-sm border border-[#f0f2f4] dark:border-gray-800 overflow-hidden">
                    <div
                        class="px-6 py-4 border-b border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center">
                        <h2 class="text-lg font-bold text-[#111318] dark:text-white">Personal Information</h2>
                        <button
                            class="text-sm font-medium text-primary hover:text-blue-700 transition-colors">Edit</button>
                    </div>
                    <div class="p-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-2">
                                <label class="text-sm font-medium text-[#111318] dark:text-gray-300">First Name</label>
                                <input
                                    class="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-background-light dark:bg-gray-800 text-[#111318] dark:text-white focus:border-primary focus:ring-primary"
                                    type="text" value="Jane">
                            </div>
                            <div class="space-y-2">
                                <label class="text-sm font-medium text-[#111318] dark:text-gray-300">Last Name</label>
                                <input
                                    class="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-background-light dark:bg-gray-800 text-[#111318] dark:text-white focus:border-primary focus:ring-primary"
                                    type="text" value="Doe">
                            </div>
                            <div class="space-y-2">
                                <label class="text-sm font-medium text-[#111318] dark:text-gray-300">Email
                                    Address</label>
                                <div class="relative">
                                    <span
                                        class="material-symbols-outlined absolute left-3 top-2.5 text-gray-500 text-[20px]">mail</span>
                                    <input
                                        class="w-full pl-10 rounded-lg border-gray-200 dark:border-gray-700 bg-background-light dark:bg-gray-800 text-[#111318] dark:text-white focus:border-primary focus:ring-primary"
                                        type="email" value="jane.doe@example.com">
                                </div>
                            </div>
                            <div class="space-y-2">
                                <label class="text-sm font-medium text-[#111318] dark:text-gray-300">Phone
                                    Number</label>
                                <div class="relative">
                                    <span
                                        class="material-symbols-outlined absolute left-3 top-2.5 text-gray-500 text-[20px]">call</span>
                                    <input
                                        class="w-full pl-10 rounded-lg border-gray-200 dark:border-gray-700 bg-background-light dark:bg-gray-800 text-[#111318] dark:text-white focus:border-primary focus:ring-primary"
                                        type="tel" value="+1 (555) 123-4567">
                                </div>
                            </div>
                        </div>
                        <div class="mt-6 flex justify-end">
                            <button
                                class="bg-primary hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors shadow-sm">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Grid for Address and Payment -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Default Address -->
                    <div
                        class="bg-white dark:bg-[#1a202c] rounded-xl shadow-sm border border-[#f0f2f4] dark:border-gray-800 flex flex-col">
                        <div
                            class="px-6 py-4 border-b border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center">
                            <h2 class="text-lg font-bold text-[#111318] dark:text-white">Default Address</h2>
                            <div class="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                                <span
                                    class="material-symbols-outlined text-green-600 dark:text-green-400 text-[20px]">check_circle</span>
                            </div>
                        </div>
                        <div class="p-6 flex-1">
                            <div class="flex items-start gap-4">
                                <div class="p-3 bg-background-light dark:bg-gray-800 rounded-lg">
                                    <span class="material-symbols-outlined text-gray-600 dark:text-gray-300">home</span>
                                </div>
                                <div>
                                    <p class="font-medium text-[#111318] dark:text-white">Home</p>
                                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                                        123 Market Street, Apt 4B<br>
                                        San Francisco, CA 94103<br>
                                        United States
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            class="px-6 py-4 bg-background-light dark:bg-gray-800/50 border-t border-[#f0f2f4] dark:border-gray-800 rounded-b-xl">
                            <a class="text-sm font-medium text-primary hover:underline" href="#">Manage Addresses</a>
                        </div>
                    </div>
                    <!-- Default Payment Method -->
                    <div
                        class="bg-white dark:bg-[#1a202c] rounded-xl shadow-sm border border-[#f0f2f4] dark:border-gray-800 flex flex-col">
                        <div
                            class="px-6 py-4 border-b border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center">
                            <h2 class="text-lg font-bold text-[#111318] dark:text-white">Default Payment</h2>
                            <span class="material-symbols-outlined text-gray-400 text-[20px]">lock</span>
                        </div>
                        <div class="p-6 flex-1">
                            <div class="flex items-center gap-4">
                                <div
                                    class="w-14 h-10 bg-blue-900 rounded-md flex items-center justify-center text-white font-bold italic text-xs">
                                    VISA
                                </div>
                                <div>
                                    <p class="font-medium text-[#111318] dark:text-white">Visa ending in 4242</p>
                                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                        Expires 12/25
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            class="px-6 py-4 bg-background-light dark:bg-gray-800/50 border-t border-[#f0f2f4] dark:border-gray-800 rounded-b-xl">
                            <a class="text-sm font-medium text-primary hover:underline" href="#">Manage Payment
                                Methods</a>
                        </div>
                    </div>
                </div>
                <!-- Security Section -->
                <div
                    class="bg-white dark:bg-[#1a202c] rounded-xl shadow-sm border border-[#f0f2f4] dark:border-gray-800">
                    <div class="px-6 py-4 border-b border-[#f0f2f4] dark:border-gray-800">
                        <h2 class="text-lg font-bold text-[#111318] dark:text-white">Security</h2>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-4">
                                <div class="p-3 bg-background-light dark:bg-gray-800 rounded-lg">
                                    <span class="material-symbols-outlined text-gray-600 dark:text-gray-300">key</span>
                                </div>
                                <div>
                                    <p class="font-medium text-[#111318] dark:text-white">Password</p>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">Last changed 3 months ago</p>
                                </div>
                            </div>
                            <button
                                class="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-[#111318] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>