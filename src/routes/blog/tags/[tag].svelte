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

<h1>{tag}</h1>

{#each filteredPosts as { path, metadata: { title } }}
  <li class="container">
    <a href={`/blog/posts/${path.replace(".md", "").replace(".svx", "")}`}>{title}</a>
  </li>
{/each}
