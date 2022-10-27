import { useRouter } from 'next/router'

//GO TO /blog/2022/12

function BlogPostsPage() {
  const roter = useRouter()

  console.log(roter.query)

  return (
    <>
      <h1>The blog posts</h1>
    </>
  )
}
export default BlogPostsPage
