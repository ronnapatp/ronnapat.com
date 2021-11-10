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
    <meta property="og:url" content="https://ronnapat.com/blog/posts/5" />
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
        <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fronnapat.com%2Fblog%2Fposts%2F5&width=62&layout=box_count&action=like&size=small&share=false&height=65&appId=924964718457366" width="62" height="65" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        <a href="https://twitter.com/intent/tweet?text=ระบบโทรศัพท์บ้านในยุคของอินเทอร์เน็ต%20via%20@ronnapatp" class="twitter-share-button list-inline-item">Tweet</a>
    </div>
    <img src="/blog/5/{image}" alt="{imagealt}" class="img-thumbnail" > <br>  <br><br>
    <p>
        ในปัจจุบันเราก็คงไม่ค่อยได้ยินคำว่า <b>โทรศัพท์บ้าน</b> เพราะเราใช้มือถือแทน และเวลาติดต่อกันเราก็ใช้การโทรหรือการส่งข้อความโดยใช้ Line แทนทำให้ <b>โทรศัพท์บ้าน</b> ค่อยๆหายไปตามกาลเวลา
    </p>
    <p>
        แต่วันนี้ผมจะมาแนะนำ ระบบโทรศัพท์บ้าน ที่ชื่อว่า
    </p>
    <div class="col bd-callout bd-callout-warning">
        <h2>
            3CX COMMUNICATIONS SYSTEM
        </h2>
    </div>
    <p>
        <b>3CX COMMUNICATIONS SYSTEM</b> เป็นระบบการติดต่อกันในบ้านหรือในองกรณ์ก็ได้
    </p>
    <br><br>
    <h3>3CX COMMUNICATIONS SYSTEM ทำอะไรได้บ้าง?</h3>
    <li>โทร</li>
    <li>ฝากข้อความเสียง</li>
    <li>Video call</li>
    <li>แชท</li>
    <br><br>
    <h3>เรามาดูในหน้าหลักกัน</h3>

    <img src="/blog/5/webpage.jpeg" alt="" class="img-thumbnail">
    <p> <br>    
        หน้านี้เราจะสามารถกดโทรหรือฝากข้อความเสียงได้ส่วนเวลาจะส่งข้อความต้องไปที่หน้า <b>Chat</b>
    </p>
    <img src="/blog/5/webpage1.jpeg" alt="" class="img-thumbnail">
    <p> <br>
        หน้านี้คือการส่งข้อความ คล้ายๆ <b>Line</b> หรือ <b>Messenger</b> เราสามารถส่ง Sticker หรือ Link ก็ได้ 
    </p>
    <img src="/blog/5/webpage2.jpeg" alt="" class="img-thumbnail">
    <p> <br>    
        หน้านี้เราจะสามารถ Video conference คล้ายๆ <b>Google meet</b>
    </p>
    <img src="/blog/5/webpage3.jpeg" alt="" class="img-thumbnail">
    <p> <br>
        หน้านี้เราจะสามารถดูประวัติการโทรได้
    </p>
    <p>
        และเราจะสามารถทำได้อีกหลายอย่าง ดูได้ที่ <a href="https://www.3cx.com/en/" target="_blank" class="black">3CX</a>
    </p>
    <br><br>
    <h3>
        ทำไม 3CX COMMUNICATIONS SYSTEM ถึงน่าใช้
    </h3>
    <p>
        3CX COMMUNICATIONS SYSTEM สามารถใช้ได้กับ มือถือ คอมพิวเตอร์ และอีกหลายอุปกรณ์
    </p>

    <p>
        <b>ไม่มีสปอน แค่เห็นว่ามันดีก็เลยแนะนำ</b>
    </p>
    <br>
    จบแล้ว~~~ ถ้ามีอะไรผิดพลาดสามารถ comment ได้ข้างล่างเลย
<br>

    <div class="list-inline"> <br>
        <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fronnapat.com%2Fblog%2Fposts%2F5&width=62&layout=box_count&action=like&size=small&share=false&height=65&appId=924964718457366" width="62" height="65" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fronnapat.com%2Fblog%2Fposts%2F5&layout=button&size=small&appId=924964718457366&width=67&height=20" width="67" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        <div class="line-it-button" data-lang="en" data-type="share-a" data-env="REAL" data-url="https://ronnapat.com/blog/posts/5" data-color="default" data-size="small" data-count="false" data-ver="3" style="display: none;"></div>
        <a href="https://twitter.com/intent/tweet?text=ระบบโทรศัพท์บ้านในยุคของอินเทอร์เน็ต%20via%20@ronnapatp" class="twitter-share-button list-inline-item">Tweet</a>
    </div>
    <hr>
    <!-- <div>
        <fb:comments-count class="fb-comments-count" data-href="https://ronnapat.com/blog/kaolad-bot"></fb:comments-count>
        Comment
        </div> -->
        <div class="fb-comments" data-href="https://ronnapat.com/blog/posts/5" data-width="100%" data-numposts="5"></div>
</body>
<Footer />
