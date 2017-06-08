import React from 'react'
import { render } from 'react-dom'
// import {  } from 'react-router'
import { HashRouter, Route } from 'react-router-dom'
import Landing from './landing'
import Search from './search'
import '../public/style.css'

const App = React.createClass({
  render () {
    return (
      <HashRouter>
        <div className='app'>
          <Route exact={1} path='/' component={Landing} />
          <Route path='/search' component={Search} />
        </div>
      </HashRouter>

    )
  }
})

render(<App />, document.getElementById('app'))
