<script>
  import Cookies from '$lib/components/cookies.svelte';
  import {
    showCookies
  } from '$lib/store'
  import '../app.css'
  export const ssr = false;
  // function close() {
  //   $showCookies = false
  // }
  let Darkmode = false
</script>
  
<main class={Darkmode === true ? 'dark' : ''}>
  <div>
    <slot />
  </div>
</main>
<!-- {#if $showCookies}
  <Cookies  />
{/if} -->

