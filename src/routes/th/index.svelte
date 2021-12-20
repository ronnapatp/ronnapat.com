<script>
    import Heroes from '$lib/components/th/home/heroes.svelte';
    import Navbar from '$lib/components/th/home/navbar.svelte'
    import Footer from '$lib/components/th/footer.svelte';
</script>
<svelte:head>
    <title>หน้าหลัก | รณภัทร ศรีวรวิไล</title>
    <meta property="og:url" content="https://ronnapat.com/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="หน้าหลัก | รณภัทร ศรีวรวิไล" />
    <meta property="og:description" content="Personal website of" />
    <meta property="og:image" content="https://ronnapat.com/heroes.png" />
    <meta property="og:keywords" content="Ronnapat , ronnapatp , srivoravilai ">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@ronnapatp">
    <meta name="twitter:title" content="หน้าหลัก | รณภัทร ศรีวรวิไล">
    <meta name="twitter:description" content="Personal website of">
    <meta name="twitter:creator" content="@ronnapatp">
    <meta name="twitter:image:src" content="https://ronnapat.com/heroes.png">
	  <meta name="twitter:domain" content="ronnapat.com">
</svelte:head>

<Navbar />
<Heroes />
<Footer />