<script lang="ts">
    import { fullName } from '$lib/name'
    
    import Navbar from '$lib/components/en/home/navbar.svelte';
    import Heroes from '$lib/components/en/home/heroes.svelte';
    import Footer from '$lib/components/en/footer.svelte';
    let Darkmode = true
</script>


<svelte:head>
    <title>Home | {fullName}</title>
    <meta property="og:url" content="https://ronnapat.com/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Home | {fullName}" />
    <meta property="og:description" content="Personal website of {fullName}" />
    <meta property="og:image" content="https://ronnapat.com/logo.png" />
    <meta property="og:keywords" content="{fullName} , Ronnapat , ronnapatp , srivoravilai ">
    <meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:site" content="@ronnapatp">
	<meta name="twitter:title" content="Home | {fullName}">
	<meta name="twitter:description" content="Personal website of {fullName}">
	<meta name="twitter:creator" content="@ronnapatp">
    <meta name="twitter:image:src" content="https://ronnapat.com/logo.png">
	<meta name="twitter:domain" content="ronnapat.com">
</svelte:head>

<main class={Darkmode === true ? 'dark' : ''}>
<div class="w-full dark:bg-slate-900">
<Navbar />
<Heroes />
</div>
<Footer />
</main>