<script>
  import Copy from 'copy-to-clipboard'
  import { Name } from '$lib/name';

  function discordCopy(){
    Copy('ronnapatp#3538')
    alert('Copy ronnapat discord username to your clipboard!')
    console.log('Copied!')
  }
</script>
<style>
  .btn:focus {
  outline: none;
  box-shadow: none;
}
</style>
<div class="bg-warning  ">
  <nav class="navbar navbar-expand-lg navbar-light container">
    <div class="container-fluid">
      <a class="navbar-brand bg-image hover-zoom" href="/">
        <img src="/logo-no-bg.png" alt="" width="auto" height="45">
        {Name}
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link urllink"href="https://ronnapatpblog.netlify.app/" target="_blank">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link urllink" href="/resume">Resume</a>
          </li>
          <li class="nav-item">
            <a class="nav-link urllink" href="/contact">Contact</a>
          </li>
        </ul>
        <span class="navbar-text">
          <a href="https://facebook.com/pieronnapatp" target="_blank">
            <img src="/svg/facebook.svg" alt="facebook">
          </a>
          &nbsp;&nbsp;
          <a href="https://instagram.com/ronnapatsri" target="_blank">
            <img src="/svg/instagram.svg" alt="instagram">
          </a>
          &nbsp;&nbsp;
          <a href="https://twitter.com/ronnapatp" target="_blank">
            <img src="/svg/twitter.svg" alt="twitter">
          </a>
          &nbsp;&nbsp;
          <a href="https://github.com/ronnapatp" target="_blank">
            <img src="/svg/github.svg" alt="github">
          </a>
          
          <button class="btn btn-link" on:click={discordCopy} title="Tooltip on bottom">
            <img src="/svg/discord.svg" alt="">
          </button>
          
          <a href="mailto:ronnapat.sri@gmail.com" target="_blank">
            <img src="/svg/mail.svg" alt="mail">
          </a>
        </span>
      </div>
    </div>
  </nav>
</div>