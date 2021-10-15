<script lang="ts">
    const fullName = "Ronnapat Srivoravilai";
    //const Name = "Ronnapat";
    const Contact = "Contact";
    const Blog = "blog";
    const About = "About me";
</script>

<nav class="bg-yellow-300 absolute w-full left-0 top-0">
    <div class="container mx-auto px-2">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex-1 flex items-center sm:items-stretch sm:justify-start">
          <span class="mx-2 leading-3 text-2xl">
            <a href="/">
                {fullName}  
            </a>
            <!--<a href="/" class="">
                {Name}
            </a>-->
          </span>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <span class="mx-2 text-sm sm:text-md">
                <a href="/#download">
                  {About}
                </a>
              </span>
              <span class="mx-2 text-sm sm:text-md">
                <a href="/faq">
                  {Blog}
                </a>
              </span>
              <span class="mx-2 text-sm sm:text-md">
                <a href="/">
                  {Contact}
                </a>
              </span>
        </div>
      </div>
    </div>
  </nav>