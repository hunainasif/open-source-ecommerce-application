import React from 'react'

export default function SingleBlog({params}:{params:{blog:string}}) {
  return (
    <div>
        <h1>Single Blog</h1>
        {params.blog}
      
    </div>
  )
}
