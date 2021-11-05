<script>
    const Title = "Privacy | Ronnapat Srivoravilai"
    import { fullName } from '$lib/name'

    import Navbar from '../components/navbar.svelte'
    import Footer from '../components/footer.svelte';
</script>

<svelte:head>
    <title>{Title}</title>
    <meta property="og:url" content="https://ronnapat.com/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{Title}" />
    <meta property="og:description" content="Personal website of {fullName}" />
    <meta property="og:image" content="https://www.ronnapat.com/logo.png" />
    <meta property="og:keywords" content="{fullName} , Ronnapat , ronnapatp , srivoravilai ">
</head>

<Navbar />

<br><br><br>
<div class="container">
    <div>
        <h1>Privacy & Policy</h1>
        Last edit (DD/MM/YYYY) : 20/10/2021
        <hr>
    </div>
    <div>
        Thanks for trust ronnapat.com your useg information. We take our responsibility to you very seriously, and so this Privacy Statement describes how we handle your data.
        <br><br>
        This privacy policy only apply to our website we own. So please read privacy policy very carefully
        <br><br>
        Table of content
        <li><a href="#section1">Data we collect.</a></li>
        <li><a href="#section2">How do we collect you data</a></li>
        <li><a href="#section3">How will we use your data</a></li>

        <br><br><br>
        <h2 id="section1">Data we collect</h2>
        ronnapat.com collect the following data : 
        <li>What time you visit our website</li>
        <li>How long you stay in our website</li>
        <li>What page you go in our website</li>
        <br><br>
        <h2 id="section2">How do we collect your data</h2>
        ronnapat.com collect your data from google analytics
        <br><br>
        <h2 id="section3">How will we use your data</h2>
        ronnapat.com collect data so we can : 
        <li>Develop website</li>
        <br><br>
        <h2>Contact us about privacy</h2>
        You can go to contact us in <a href="/contact">contact</a> page.
        <br><br><br>
        Reference : <a href="https://monkeytype.com/privacy-policy" target="_blank">monkeytype.com</a>
    </div>
</div>

<Footer />