<script >
    const fullName = "Ronnapat Srivoravilai";
const nickName = "Pie";
const socialName = "ronnapatp";
const framwork = "svelte kit";
const createBy = "Ronnapat Srivoravilai";
const twitter = "@ronnapatp";
const github = "ronnapatp";
const gmail = "ronnapat.sri@gmail.com";
const facebook = "pieronnapatp"
const title = `Profile | ${fullName}`

import Nav from '../../components/navbar.svelte'
import Footer from '../../components/footer.svelte'
</script>
<style>
    .typewriter h1 {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}
</style>

<head>
    <title>{title}</title>
    <meta property="og:url" content="https://ronnapat.com/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{title}" />
    <meta property="og:description" content="Personal website of {fullName}" />
    <meta property="og:image" content="https://www.ronnapat.com/logo.png" />
    <meta property="og:keywords" content="{fullName} , Ronnapat , ronnapatp , srivoravilai ">
</head>

<Nav />

<main class="w-full h-screen flex flex-col gap-2 justify-center items-center">
    <div>
        <h1 class="text-5xl text-center">> {fullName}</h1>
        <div class="subtitle text-xl visible h-full">
            <div class="text-center">
                > Name : {fullName}<br/>
                > Nickname : {nickName}<br/>
                > Age : 12<br/>
                > Date of birth : 24/05/2009<br/> 
                > Bio : Thai student that love to code<br/>
                > Role : Web + Bot developer<br/><br>
               <!-- <a href="/" class="text-center"><button class="bg-yellow-300 px-5 py-3 text-sm shadow-sm font-medium tracking-wider text-yellow-600 rounded-full hover:shadow-2xl hover:bg-yellow-400">NEXT PAGE →</button></a>
-->
            </div>
        </div>
      </div>
  
  
</main>

<Footer />