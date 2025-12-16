<template>
  <main class="flex-grow w-full max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 py-8">
    <!-- Page Heading & Controls -->
    <div class="flex flex-col md:flex-row flex-wrap justify-between gap-4 mb-8 items-end md:items-center">
      <div class="flex flex-col gap-2">
        <h1 class="text-[#111318] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">My Wishlist
        </h1>
        <p class="text-[#636f88] dark:text-gray-400 text-base font-normal leading-normal">5 items saved for later</p>
      </div>
      <div class="flex gap-3">
        <button
          class="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-white dark:bg-[#1A202C] border border-[#f0f2f4] dark:border-gray-700 text-[#111318] dark:text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
          <span class="truncate flex items-center gap-2">
            Filter
            <span class="material-symbols-outlined text-[18px]">filter_list</span>
          </span>
        </button>
        <button
          class="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f2f4] dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-[#111318] dark:text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors">
          <span class="truncate flex items-center gap-2">
            Sort by: Recently Added
            <span class="material-symbols-outlined text-[18px]">keyboard_arrow_down</span>
          </span>
        </button>
      </div>
    </div>
    <!-- Product Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <!-- Card 1 -->
      <div
        class="group flex flex-col bg-white dark:bg-[#1A202C] rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary/20">
        <div class="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
          <div
            class="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-105"
            data-alt="Sony headphones on a clean background"
            style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuAkhU9R37gIX6Pg_CL4FNr14GFTbx_lLAM5qYbUd_W7C4OVVYadL2ELnPGDJc8h9XxbjJLd7bn3hHiGqx8K6bnVWk5AneJqzVuwKJ5EDbWYfz711h-71j6dWQSU2P8a6MyVrSjjkadt6_AAp7a7U4hEkMBObz5ljaBkSTJR1e3Pxdb5bjUaMNLH5WNPT2SD0I8DuGuWJpNKI7CA9QLwsbU9pF_NUHHndiEZHBzXgWLc0ZgqOIZpymdboAudtHR0FzJU98CioHmw3yJ8&quot;);">
          </div>
          <button
            class="absolute top-3 right-3 p-2 bg-white/90 dark:bg-black/60 backdrop-blur-sm rounded-full text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
            title="Remove from wishlist">
            <span class="material-symbols-outlined text-[20px] fill-current">favorite</span>
          </button>
        </div>
        <div class="flex flex-col p-4 gap-3 flex-grow">
          <div class="flex-grow">
            <p class="text-[#636f88] dark:text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">Electronics
            </p>
            <h3
              class="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-2 line-clamp-2">
              Sony WH-1000XM5 Wireless Noise-Canceling Headphones</h3>
            <div class="flex items-center gap-1 mb-2">
              <span class="material-symbols-outlined text-yellow-400 text-[18px] fill-current"
                style="font-variation-settings: 'FILL' 1">star</span>
              <span class="text-sm font-medium dark:text-gray-300">4.8</span>
              <span class="text-sm text-gray-400">(2.1k)</span>
            </div>
          </div>
          <div class="flex flex-col gap-3 mt-auto">
            <div class="flex justify-between items-end">
              <div>
                <p class="text-primary text-xl font-bold leading-normal">$348.00</p>
                <p class="text-[#636f88] dark:text-green-400 text-sm font-medium flex items-center gap-1">
                  <span class="material-symbols-outlined text-[16px]">check_circle</span>
                  In Stock
                </p>
              </div>
            </div>
            <div class="grid grid-cols-[1fr_auto] gap-2">
              <button
                class="flex items-center justify-center rounded-lg h-10 px-4 bg-primary hover:bg-blue-700 text-white text-sm font-bold transition-colors">
                Add to Cart
              </button>
              <button
                class="flex items-center justify-center rounded-lg h-10 w-10 bg-red-50 dark:bg-red-900/20 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
                title="Remove">
                <span class="material-symbols-outlined text-[20px]">delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Card 2 -->
      <div
        class="group flex flex-col bg-white dark:bg-[#1A202C] rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary/20">
        <div class="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
          <div
            class="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-105"
            data-alt="Nike running shoes side profile"
            style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuC9nuHlEWTdVZ3ca6mbnHw-UW4meddgLiyAwm1q5ZxioXkeENlCYG3ieVdeYIU8tzoHFBkESIg16Hf13Btr7lFA7zK_2y7Z8nh1UzlnUj8ZYT6lQnyf9SVuHxFRTEhcRiUXyOlPFhqxjrLY0irx8iUW74B0r_mNr9BkoFgtajFyBthY2Y0VTvMWUqzevYdFAvaZbv10m8bNKOMOTbxXUt7b1F6Fn8TR0dnmX2LwuK3yYxvYB16cPnRQaOzs-bLF4J9TTQTa_D-mn1lJ&quot;);">
          </div>
          <button
            class="absolute top-3 right-3 p-2 bg-white/90 dark:bg-black/60 backdrop-blur-sm rounded-full text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
            title="Remove from wishlist">
            <span class="material-symbols-outlined text-[20px] fill-current">favorite</span>
          </button>
          <div
            class="absolute bottom-3 left-3 bg-white/90 dark:bg-black/80 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-orange-600 dark:text-orange-400">
            Low Stock</div>
        </div>
        <div class="flex flex-col p-4 gap-3 flex-grow">
          <div class="flex-grow">
            <p class="text-[#636f88] dark:text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">Footwear
            </p>
            <h3
              class="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-2 line-clamp-2">
              Nike Air Zoom Pegasus 39 Running Shoes</h3>
            <div class="flex items-center gap-1 mb-2">
              <span class="material-symbols-outlined text-yellow-400 text-[18px] fill-current"
                style="font-variation-settings: 'FILL' 1">star</span>
              <span class="text-sm font-medium dark:text-gray-300">4.5</span>
              <span class="text-sm text-gray-400">(856)</span>
            </div>
          </div>
          <div class="flex flex-col gap-3 mt-auto">
            <div class="flex justify-between items-end">
              <div>
                <p class="text-primary text-xl font-bold leading-normal">$120.00</p>
                <p class="text-orange-600 dark:text-orange-400 text-sm font-medium flex items-center gap-1">
                  <span class="material-symbols-outlined text-[16px]">warning</span>
                  Only 2 left
                </p>
              </div>
            </div>
            <div class="grid grid-cols-[1fr_auto] gap-2">
              <button
                class="flex items-center justify-center rounded-lg h-10 px-4 bg-primary hover:bg-blue-700 text-white text-sm font-bold transition-colors">
                Add to Cart
              </button>
              <button
                class="flex items-center justify-center rounded-lg h-10 w-10 bg-red-50 dark:bg-red-900/20 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
                title="Remove">
                <span class="material-symbols-outlined text-[20px]">delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Card 3 -->
      <div
        class="group flex flex-col bg-white dark:bg-[#1A202C] rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary/20">
        <div class="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
          <div
            class="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-105"
            data-alt="Elegant analog watch on wrist"
            style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuBzh7z_UXEVNKgDypUUiqPheRhV45lvOPE_Z_VE1ga1v_kVQcOwz07awTejqOEICfkIs9l8nPv3hLjApZwuZaGM_1HLpCFBmhtt7aD7U8R_TxFVHEp5gPWW9I92bJKsu43nkCF01KQe4Ih3BT0bnRTuNPL6M9_fTyEbTa_n8vVlbg1tm-dbA3hFbZVLiNGyTPSPV-ehJpJ8t2Qjzgr5WrmYiYiioI7YBHn9mDwxGK5rxf5w56xjmUtxZpfl2oq2o-tfn1zFqHxHMv9i&quot;);">
          </div>
          <button
            class="absolute top-3 right-3 p-2 bg-white/90 dark:bg-black/60 backdrop-blur-sm rounded-full text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
            title="Remove from wishlist">
            <span class="material-symbols-outlined text-[20px] fill-current">favorite</span>
          </button>
        </div>
        <div class="flex flex-col p-4 gap-3 flex-grow">
          <div class="flex-grow">
            <p class="text-[#636f88] dark:text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">Accessories
            </p>
            <h3
              class="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-2 line-clamp-2">
              Timex Weekender 40mm Smart Watch</h3>
            <div class="flex items-center gap-1 mb-2">
              <span class="material-symbols-outlined text-yellow-400 text-[18px] fill-current"
                style="font-variation-settings: 'FILL' 1">star</span>
              <span class="text-sm font-medium dark:text-gray-300">4.2</span>
              <span class="text-sm text-gray-400">(124)</span>
            </div>
          </div>
          <div class="flex flex-col gap-3 mt-auto">
            <div class="flex justify-between items-end">
              <div>
                <div class="flex items-center gap-2">
                  <p class="text-primary text-xl font-bold leading-normal">$45.00</p>
                  <p class="text-gray-400 line-through text-sm">$60.00</p>
                </div>
                <p class="text-[#636f88] dark:text-green-400 text-sm font-medium flex items-center gap-1">
                  <span class="material-symbols-outlined text-[16px]">check_circle</span>
                  In Stock
                </p>
              </div>
            </div>
            <div class="grid grid-cols-[1fr_auto] gap-2">
              <button
                class="flex items-center justify-center rounded-lg h-10 px-4 bg-primary hover:bg-blue-700 text-white text-sm font-bold transition-colors">
                Add to Cart
              </button>
              <button
                class="flex items-center justify-center rounded-lg h-10 w-10 bg-red-50 dark:bg-red-900/20 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
                title="Remove">
                <span class="material-symbols-outlined text-[20px]">delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Card 4 -->
      <div
        class="group flex flex-col bg-white dark:bg-[#1A202C] rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary/20">
        <div class="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
          <div
            class="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-105"
            data-alt="Modern backpack on grey background"
            style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuCdtd6vFN62s1SfCx7O620fuwLHfFKXBQhEZcQWMqxmlyCVVB-P8-8VPTV7gHcq70ITQUZXD-VHRAvfuYkaBxZ4z9uJc-yjE58HRkEi1AT_Kc1tt9KvYQ1-IuACXkwqu1KNOjc2GLMnmg1kCjZq-IccSyuEQiPA8JJRPd3H2rJ6_Zy4rUUUxFOvs4_fG0MBrHGmrRJkBtjGcMLdo6gDxfscEd7Ji9cuU-1a9ITmbitnu97qrhvvYEMN7USWBG0ePc0DBe61eGIWtiW7&quot;);">
          </div>
          <button
            class="absolute top-3 right-3 p-2 bg-white/90 dark:bg-black/60 backdrop-blur-sm rounded-full text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
            title="Remove from wishlist">
            <span class="material-symbols-outlined text-[20px] fill-current">favorite</span>
          </button>
        </div>
        <div class="flex flex-col p-4 gap-3 flex-grow">
          <div class="flex-grow">
            <p class="text-[#636f88] dark:text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">Travel</p>
            <h3
              class="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-2 line-clamp-2">
              Herschel Supply Co. Little America Backpack</h3>
            <div class="flex items-center gap-1 mb-2">
              <span class="material-symbols-outlined text-yellow-400 text-[18px] fill-current"
                style="font-variation-settings: 'FILL' 1">star</span>
              <span class="text-sm font-medium dark:text-gray-300">4.9</span>
              <span class="text-sm text-gray-400">(3.2k)</span>
            </div>
          </div>
          <div class="flex flex-col gap-3 mt-auto">
            <div class="flex justify-between items-end">
              <div>
                <p class="text-primary text-xl font-bold leading-normal">$109.99</p>
                <p class="text-[#636f88] dark:text-green-400 text-sm font-medium flex items-center gap-1">
                  <span class="material-symbols-outlined text-[16px]">check_circle</span>
                  In Stock
                </p>
              </div>
            </div>
            <div class="grid grid-cols-[1fr_auto] gap-2">
              <button
                class="flex items-center justify-center rounded-lg h-10 px-4 bg-primary hover:bg-blue-700 text-white text-sm font-bold transition-colors">
                Add to Cart
              </button>
              <button
                class="flex items-center justify-center rounded-lg h-10 w-10 bg-red-50 dark:bg-red-900/20 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
                title="Remove">
                <span class="material-symbols-outlined text-[20px]">delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Card 5 -->
      <div
        class="group flex flex-col bg-white dark:bg-[#1A202C] rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary/20">
        <div class="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
          <div
            class="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-105"
            data-alt="Vintage film camera on wooden table"
            style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuAQgkq1Wpj_LYmWopDrvtwkiJZcxN_2zlNoJxtgLNLf0vKdlgqWKf4QFum8kt5DW53rx-ypzal9TsHmmRGeK7E3xoWbLttKD8ZofYTg-BpKtpAjV3jtjnegFgI8WuPAptuhKLl_ZkJ-8iX0EMG3wSOVKQnnMA6BHbINipWBl6x10-vwnZ30p5Dh1AKQ878YwEczy0fDnutNq58P16gugQveK7bYOtG4pKD7T4B2PoGXgghRROj8UtXudOic3J2GBJj6TEZoNTdxfByT&quot;);">
          </div>
          <button
            class="absolute top-3 right-3 p-2 bg-white/90 dark:bg-black/60 backdrop-blur-sm rounded-full text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
            title="Remove from wishlist">
            <span class="material-symbols-outlined text-[20px] fill-current">favorite</span>
          </button>
        </div>
        <div class="flex flex-col p-4 gap-3 flex-grow">
          <div class="flex-grow">
            <p class="text-[#636f88] dark:text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">Photography
            </p>
            <h3
              class="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-2 line-clamp-2">
              Fujifilm X-T5 Mirrorless Camera Body</h3>
            <div class="flex items-center gap-1 mb-2">
              <span class="material-symbols-outlined text-yellow-400 text-[18px] fill-current"
                style="font-variation-settings: 'FILL' 1">star</span>
              <span class="text-sm font-medium dark:text-gray-300">5.0</span>
              <span class="text-sm text-gray-400">(42)</span>
            </div>
          </div>
          <div class="flex flex-col gap-3 mt-auto">
            <div class="flex justify-between items-end">
              <div>
                <p class="text-primary text-xl font-bold leading-normal">$1,699.00</p>
                <p class="text-[#636f88] dark:text-green-400 text-sm font-medium flex items-center gap-1">
                  <span class="material-symbols-outlined text-[16px]">check_circle</span>
                  In Stock
                </p>
              </div>
            </div>
            <div class="grid grid-cols-[1fr_auto] gap-2">
              <button
                class="flex items-center justify-center rounded-lg h-10 px-4 bg-primary hover:bg-blue-700 text-white text-sm font-bold transition-colors">
                Add to Cart
              </button>
              <button
                class="flex items-center justify-center rounded-lg h-10 w-10 bg-red-50 dark:bg-red-900/20 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
                title="Remove">
                <span class="material-symbols-outlined text-[20px]">delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Optional: Suggestions / Footer area for discovery -->
    <div class="mt-16 border-t border-[#f0f2f4] dark:border-gray-800 pt-8">
      <h2 class="text-2xl font-bold text-[#111318] dark:text-white mb-6">You might also like</h2>
      <div class="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory">
        <div class="min-w-[200px] w-[200px] snap-center flex flex-col gap-2">
          <div class="w-full h-32 bg-gray-200 dark:bg-gray-700 rounded-lg bg-cover bg-center"
            data-alt="Abstract colorful gradient pattern"
            style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuCE6YcOJ2iC3FXeWqtIOnKuokA5mZU-v7skhC8JO792F879svQ7q-2LY_RVuYf6sFqh1CToIgFvqTADRGRcVQZ4dsKbxvsO64gTKeVTYGncCrqiymdYL4PP_1CfvV3ZuKfTytZV9WarN3ZJkGxcoBXn_Mwx98rVVWWu6OJoMjaquEFuYXvEqVul9Jwp0WEDhYb3xoDcrWIky0sjePwjiepVIFKwdHo8rjVKTadTHrqfKsVq-1_KpZiGSooXigv04ZTcQTknScxgLvbS&quot;);">
          </div>
          <p class="font-medium text-sm text-[#111318] dark:text-white truncate">Premium Yoga Mat</p>
          <p class="text-primary font-bold text-sm">$29.99</p>
        </div>
        <div class="min-w-[200px] w-[200px] snap-center flex flex-col gap-2">
          <div class="w-full h-32 bg-gray-200 dark:bg-gray-700 rounded-lg bg-cover bg-center"
            data-alt="Minimalist desk lamp"
            style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuCQCYMSmW966l6qFggyV0tdZLI1_ldN17pIygX6x5XuyMn6A-9PDzfwSHIjQhZbgebyh80qY6DXGQop5PSyoX-k2Khp3UU2o9j-YubAd7wf7Xh5sL95TgJF5J3FQT1rilhQ8bem-s3CepELmZbYeDko8pwqS6O8Ni7Sqn3q4wExdorFW69YERiJprQ8nuzy-JjgUE7gHDuiZdfL_uCDxoGripwYIhV12-hJZUv_AD7-cSz_iKZLptazs69Kk0dx7ez0zBhC6uLYe05v&quot;);">
          </div>
          <p class="font-medium text-sm text-[#111318] dark:text-white truncate">LED Desk Lamp</p>
          <p class="text-primary font-bold text-sm">$45.00</p>
        </div>
        <div class="min-w-[200px] w-[200px] snap-center flex flex-col gap-2">
          <div class="w-full h-32 bg-gray-200 dark:bg-gray-700 rounded-lg bg-cover bg-center"
            data-alt="Ceramic coffee mug"
            style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuALcKlmkMLDgxRSf_NMtihghTGlM43S7mMls54JHE4_5Zj8vLhP--zWwc0iHTIBCmsaquLxReRU-OPm7aukxo7ePWab3YpJc3El1VcVjeSFtTE3B0W6TeiKubiD-iQ3EowjTVaoD5qex1XKi_XxUJjGFELF_fCzHgL6vuSnhZ-stKCcDdNUrnmZWrFTNedhYG-s9OoHev9Tf99Jwo1bOp2LqWZpfZdK7wDXA1m399MUJlGn-MrWJvYE-RjNczOYho-3MELPd318UXFD&quot;);">
          </div>
          <p class="font-medium text-sm text-[#111318] dark:text-white truncate">Artisan Coffee Mug</p>
          <p class="text-primary font-bold text-sm">$18.50</p>
        </div>
        <div class="min-w-[200px] w-[200px] snap-center flex flex-col gap-2">
          <div class="w-full h-32 bg-gray-200 dark:bg-gray-700 rounded-lg bg-cover bg-center" data-alt="Leather wallet"
            style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuBdFjatrdE2adSnbWgs2n7VIZHZE6x214ZWCrouH7q9Md33Mq60Ipv7dOP6Vg_iIYH6VUAvbu2qRYEic0YG9uUCJyYiak8aZ8c5eRufEzmATUwbWqAcUMTytFNsN118OhRB67I1jMDIsTaNhdrDYZVWqk1mbbXf_xcn-7fr0CZ6d5hPu0QwzetKjgZQgipiDD3jWBFyTFPBcLEyej565-OmlgzQ2UgY2Zf0-4TybzGV5FpBqdPAzj58qo5a0L8ZPOCYHoMLOt9aLgMQ&quot;);">
          </div>
          <p class="font-medium text-sm text-[#111318] dark:text-white truncate">Leather Bifold Wallet</p>
          <p class="text-primary font-bold text-sm">$55.00</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>

</script>

<style></style>