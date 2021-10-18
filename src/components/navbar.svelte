<script lang="ts">
    const fullName = "Ronnapat";
    //const Name = "Ronnapat";
    const Contact = "Contact";
    const Blog = "blog";
    const About = "About me";
</script>

<style>
  	.link-underline {
		border-bottom-width: 0;
		background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
		background-size: 0 3px;
		background-position: 0 100%;
		background-repeat: no-repeat;
		transition: background-size .5s ease-in-out;
	}

	.link-underline-black {
		background-image: linear-gradient(transparent, transparent), linear-gradient(black, black)
	}

	.link-underline:hover {
		background-size: 100% 3px;
		background-position: 0 100%
	}
</style>

<nav class="bg-yellow-300 absolute w-full left-0 top-0">
    <div class="container mx-auto px-2">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex-1 flex items-center sm:items-stretch sm:justify-start">
          <span class="mx-2 leading-3 text-2xl">
            <a href="/" class="link link-underline link-underline-black text-black">
                {fullName}  
            </a>
            <!--<a href="/" class="">
                {Name}
            </a>-->
          </span>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <span class="mx-2 text-sm sm:text-md">
                <a href="/about" class="link link-underline link-underline-black text-black">
                  {About}
                </a>
              </span>
              <span class="mx-2 text-sm sm:text-md">
                <a href="https://ronnapatpblog.netlify.app/" target="_blank" class="link link-underline link-underline-black text-black">
                  {Blog}
                </a>
              </span>
              <span class="mx-2 text-sm sm:text-md">
                <a href="/contact/" class="link link-underline link-underline-black text-black">
                  {Contact}
                </a>
              </span>
        </div>
      </div>
    </div>
  </nav>