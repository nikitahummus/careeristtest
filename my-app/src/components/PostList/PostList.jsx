import React, { useEffect } from 'react'
import { useBlogContext } from '../../contexts/blog.context'
import Post from '../Post/Post'

export default function PostList() {

  const { posts, loadPosts } = useBlogContext()
  useEffect(() => {
    loadPosts()
  }, [posts.length])
  return (
    <div>
      {posts.map(post => <Post key={post.id} post={post}></Post>)}
    </div>
  )
}
