<script>
  import Cookies from '$lib/components/cookies.svelte';
  import {
    showCookies
  } from '$lib/store'


  // function close() {
  //   $showCookies = false
  // }
</script>
  
  
  <div>
    <slot />
  </div>
<!-- {#if $showCookies}
  <Cookies  />
{/if} -->

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>