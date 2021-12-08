<script lang="ts">
    import Navbar from "$lib/components/en/about/navbar.svelte";
    import About from "$lib/components/en/about/about.svelte";
    import Footer from "$lib/components/en/footer.svelte";

    const Title = "About | Ronnapat Srivoravilai";
    const fullName = "Ronnapat Srivoravilai"
</script>

<svelte:head>
    <title>{Title}</title>
    <meta property="og:url" content="https://ronnapat.com/about" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{Title}" />
    <meta property="og:description" content="Personal website of {fullName}" />
    <meta property="og:image" content="https://www.ronnapat.com/logo.png" />
    <meta property="og:keywords" content="{fullName} , Ronnapat , ronnapatp , srivoravilai ">
    <meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:site" content="@ronnapatp">
	<meta name="twitter:title" content="{Title}">
	<meta name="twitter:description" content="Personal website of {fullName}">
	<meta name="twitter:creator" content="@ronnapatp">
    <meta name="twitter:image:src" content="https://ronnapat.com/logo.png">
	<meta name="twitter:domain" content="ronnapat.com">
</svelte:head>

<Navbar />
<About />
<Footer />