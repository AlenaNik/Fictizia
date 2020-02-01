import React from 'react'

const APIContainer = (Component, url) => {
    return class extends React.Component {
      state = {
        posts: []
      }
  
      async componentDidMount() {
        let response = await fetch(url)
        let data = await response.json()
        this.setState({ posts: data })
      }
  
      render() {
        return(
          <Component posts={this.state.posts} />
        )
      }
  
    }
  }

  export default APIContainer;