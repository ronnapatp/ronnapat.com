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
        <a
          href="https://en.wikipedia.org/wiki/Bangkok"
          target="_blank"
          className="text-black dark:text-white hover:underline"
        >
          Bangkok, Thailand
        </a>
        . I create and developing a lot of software!
      </div>
      <div className="mt-10 dark:text-gray-300">
        I like developing software and Math. It's a very long time since I
        started learning how to code and develop software, I start to learn code
        by myself on my computer online. Math is my main goal in middle school
        period! At the first time when I learn math, I don't like it at all but
        when I can solve math quiz I start to have fun with it since then I
        really like math especially when I able to solve the math problem.
      </div>
      <div className="mt-10 dark:text-white">
        Here's some resource for you:
        <br />
        <a href="/about">
          - About me
        </a>
        <br />
        <a href="/contact">
          - Contact me
        </a>
        <br />
        <a href="/blog">
          - My blog (Digital garden)
        </a>
      </div>
      {/* <Project /> */}
    </Layout>
  );
}
