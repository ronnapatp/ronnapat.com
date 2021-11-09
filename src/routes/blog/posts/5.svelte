<script>
    import Navbar from "../../../components/navbar.svelte";
    import Footer from '../../../components/footer.svelte';


    const Name = "ระบบโทรศัพท์บ้านในยุคของอินเทอร์เน็ต"
    const image = "title.jpeg"
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
.wrap-element {
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
}

.wrapped-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
.fb-comment{
    min-width: 100% !important;
    width: 100% !important;
}
h1{
    font-size: 2.8rem;
    color: #0694B9;
}
h3{
    font-size: 1.8rem;
    color: #0694B9;
}
body{
    font-size: 1.2rem;
}
.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}
</style>


<svelte:head>
    <title>{Name} | {fullName}</title>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    <meta property="og:url" content="https://ronnapat.com/blog/satit-chula-in-minecraft" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{Name}" />
    <meta property="og:description" content="เนื่องจากโรงเรียนปิดไปนานทำให้เพื่อนๆของผมใน Discord ชื่อ Hi morning news เลยสร้างโรงเรียนสาธิตจุฬาฯในเกม Minecraft สะเลย" />
    <meta property="og:image" content="https://ronnapat.com/blog/5/{image}" />
    <meta property="og:keywords" content="{fullName} , Ronnapat , ronnapatp , srivoravilai ">
    <meta property="fb:app_id" content="924964718457366" />
    <meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:site" content="@ronnapatp">
	<meta name="twitter:title" content="{Name} | {fullName}">
	<meta name="twitter:description" content="เนื่องจากโรงเรียนปิดไปนานทำให้เพื่อนๆของผมใน Discord ชื่อ Hi morning news เลยสร้างโรงเรียนสาธิตจุฬาฯในเกม Minecraft สะเลย">
	<meta name="twitter:creator" content="@ronnapatp">
    <meta name="twitter:image:src" content="https://ronnapat.com/blog/5/{image}">
	<meta name="twitter:domain" content="ronnapat.com">
</svelte:head>

<Navbar />
<body >
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0&appId=924964718457366&autoLogAppEvents=1" nonce="w6xYP0wk"></script>
    <br><br>
<div class="container">
    <a href="/blog/" class="black">Blog</a> / <a href="#" class="black">{Name}</a>
</div>
<br>

<div class="container">
    <h1 class="float-start">{Name}</h1>
    <div class="float-end">
        <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fronnapat.com%2Fblog%2F5&width=62&layout=box_count&action=like&size=small&share=false&height=65&appId=924964718457366" width="62" height="65" style="border:none;overflow:hidden" scrolling="no" frameborder="0"  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> 
        <a href="https://twitter.com/intent/tweet?text=ระบบโทรศัพท์บ้านในยุคของอินเทอร์เน็ต%20via%20@ronnapatp" class="twitter-share-button list-inline-item">Tweet</a>
    </div>
    <img src="/blog/5/{image}" alt="{imagealt}" class="img-thumbnail" > <br>  <br><br>
    <p>
        ในปัจจุบันเราก็คงไม่ค่อยได้ยินคำว่า <b>โทรศัพท์บ้าน</b> เพราะเราใช้มือถือแทน และเวลาติดต่อกันเราก็ใช้การโทรหรือการส่งข้อความโดยใช้ Line แทนทำให้ <b>โทรศัพท์บ้าน</b> ค่อยๆหายไปตามกาลเวลา
    </p>
    <p>
        แต่วันนี้ผมจะมาแนะนำ
    </p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1937.8372983674515!2d100.52615615818162!3d13.738140297589103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2991d5ca0f12d%3A0x1847bdc271df742e!2z4LmC4Lij4LiH4LmA4Lij4Li14Lii4LiZ4Liq4Liy4LiY4Li04LiV4LiI4Li44Lis4Liy4LivIOC4neC5iOC4suC4ouC4m-C4o-C4sOC4luC4oSAoQ2h1bGFsb25na29ybiBVbml2ZXJzaXR5IERlbW9uc3RyYXRpb24gRWxlbWVudGFyeSBTY2hvb2wp!5e0!3m2!1sen!2sth!4v1635833272606!5m2!1sen!2sth" width="100%" height="350" style="border:0;"></iframe>
    <br> โรงเรียนสาธิตจุฬาฯ ฝ่ายประถม <br>
    <img src="/blog/satit-chula-in-minecraft/school1.jpeg" alt="" class="img-thumbnail" >
    <br> มาดูภาพจากด้านบนกัน <br>
    <img src="/blog/satit-chula-in-minecraft/school2.jpeg" height="100px" alt="" class="img-thumbnail" >
    <br><br><br>
    <h3>
        ทำไมต้อง Minecraft
    </h3>
    <p>
        Minecraft เป็นเกมที่สามารถสร้างหรือกำหนดเนื้อเรื่องเองได้
    </p>
    <br>
    <div>
        <h3>
            เครดิต
        </h3>
        ผู้จัดการโปรเจคนี้
        <li>Bhira Phiromsopa</li>
        ผู้สร้าง
        <li>Kulthawach Bunyot</li>
        <li>Papangkorn Opaprakasit</li>
        <li>Sirapob Umponpong</li>
        <li>Sukrid Anantaworatum</li>
        <li>Bhumipat Khattirat </li>
        <li>Kongtham Thienyen</li>
        <li>Thapanapong Sengdecha</li>
        <li>Boonyakorn Lewsuwan</li>
    </div>
    <!-- <div>
        <h4>Credit :</h4>
        Project manager   
        <li>Bhira Phiromsopa</li>
        <br>
        Builder
        <li>Kulthawach Bunyot</li>
        <li>Papangkorn Opaprakasit</li>
        <li>Sirapob Umponpong</li>
        <li>Sukrid Anantaworatum</li>
        <li>Bhumipat Khattirat </li>
        <li>Kongtham Thienyen</li>
        <li>Thapanapong Sengdecha</li>
        <li>Boonyakorn Lewsuwan</li>
    </div> -->
    <br><br>
   <h3>เรามาดูรอบๆกัน</h3>

    <img src="/blog/satit-chula-in-minecraft/satitchulamc2.jpeg" alt="" class="img-thumbnail">
    <img src="/blog/satit-chula-in-minecraft/satitchulamc3.jpeg" alt="" class="img-thumbnail">
    <img src="/blog/satit-chula-in-minecraft/satitchulamc4.jpeg" alt="" class="img-thumbnail">
    <br><br>
    ดูแบบเต็มๆได้ที่ <a href="https://www.youtube.com/watch?v=t5_Hsh5s6mg" target="_blank" class="black">youtube</a>
    <div class="wrap-element">
        <iframe class="wrapped-iframe" width="" src="https://www.youtube.com/embed/t5_Hsh5s6mg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"   allowfullscreen></iframe>
    </div>

    <div class="col bd-callout bd-callout-warning">
        <h2>สนับสนุนโปรเจคนี้ได้ที่</h2>
        <a href="https://ko-fi.com/bhira" target="_blank" class="black text-decoration-none">Ko-fi</a>
        หรือที่ ทรูมันนี่วอลเล็ท: 0814682224 <br>
        *10% ของการสนับสนุนจะไปอยู่ที่ <a href="https://teamseas.org/" target="_blank" class="black">#Teamseas</a>
      </div>
      <div class="col bd-callout bd-callout-warning">
        <h2>ดาวน์โหลดได้ที่</h2>
        <a href="https://bit.ly/schoolmccud" target="_blank" class="black">www.bit.ly/schoolmccud</a>
      </div>
    <br>
    จบแล้ว~~~ ถ้ามีอะไรผิดพลาดสามารถ comment ได้ข้างล่างเลย
<br>

    <div class="list-inline"> <br>
        <iframe class="list-inline-item" src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fronnapat.com%2Fblog%2F5&width=62&layout=box_count&action=like&size=small&share=false&height=65&appId=924964718457366" width="62" height="65" style="border:none;overflow:hidden" scrolling="no" frameborder="0"  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> 
        <iframe class="list-inline-item" src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fronnapat.com%2Fblog%2F5&layout=button&size=small&appId=924964718457366&width=67&height=20" width="67" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        <div class="line-it-button" data-lang="en" data-type="share-a" data-env="REAL" data-url="https://ronnapat.com/blog/posts/5" data-color="default" data-size="small" data-count="false" data-ver="3" style="display: none;"></div>
        <a href="https://twitter.com/intent/tweet?text=ระบบโทรศัพท์บ้านในยุคของอินเทอร์เน็ต%20via%20@ronnapatp" class="twitter-share-button list-inline-item">Tweet</a>
    </div>
    <hr>
    <!-- <div>
        <fb:comments-count class="fb-comments-count" data-href="https://ronnapat.com/blog/kaolad-bot"></fb:comments-count>
        Comment
        </div> -->
        <div class="fb-comments" data-href="https://ronnapat.com/blog/posts/4" data-width="100%" data-numposts="5"></div>
</body>
<Footer />
