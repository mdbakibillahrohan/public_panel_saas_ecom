<template>
  <main class="layout-container flex h-full grow flex-col">
    <!-- Breadcrumbs -->
    <div
      class="w-full flex justify-center bg-white dark:bg-background-dark border-b border-gray-100 dark:border-gray-800">
      <div class="max-w-5xl w-full px-4 md:px-10 py-4">
        <div class="flex flex-wrap items-center gap-2">
          <a class="text-gray-500 dark:text-gray-400 text-sm font-medium hover:text-primary" href="#">Home</a>
          <span class="material-symbols-outlined text-[16px] text-gray-400">chevron_right</span>
          <span class="text-gray-900 dark:text-white text-sm font-medium">Help Center</span>
        </div>
      </div>
    </div>
    <!-- Hero Section -->
    <div class="w-full flex justify-center py-6 md:py-10 px-4 md:px-10">
      <div class="layout-content-container flex flex-col max-w-5xl w-full">
        <div
          class="rounded-xl overflow-hidden relative min-h-[320px] flex flex-col items-center justify-center p-8 text-center bg-cover bg-center"
          data-alt="Dark abstract geometric pattern background representing support"
          style="background-image: linear-gradient(rgba(17, 22, 33, 0.7) 0%, rgba(17, 22, 33, 0.8) 100%), url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuBZvD77gtosGvZi9hMT6sG1-o14oAdHY-KczeCIqKr3FXp4WXD1WXzGgSNLUOdhiDftJU4MRJNs1dqvNioojw3_7cf8S2N94znab4dxYLouGEZrw_oo5tK5GU6JWRIACwOqjlxUQY7z61dAIfAOoaUHfA0A3hWFVnredFC8yPte7-UOHNLK2Wp2ldR_I94Vi7QCuWjZmKZNlH3BGjoH7XxtKbaebVcmXompe-f-W3wEZM4tUrjP2wH59unH_Ftiskxh51NihmiL8r3G&quot;);">
          <div class="relative z-10 flex flex-col gap-4 max-w-2xl w-full">
            <h1 class="text-white text-3xl md:text-5xl font-black leading-tight tracking-tight">
              How can we help you?
            </h1>
            <h2 class="text-gray-200 text-base md:text-lg font-normal mb-6">
              Browse topics or search for answers below
            </h2>
            <form
              class="flex w-full items-stretch rounded-lg h-14 bg-white dark:bg-gray-800 shadow-lg overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700 focus-within:ring-2 focus-within:ring-primary transition-shadow">
              <div class="flex items-center justify-center pl-4 text-gray-400">
                <span class="material-symbols-outlined">search</span>
              </div>
              <input
                class="flex-1 bg-transparent border-none text-gray-900 dark:text-white placeholder:text-gray-500 px-4 text-base focus:ring-0 focus:outline-none h-full"
                placeholder="Search for answers (e.g. 'track my order')" type="text">
              <button class="bg-primary text-white font-bold px-6 md:px-8 hover:bg-blue-700 transition-colors h-full">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Categories Grid -->
    <div class="w-full flex justify-center pb-8 px-4 md:px-10">
      <div class="max-w-5xl w-full flex flex-col">
        <h2 class="text-gray-900 dark:text-white text-2xl font-bold px-1 pb-6">Browse by Category</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <!-- Card 1 -->
          <a class="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 items-start hover:shadow-md hover:border-primary/50 dark:hover:border-primary/50 transition-all cursor-pointer"
            href="#">
            <div
              class="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-primary group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined text-3xl">local_shipping</span>
            </div>
            <div>
              <h3 class="text-gray-900 dark:text-white text-lg font-bold mb-1">Shipping &amp; Delivery</h3>
              <p class="text-gray-500 dark:text-gray-400 text-sm">Track orders, shipping rates, and delivery times.</p>
            </div>
          </a>
          <!-- Card 2 -->
          <a class="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 items-start hover:shadow-md hover:border-primary/50 dark:hover:border-primary/50 transition-all cursor-pointer"
            href="#">
            <div
              class="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-primary group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined text-3xl">assignment_return</span>
            </div>
            <div>
              <h3 class="text-gray-900 dark:text-white text-lg font-bold mb-1">Returns &amp; Refunds</h3>
              <p class="text-gray-500 dark:text-gray-400 text-sm">Return policies, labels, and refund status.</p>
            </div>
          </a>
          <!-- Card 3 -->
          <a class="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 items-start hover:shadow-md hover:border-primary/50 dark:hover:border-primary/50 transition-all cursor-pointer"
            href="#">
            <div
              class="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-primary group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined text-3xl">credit_card</span>
            </div>
            <div>
              <h3 class="text-gray-900 dark:text-white text-lg font-bold mb-1">Payments &amp; Billing</h3>
              <p class="text-gray-500 dark:text-gray-400 text-sm">Payment methods, security, and invoices.</p>
            </div>
          </a>
          <!-- Card 4 -->
          <a class="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 items-start hover:shadow-md hover:border-primary/50 dark:hover:border-primary/50 transition-all cursor-pointer"
            href="#">
            <div
              class="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-primary group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined text-3xl">account_circle</span>
            </div>
            <div>
              <h3 class="text-gray-900 dark:text-white text-lg font-bold mb-1">Account &amp; Orders</h3>
              <p class="text-gray-500 dark:text-gray-400 text-sm">Profile settings, password reset, and history.</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <!-- FAQ List Section -->
    <div class="w-full flex justify-center pb-12 px-4 md:px-10">
      <div class="max-w-5xl w-full flex flex-col lg:flex-row gap-8">
        <!-- Sidebar Navigation (Desktop) -->
        <div class="hidden lg:flex flex-col w-64 shrink-0 gap-2 sticky top-24 h-fit">
          <h3 class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 pl-3">Topics</h3>
          <a class="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary font-bold text-sm" href="#">
            <span class="material-symbols-outlined text-lg">star</span>
            Top Questions
          </a>
          <a class="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium text-sm transition-colors"
            href="#">
            <span class="material-symbols-outlined text-lg">local_shipping</span>
            Shipping
          </a>
          <a class="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium text-sm transition-colors"
            href="#">
            <span class="material-symbols-outlined text-lg">assignment_return</span>
            Returns
          </a>
          <a class="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium text-sm transition-colors"
            href="#">
            <span class="material-symbols-outlined text-lg">credit_card</span>
            Payments
          </a>
        </div>
        <!-- Accordion Content -->
        <div class="flex-1 flex flex-col gap-6">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">Top Questions</h2>
          <div class="flex flex-col gap-3">
            <!-- Question 1 -->
            <details
              class="group bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 open:ring-1 open:ring-primary/20">
              <summary
                class="flex cursor-pointer list-none items-center justify-between p-5 font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                <span class="text-base font-bold">How do I track my order?</span>
                <span class="transition-transform group-open:rotate-180">
                  <span class="material-symbols-outlined text-gray-400">expand_more</span>
                </span>
              </summary>
              <div class="px-5 pb-5 text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                <p class="mb-2">Once your order ships, you will receive an email with a tracking number and a link to
                  track your package.</p>
                <p>You can also track your order status in <a class="text-primary hover:underline font-medium"
                    href="#">My Orders</a> section of your account.</p>
              </div>
            </details>
            <!-- Question 2 -->
            <details
              class="group bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 open:ring-1 open:ring-primary/20">
              <summary
                class="flex cursor-pointer list-none items-center justify-between p-5 font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                <span class="text-base font-bold">What is your return policy?</span>
                <span class="transition-transform group-open:rotate-180">
                  <span class="material-symbols-outlined text-gray-400">expand_more</span>
                </span>
              </summary>
              <div class="px-5 pb-5 text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                We accept returns within 30 days of purchase. Items must be in their original condition and packaging.
                To initiate a return, visit our <a class="text-primary hover:underline font-medium" href="#">Returns
                  Center</a> to print a prepaid shipping label.
              </div>
            </details>
            <!-- Question 3 -->
            <details
              class="group bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 open:ring-1 open:ring-primary/20">
              <summary
                class="flex cursor-pointer list-none items-center justify-between p-5 font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                <span class="text-base font-bold">Do you offer international shipping?</span>
                <span class="transition-transform group-open:rotate-180">
                  <span class="material-symbols-outlined text-gray-400">expand_more</span>
                </span>
              </summary>
              <div class="px-5 pb-5 text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                Yes, we ship to over 100 countries worldwide. Shipping costs and delivery times vary by location and are
                calculated at checkout. Please note that customs duties may apply depending on your country's
                regulations.
              </div>
            </details>
            <!-- Question 4 -->
            <details
              class="group bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 open:ring-1 open:ring-primary/20">
              <summary
                class="flex cursor-pointer list-none items-center justify-between p-5 font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                <span class="text-base font-bold">How can I change my password?</span>
                <span class="transition-transform group-open:rotate-180">
                  <span class="material-symbols-outlined text-gray-400">expand_more</span>
                </span>
              </summary>
              <div class="px-5 pb-5 text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                Go to your Account Settings page and click on the "Security" tab. From there, you can enter your current
                password and set a new one. If you've forgotten your password, use the "Forgot Password" link on the
                login page.
              </div>
            </details>
            <!-- Question 5 -->
            <details
              class="group bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 open:ring-1 open:ring-primary/20">
              <summary
                class="flex cursor-pointer list-none items-center justify-between p-5 font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                <span class="text-base font-bold">What payment methods do you accept?</span>
                <span class="transition-transform group-open:rotate-180">
                  <span class="material-symbols-outlined text-gray-400">expand_more</span>
                </span>
              </summary>
              <div class="px-5 pb-5 text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google
                Pay. We also offer Buy Now, Pay Later options through select partners at checkout.
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
    <!-- Contact/Support Banner -->
    <div class="w-full flex justify-center pb-20 px-4 md:px-10">
      <div
        class="max-w-5xl w-full bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-100 dark:border-blue-900/30">
        <div class="flex items-center gap-5">
          <div class="bg-white dark:bg-gray-800 p-4 rounded-full shadow-sm text-primary">
            <span class="material-symbols-outlined text-3xl">support_agent</span>
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Still need help?</h3>
            <p class="text-gray-600 dark:text-gray-300 mt-1">Our support team is available 24/7 to assist you.</p>
          </div>
        </div>
        <div class="flex flex-wrap gap-3 w-full md:w-auto">
          <button
            class="flex-1 md:flex-none items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-sm font-bold shadow-sm hover:bg-blue-700 transition-colors whitespace-nowrap">
            Chat with us
          </button>
          <button
            class="flex-1 md:flex-none items-center justify-center rounded-lg h-12 px-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm font-bold border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors whitespace-nowrap">
            Email Support
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>

</script>

<style></style>