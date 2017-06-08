import React from 'react'
import { render } from 'react-dom'
// import {  } from 'react-router'
import { HashRouter, Route } from 'react-router-dom'
import Landing from './landing'
import '../public/style.css'

const App = React.createClass({
  render () {
    return (
      <HashRouter>
        <div className='app'>
          <Route exactly pattern='/' component={Landing} />
        </div>
      </HashRouter>

    )
  }
})

render(<App />, document.getElementById('app'))
