<script>
    const Twitter = "ronnapatp";
    const Github = "ronnapatp";
    const Gmail = "ronnapat.sri@gmail.com";
    const Title = "Contact | Ronnapat Srivoravilai";
    const fullName = "Ronnapat Srivoravilai";

    import Navbar from "../components/navbar.svelte";
    import Copy from "copy-to-clipboard"

    function copyDiscord() {
        Copy('ronnapatp#3538')
        alert('Copy ronnapat discord username to your clipboard!')
        console.log('Copied!')
    }
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
<p class="w-1/5	">You can contact me bla bla bla blab alb la bla blab alb la bla blab alb la bla blab alb la bla blab alb </p>
<div class="flex gap-6">
<a href="mailto:ronnapat.sri@gmail.com" target="_blank">
    <img src="../../static/mail.png" alt="mail" class="w-20 h-20">
</a>
<a href="https://twitter.com/ronnapatp" target="_blank">
    <img src="../../static/twitter.png" alt="twitter" class="w-20 h-20">
</a>
<a href="https://facebook.com/pieronnapatp" target="_blank">
    <img src="../../static/facebook.png" alt="facebook" class="w-20 h-20">
</a>
<button on:click={copyDiscord}>
    <img src="../../static/discord.png" alt="" class="w-20 h-20">
</button>
</div>
</main>