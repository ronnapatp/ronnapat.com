<script>
    const Twitter = "ronnapatp";
    const Github = "ronnapatp";
    const Facebook = "pieronnapatp";
    const Gmail = "ronnapat.sri@gmail.com";
    const Title = "Contact | Ronnapat Srivoravilai";
    const fullName = "Ronnapat Srivoravilai";
    const GOOGLE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
    const CHECK_KEY = import.meta.env.VITE_SECONE_RECAPTCHA_SITE_KEY;

    import Navbar from "../../components/navbar.svelte";
    import Copy from "copy-to-clipboard"
    import Footer from '../../components/footer.svelte'
    import {supabase} from '$lib/db'

    function discordCopy() {
        Copy('ronnapatp#3538')
        alert('Copy ronnapat discord username to your clipboard!')
        console.log('Copied!')
    }

    let Name
    let Email
    let Message
    let submit = false
    let question = "3 - 2";

    async function getData() {
      const { data, error } = await supabase.from('games').select()
      if (error) throw new Error(error.message)
      console.log(data)
      return data
    }
    async function sendData() {
      // if ( recaptchachecked == true) {
      const { data, error } = await supabase
      .from('games')
      .insert([
        { 'Name': Name
        , 'Email': Email 
        , 'Message': Message 
      }
      
    ])
    window.location.replace('/contact/send');
      if (error) throw new Error(error.message)
      return data
  //   } else {
  //   console.log("hello")
  // }
    
    }
  
    let recaptchachecked = false; 
    function recaptchaCallback() {
        recaptchachecked = true;
    }

    function callback(){
    console.log("The user has already solved the captcha, now you can submit your form.");
    }
// window.callback = callback;

    
</script>

<svelte:head>
    <title>{Title}</title>
    <meta property="og:url" content="https://ronnapat.com/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{Title}" />
    <meta property="og:description" content="Personal website of {fullName}" />
    <meta property="og:image" content="https://www.ronnapat.com/logo.png" />
    <meta property="og:keywords" content="{fullName} , Ronnapat , ronnapatp , srivoravilai ">
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</svelte:head>
<style>
    .black{
  color: black;
}
.black:hover{
  color: #b36e0e;
}
</style>
<Navbar />

<div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1 mb-3">
            Contact me
            <svg width="35" height="35" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.1182 14.702L14 15.5C11.2183 14.1038 9.5 12.5 8.5 10L9.26995 5.8699L7.81452 2L4.0636 2C2.93605 2 2.04814 2.93178 2.21654 4.04668C2.63695 6.83 3.87653 11.8765 7.5 15.5C11.3052 19.3052 16.7857 20.9564 19.802 21.6127C20.9668 21.8662 22 20.9575 22 19.7655L22 16.1812L18.1182 14.702Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
        </h1>
        <p class="col-lg-10 fs-4">You can contact me on form.</p>
          <small>Follow me on social media</small>
          <br />
        <span >
            <a href="https://facebook.com/pieronnapatp" target="_blank">
              <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" class="black" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>               
            </a>
            &nbsp;&nbsp;
            <a href="https://instagram.com/ronnapatsri" target="_blank">
              <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" class="black" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M17.5 6.51L17.51 6.49889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>              
            </a>
            &nbsp;&nbsp;
            <a href="https://twitter.com/ronnapatp" target="_blank">
              <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" class="black" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 3.01006C23 3.01006 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 23 3.01006 23 3.01006Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>              
            </a>
            &nbsp;&nbsp;
            <a href="https://github.com/ronnapatp" target="_blank">
              <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" class="black" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>              
            </a>
            
            <button class="btn btn-link black" on:click={discordCopy} title="Tooltip on bottom">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
              </svg>
            </button>
            
            <a href="mailto:ronnapat.sri@gmail.com" target="_blank">
              <svg width="24" height="24" stroke-width="1.5" class="black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 9L12 12.5L17 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z" stroke="currentColor" stroke-width="1.5"/>
                </svg>
            </a>
            &nbsp;
            <!-- <a href="https://bit.ly/3ncfZvC" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-newspaper black" viewBox="0 0 16 16">
                    <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"/>
                    <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"/>
                  </svg>
            </a> -->
          </span>
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <form class="p-4 p-md-5 border rounded-3 bg-light" method="post">
          <h3>Contact me</h3>
          <b class="text-danger">*</b> indicates required
          {#await getData()}
          <p></p>
        {:then data}
          {#each data as game}
            <!-- <li>{game.title}</li> -->
          {/each}
        {:catch error}
          <p>Something went wrong try again or contact me in other ways.</p>
          <!-- <pre>{error}</pre> -->
        {/await}
        
        <form on:submit|preventDefault={() => submit = true} >
          <div class="form-floating mb-3">
            <input type="text" bind:value={Name}  class="form-control" id="floatingName" placeholder="Name" required>
            <label for="floatingName">Name <b class="text-danger">*</b></label>
          </div>
          <div class="form-floating mb-3">
            <input type="email" bind:value={Email} class="form-control" id="floatingEmail" placeholder="Email" required>
            <label for="floatingEmail">Email <b class="text-danger">*</b></label>
          </div>
          <div class="form-floating mb-3">
            <textarea class="form-control" bind:value={Message} placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px" required></textarea>
            <label for="floatingMessage">Message <b class="text-danger">*</b></label>
          </div>
          <div class="g-recaptcha brochure__form__captcha" data-sitekey={CHECK_KEY} data-callback={callback} on:load={callback}></div>
          <!-- <div class="form-floating mb-3">
          <div class="g-recaptcha" data-sitekey={CHECK_KEY} data-callback="callback"></div>
          </div> -->
          <div class="form-floating mb-3"> 
            <input type="checkbox" required>
              You are not robot?
          </div>
          <input type="submit" value="Submit" class="w-50 btn btn-lg btn-warning" on:click={() => submit = false}>
          <input type="reset" class="btn btn-lg btn-outline-warning border-2 text-dark" value="Reset">
        </form>
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
        <!-- <hr class="my-4">
        <small class="text-muted">Don't support in safari.</small> -->
        </form>
      </div>
    </div>
  </div>


<Footer />
