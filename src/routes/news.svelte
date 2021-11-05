<!-- <script>
    import Nav from '../components/navbar.svelte'
    import Footer from '../components/footer.svelte'
    import { supabase } from '$lib/news'
  let Email
  let submit = false
  async function getData() {
	  const { data, error } = await supabase.from('games').select()
		if (error) throw new Error(error.message)
    console.log(data)
		return data
	}
  async function sendData() {
    const { data, error } = await supabase
      .from('games')
      .insert([
        { 'Email': Email }
      ])
    if (error) throw new Error(error.message)
    return data
  }
</script>
<Nav />
<h1>My favorite games</h1>
{#await getData()}
  <p>Fetching data...</p>
{:then data}
  {#each data as game}
    <li>{game.title}</li>
  {/each}
{:catch error}
  <p>Something went wrong while fetching the data:</p>
  <pre>{error}</pre>
{/await}

<form on:submit|preventDefault={() => submit = true}>
  <input type="text" bind:value={Email}>
  <input type="submit" value="Submit" on:click={() => submit = false}>
</form>
{#if submit}
  {#await sendData()}
    <p>Sending data...</p>
  {:then data}
    <p>Succesfully sent data.</p>
  {:catch error}
    <p>Something went wrong while sending the data:</p>
    <pre>{error}</pre>
  {/await}
{/if}
<Footer /> -->