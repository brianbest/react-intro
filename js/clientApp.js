import React from 'react'
import { render } from 'react-dom'
import '../public/style.css'

const App = React.createClass({
  render () {
    return (
      <div className='app'>
        <div className='landing'>
          <h1>BrianVideoTest</h1>
          <input type='text' placeholder='search' />
          <a>or Browse All</a>
        </div>
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))
