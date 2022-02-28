import Container from "@/components/container";
import { MDXRemote } from "next-mdx-remote";
const CustomLink = [
  `
<Link as={as} href={href}>
<a {...otherProps} />
</Link>`,
];
import { getPostBySlug, postFilePaths } from "@/script/mdx-utils";
import Head from "@/components/meta";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
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
  Head,
};

export default function PostPage({ source, frontMatter, globalData }) {
  return (
    <div className="bg-white dark:bg-slate-700 w-full">
      <Head title={frontMatter.headtitle} image="/meta.png" />
      <Navbar
        lantoshow={langenus}
        pathname="en-us"
        page={`/${frontMatter.headtitle}`}
      />
      <Container>
        {/* <header>
          <h1 className="text-3xl md:text-5xl dark:text-white text-center mb-12">
            {frontMatter.title}
          </h1>
        </header> */}
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
      <Footer paht="en-us" />
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const { mdxSource, data } = await getPostBySlug(params.slug);

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
