<script>
    function Goto() {
        location.href = "/contact";
    }
    let currentDate = new Date();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();
    let local = (cDay + "/" + cMonth + "/" + cYear);
    let christmas = false
    let christmaseve = false
    let newyear = false
    if ( local !== "25/12/2021" ){
        christmas = false
    } else {
        christmas = true
    }
    if ( local !== "24/12/2021" ){
        christmaseve = false
    } else {
        christmaseve = true
    }
    if ( local !== "01/01/2022" ){
        newyear = false
    } else {
        newyear = true
    }
</script>
<div class="w-full bg-center bg-no-repeat bg-cover" style="background-image: url('/heroes.png'); height: 80vh; background-attachment: fixed; background-position: center; background-repeat: no-repeat; background-size: cover;">
    <div class="w-full bg-opacity-50  bg-black flex justify-center items-center" style="height: 80vh;">
        <div class="mx-4 text-center text-white">
            {#if christmas}
            <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r from-green-500 via-red-400 to-red-500 relative inline-block">
                <span class="relative text-white text-8xl font-bold">Merry Christmas</span>
            </span>
            {/if}
            {#if christmaseve}
            <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r from-green-500 via-red-400 to-red-500 relative inline-block">
                <span class="relative text-white text-8xl font-bold">Merry Chirstmas eve</span>
            </span>
            {/if}
            {#if newyear}
            <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r from-green-500 via-red-400 to-red-500 relative inline-block">
                <span class="relative text-white text-8xl font-bold">Happy New Year</span>
            </span>
            {/if}
            <h1 class="font-bold text-6xl mb-4">Ronnapat Srivoravilai</h1>
            <h2 class="font-bold text-3xl mb-12">I create website application and bot</h2>
            <div>
                <a href="https://blog.ronnapat.com/" target="_blank" class="bg-blue-400 rounded font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-400 hover:text-gray-700 mr-2">
                    Blog
                </a>
                <a href="/about" class="bg-blue-400 rounded font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-400 hover:text-gray-700 mr-2">
                    About
                </a>
                <a href="/contact" class="bg-blue-400 rounded font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-400 hover:text-gray-700 mr-2">
                    Contact
                </a>
            </div>
            <br><br><br>
            <center>
                <a href="#more">
                    <b class="text-xl">Learn more</b> <br>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down w-10 h-10 mt-1" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                    </svg>
                </a>
            </center>
        </div>
    </div>
</div>
<div class="text-center text-4xl mt-40 mb-40 dark:text-white" id="more">
    <i class="bi bi-emoji-smile"></i>
    <i class="bi bi-emoji-smile"></i>
    <i class="bi bi-emoji-smile"></i>
    <i class="bi bi-emoji-smile"></i>
    <br>
    I am a student in Bangkok,Thailand that like coding
    <p class="text-xl">Learn more about me at about page.</p>
</div>
<div class="bg-blue-100">
<div class="container mx-auto mt-4 md:mt-0 lg:mt-5 md:space-x-10 md:grid grid-cols-3 justify-center">
    <div class="grid md:justify-center md:items-center sm:float-left">
      <img class="lg:h-80 md:h-64 sm:h-52" src="/cover.jpeg" alt="" />
    </div>
    <div class="mt-2 md:mt-0 lg:justify-end col-span-2 sm:">
      <h1 class="text-4xl md:mt-5 lg:mt-20 text-gray-800 md:text-left font-bold mb-6">What I Do</h1>
      <p class="text-xl text-gray-800 md:text-left">I'm a student in bangkok, Thailand and now I'm learning in secondary school and currently studying programming For ex. javascript typescript python HTML CSS.</p>
      <p class="italic text-gray-500 mt-5">- Ronnapat Srivoravilai</p>
    </div>
  </div>
</div>
	<!-- COMPONENT CODE -->
	<section class="w-full mt-5">
		<div class="container px-4 mx-auto">
				<div class="text-center ">
                    <h1 class="font-bold text-4xl">My skill  <p class="text-xl hover:text-blue-600"><a href="/skill">View my all skill..</a></p></h1>
                </div>
            <center>
                <center class="inline-flex mt-5">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="75" height="75" alt="js"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="75" height="75" alt="ts"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="75" height="75" alt="html" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="75" height="75" alt="css"/>
                </center>
            </center>
          </div>
    </section>
    <div class="bg-blue-100">
<div class="md:h-36 lg:h-40 h-20 container mx-auto mt-10 mb-10 px-1">
    <div class="float-left md:mt-14 lg:mt-14 mt-5">
        <b class="md:text-4xl lg:text-5xl text-2xl">Have a question</b>
    </div>
    <div class="float-right md:mt-14 lg:mt-14 mt-5">
        <button on:click={Goto} class="transition-transform	duration-500 hover:scale-110 motion-reduce:transform-none p-2 pl-5 pr-5 text-white bg-black rounded-lg">
            Contact me
            <i class="bi bi-arrow-right"></i>
        </button>

    </div>
</div>
</div>