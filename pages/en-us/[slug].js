import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

export async function getStaticPaths() {
  const files = fs.readdirSync('page');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.mdx', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`page/${slug}.mdx`, 'utf-8');
  const { content } = matter(fileName);
  return {
    props: {
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }) {
  return (
    <div className='prose mx-auto'>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </div>
  );
}