<script>
    import Navbar from "../../components/navbar.svelte";
    import Footer from '../../components/footer.svelte'


    const Name = "Satit chula in mincraft"
    const image = "satitchulamc1.jpeg"
    const imagewidth = "auto"
    const imageheight = "500"
    const imagealt = ""
    const viewongithubbutton = "btn btn-warning btn-lg px-4 gap-3 btn-rounded"
    const viewongithubauthor = "ronnapatp"
    const viewongithublink = "mywebsite"
    const metaimage = "mywebsite.jpeg"


    const date = "2/11/2021"
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
    <meta property="og:image" content="/project/{image}" />
    <meta property="og:keywords" content="{fullName} , Ronnapat , ronnapatp , srivoravilai ">
    <meta property="fb:app_id" content="924964718457366" />
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0&appId=924964718457366&autoLogAppEvents=1" nonce="mFmCdZXK"></script>
</head>

<Navbar />
<body >
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0&appId=924964718457366&autoLogAppEvents=1" nonce="hNIdWS9b"></script>
    <br><br>
<div class="container">
<a href="/project/" class="black">Project</a> / <a href="#" class="black">{Name}</a>
</div>
<br>

<div class="container">
    <h1>{Name}</h1>
    <img src="/project/{image}" alt="{imagealt}" class="img-thumbnail" > <br>  
    <!-- <a href="https://github.com/{viewongithubauthor}/{viewongithublink}" class="{viewongithubbutton}" type="button" target="_blank">
        <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>            
        View on github
    </a> -->
    <br><br>
    <p>
        Since school break for 1 month and people in discord server name <b>Hi I bored community</b> very borned so my friend name deedee start project in mincraft with friend in group (but I didn't do this project because I dont have mincraft) 
    </p>
    <p>
        Here is school that we build in mincraft
    </p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1937.8372983674515!2d100.52615615818162!3d13.738140297589103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2991d5ca0f12d%3A0x1847bdc271df742e!2z4LmC4Lij4LiH4LmA4Lij4Li14Lii4LiZ4Liq4Liy4LiY4Li04LiV4LiI4Li44Lis4Liy4LivIOC4neC5iOC4suC4ouC4m-C4o-C4sOC4luC4oSAoQ2h1bGFsb25na29ybiBVbml2ZXJzaXR5IERlbW9uc3RyYXRpb24gRWxlbWVudGFyeSBTY2hvb2wp!5e0!3m2!1sen!2sth!4v1635833272606!5m2!1sen!2sth" width="600" height="450" style="border:0;"></iframe>
    <p>
        Chulalongkorn University Demonstration Elementary School 
    </p>

    <div>
        <h4>Credit :</h4>
        Project manager   
        <li>Bhira Phiromsopa</li>
        <br>
        Builder
        <li>Kulthawach Bunyot</li>
        <li>Papangkorn Opaprakasit</li>
        <li>Sirapob umponpong</li>
        <li>Sukrid Anantaworatum</li>
        <li>Bhumipat Khattirat </li>
        <li>Kongtham Thienyen</li>
        <li>Thapanapong Sengdecha</li>
        <li>Boonyakorn Lewsuwan</li>
    </div>
    <br><br>
   <h4>Take a look around!</h4>

    <img src="/project/satitchulamc2.jpeg" alt="" class="img-thumbnail" width="700">
    <img src="/project/satitchulamc3.jpeg" alt="" class="img-thumbnail" width="700">
    <img src="/project/satitchulamc4.jpeg" alt="" class="img-thumbnail" width="700">


<br>
<iframe width="560" height="315" src="https://www.youtube.com/embed/t5_Hsh5s6mg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"   allowfullscreen></iframe>



    <div>
        <br><br><br>
        Date (DD/MM/YYYY) : {date} 
        <br>
        Suggest project idea at <a href="https://github.com/ronnapatp" class="black">github</a>  
    </div>

    <div class="fb-comments" data-href="https://www.ronnapat.com/project/satit-chula-in-mincraft" data-width="" data-numposts="5"></div>
</body>
<Footer />
