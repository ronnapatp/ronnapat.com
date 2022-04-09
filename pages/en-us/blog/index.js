import Navbar from "@/components/navbar/navbar";
import Head from "@/components/global/meta";
import { Blog } from "../../../data/blog/index";
import Container from "@/components/layout/container";
import Footer from "@/components/footer/footer";
import { langenus } from "@/script/languages";
import { useState } from "react"

export default function () {
  const [search, setSearch] = useState("");

  const filtersearch = Blog.filter((Blog) => {
    return Blog.title.includes(search);
  });

  return (
    <div className="bg-white dark:bg-slate-700">
      <Head title="Blog" />
      <Navbar lantoshow={langenus} pathname="en-us" page="/blog" />
      <h1 className="text-center text-3xl md:text-5xl p-10">Ronnapat Blog</h1>
      <Container>
      <input
              type="text"
              placeholder="Search... "
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
              className="mt-3 rounded-md uppercase block shadow-sm border-gray-300 dark:bg-slate-600 dark:text-white dark:border-sky-400 dark:placeholder-gray-400 w-full focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 mb-10"
            />
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1196910141338252"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-1196910141338252"
     data-ad-slot="4659788367"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
        {filtersearch.map((blog) => (
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
