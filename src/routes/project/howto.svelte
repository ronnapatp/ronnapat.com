<script>
    import Navbar from "../../components/navbar.svelte";
    import Footer from '../../components/footer.svelte'

    const Name = "How to?"
    const image = "howto.jpeg"
    const imagewidth = "auto"
    const imageheight = "500"
    const imagealt = "howto"
    const viewongithubbutton = "btn btn-warning btn-lg px-4 gap-3 btn-rounded"
    const viewongithubauthor = "ronnapatp"
    const viewongithublink = "howto"


    const date = "25/10/2021"
    import { fullName } from '$lib/name'
</script>
<style>
    .black{
  color: black;
}
.black:hover{
  color: #b36e0e;
}
</style>

<head>
    <title>{Name} | {fullName}</title>
    <meta property="og:url" content="https://ronnapat.com/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{Name} | {fullName}" />
    <meta property="og:description" content="Personal website of {fullName}" />
    <meta property="og:image" content="https://www.ronnapat.com/logo.png" />
    <meta property="og:keywords" content="{fullName} , Ronnapat , ronnapatp , srivoravilai ">
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0&appId=924964718457366&autoLogAppEvents=1" nonce="SUtkN3EF"></script>
</head>

<Navbar />
<br><br>
<div class="container">
<a href="/project/" class="black">Project</a> / <a href="#" class="black">{Name}</a>
</div>
<br>

<div class="container">
    <h1>{Name}</h1>
    <img src="/project/{image}" alt="{imagealt}" width="{imagewidth}" height="{imageheight}" > <br>  
    <a href="https://github.com/{viewongithubauthor}/{viewongithublink}" class="{viewongithubbutton}" type="button" target="_blank">
        <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>            
        View on github
    </a>
    <br><br>
    <p>
        Because in coding they have a lot of bug so I create website that you can find the way to solve coding problem for example <code>How to fix npm error?</code>
    </p>
    <br><br>
    <p>
        You can contribute on github by click button up
    </p>







    <div>
        <br><br><br>
        Date (DD/MM/YYYY) : {date} 
        <br>
        Suggest project idea at <a href="https://github.com/ronnapatp" class="black">github</a>  
    </div>

    <div class="fb-comments" data-href="https://www.ronnapat.com/project/howto" data-width="" data-numposts="5"></div>

</div>

<Footer />