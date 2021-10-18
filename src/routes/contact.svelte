<script>
    const Twitter = "ronnapatp";
    const Github = "ronnapatp";
    const Gmail = "ronnapat.sri@gmail.com";
    const Title = "Contact | Ronnapat Srivoravilai";
    const fullName = "Ronnapat Srivoravilai";

    import Navbar from "../components/navbar.svelte";
</script>

<head>
    <title>{Title}</title>
    <meta property="og:url" content="https://ronnapat.com/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{Title}" />
    <meta property="og:description" content="Personal website of {fullName}" />
</head>

<Navbar />
<main class="w-full h-screen flex flex-col gap-2 justify-center items-center">
<h1 class="text-6xl">Contact me</h1>
<a href="https://github.com/{Github}">Github : {Github}</a>
<a href="https://twitter.com/{Twitter}">Twitter : {Twitter}</a>
<a href="mailto:{Gmail}">Gmail : {Gmail}</a>
    
</main>