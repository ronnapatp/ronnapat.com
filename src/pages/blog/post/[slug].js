import Layout from "@/components/layout/layout";
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Meta from "@/components/global/meta";

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }) {
  return (
    <Layout>
      { frontmatter.draft ? <p>This page not found</p> :
      <><Meta title={frontmatter.title} /><div className="prose-layout">
          <span>
            {frontmatter.date} - {frontmatter.minutesread} min read
          </span>
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
          <script
            src="https://giscus.app/client.js"
            data-repo="ronnapatp/ronnapat.com"
            data-repo-id={process.env.NEXT_PUBLIC_GITCUS_REPO_ID}
            data-category="Q&A"
            data-category-id={process.env.NEXT_PUBLIC_GITCUS_CATEGORY_ID}
            data-mapping="url"
            data-reactions-enabled="1"
            data-emit-metadata="0"
            data-input-position="top"
            data-theme="preferred_color_scheme"
            data-lang="en"
            crossorigin="anonymous"
            async
          ></script>
        </div></>
}
    </Layout>
  );
}
