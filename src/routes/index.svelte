<script lang="ts">
    const fullName = "Ronnapat Srivoravilai";
    const title = "HOME | Ronnapat Srivoravilai"
    
    import Hero from '../components/heroes.svelte'
    import Me from '../components/me.svelte'
</script>


<svelte:head>
    <title>{title}</title>
    <meta property="og:url" content="https://ronnapat.com/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{title}" />
    <meta property="og:description" content="Personal website of {fullName}" />
    <meta property="og:image" content="https://ronnapat.com/logo.png" />
    <meta property="og:keywords" content="{fullName} , Ronnapat , ronnapatp , srivoravilai ">
    <meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:site" content="@ronnapatp">
	<meta name="twitter:title" content="{title}">
	<meta name="twitter:description" content="Personal website of {fullName}">
	<meta name="twitter:creator" content="@ronnapatp">
    <meta name="twitter:image:src" content="https://ronnapat.com/logo.png">
	<meta name="twitter:domain" content="ronnapat.com">
</svelte:head>

<br><br><br><br>
<Hero />
<br><div class="container"><hr></div><br>
<Me />