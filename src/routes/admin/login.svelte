<script>
    let usename = "ronnapatp"
    let password = "pie"

    let user;
    let pass;

    let admin = false
    let login = true
    function submit(){
        if ( user === usename && pass === password ) {
            login = false
            admin = true
        } else {
            alert("Wrong")
        }
    }
</script>

{#if login}
    <form>
        <input type="text" bind:value={user}>
        <input type="password" bind:value={pass}>
        <input type="submit" on:click={submit}>
    </form>
{/if}
{#if admin}
    <h1>Hello</h1>
{/if}