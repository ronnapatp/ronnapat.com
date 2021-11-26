<script>
</script>
<style>
    .navbar-apple{
        background-color: #636366;
        color: white;
        font-size: 1.25rem;
    }
    a{
        color: white;
        text-decoration: none;
    }
    .drop{
        background-color: #636366; 
        border-style: solid;
        border-width: 0.08rem; 
        border-color: white; 
        color: white;
        padding: 0.2rem 0.40rem;   
    }
    .dropdown-item:hover{
        background-color: #636366;
        color: white;
    }
</style>
<body>
    <nav class="navbar navbar-light navbar-apple">
        <div class="container">
          <a href="/profile">RONNAPAT SRIVORAVILAI</a>
          <form class="inline-block">
               <small>
                <!-- เลือกภาษาอื่น หากต้องการดูเนื้อหาในภาษาของคุณ -->
                choose another language To view content in your language
                <b class="btn-group">
                    <button class="drop dropdown-toggle rounded-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                        &nbsp;
                        English
                    </button>
                    <ul class="dropdown-menu" style="background-color: #636366;">
                        <li><a class="dropdown-item" href="/profile/th">ไทย</a></li>
                    </ul>
                  </b>
               </small>
          </form>
        </div>
      </nav>
      <div class="carousel-item active">
        <img src="/school/thai/1.png" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block" style="color: black;">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
</body>