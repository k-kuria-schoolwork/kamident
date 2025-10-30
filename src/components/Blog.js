import React from 'react'
import { supabase } from './supabaseClient'
import { useEffect,useState } from 'react'

function Blog() {
  const [posts, setPosts] = useState([])
 
  
    useEffect(() => {
      fetchPosts()
    }, [])
  
    async function fetchPosts() {
      const { data, error } = await supabase
      .from('posts')
      .select('*')
       .order('created_at', { ascending: false })

       if (error) {
        console.error('error fetching posts:', error)
       }else {
        setPosts(data)
       }
    }

  return (
     <div className="blog-list-container">
      <h2 className="blog-title">Explore Our Latest Blogs</h2>

      <div className="blog-grid">
        {posts.length === 0 ? (
          <p className="no-posts">No posts yet. Check back soon!</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="blog-card">
              <img
                src={post.image_url || 'https://via.placeholder.com/600x300'}
                alt={post.title}
                className="blog-image"
              />
              <div className="blog-content">
                <h3>{post.title}</h3>
                <p className="author">By {post.author || 'Anonymous'}</p>
                <p className="excerpt">{post.content.slice(0, 150)}...</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Blog
