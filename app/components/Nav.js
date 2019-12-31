import React, { Component } from 'react';
import { ThemeConsumer } from '../contexts/theme'
import { NavLink } from 'react-router-dom'

const activeStyle = {
  color: 'red'
}

class Nav extends Component {
  render() {
    return (
      <ThemeConsumer>
        {({ theme, toggleTheme }) => (
          <>
          <nav>
            <ul>
              <li>
                <NavLink activeStyle={activeStyle} to="/" exact>Top</NavLink></li>
              <li>
                <NavLink activeStyle={activeStyle} to="/new">New</NavLink></li>
            </ul>
          </nav>
          <div>
            <button onClick={toggleTheme}>
              {theme === 'light' ? '🔦' : '💡'}
            </button>
          </div>
          </>
        )}
      </ThemeConsumer>
    );
  }
}

export default Nav;