<script>
  import Cookies from '$lib/components/cookies.svelte';
  import {
    showCookies
  } from '$lib/store'
  import '../app.css'

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

