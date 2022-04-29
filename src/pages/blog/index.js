import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Layout from "src/components/layout/layout";

export async function getStaticProps() {
  const files = fs.readdirSync("posts");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <Layout>
      {posts?.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className="border border-gray-200 rounded-md shadow-lg overflow-hidden flex flex-col p-5"
        >
          <Link href={`/blog/post/${slug}`}>
            <a>
              <h1 className="text-3xl">{frontmatter.title}</h1>
              <p>{frontmatter.description}</p>
            </a>
          </Link>
        </div>
      ))}
    </Layout>
  );
}
