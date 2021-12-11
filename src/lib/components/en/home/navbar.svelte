<script>
  import { Name } from '$lib/name'
</script>
<nav class="">
  <div class="text-2xl inline-flex">
     <a href="/" class="inline-flex font-bold">
       <img src="/favicon.ico" alt="" class="w-10 h-10">
       {Name}
     </a>
     &nbsp;
     <b class="font-thin">|</b>
     &nbsp;
     <a href="/th" class="text-2xl">
      <i class="bi bi-translate"></i>
      ไทย
     </a>
  </div>
  <input type="checkbox" id="click">
  <label for="click" class="menu-btn">
    <i class="bi bi-list"></i>
  </label>
  <ul>
     <li><a href="https://blog.ronnapat.com/" target="_blank" class="link-underline link-underline-black">Blog</a></li>
     <li><a href="/about">About</a></li>
     <li><a href="/contact">Contact</a></li>     
  </ul>
</nav>
<br><br><br>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
} 
nav{
  border-bottom: 1px solid gray;
  position: fixed;
  display: flex;
  height: 80px;
  width: 100%;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px 0 100px;
  flex-wrap: wrap;
}
nav ul{
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}

nav ul {
  color: black;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  padding: 8px 15px;
  border-radius: 5px;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}
nav .menu-btn i{
  color: black;
  font-size: 22px;
  cursor: pointer;
  display: none;
}
input[type="checkbox"]{
  display: none;
}
@media (max-width: 1000px){
  nav{
    padding: 0 40px 0 50px;
  }
}
@media (max-width: 920px) {
  nav{
    padding: 0 1rem 0 10px;
  }
  nav .menu-btn i{
    display: block;
  }
  nav ul{
    position: fixed;
    top: 80px;
    left: -101%;
    background-color: white;
    opacity: 0.88;
    height: 100%;
    width: 100%;
    text-align: center;
    display: block;
    transition: all 0.3s ease;
  }
  #click:checked ~ ul{
    left: 0;
  }
  nav ul li{
    width: 100%;
    margin: 40px 0;
  }
  nav ul li a{
    width: 100%;
    margin-left: -100%;
    display: block;
    font-size: 20px;
    transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  #click:checked ~ ul li a{
    margin-left: 0px;
  }
  nav ul li a.active,
  nav ul li a:hover{
    color: black;
  }
}
a{
  padding: 8px 15px;
}
</style>