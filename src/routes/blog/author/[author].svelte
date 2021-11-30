<script context="module">
    const allPosts = import.meta.glob("../posts/*.{md,svx}");
  
    let body = [];
    for (let path in allPosts) {
      body.push(
        allPosts[path]().then(({ metadata }) => {
          return { path, metadata };
        })
      );
    }
  
    export const load = async ({ page }) => {
      const posts = await Promise.all(body);
      const author = page.params.author;
  
      const filteredPosts = posts.filter((post) => {
        return post.metadata.author.includes(author);
      });
  
      return {
        props: {
          filteredPosts,
          author,
        },
      };
    };
  </script>
  
  <script>
    export let filteredPosts;
    export let author;
  </script>
  
  <head>
        <title>{author} | Ronnapat Srivoravilai</title>
        <meta property="og:url" content="https://ronnapat.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="{author} | Ronnapat Srivoravilai" />
        <meta property="og:description" content="Personal website of Ronnapat Srivoravilai" />
        <meta property="og:image" content="https://www.ronnapat.com/logo.png" />
        <meta property="og:keywords" content="Ronnapat Srivoravilai , Ronnapat , ronnapatp , srivoravilai ">
  </head>
  <h1 class="container" style="margin-top: 2rem; font-size: 3rem;">{author}</h1>
<div class="container">
<div class="row row-cols-1 row-cols-md-2 g-4">
  {#each filteredPosts as { path, metadata: { title, description, date, image  } }}
    <div class="col">
        <a href={`/blog/posts/${path.replace(".md", "").replace(".svx", "")}`} class="card text-decoration-none text-dark">
          <div class="card-body">
            <img src="{image}" class="card-img-top" alt="">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{description}</p>
            <small>{new Date(date).toDateString()}</small>
          </div>
        </a>
      </div>
  {/each}
</div>
</div>
<style>
    .card-img-top {
        width: 100%;
        height: 15vw;
        object-fit: cover;
    }
    </style>