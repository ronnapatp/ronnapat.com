<script lang="ts">
    const fullName = "Ronnapat Srivoravilai";
    const title = "HOME | Ronnapat Srivoravilai"
    
    import Nav from '../components/navbar.svelte'
    import Hero from '../components/heroes.svelte'
    import Me from '../components/me.svelte'
    import Footer from '../components/footer.svelte' 
</script>


<svelte:head>
    <title>{title}</title>
    <meta property="og:url" content="https://ronnapat.com/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{title}" />
    <meta property="og:description" content="Personal website of {fullName}" />
    <meta property="og:image" content="https://www.ronnapat.com/logo.png" />
    <meta property="og:keywords" content="{fullName} , Ronnapat , ronnapatp , srivoravilai ">
</head>

<Nav />
<br><br><br><br>
<Hero />
<br><div class="container"><hr></div><br>
<Me />
<Footer />


