import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import path from "path";
import CustomLink from "@/components/customlink";
import { postFilePaths, POSTS_PATH } from "@/script/legal";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Container from "@/components/container";

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
  return (
    <div className="bg-white dark:bg-slate-700">
      <Navbar />
      <Container>
      <main className="max-w-prose mx-auto py-8 prose-h1:font-semibold dark:prose-h1:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-h2:text-2xl prose-h2:md:text-4xl dark:prose-a:text-gray-100 prose-a:text-gray-600  hover:prose-a:text-sky-500 dark:hover:prose-a:text-sky-300 hover:prose-a:underline">
          <h1 className="md:text-6xl text-4xl">{frontMatter.title}</h1>
          <p>Last update : {frontMatter.update}</p>
          <hr className="mt-5" />
          <div className="mt-10 dark:text-white">
            <MDXRemote {...source} components={components} />
          </div>
          <div className="mt-5">
            Have issue with this page?
            {` `}
            <a
              href={`https://github.com/ronnapatp/ronnapat.com/blob/main/page/${frontMatter.file}.mdx`}
              className="underline"
              target="_blank"
            >
              Fix it on github
            </a>
            .
          </div>
        </main>
          </Container>

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
      <Footer />
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
