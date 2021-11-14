import React from 'react'

export default function Post({post}) {
  return (
    <div class="card">
  <h5 class="card-header">{post.userName}</h5>
  <div class="card-body">
    <p class="card-text">{post.content}</p>
  </div>
</div>
  )
}

