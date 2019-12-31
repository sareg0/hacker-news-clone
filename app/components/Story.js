import React from 'react';
import { getStory } from '../utils/api'
import queryString from 'query-string'

class Story extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      story: null
    }
  }

  componentDidMount () {
    const { id } = queryString.parse(this.props.location.search)
    getStory(id).then(story => this.setState({ story }))
  }

  render() {
    const {story} = this.state
    {if (story) {
      return (
        <div>
          <h1>{story.title}</h1>
          <p>by {story.by} on {story.time} with {story.descendants} comment{story.descendants > 1 ? 's' : ''}</p>
        </div>
      );
    }}
    return <h1>loading story</h1>
  }
}

export default Story;