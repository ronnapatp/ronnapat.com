import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { postFilePaths, POSTS_PATH } from "@/script/mdxUtils";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Container from "@/components/layout/container";

export default function Index({ posts }) {
  return (
    <div>
      <Navbar />
      <div className="bg-white dark:bg-slate-700">
        <Container>
          <h1 className="text-center text-5xl p-10 font-semibold">Blog</h1>
          <ul className="p-10">
            {posts.map((post) => (
              <li key={post.filePath}>
                <div className="p-6 max-w-screen mt-3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-2 md:mb-0 hover:scale-105 duration-100">
                  <Link
                    as={`/en-us/blog/posts/${post.filePath.replace(
                      /\.mdx?$/,
                      ""
                    )}`}
                    href={`/en-us/blog/posts/[slug]`}
                  >
                    <a>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {post.data.title}
                      </h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {post.data.description}
                      </p>
                    </a>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
