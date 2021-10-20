<script>
    import Navbar from '../components/navbar.svelte'
    import Footer from '../components/footer.svelte'
</script>

<head>
    <title>404 - Page not found</title>
</head>

<Navbar />
<br><br><br>

<div class="px-4 py-5 my-5 text-center">
    <img class="d-block mx-auto mb-4" src="/logo-no-bg.png" alt="" width="72" height="72">
    <h1 class="display-5 fw-bold">404 - Page not found</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">We cannot find this page for you but don't worry you can go back to home pag eby click button down below.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <a href="/" type="button" class="btn btn-warning btn-lg px-4 gap-3">Back to home page!</a>
      </div>
    </div>
  </div>


<Footer />