import React from 'react'
import { useBlogContext } from '../../contexts/blog.context'

export default function Form() {
  const { addPost, setError } = useBlogContext()
  return (
    <form className="mb-3 w-100" onSubmit={(e) => {
      e.preventDefault()
      const data = Object.fromEntries(new FormData(e.target));
      if (data.userName.search(/[^\w]/gm) !== -1){
        setError('name must contain only Latin characters, numbers and underscore')
      } else if(data.content.search(/https:\/\/|http:\/\//gm) !== -1){
        setError('message must not contain url')
      } else if(data.content === '' || data.userName === ''){
        setError('all fields must not be empty')
      } else {
        addPost(data);
      }
      e.target['content'].value = ''
    }}>
      <label for="formGroupExampleInput" className="form-label">Name</label>
      <input onChange={()=>setError('')} type="text" name="userName" className="form-control"  placeholder="your name" />
      <label for="formGroupExampleInput2" className="form-label">Message</label>
      <input onChange={()=>setError('')} type="text" name="content" className="form-control mb-3"  placeholder="your message" />
      <button type="submit" className="btn btn-primary">Send message</button>
    </form>
  )
}

