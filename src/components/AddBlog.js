import React from 'react'
import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

function AddBlog() {
const [posts, setPosts] = useState([])
  const [title, setTitle] = useState('')
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
    const { error } = await supabase.from('posts').insert([{ title, content }])
    if (!error) {
      setTitle('')
      setContent('')
      fetchPosts()
    }
  }

  async function updatePost(id) {
    const { error } = await supabase.from('posts').update({ title, content }).eq('id', id)
    if (!error) {
      setEditingId(null)
      setTitle('')
      setContent('')
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

      <div className="mb-4">
        <input
          className="w-full p-2 mb-2 bg-gray-800 border border-gray-600 rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full p-2 mb-2 bg-gray-800 border border-gray-600 rounded"
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

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="p-4 bg-gray-900 rounded border border-gray-700">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-300">{post.content}</p>
            <div className="mt-2 space-x-2">
              <button
                onClick={() => {
                  setEditingId(post.id)
                  setTitle(post.title)
                  setContent(post.content)
                }}
                className="bg-blue-600 px-3 py-1 rounded"
              >
                Edit
              </button>
              <button onClick={() => deletePost(post.id)} className="bg-red-600 px-3 py-1 rounded">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
      
    </div>
  )
}

export default AddBlog
