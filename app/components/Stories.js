import React from 'react'
import { fetchStories, getUserPosts } from '../utils/api'
import {Link} from 'react-router-dom'

class Stories extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      stories: null
    }
  }

  componentDidMount() {
    if (this.props.type) {
      this.getStories(this.props.type)
    } else if (this.props.postIds) {
      this.getPosts(this.props.postIds)
    }
  }

  getPosts (postIds) {
    getUserPosts(this.props.postIds)
      .then(stories => {
        debugger
        console.log(stories)
        this.setState({stories: stories})
      })
      .catch((error) => console.log('could not retrieve user stories'))
  }

  getStories (type) {
    fetchStories(type)
      .then(stories => {
        console.log(stories)
        this.setState({stories: stories})
      })
      .catch((error) => console.log("something went wrong:", error)
    )
  }

  render() {
    const stories = this.state.stories
    {if (stories) {
      return (
        stories.map((story) => (
            <article key={story.id}>
              <header>
                <h2><a href={story.url} target="_blank" rel="no-opener">{story.title}</a></h2>
                <p>by  
                  <Link 
                    to={{
                      pathname: "/user",
                      search: `?id=${story.by}`
                    }}
                  >
                      {story.by}
                  </Link> 
                  on {story.time} with </p>
                  <Link 
                    to={{
                      pathname: "/story",
                      search: `?id=${story.id}`
                    }}
                  >
                      {story.descendants}
                  </Link> 
                  comment{story.descendants > 1 ? 's' : ''}
              </header>
            </article> 
        ))
      )
    }}
    return <h2>loading stories</h2>
  }
}

export default Stories