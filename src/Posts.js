import React from 'react'

const Posts = props =>
    <div>
      {props.posts.map((post, key) => (
        <div key={key}>{post.title}</div>
      ))}
    </div>
export default Posts;