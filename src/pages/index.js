import Layout from "src/components/layout/layout";
import Project from "src/components/homes/project";
export default function Home() {
  return (
    <Layout>
      <h1 className="text-5xl">
        Hello, I'm Ronnapat
        <div class="inline-block transition hover:rotate-45 ease-in-out duration-300">
          👋🏻
        </div>
      </h1>
      <div className="mt-10 dark:text-gray-300">
        I'm a student and developer in {" "}
        <a href="https://x.ronnapat.me/fDgN9h" target="_blank">
          Bangkok, Thailand 🇹🇭
        </a>
        . I like to developement software because developement is make me feel
        relax!
      </div>
      <div className="mt-10 dark:text-gray-300">
        I'm loving javascript and typescript I also learning python. View all
        about me at about page
      </div>
      <Project />
      <script src="https://giscus.app/client.js"
        data-repo="ronnapatp/ronnapat.com"
        data-repo-id="R_kgDOGOMxZg"
        data-category="Q&A"
        data-category-id="DIC_kwDOGOMxZs4CO13q"
        data-mapping="url"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="preferred_color_scheme"
        data-lang="en"
        crossorigin="anonymous"
        async>
</script>
    </Layout>
  );
}