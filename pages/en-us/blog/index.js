import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '@/script/mdxUtils'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Container from '@/components/container'

export default function Index({ posts }) {
  return (
    <div>
        <Navbar />
        <div className="bg-white dark:bg-slate-700">
            <Container>
      <ul>
        {posts.map((post) => (
            <li key={post.filePath}>
            <Link
              as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
              href={`/posts/[slug]`}
              >
              <a>{post.data.title}</a>
            </Link>
          </li>
        ))}
      </ul>
        </Container>
        </div>
      <Footer />
    </div>
  )
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  return { props: { posts } }
}