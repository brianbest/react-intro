import React from 'react'
import { render } from 'react-dom'
// import {  } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './landing'
import Search from './search'
import '../public/style.css'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Route exact={1} path='/' component={Landing} />
          <Route path='/search' component={Search} />
        </div>
      </BrowserRouter>

    )
  }
})

render(<App />, document.getElementById('app'))
