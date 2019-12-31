import React from 'react';
import { getUser } from '../utils/api'
import queryString from 'query-string'
import Stories from './Stories'

class User extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null
    }
  }

  componentDidMount () {
    const { id } = queryString.parse(this.props.location.search)
    getUser(id)
      .then((results) => {
        this.setState({user: results})
      })
  }

  render() {
    const { user } = this.state
    {if (user) {
      return (
        <>
          <h1>{user.id}</h1>
          <p>joined {user.created} has {user.karma} karma</p>
          <p>{user.about}</p>
          {/* todo: query the posts of the user for this part 👇🏽 */}
          <p>{user.submitted.length && "this user has posts"}</p>
          <Stories postIds={this.state.user.submitted} />
        </>

      )
    }}
    return <h2>loading</h2>
  }
}

export default User;