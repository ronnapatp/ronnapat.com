<script>

import Github from "./github.svelte";

</script>
<style>
    .line-1{
    width: 24em;
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%);    
}

/* Animation */
.anim-typewriter{
  animation: typewriter 4s steps(44) 1s 1 normal both,
             blinkTextCursor 500ms steps(44) infinite normal;
}
@keyframes typewriter{
  from{width: 0;}
  to{width: 24em;}
}
@keyframes blinkTextCursor{
  from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
}
</style>

<head>
  <title>Profile | Ronnapat Srivoravilai</title>
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Profile | Ronnapat Srivoravilai" />
  <meta property="og:description" content="Personal website of Ronnapat Srivoravilai" />
  <meta property="og:image" content="https://www.ronnapat.com/logo.png" />
  <meta property="og:keywords" content="Ronnapat Srivoravilai , Ronnapat , ronnapatp , srivoravilai ">
</head>

<div class="mx-auto">
    <div class="w-full h-screen shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto">
      <div class="flex items-center h-6 rounded-t bg-gray-300 border-b border-gray-500 text-center text-black" id="headerTerminal">
        <a href="/"><button class="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" id="closebtn">
          <title>Close terminal</title>
        </button></a>
        <div class="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
        </div>
        <div class="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
        </div>
        <div class="mx-auto pr-16" id="terminaltitle">
          <p class="text-center text-sm">Ronnapat Terminal</p>
        </div>
  
      </div>
      <div class="pl-1 pt-1 h-auto  text-green-200 font-mono text-xs bg-black" id="console">
        <p class="pb-1">Welcome to ronnapat profile</p>
        <div class="pb-1"><span class="bg-gray-200 w-5 text-black"><span class="text-gray-200"> |</span>-<span class="text-gray-200"> |</span></span><span class="bg-blue-800 w-5 text-white space-x-2"><span class="text-blue-800"> |</span>~ code/profile<span class="text-blue-800"> |</span></span><span class="bg-green-500 w-5 text-black"><span class="text-green-500"> |</span>main/origin<span class="text-green-500"> |</span></span><br><br>
            <p class="line-1 anim-typewriter">> Hi, My name is Ronnapat Srivoravilai</p>
        </div>
        <div class="pb-1"><span class="bg-gray-200 w-5 text-black"><span class="text-gray-200"> |</span>-<span class="text-gray-200"> |</span></span><span class="bg-blue-800 w-5 text-white space-x-2"><span class="text-blue-800"> |</span>~ code/profile<span class="text-blue-800"> |</span></span><span class="bg-green-500 w-5 text-black"><span class="text-green-500"> |</span>main/origin<span class="text-green-500"> |</span></span><br><br>
            <p class="line-1 anim-typewriter">> I was born in 24/05/2009 12 years old</p>
        </div>
        <div class="pb-1"><span class="bg-gray-200 w-5 text-black"><span class="text-gray-200"> |</span>-<span class="text-gray-200"> |</span></span><span class="bg-blue-800 w-5 text-white space-x-2"><span class="text-blue-800"> |</span>~ code/profile<span class="text-blue-800"> |</span></span><span class="bg-green-500 w-5 text-black"><span class="text-green-500"> |</span>main/origin<span class="text-green-500"> |</span></span><br><br>
            <p class="line-1 anim-typewriter">> I was born in bangkok,Thailand</p>
        </div>
        <div class="pb-1"><span class="bg-gray-200 w-5 text-black"><span class="text-gray-200"> |</span>-<span class="text-gray-200"> |</span></span><span class="bg-blue-800 w-5 text-white space-x-2"><span class="text-blue-800"> |</span>~ code/profile<span class="text-blue-800"> |</span></span><span class="bg-green-500 w-5 text-black"><span class="text-green-500"> |</span>main/origin<span class="text-green-500"> |</span></span><br><br>
            <p class="line-1 anim-typewriter">> I am interested in coding</p>
        </div>
        <div class="pb-1"><span class="bg-gray-200 w-5 text-black"><span class="text-gray-200"> |</span>-<span class="text-gray-200"> |</span></span><span class="bg-blue-800 w-5 text-white space-x-2"><span class="text-blue-800"> |</span>~ code/profile<span class="text-blue-800"> |</span></span><span class="bg-green-500 w-5 text-black"><span class="text-green-500"> |</span>main/origin<span class="text-green-500"> |</span></span><br><br>
          <p class="line-1 anim-typewriter">> Github.com/ronnapatp</p>
        </div>

      </div>
    </div> 
  </div>