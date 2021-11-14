import React from 'react'
import { useBlogContext } from '../../contexts/blog.context'

export default function Error() {
  const { error } = useBlogContext()
  return (
    error === '' ? null : <div class="alert alert-danger" role="alert">
    {error}
  </div>
    
  )
}
