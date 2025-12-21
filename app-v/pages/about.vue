<template>
  <main class="flex-1">
    <!-- Hero Section -->
    <section
      class="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 md:px-6 lg:px-40 flex items-center justify-center bg-slate-900 overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-black/50 z-10"></div>
        <div class="h-full w-full bg-cover bg-center"
          data-alt="Interior of a modern, well-organized retail store with clothing racks"
          style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA2mC5vlrER3FHZw4WUjBq-hnhejPX69KPe5QsP9gli0vyGSElDwWG09vEkDIgs0mL4ojVKkeYM6m52PoprT1qp7GIlt2u1DqIkEfLssdwxoKTPpn0ULcEtMmmnu1-IhUuaVxqnndVkRFjql4gr2nsgm3VHQbJFXP1X2HW1QjOkghqCH00Wkafxw4o-gcyLNNH0xL512zFiTGoXCFkIvVRXm6lAznJsxgFH4rzg2OsVaIf-gYsvFAI2QCkutOlyRWiyzg3fIh02YBcd');">
        </div>
      </div>
      <div class="relative z-20 flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
        <h1 class="text-4xl font-black tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Empowering Your Everyday
        </h1>
        <p class="mx-auto max-w-[700px] text-lg text-slate-200 md:text-xl">
          We bring the world's best products to your doorstep. Quality, speed, and transparency in every package.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 mt-8">
          <button
            class="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-bold text-white shadow transition-colors hover:bg-blue-700">
            Read Our Story
          </button>
        </div>
      </div>
    </section>
    <!-- Mission Section -->
    <section class="py-16 md:py-24 px-4 md:px-6 lg:px-40 bg-surface-light dark:bg-surface-dark">
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-6">Our Mission</h2>
        <p class="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
          Our goal is to make shopping simple, affordable, and transparent. We believe in quality products that improve
          your daily life without breaking the bank. We cut out the middlemen to bring you direct value, ensuring that
          every item you purchase brings a smile to your face.
        </p>
      </div>
    </section>
    <!-- Values Section -->
    <section class="py-16 bg-slate-50 dark:bg-slate-900 px-4 md:px-6 lg:px-40">
      <div class="mx-auto max-w-6xl">
        <div class="mb-12 text-center md:text-left">
          <h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4">Core Values</h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">The principles that guide every decision we
            make, from sourcing to shipping.</p>
        </div>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Card 1 -->
          <div
            class="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 shadow-sm transition-all hover:shadow-md hover:border-primary/50">
            <div
              class="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span class="material-symbols-outlined text-[32px]">favorite</span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Customer First</h3>
            <p class="text-slate-600 dark:text-slate-300">We listen to your needs above all else. Your feedback shapes
              our inventory and improves our services daily.</p>
          </div>
          <!-- Card 2 -->
          <div
            class="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 shadow-sm transition-all hover:shadow-md hover:border-primary/50">
            <div
              class="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span class="material-symbols-outlined text-[32px]">verified_user</span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Integrity</h3>
            <p class="text-slate-600 dark:text-slate-300">No hidden fees, strict honesty. What you see is what you pay,
              and we stand behind every product we sell.</p>
          </div>
          <!-- Card 3 -->
          <div
            class="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 shadow-sm transition-all hover:shadow-md hover:border-primary/50">
            <div
              class="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span class="material-symbols-outlined text-[32px]">lightbulb</span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Innovation</h3>
            <p class="text-slate-600 dark:text-slate-300">Constantly improving our platform. We leverage the latest tech
              to ensure your shopping experience is seamless.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- History / Timeline Section -->
    <section class="py-16 md:py-24 px-4 md:px-6 lg:px-40 bg-surface-light dark:bg-surface-dark overflow-hidden">
      <div class="mx-auto max-w-5xl">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Our Journey</h2>
          <p class="mt-4 text-lg text-slate-600 dark:text-slate-400">From a garage to a global warehouse.</p>
        </div>
        <div class="relative">
          <!-- Vertical Line -->
          <div
            class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200 dark:bg-slate-700 hidden md:block">
          </div>
          <div class="space-y-12 md:space-y-24">
            <!-- Timeline Item 1 -->
            <div class="relative flex flex-col md:flex-row items-center justify-between">
              <div class="md:w-1/2 pr-0 md:pr-12 text-center md:text-right mb-6 md:mb-0">
                <span
                  class="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-bold mb-2">2015</span>
                <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">The Garage Era</h3>
                <p class="text-slate-600 dark:text-slate-300">Started with 5 products and a dream in a small suburban
                  garage. We packed every box ourselves.</p>
              </div>
              <div
                class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-slate-900 hidden md:block">
              </div>
              <div class="md:w-1/2 pl-0 md:pl-12 flex justify-center md:justify-start">
                <img alt="Small cluttered workspace with boxes"
                  class="rounded-lg shadow-lg w-full max-w-sm h-48 object-cover"
                  data-alt="A small cluttered workspace representing the early days"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVVjJcEj_f211X3PKRPj1RW9suRyXqbs3l8t1QBXzg2dj6A1s_2j8MwnictyjaUvFx6TZwwY5bxhGhJAMPJg66AT6NvHr5KGfLX1_U2k2getlOy7KnxMz2AH9HPWL-4vFDEIIJbiiRYLqWW15UmRZ71sC7JNu8nPnTHaZGJGXUkLrjk-lzQkKgDeeBw_kQ05-L75XVCmJmQ1Ybxr6uhEy1w7WgqVjiu8TphJGBCNWnsCJ2sDN8vQqP5dZFIZzYoxEESCXtImifLQhu">
              </div>
            </div>
            <!-- Timeline Item 2 -->
            <div class="relative flex flex-col md:flex-row-reverse items-center justify-between">
              <div class="md:w-1/2 pl-0 md:pl-12 text-center md:text-left mb-6 md:mb-0">
                <span
                  class="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-bold mb-2">2018</span>
                <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">First Warehouse</h3>
                <p class="text-slate-600 dark:text-slate-300">Moved into our first dedicated 5,000 sq ft facility. We
                  expanded our team to 20 people.</p>
              </div>
              <div
                class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-slate-900 hidden md:block">
              </div>
              <div class="md:w-1/2 pr-0 md:pr-12 flex justify-center md:justify-end">
                <img alt="Large warehouse shelves stocked with boxes"
                  class="rounded-lg shadow-lg w-full max-w-sm h-48 object-cover"
                  data-alt="Rows of shelves in a warehouse filled with cardboard boxes"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfqMXlWq8BtQMaMa8GxdolC6PGDXkQvss9emuusdtiTrCocFVsBoZ04xHDpZqHXhMT-g_c_6L5POG1_87iWqoDNLGNCHe4vhRVm6kgvNjELFEqYsq1klxKJfkUnV5f_N-VR6jD7jdyTBjRmvnJwB97ZcT-l1XBGvkjROtiXAwoYLOsb7fylWGQY2PvT54CXzVIWVFmgoDNlM57YcdXfKzTmOVNUF2wXqjU51NuKDayqDMhSJ0_rhx1Lv5Dsv7uIcXG7WD7nYuAK858">
              </div>
            </div>
            <!-- Timeline Item 3 -->
            <div class="relative flex flex-col md:flex-row items-center justify-between">
              <div class="md:w-1/2 pr-0 md:pr-12 text-center md:text-right mb-6 md:mb-0">
                <span
                  class="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-bold mb-2">2024</span>
                <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">Going Global</h3>
                <p class="text-slate-600 dark:text-slate-300">Serving customers in over 30 countries with 24/7 support
                  and a catalog of 10,000+ items.</p>
              </div>
              <div
                class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-slate-900 hidden md:block">
              </div>
              <div class="md:w-1/2 pl-0 md:pl-12 flex justify-center md:justify-start">
                <img alt="Global map graphic with connection lines"
                  class="rounded-lg shadow-lg w-full max-w-sm h-48 object-cover"
                  data-alt="Abstract globe map showing worldwide connections"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuIcsddqU250Sui1Uj7yipOEQhJDN2otGUZfF5ZxIsqy2PDs57Bob2I4K43q9vM5cTUHHsWh37AmAht9E-vHRaPuq8ZWN92k-yGJx0TtCz5d6abQy-X2jUYctvQIUBqfjzP6ZyQiJBgOcWktI3tNuLdYFNug1B8kyBrw0KS4-NAa-g9P6QtmOvzDx0SddAw6KBLskjAF1VGkSM9IB-m9otQd_3gRgkKrHctNGuo6f713mGQZvNieMHJe3H_QZAhKlkB9hliDOOnW_l">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Difference / Feature Split Section -->
    <section class="py-16 bg-slate-50 dark:bg-slate-900 px-4 md:px-6 lg:px-40">
      <div class="mx-auto max-w-6xl space-y-24">
        <!-- Feature 1 -->
        <div class="flex flex-col lg:flex-row gap-12 items-center">
          <div class="w-full lg:w-1/2 order-2 lg:order-1">
            <div class="relative rounded-2xl overflow-hidden shadow-xl aspect-video group">
              <div class="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img alt="Team collaborating in a modern office"
                class="object-cover w-full h-full transform transition-transform group-hover:scale-105"
                data-alt="Two people working together over a laptop in a bright office"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQrB71JG5iCRMr7tsuIuFvQlK_P_Roo0u-vI2ovN95hO8w6rJ-N93YRIyRyAZBWtw4y_CCKp2lhMR00b5dC4Ru-cpgA7_rxv_1gjWDRHQ4kcv6mbd-uXXVcyqbbFDSWAwkKrEVDtBRzU9I6WYlldrajvpvG4AzP0FZq71j-3OEMI38VlvnehO74dGoiGFLxQJenj6kivXaILu4S-n-8P8A5W6C6-knQPQolrvhjSqLfOy4mVsqqQvaVSyV5FSwKDuCbTC-ldJLtMzl">
            </div>
          </div>
          <div class="w-full lg:w-1/2 order-1 lg:order-2 space-y-6">
            <h3 class="text-3xl font-bold text-slate-900 dark:text-white">Curated Quality, Guaranteed.</h3>
            <p class="text-lg text-slate-600 dark:text-slate-300">
              Unlike massive marketplaces flooded with low-quality knockoffs, we hand-pick every single item in our
              store. Our dedicated quality assurance team tests functionality, durability, and safety before a product
              ever reaches our digital shelves.
            </p>
            <ul class="space-y-3">
              <li class="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                <span class="material-symbols-outlined text-primary">check_circle</span>
                <span>Rigorously tested products</span>
              </li>
              <li class="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                <span class="material-symbols-outlined text-primary">check_circle</span>
                <span>Sustainable packaging</span>
              </li>
              <li class="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                <span class="material-symbols-outlined text-primary">check_circle</span>
                <span>30-day money back guarantee</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- Feature 2 -->
        <div class="flex flex-col lg:flex-row gap-12 items-center">
          <div class="w-full lg:w-1/2 space-y-6">
            <h3 class="text-3xl font-bold text-slate-900 dark:text-white">Human Support, not Bots.</h3>
            <p class="text-lg text-slate-600 dark:text-slate-300">
              When you have a question, you deserve a real answer. Our support team is based in-house and knows our
              products inside out. No automated loops, just helpful people ready to solve your problems.
            </p>
            <button class="text-primary font-bold hover:text-blue-700 inline-flex items-center gap-2">
              Contact Support <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          <div class="w-full lg:w-1/2">
            <div class="relative rounded-2xl overflow-hidden shadow-xl aspect-video group">
              <div class="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img alt="Customer support team smiling"
                class="object-cover w-full h-full transform transition-transform group-hover:scale-105"
                data-alt="Diverse group of people sitting around a table working"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9T65y4uQwUiYJHel8tq6ZOH9KAPDoJOFuusMEW-EzOW_BEuoXbP8x-EQJg3jXMIit2Vi6W2nxSaYAZgfnD_JT3aSZnP8aC_iFBrcH9FieIQ0E1NXfR7iWxpa3TLlWcosP1etHpRPSR9mgi5rLG-t4GXTH-tyf_FrUMzGAUQBJv5NejPhlC74aoWav6uhS6RITwlsjsuVVo89QJFT-BTW_ZBTuiTviO3qxauTavZEEnCwnvU5bkQjq75qAOVCiK2XZlpv8dLpCA4XR">
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Team Section -->
    <section class="py-16 md:py-24 px-4 md:px-6 lg:px-40 bg-surface-light dark:bg-surface-dark">
      <div class="mx-auto max-w-6xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4">Meet the Team</h2>
        <p class="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">Meet the people behind the
          packages. We are a diverse group of thinkers, makers, and doers.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Member 1 -->
          <div class="flex flex-col items-center">
            <div
              class="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-slate-100 dark:border-slate-800 shadow-md">
              <img alt="Sarah Johnson" class="w-full h-full object-cover"
                data-alt="Portrait of a smiling professional man in a suit"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCITE5czwlB0gIF9KayAGpY670GJnsrqcLlzExlqDka788YitOJdgroCFx51tycPpBC30Li5Sj8Nbhadat4nayyblz_YMndfMOrckF6P4h-KnxJXGaCtekXJejvvbRRlAG00pk3DNzcoeVs_ICgauWP9axzpxfTURkqwWLXb5X_7Gzg-OJFS8ylO3QFPT02WoMAEHi17izsDMndv8fxeL4ta56peejdPXTtr1RMA7VNQVikEKyLe3lVmf_Ivsvii9RJgNGtXuoDrFye">
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white">James Carter</h3>
            <p class="text-sm text-primary font-medium">CEO &amp; Founder</p>
          </div>
          <!-- Member 2 -->
          <div class="flex flex-col items-center">
            <div
              class="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-slate-100 dark:border-slate-800 shadow-md">
              <img alt="Elena Rodriguez" class="w-full h-full object-cover"
                data-alt="Portrait of a smiling professional woman wearing glasses"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjuu7eMbewyBPCsM7vPb5TqNappalKQgC_rFx6dZ8qEkVAiuQxo_3MlHik4ufYaMQe4teTBp2zltsTNuCvgTjS1gvmmUz5ayYCn037HUEOd2u0GnJkDaEQuAjCKYZ0WvSPXT1dYAz78WVQdsMlorVuJBy_1nDqfEW9rGeWU7hL6FF_Am3heAlwKkcMtGIb3tCuUq-FTQ0HxYPgRy-jezWgdEa4l0XGEgLo6Fu1t43arEpYwellCz1RuYuZe75khFp9oM19t_UFSOsK">
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white">Elena Rodriguez</h3>
            <p class="text-sm text-primary font-medium">Head of Operations</p>
          </div>
          <!-- Member 3 -->
          <div class="flex flex-col items-center">
            <div
              class="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-slate-100 dark:border-slate-800 shadow-md">
              <img alt="Michael Chen" class="w-full h-full object-cover"
                data-alt="Portrait of a professional man in a casual shirt"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmUAtnQSjQnO4CrLCjwiahHVG7PQdDemQjSodnO-DIwtXsKuBi72Txbp9jcV-rIdGwH9LHAQ8FCZtvMkOePopNA59H2Pquc-TEbYlaQ7I00SpjrkjSlWzrmiuWuG5BAKLEtbime9vXR_sEEvDrFMMAUXaRpp7ieMCaTsjBd_fJj6eQf8dB0q0rr63uRX7kzQqAW-NgSabwk0Dpt-1ufPT73rS77W9z3LBV_clSUDbfCoCuQ-Vb9RYdLA2gDSoXZVZiyW_SA3qY70gi">
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white">Michael Chen</h3>
            <p class="text-sm text-primary font-medium">Lead Curator</p>
          </div>
          <!-- Member 4 -->
          <div class="flex flex-col items-center">
            <div
              class="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-slate-100 dark:border-slate-800 shadow-md">
              <img alt="Sarah Williams" class="w-full h-full object-cover" data-alt="Portrait of a young woman smiling"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDDg8CIZBWJZy7sDBfaK4Ea6zzIHfpEdK7vsnNPthaYFuGXvl71qSMfyAeGm_Gs6WD5Wx0hKAgo4Xf1x9O8nA4gVdsjrkHCcVrem3uvcx7O3fN0K7iWj_cP8KTE8b5yuqcdRpWZMAUVEhavc5Dy2OPlVnc0bCQXSMZyci0pLuX_ok2fo6fMT58FIQtIA7h6oP0NAOSzHgmiM7lgGsqrjO63zegIHAab_BuUSB1Rc3IEy7dF_NGOVr4i8_XJAAHG7xEgCEwppFf4Sn5">
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white">Sarah Williams</h3>
            <p class="text-sm text-primary font-medium">Customer Success</p>
          </div>
        </div>
      </div>
    </section>
    <!-- CTA Footer -->
    <section class="py-16 px-4 md:px-6 lg:px-40 bg-primary">
      <div class="mx-auto max-w-4xl text-center text-white">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Ready to find what you need?</h2>
        <p class="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Explore our curated collection of high-quality products and experience the difference today.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            class="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 text-sm font-bold text-primary shadow hover:bg-slate-100 transition-colors">
            Browse Catalog
          </button>
          <button
            class="inline-flex h-12 items-center justify-center rounded-lg border-2 border-white bg-transparent px-8 text-sm font-bold text-white hover:bg-white/10 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  </main>
</template>
