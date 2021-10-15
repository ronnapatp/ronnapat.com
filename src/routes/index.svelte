<script lang="ts">
    const fullName = "Ronnapat Srivoravilai";
    
    import Nav from '../components/navbar.svelte'
    import Hero from '../components/heroes.svelte'
    import Footer from '../components/footer.svelte'
</script>


<head>
    <title>HOME | {fullName}</title>
    <meta property="og:type" content="website" />
    <meta property="og:description" content="Personal website of {fullName}" />
</head>

<Nav />
<br><br><br><br>
<Hero />
<Footer />

