import React from 'react'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <h1>BrianVideoTest</h1>
        <input type='text' placeholder='search' />
        <a>or Browse All</a>
      </div>
    )
  }
})

export default Landing
