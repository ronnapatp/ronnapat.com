import Layout from "src/components/layout/layout";
import Project from "src/components/homes/project";
import Meta from "@/components/global/meta";
import Subscribe from "@/components/global/subscribe";
export default function Home() {
  return (
    <Layout>
      <Meta title="Home" />
      <h1 className="text-5xl">
        Hello, I'm Ronnapat
        <div class="inline-block transition hover:rotate-45 ease-in-out duration-300">
          👋🏻
        </div>
      </h1>
      <div className="mt-10 dark:text-gray-300">
        I'm a student and developer in{" "}
        <a href="https://x.ronnapat.me/fDgN9h" target="_blank">
          Bangkok, Thailand 🇹🇭
        </a>
        . I like to developement software because developement is make me feel
        relax!
      </div>
      <div className="mt-10 dark:text-gray-300">
        I love javascript and typescript I also learning python. View all about
        me at about page
      </div>
      <Project />
      <Subscribe />
    </Layout>
  );
}
