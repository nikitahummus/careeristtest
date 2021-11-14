import { createContext, useCallback, useContext, useState } from 'react';

const BlogContext = createContext();

function BlogContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  const addPost = async (post) => {
    const response = await fetch('http://localhost:3001/api/blog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post)
    });
    if (response.ok) {
      const newPost = await response.json();
      setPosts((prev) => [...prev, newPost]);
    } else {
      setError('Failed to upload message to server');
    }

  }

  const loadPosts = async () => {
    const response = await fetch('http://localhost:3001/api/blog');
    if (response.ok) {
      const {allPosts} = await response.json();
      console.log(allPosts)
      setPosts(allPosts);
    } else {
      setError('Failed to load posts from server');
    }
  }

  return (
    <BlogContext.Provider value={{ addPost, loadPosts, posts, error, setError }}>
      {children}
    </BlogContext.Provider>
  )
}
export default BlogContextProvider;
export const useBlogContext = ()=> useContext(BlogContext);
