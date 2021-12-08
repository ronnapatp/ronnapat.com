<script>
  import {
    showCookies
  } from '$lib/store'

  function close() {
    $showCookies === false
  }
</script>
  
  
  <div>
    <slot />
  </div>
<!-- {#if $showCookies}
  <div class="justify-center">
    <div x-show="open"     
          x-transition:enter-start="opacity-0 scale-90" 
          x-transition:enter="transition duration-200 transform ease"
          x-transition:leave="transition duration-200 transform ease"
          x-transition:leave-end="opacity-0 scale-90"
          class="max-w-screen-lg mx-auto fixed bg-white inset-x-5 p-5 bottom-10 rounded-lg border-gray-500 border-2 drop-shadow-2xl flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between">
      <div class="w-full">
        This website uses cookies to ensure you get the best experience on our website. 
      </div>
      <div class="flex gap-4 items-center flex-shrink-0">
        <button class="text-indigo-600 focus:outline-none hover:underline">Decline</button>
        <button on:click={close} class="bg-indigo-500 px-5 py-2 text-white rounded-md hover:bg-indigo-700 focus:outline-none">Allow Coockies</button>
      </div>
    </div>
  </div>
{/if} -->

  <style>
    @tailwind base;
@tailwind components;
@tailwind utilities;
  </style>