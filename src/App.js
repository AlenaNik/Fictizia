import React from 'react'
import APIContainer from './APIContainer'
import Posts from './Posts'
import PostsLI from './PostsLI'
const  PostsList = APIContainer(Posts, 'https://jsonplaceholder.typicode.com/posts')
const PostsList2 = APIContainer(PostsLI, 'https://jsonplaceholder.typicode.com/posts')

function App() {
  return (
    <>
      <PostsList />
      <PostsList2 />
    </>
  );
}

export default App;