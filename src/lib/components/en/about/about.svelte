<script>

import { twitterUser } from "$lib/name";

</script>
<div class="font-sans antialiased w-full">
  <div class="container mx-auto max-w-screen-xl">
    <main
      id="wrapper"
      class="flex flex-col sm:flex-row-reverse sm:m-12 shadow-2xl"
    >
      <div
        id="sidebar"
        class="w-full sm:max-w-sm p-8 bg-gradient-to-b from-blue-500 via-blue-300 to-blue-200"
      >
        <div class="px-2 mb-12">
          <!-- svelte-ignore a11y-img-redundant-alt -->
          <img
            src="/logo-no-bg.png"
            alt="Profile Picture"
            class="rounded-full w-48 mx-auto mb-2"
          />
          <h1 class="text-center text-3xl font-semibold mb-2">Ronnapat Srivoraviali</h1>
        </div>

        <div class="font-light text-lg px-2 mb-12">
          <h2 class="text-xl font-semibold mb-4">Contact</h2>
          <a href="/contact" class="flex items-center my-3">
            <i class="bi bi-box-arrow-up-right line w-6 mr-2"></i>
            <a href="/contact">Contact page</a>
          </a>
        </div>

        <div class="font-light text-lg px-2 mb-12">
          <h2 class="text-xl font-semibold mb-4">Personal</h2>
          <div class="flex items-center my-3">
            <span>Birthday : 24 May 2009</span>
          </div>
        </div>

        <div class="font-light text-lg px-2 mb-12">
          <h2 class="text-xl font-semibold mb-4">On the Web</h2>
          <a href="https://github.com/ronnapatp" target="_blank" class="flex items-center my-3">
            <i class="bi bi-github inline w-6 mr-2"></i>
            GitHub
          </a>
        </div>

        <div class="font-light text-lg px-2 mb-12">
          <h2 class="text-xl font-semibold mb-4">Languages</h2>
          <li>Thai</li>
          <li>English</li>
        </div>
      </div>

      <div class="content w-full p-12">
        <div id="profile" class="prose">
          <!-- <small><a href="/about">Download as pdf</a></small> -->
          <h1 class="text-3xl mb-2">Ronnapat Srivoraviali</h1>
          <p>
            Hi everyone ,Thank you for check out my personal website for my information please continue reading but if you have any question that don't in this page you can contact me in Contact page
          </p>
        </div>
        <hr class="mt-8 mb-12" />
        <div id="experience" class="prose">
          <h2 class="section-headline text-2xl">Education :</h2>
          <li>Chulalongkorn University Demonstration Elementary School</li>
          <li>Chulalongkorn University Demonstration Secondary School</li>
          <hr class="mt-8 mb-12" />
        </div>
        <div id="projects" class="prose">
          <h2 class="section-headline text-2xl">Project :</h2>
          <div class="mb-16">
            <h3 id="chrisko-headline">ronnapat.com</h3>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                What is this:
              </div>
              <div class="lg:inline-block lg:w-8/12 w-full">
                This is my personal website. In this website you can read about me read my blog also you can contact me in form
              </div>
            </section>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Website:
              </div>
              <div class="lg:inline-block lg:w-8/12 w-full">
                <a
                  href="https://ronnapat.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  >ronnapat.com</a
                >
              </div>
            </section>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Github repository:
              </div>
              <div class="lg:inline-block lg:w-8/12 w-full">
                Not public
              </div>
            </section>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Built with:
              </div>
              <div class="lg:inline-block lg:w-8/12 w-full">
                <span class="rounded-xl bg-blue-300 px-3">Svelte</span>
                <span class="rounded-xl bg-blue-300 px-3">Tailwindcss</span>
                <span class="rounded-xl bg-blue-300 px-3">Bootstrap icon</span>
                <span class="rounded-xl bg-blue-300 px-3">Supabase</span>
                <span class="rounded-xl bg-blue-300 px-3">Vercel</span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>