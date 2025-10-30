import React from 'react'
import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

function AddBlog() {
const [posts, setPosts] = useState([])
  const [title, setTitle] = useState('')
  const [ author, setAuthor ] = useState('')
  const [ image_url, setImage_url] = useState('')
  const [content, setContent] = useState('')
  const [editingId, setEditingId] = useState(null)

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    const { data, error } = await supabase.from('posts').select('*').order('created_at', { ascending: false })
    if (!error) setPosts(data)
  }

  async function createPost() {
    if (!title || !content) return
    const { error } = await supabase.from('posts').insert([
        { title, 
        content,
        author,
        image_url
         }])
    if (!error) {
      setTitle('')
      setContent('')
      setAuthor('')
      setImage_url('')
      fetchPosts()
    }
  }

  async function updatePost(id) {
    const { error } = await supabase.from('posts').update({ title, content }).eq('id', id)
    if (!error) {
      setEditingId(null)
      setTitle('')
      setContent('')
       setAuthor('')
      setImage_url('')
      fetchPosts()
    }
  }

  async function deletePost(id) {
    const { error } = await supabase.from('posts').delete().eq('id', id)
    if (!error) fetchPosts()
  }


  return (
    <div>
         <div className="p-6 max-w-2xl mx-auto text-white">
      <h1 className="text-2xl font-bold mb-4">Blog Page</h1>

      <div className="form-container">
       <input
            className="form-input"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <input
            className="form-input"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
        />
        <input
            className="form-input"
            placeholder="Post Image URL"
            value={image_url}
            onChange={(e) => setImage_url(e.target.value)}
        />
        <textarea
            className="form-textarea"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
        />
        {editingId ? (
          <button onClick={() => updatePost(editingId)} className="bg-yellow-600 px-4 py-2 rounded">
            Update
          </button>
        ) : (
          <button onClick={createPost} className="bg-green-600 px-4 py-2 rounded">
            Create
          </button>
        )}
      </div>
<div className="blog-grid">
    {posts.map((post) => (
      <div key={post.id} className="blog-card">
        {post.image_url && (
          <img src={post.image_url} alt={post.title} className="blog-image" />
        )}
        <div className="blog-content">
          <h3 className="blog-title">{post.title}</h3>
          <p className="blog-author">By {post.author || 'Admin'}</p>
          <p className="blog-text">
            {post.content.length > 120
              ? post.content.slice(0, 120) + '...'
              : post.content}
          </p>

          <div className="blog-buttons">
            <button
              onClick={() => {
                setEditingId(post.id)
                setAuthor(post.author)
                setTitle(post.title)
                setContent(post.content)
                setImage_url(post.image_url)
              }}
              className="edit-btn"
            >
              Edit
            </button>
            <button onClick={() => deletePost(post.id)} className="delete-btn">
              Delete
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>


    </div>
      
    </div>
  )
}

export default AddBlog
