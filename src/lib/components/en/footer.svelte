<script>
import { fullName } from '$lib/name';

    import Copy from 'copy-to-clipboard'

    let showAlert = false;
    let currentyear =  new Date().getFullYear();

    function discordCopy() {
        Copy('ronnapatp#3538')
        showAlert = true;
        setTimeout(function(){
            showAlert = false; 
        }, 2000);
    }
    function closeAlert() {
        showAlert = false
    }
</script>
<hr>
<footer class="relative bg-blueGray-200 pt-8 pb-6">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap text-left lg:text-left">
      <div class="w-full lg:w-6/12 px-4">
        <h4 class="text-3xl fonat-semibold text-blueGray-700">Follow me!</h4>
        <h5 class="text-lg mt-0 text-blueGray-600">
          Follow me on social media to get in touch with me.
        </h5>
        <div class="mt-6 lg:mb-0 mb-6">
          <a href="https://facebook.com/pieronnapatp" target="_blank">
            <button class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i class="bi bi-facebook"></i>
            </button>
          </a>
          <a href="https://twitter.com/ronnapatp" target="_blank">
            <button class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i class="bi bi-twitter"></i>
            </button>
          </a>
            <button on:click={discordCopy} class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i class="bi bi-discord"></i>
            </button>
            <a href="https://github.com/ronnapatp" target="_blank">
                <button class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <i class="bi bi-github"></i>
                </button>
            </a>
            <a href="mailto:ronnapat.sri@gmail.com" target="_blank">
                <button class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <i class="bi bi-envelope-fill"></i>
                </button>
            </a>
        </div>
      </div>
      <div class="w-full lg:w-6/12 px-4">
        <div class="flex flex-wrap items-top mb-6">
          <div class="w-full lg:w-4/12 px-4 ml-auto">
            <ul class="list-unstyled">
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/">Privacy & Policy</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/">Cookies</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.ronnapat.com/" target="_blank">Blog</a>
              </li>
              <li class="mt-2">
                <!-- svelte-ignore a11y-missing-attribute -->
                <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fronnapat.com%2F&width=90&layout=button_count&action=like&size=small&share=false&height=21&appId=1210970696063565" width="90" height="21" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-6 border-blueGray-300">
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-4/12 px-4 mx-auto text-center">
        <div class="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © 2020 - {currentyear} | {fullName}
        </div>
      </div>
    </div>
  </div>
</footer>
{#if showAlert}
<div class="bottom-0 right-0 fixed mr-2">
<div class="bg-blue-200 px-6 py-4  my-4 rounded-md text-lg flex items-center">
    <svg
      viewBox="0 0 24 24"
      class="text-blue-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
      >
    <path
         fill="currentColor"
         d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
         ></path>
    </svg>
    <span class="text-blue-800 w-48 md:w-96 lg:w-96 text-sm md:text-xl lg:text-xl"> My discord username is in your clipboard</span>
    <button on:click={closeAlert}>
        <i class="bi bi-x-lg text-blue-800"></i>
    </button>
    </div>
</div>
{/if}
