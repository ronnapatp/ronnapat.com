import Navbar from "@/components/navbar/navbar";
import Head from "@/components/global/meta";
import Blog from "./blog.json";
import Container from "@/components/layout/container";
import Footer from "@/components/footer/footer";
import { langenus } from "@/script/languages";

export default function () {
  return (
    <div className="bg-white dark:bg-slate-700">
      <Head title="Blog" />
      <Navbar lantoshow={langenus} pathname="en-us" page="/blog" />
      <h1 className="text-center text-3xl md:text-5xl p-10">Ronnapat Blog</h1>
      <Container>
        {Blog.map((blog) => (
          <div
            key={blog.id}
            className="border-t border-black dark:border-white p-6"
          >
            <h1 className="text-3xl text-black dark:text-white uppercase">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {blog.date}
              </p>
              <a href={`/en-us/blog/posts/${blog.href}`}>{blog.title}</a>
            </h1>
            <p className="py-4 text-gray-600 dark:text-gray-300 text-xl">
              {blog.description}
            </p>
            <a
              className="text-sky-500 dark:text-sky-300"
              href={`/en-us/blog/posts/${blog.href}`}
            >
              Read more →
            </a>
          </div>
        ))}
      </Container>
      <Footer paht="en-us" />
    </div>
  );
}
