import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import path from "path";
import CustomLink from "@/components/customlink";
import { postFilePaths, POSTS_PATH } from "@/script/legal";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Container from "@/components/container";
import Head from "@/components/meta";
import Draft from "@/components/draft";
import { langenus } from "@/script/languages";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  TestComponent: dynamic(() => import("../../components/testcom")),
  Head,
};

export default function PostPage({ source, frontMatter }) {

  const draft = frontMatter.draft
  return (
    <div className="bg-white dark:bg-slate-700">
      <Navbar lantoshow={langenus} pathname="en-us" page={`/${frontMatter.file}`} />
      { draft ? <Draft name={frontMatter.headtitle} /> :
      <div>
        <Head title={frontMatter.headtitle} />
        <main className="mt-8 prose prose-slate mx-auto lg:prose-lg prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-h3:text-black dark:prose-h3:text-white">
          <h1 className="md:text-6xl text-4xl dark:text-white">{frontMatter.title}</h1>
          <hr className="" />
          <div className="mt-10 dark:text-white dark:prose-invert">
            <MDXRemote {...source} components={components} />
          </div>
          <div className="py-8 text-black dark:text-white">
            Have issue with this page?
            {` `}
            <a
              href={frontMatter.github}
              className="underline text-black hover:text-sky-400 dark:text-white dark:hover:text-sky-300"
              target="_blank"
            >
              Fix it on github
            </a>
            .
          </div>
        </main>
      </div>
      }
      <style jsx>{`
        .post-header h1 {
          margin-bottom: 0;
        }
        .post-header {
          margin-bottom: 2rem;
        }
        .description {
          opacity: 0.6;
        }
      `}</style>
      <Footer paht='en-us' />
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
