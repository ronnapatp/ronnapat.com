<script context="module">
    const allPosts = import.meta.glob("./*.{md,svx}");
  
    let body = [];
    for (let path in allPosts) {
      body.push(
        allPosts[path]().then(({ metadata }) => {
          return { path, metadata };
        })
      );
    }
  
    export const load = async () => {
      const posts = await Promise.all(body);
  
      return {
        props: {
          posts,
        },
      };
    };
  </script>
  <script>

    export let posts;
  
    const dateSortedPosts = posts.slice().sort((post1, post2) => {
      return new Date(post2.metadata.date) - new Date(post1.metadata.date);
    });
  
  </script>
  <svelte:head>
    <meta property="fb:app_id" content="1210970696063565" />
  </svelte:head>
<body>
		<meta property="fb:app_id" content="1210970696063565" />
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0&appId=1210970696063565&autoLogAppEvents=1" nonce="z9hTrpwJ"></script>
    <div class="container">
    <br>
    <slot />
    {#each dateSortedPosts as { path, metadata: { title, name } }}
      <head>
          <title>{title} | Ronnapat Srivoravilai</title>
          <meta property="fb:app_id" content="1210970696063565" />
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          <script src="https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js" async="async" defer="defer"></script>
      </head>
    {/each}
    
</div>
</body>
<style>
    .container {
	max-width: 80ch;
    line-height: 1.75;
}
a{
    text-decoration: none;
    color: black;
}
</style>