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
    const tag = page.params.tag;

    const filteredPosts = posts.filter((post) => {
      return post.metadata.tags.includes(tag);
    });

    return {
      props: {
        filteredPosts,
        tag,
      },
    };
  };
</script>

<script>
  export let filteredPosts;
  export let tag;
</script>
<div class="container">
<h1 class="container" style="margin-top: 2rem; font-size: 3rem;">{tag}</h1>
</div>
<div class="row row-cols-1 row-cols-md-2 g-4">
  {#each filteredPosts as { path, metadata: { title, description, date, image  } }}
    <li class="container">
      <a href={`/blog/posts/${path.replace(".md", "").replace(".svx", "")}`}>{title}</a>
    </li>
    <div class="col">
        <a href={`/blog/${path.replace(".md", "").replace(".svx", "")}`} class="card text-decoration-none text-dark">
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