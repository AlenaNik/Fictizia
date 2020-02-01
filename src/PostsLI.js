import React from 'react'

const Posts = props =>
    <ul>
      {props.posts.map((post, key) => (
        <ul key={key}>{post.id}</ul>
      ))}
    </ul>
export default Posts;