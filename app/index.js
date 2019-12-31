import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'

import { ThemeProvider } from './contexts/theme'
const Stories = React.lazy(() => import('./components/Stories')) 
const User = React.lazy(() => import('./components/User')) 
const Story = React.lazy(() => import('./components/Story')) 

//Component
//State
//Lifecycle
//UI

//TODO refactor some of these comps into
//function components and implement class properties
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'light',
      toggleTheme: () => {
        this.setState(({theme}) => ({
          theme: theme === 'light' ? 'dark' : 'light'
        }))
      }
    }
  }

  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <Nav />
            <React.Suspense fallback={<h2>Loading</h2>}>
              <Switch>
                <Route exact path="/" component={() => <Stories type="top"/>}/>
                <Route exact path="/new" component={() => <Stories type="new"/>}/>
                <Route exact path="/user" component={User}/>
                <Route exact path="/story" component={Story}/>
                <Route component={() => <h3>404 could not find</h3>}/>
              </Switch>
            </React.Suspense>
          </div>
        </ThemeProvider>
      </Router>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))