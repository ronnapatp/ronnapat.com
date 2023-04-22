import Layout from "src/components/layout/layout";
import Project from "src/components/homes/project";
import Meta from "@/components/global/meta";
import Subscribe from "@/components/global/subscribe";
export default function Home() {
  return (
    <Layout>
      <Meta title="Home" />
      <span className="dark:text-gray-300">Latest Updated: 22 April 2023</span>
      <h1 className="text-5xl mt-2">
        Hello, I'm Ronnapat
        <div class="inline-block transition hover:rotate-45 ease-in-out duration-300">
          👋🏻
        </div>
      </h1>
      <div className="mt-10 dark:text-gray-300">
        A student who passioning in Software Development and Mathematics. Living in Bangkok, Thailand.
      </div>
      <div className="mt-5 dark:text-gray-300">
        I've done a dozen of project with different technologies. I love to learn new things and share my experiences with others via my blog posts at <a href="https://blog.ronnapat.com" target="_blank">blog.ronnapat.com</a>.
      </div>
      <div className="mt-5 dark:text-gray-300">
        Taking photographs is one of my hobbies. It captures the memories and moments in these days. You can see photos that I've taken at Google Drive.
      </div>
      {/* <Project /> */}
    </Layout>
  );
}
