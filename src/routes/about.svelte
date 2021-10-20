<script lang="ts">
    import Nav from '../components/navbar.svelte'
    import About from '../components/about.svelte'
    import Footer from '../components/footer.svelte';

    const Title = "About | Ronnapat Srivoravilai";
    const fullName = "Ronnapat Srivoravilai"
</script>

<head>
    <title>{Title}</title>
    <meta property="og:url" content="https://ronnapat.com/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{Title}" />
    <meta property="og:description" content="Personal website of {fullName}" />
    <meta property="og:image" content="https://www.ronnapat.com/logo.png" />
    <meta property="og:keywords" content="{fullName} , Ronnapat , ronnapatp , srivoravilai ">
</head>

<Nav />
<br><br><br><br>
<About />

<Footer />