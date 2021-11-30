<script context="module">
  const allPosts = import.meta.glob("./posts/*.{md,svx}");

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
<div class="container">
<h1 class="fs-1" style="margin-top: 1rem;">Ronnapat Blog</h1>
<div class="row row-cols-1 row-cols-md-2 g-4">
{#each dateSortedPosts as { path, metadata: { title, tags, date, description, image } }}
  <div class="col">
    <a href={`/blog/${path.replace(".md", "").replace(".svx", "")}`} class="card text-decoration-none text-dark">
      <div class="card-body">
        <img src="{image}" class="card-img-top" alt="">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
        <small>{new Date(date).toDateString()}</small>
        <br>
        {#each tags as tag}
        <a class="text-decoration-none text-secondary" href={`/blog/tags/${tag}`}>#{tag} </a>
        {/each}
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
