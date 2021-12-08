<script>
    import { supabase } from '$lib/db'

    let Name
    let Email
    let Message
    let submit = false
    let contact = true
    let done = false

    async function getData() {
      const { data, error } = await supabase.from('games').select()
      if (error) throw new Error(error.message)
      return data
    }
    async function sendData() {
      const { data, error } = await supabase
      .from('games')
      .insert([
        { 'Name': Name
        , 'Email': Email 
        , 'Message': Message 
      }
      
    ])
      contact = false
      done = true
        if (error) throw new Error(error.message)
      return data    
    }
</script>
<div class="w-full">
    <div class="bg-gradient-to-b from-blue-600 to-blue-400 h-96"></div>
    <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div class="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72 ">
            {#if contact}
            <p class="text-3xl font-bold leading-7 text-center">Contact me</p>
            {#await getData()}
            <p></p>
          {:then data}
            {#each data as game}
              <!-- <li>{game.title}</li> -->
            {/each}
          {:catch error}
            <p>Something went wrong try again or contact me in other ways.</p>
          {/await}
            <form on:submit|preventDefault={() => submit = true} >
                <div class="md:flex items-center mt-12">
                    <div class="w-full md:w-1/2 flex flex-col">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label class="font-semibold leading-none text-gray-600">Name <l class="text-red-600">*</l></label>
                        <input bind:value={Name} placeholder="Danny" type="text" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-black mt-4 bg-white border rounded border-gray-400" required/>
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label class="font-semibold leading-none text-gray-600">Email <l class="text-red-600">*</l></label>
                        <input bind:value={Email} placeholder="examaple@ronnapat.com" type="email" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-black mt-4 bg-white border rounded border-gray-400" required/>
                    </div>
                </div>
                <div>
                    <div class="w-full flex flex-col mt-8">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label class="font-semibold leading-none text-gray-600">Message <l class="text-red-600">*</l></label>
                        <textarea bind:value={Message} placeholder="Message..." type="text" class="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-black mt-4 bg-white border rounded border-gray-400" required></textarea>
                    </div>
                </div>
                <div class="flex items-center w-full">
                    <button on:click={() => submit = false} class="mt-9 font-semibold leading-none text-white  py-4 px-10 bg-blue-700 w-full rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Send message
                    </button>
                </div>
                {#if submit}
          {#await sendData()}
            <!-- <p>Sending...</p> -->
          {:then data}
            <!-- <br>
            <small>Thank you for your message!</small> -->
            <!-- <p>Succesfully sent your message. I will contact you back as fast as possible</p> -->
          {:catch error}
            <!-- <p>Something went wrong try again or contact me in other ways.</p> -->
            <!-- <pre>{error}</pre> -->
          {/await}
        {/if}
            </form>
            {/if}
           {#if done}
               <div class="text-center mt-16">
                <span>
                    <i class="bi bi-envelope-open text-8xl"></i>
                    <p class="text-2xl mt-5">Successfully send message to Ronnapat Srivoravilai</p>
                    <small>I will answer to you in 48 hours but if I dont answer you in 48 hours you can contact again or gmail me.</small>
                </span>
               </div>
           {/if}
        </div>
    </div>
</div>