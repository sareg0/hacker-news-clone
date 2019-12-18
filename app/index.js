import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { fetchStories } from './utils/api'

//Component
//State
//Lifecycle
//UI

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stories: {}
    }
  }

  thing () {
    fetchStories()
      .then(stories => {
        console.log(stories)
        // this.setState(({ stories }) => ({
        //   stories: {
        //     ...stories
        //   }
        // }))
      })
      .catch((error) => console.log("something went wrong:", error)
    )
  }

  componentDidMount() {
    this.thing()
  }

  render() {
    return (
      <h1>
        Hello worlds
      </h1>
    ) 
  }
}




ReactDOM.render(<App />, document.getElementById('app'))